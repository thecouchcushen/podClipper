import './UpdateForm.css'
import {useState} from 'react'
import FormInput from './formComponents/FormInput'
import TextAreaInput from './formComponents/TextAreaInput'
import PeopleCreatable from './formComponents/PeopleCreatable'
import createIcon from '../create.svg'
import axios from 'axios'


const UpdateForm = (props) => {

    const clip = props.clip
    const clips = props.clips
    const setClips = props.setClips

    const setClipStartTime = props.changeFunctions.setStartTime
    const setClipEndTime = props.changeFunctions.setEndTime
    const setClipTitle = props.changeFunctions.setTitle
    const setClipLink = props.changeFunctions.setLink
    const setClipDatePublished = props.changeFunctions.setDatePublished
    const setClipShowName = props.changeFunctions.setShowName
    const setClipGuests = props.changeFunctions.setGuests
    const setClipHosts = props.changeFunctions.setHosts
    const setClipNotes = props.changeFunctions.setNotes
    
    const id = clip.id
    const [title, setTitle] = useState(clip.title)
    const [link, setLink] = useState(clip.link)
    const [uploadDate, setUploadDate] = useState(clip.datePublished.slice(0,clip.datePublished.indexOf("T")))
    const [startTime, setStartTime] = useState(clip.startTime)
    const [endTime, setEndTime] = useState(clip.endTime)
    const [showName, setShowName] = useState(clip.name)
    const [hosts, setHosts] = useState(clip.hosts)
    const [guests, setGuests] = useState(clip.guests)
    const [notes, setNotes] = useState(clip.notes)

    const handleSubmit = (event) => {
        event.preventDefault()

        //TODO: Update link to backend after deployment (potentially use clips service but was running into rendering errors previously)
        if ((document.querySelectorAll('.error.active').length === 0) && (title.length !== 0) && (link.length !== 0) && (uploadDate.length !== 0) && (showName.length !== 0) && (hosts.length !== 0)) {
            axios.put(`http://localhost:3001/api/clips/${id}`, {
                "startTime": startTime,
                "endTime": endTime,
                "title": title,
                "datePublished": uploadDate,
                "link": link,
                "name": showName,
                "guests": guests,
                "hosts": hosts,
                "notes": notes
            })
            .then(response => {
                //Updates list of clips that are rendered/filtered to reflect the updated data
                setClips(clips.map(clip => clip.id !== id ? clip : response.data))
                console.log("response:", response)
            })
            // Creates a pop-up alerting the user of the successful update to the server
            .then(alert(`Entry has updated on the server:
                "startTime": ${startTime}, \n
                "endTime": ${endTime}, \n
                "title": ${title}, \n
                "datePublished": ${uploadDate}, \n
                "link": ${link}, \n
                "name": ${showName}, \n
                "guests": ${guests}, \n
                "hosts": ${hosts}, \n
                "notes": ${notes}
            `))
    
            // Updates/rerenders the clip
            setClipStartTime(startTime)
            setClipEndTime(endTime)
            setClipTitle(title)
            setClipDatePublished(uploadDate)
            setClipLink(link)
            setClipShowName(showName)
            setClipGuests(guests)
            setClipHosts(hosts)
            setClipNotes(notes)
        } else {
            alert("Fix your validation errors first")
        }
        

    }

    return (
        <div className='update-form-wrapper'>
            <h2>Update Clip</h2>
            <FormInput inputId="updateTitle" inputType="text" isRequired={true} pattern={".*"} valDescriptor="Episode Title:" beingChanged={title} changeFunction={setTitle} />

            <FormInput inputId="updateLink" inputType="text" isRequired={true} pattern={".*"} valDescriptor="Link to episode:" beingChanged={link} changeFunction={setLink} />

            <FormInput inputId="updateDate" inputType="text" isRequired={true} pattern={"(?:19\d{2}|20[01][0-9]|202[0-2])[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])"} valDescriptor="Date uploaded:" beingChanged={uploadDate} changeFunction={setUploadDate} />

            <FormInput inputId="updateStart" inputType="text" isRequired={false}pattern={"([0-9]{2}:)?[0-6][0-9]:[0-6][0-9]"} valDescriptor="Timestamp where the clip begins:" beingChanged={startTime} changeFunction={setStartTime} />

            <FormInput inputId="updateEnd" inputType="text" isRequired={false} pattern={"([0-9]{2}:)?[0-6][0-9]:[0-6][0-9]"} valDescriptor="Timestamp where the clip ends:" beingChanged={endTime} changeFunction={setEndTime} />
            
            <FormInput inputId="updateName" inputType="text" isRequired={true} pattern=".*" valDescriptor="Podcast/Show name:" beingChanged={showName} changeFunction={setShowName} />
            

            <PeopleCreatable valDescriptor="Hosts" beingChanged={hosts} changeFunction={setHosts} clips={clips} />
            <PeopleCreatable valDescriptor="Guests" beingChanged={guests} changeFunction={setGuests} clips={clips} />
            
            <TextAreaInput valDescriptor="notes" beingChanged={notes} changeFunction={setNotes} />

            <button onClick={handleSubmit}>
                <img src={createIcon} alt="Create icon" width="40%"/>
                <br />
                Submit
            </button>
        </div>
    )
}

export default UpdateForm