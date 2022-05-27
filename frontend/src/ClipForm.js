import {useState} from 'react'
import FormInput from './formComponents/FormInput'
import TextAreaInput from './formComponents/TextAreaInput'
import CreatableInput from './formComponents/CreatableInput'

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
            title: ${title} \n
            link: ${link} \n
            uploadDate: ${uploadDate} \n
            startTime: ${startTime} \n
            endTime: ${endTime} \n
            showName: ${showName} \n
            hosts: ${hosts} \n
            guests: ${guests} \n
            notes: ${notes} \n
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
            
            <TextAreaInput valDescriptor="notes" beingChanged={notes} changeFunction={setNotes} />

            <CreatableInput clips={props.clips}/>
            {/*
            TODO: Need to figure out the way to add guests/hosts to the arrays (maybe react-createable component explored for restaurant app)
                setGuests(guests.concat(person))
                setHosts(hosts.concat(person))
            */}

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default ClipForm