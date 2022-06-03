import {useState} from 'react'
import FormInput from './formComponents/FormInput'
import TextAreaInput from './formComponents/TextAreaInput'
import PeopleCreatable from './formComponents/PeopleCreatable'
import createIcon from '../create.svg'
import axios from 'axios'



const ClipForm = (props) => {
    // TODO: If integrating update form and post form (could use switch statement to keep the form the same for create edit/update)
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

    }

    //Potentially create a different submit button that handles updates/puts? that way I can leave this handleSubmit function (which caused me a lot of trouble) and just create a new one
    //Actually not sure that I would have to change the above function that much except for the Post vs Put (w/ findById)
    //TODO: Validation for submit form
    return (
        <div>
            <h2>New Clip</h2>
            <FormInput inputId="createTitle" inputType="text" isRequired={true} pattern={".*"} valDescriptor="title" beingChanged={title} changeFunction={setTitle} />
            <br />
            <FormInput id="createLink" valDescriptor="link" beingChanged={link} changeFunction={setLink} />
            <br />
            <FormInput id="createDate" valDescriptor="uploadDate" beingChanged={uploadDate} changeFunction={setUploadDate} />
            <br />
            <FormInput id="createStart" valDescriptor="startTime" beingChanged={startTime} changeFunction={setStartTime} />
            <br />
            <FormInput id="createEnd" valDescriptor="endTime" beingChanged={endTime} changeFunction={setEndTime} />
            <br />
            <FormInput id="createName" valDescriptor="showName" beingChanged={showName} changeFunction={setShowName} />
            <br />

            <PeopleCreatable id="createHosts" valDescriptor="Hosts" beingChanged={hosts} changeFunction={setHosts} clips={props.clips}/>
            <PeopleCreatable id="createGuests" valDescriptor="Guests" beingChanged={guests} changeFunction={setGuests} clips={props.clips} />
            
            <TextAreaInput id="createNotes" valDescriptor="notes" beingChanged={notes} changeFunction={setNotes} />

            <button onClick={handleSubmit}>
                <img src={createIcon} alt="Create icon" width="40%"/>
                <br />
                Submit
            </button>
        </div>
    )
}

export default ClipForm