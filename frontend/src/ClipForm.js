import {useState} from 'react'
import FormInput from './formComponents/FormInput'
import TextAreaInput from './formComponents/TextAreaInput'
import PeopleCreatable from './formComponents/PeopleCreatable'
import createIcon from './create.svg'

const ClipForm = (props) => {
    // TODO: Change initialization/useState depending on if the clip is new or being added to an existing show
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [uploadDate, setUploadDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [showName, setShowName] = useState('')
    const [hosts, setHosts] = useState([])
    const [guests, setGuests] = useState([])
    const [notes, setNotes] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        // TODO: Reset values after submission
        // TODO: Add onSubmit functionality that pushes object to the backend

        const clipObject = {
            "startTime": startTime,
            "endTime": endTime,
            "title": title,
            "datePublished": uploadDate,
            "link": link,
            "name": showName,
            "guests": guests,
            "hosts": hosts,
            "notes": notes
        }

        alert(`
            title: ${clipObject.title} \n
            link: ${clipObject.link} \n
            uploadDate: ${clipObject.uploadDate} \n
            startTime: ${clipObject.startTime} \n
            endTime: ${clipObject.endTime} \n
            showName: ${clipObject.showName} \n
            hosts: ${clipObject.hosts} \n
            guests: ${clipObject.guests} \n
            notes: ${clipObject.notes} \n
        `)
    }

    return (
        <div>
            <h2>New Clip</h2>
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

            <PeopleCreatable valDescriptor="Hosts" beingChanged={hosts} changeFunction={setHosts} clips={props.clips}/>
            <PeopleCreatable valDescriptor="Guests" beingChanged={guests} changeFunction={setGuests} clips={props.clips} />
            
            <TextAreaInput valDescriptor="notes" beingChanged={notes} changeFunction={setNotes} />

            <button onClick={handleSubmit}>
                <img src={createIcon} alt="Create icon" width="40%"/>
                <br />
                Submit
            </button>
        </div>
    )
}

export default ClipForm