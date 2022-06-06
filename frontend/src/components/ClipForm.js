import './ClipForm.css'
import {useState} from 'react'
import FormInput from './formComponents/FormInput'
import TextAreaInput from './formComponents/TextAreaInput'
import PeopleCreatable from './formComponents/PeopleCreatable'
import createIcon from '../create.svg'
import axios from 'axios'

const ClipForm = (props) => {
    // TODO: Consolidate POST & UPDATE forms (could use switch statement to keep the form the same for create edit/update)
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [uploadDate, setUploadDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [showName, setShowName] = useState('')
    const [hosts, setHosts] = useState([])
    const [guests, setGuests] = useState([])
    const [notes, setNotes] = useState('')

    // Deconstruct props
    const setClips = props.setClips
    const clips = props.clips

    const handleSubmit = (event) => {
        event.preventDefault()
        
        //Checks if there are any active errors produced from each FormInput component and that the length of required elements is sufficiently long
        if ((document.querySelectorAll('.error.active').length === 0) && (title.length !== 0) && (link.length !== 0) && (uploadDate.length !== 0) && (showName.length !== 0) && (hosts.length !== 0)){
            axios.post("http://localhost:3001/api/clips", {
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
                setClips(clips.concat(response.data))
                console.log("response:", response)
            })
            .then(alert(`Entry has posted to the server:
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
            setTitle('')
            setLink('')
            setUploadDate('')
            setStartTime('')
            setEndTime('')
            setShowName('')
            setHosts([])
            setGuests([])
            setNotes('')
        } else {
            alert("Fix your validation errors first")
        }

        
    }

    //Potentially create a different submit button that handles updates/puts? that way I can leave this handleSubmit function (which caused me a lot of trouble) and just create a new one
    //Actually not sure that I would have to change the above function that much except for the Post vs Put (w/ findById)
    return (
        <div className='create-form-wrapper'>
        <h2>New Clip</h2>
        <div className='create-clip-form'>
            <FormInput inputId="createTitle"  inputType="text" isRequired={true} pattern={".*"} valDescriptor="Episode Title:" beingChanged={title} changeFunction={setTitle} />
            <br />
            <FormInput inputId="createLink"  inputType="text" isRequired={true} pattern={".*"} valDescriptor="Link to episode:" beingChanged={link} changeFunction={setLink} />
            <br />
            <FormInput inputId="createDate"  inputType="text" isRequired={true} pattern={"(?:19\d{2}|20[01][0-9]|202[0-2])[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])"} valDescriptor="Date uploaded:" beingChanged={uploadDate} changeFunction={setUploadDate} />
            <br />
            <FormInput inputId="createStart"  inputType="text" isRequired={false}pattern={"([0-9]{2}:)?[0-6][0-9]:[0-6][0-9]"} valDescriptor="Timestamp where the clip begins:" beingChanged={startTime} changeFunction={setStartTime} />
            <br />
            <FormInput inputId="createEnd"  inputType="text" isRequired={false} pattern={"([0-9]{2}:)?[0-6][0-9]:[0-6][0-9]"} valDescriptor="Timestamp where the clip ends:" beingChanged={endTime} changeFunction={setEndTime} />
            <br />
            <FormInput inputId="createName"  inputType="text" isRequired={true} pattern=".*" valDescriptor="Podcast/Show name:" beingChanged={showName} changeFunction={setShowName} />
            <br />

            <PeopleCreatable id="createHosts" valDescriptor="Hosts: (include at least 1)" beingChanged={hosts} changeFunction={setHosts} clips={props.clips}/>
            <PeopleCreatable id="createGuests" valDescriptor="Guests:" beingChanged={guests} changeFunction={setGuests} clips={props.clips} />
            
            <TextAreaInput id="createNotes" valDescriptor="Clip description/Notes:" beingChanged={notes} changeFunction={setNotes} />
            <br />
        </div>
            <button onClick={handleSubmit}>
                <img src={createIcon} alt="Create icon" width="40%"/>
                <br />
                Submit
            </button>
        </div>
    )

}

export default ClipForm