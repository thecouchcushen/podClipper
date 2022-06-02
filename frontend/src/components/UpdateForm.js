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
    
    const id = clip.id
    const [title, setTitle] = useState(clip.title)
    const [link, setLink] = useState(clip.link)
    const [uploadDate, setUploadDate] = useState(clip.datePublished)
    const [startTime, setStartTime] = useState(clip.startTime)
    const [endTime, setEndTime] = useState(clip.endTime)
    const [showName, setShowName] = useState(clip.name)
    const [hosts, setHosts] = useState(clip.hosts)
    const [guests, setGuests] = useState(clip.guests)
    const [notes, setNotes] = useState(clip.notes)

    const handleSubmit = (event) => {
        event.preventDefault()

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
            setClips(clips.map(clip => clip.id !== id ? clip : response.data))
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
        //reset values to useState('') afterwards? Depends on how I decide to render form

    }

    return (
        <div>
            <h2>Update Clip</h2>
            <FormInput valDescriptor="title" beingChanged={title} changeFunction={setTitle} />
            <br />
            <FormInput valDescriptor="link" beingChanged={link} changeFunction={setLink} />
            <br />
            <FormInput valDescriptor="uploadDate" beingChanged={uploadDate} changeFunction={setUploadDate} />
            <br />
            <FormInput valDescriptor="startTime" beingChanged={startTime} changeFunction={setStartTime} />
            <br />
            <FormInput valDescriptor="endTime" beingChanged={endTime} changeFunction={setEndTime} />
            <br />
            <FormInput valDescriptor="showName" beingChanged={showName} changeFunction={setShowName} />
            <br />

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