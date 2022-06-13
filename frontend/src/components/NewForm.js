import './NewForm.css'
import { useState } from 'react'
import {useMount} from 'react-use'
import FormInput from './formComponents/FormInput'
import TextAreaInput from './formComponents/TextAreaInput'
import PeopleCreatable from './formComponents/PeopleCreatable'
import createIcon from '../create.svg'
import axios from 'axios'

const NewForm = (props) => {
  const clip = props.clip
  const clips = props.clips
  const setClips = props.setClips

  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [uploadDate, setUploadDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [showName, setShowName] = useState('')
  const [hosts, setHosts] = useState([])
  const [guests, setGuests] = useState([])
  const [notes, setNotes] = useState('')

  useMount(() => {
    if (props.actionToTake === 'update') {
      setTitle(clip.title)
      setLink(clip.link)
      setUploadDate(
        clip.datePublished.slice(0, clip.datePublished.indexOf('T'))
      )
      setStartTime(clip.startTime)
      setEndTime(clip.endTime)
      setShowName(clip.name)
      setHosts(clip.hosts)
      setGuests(clip.guests)
      setNotes(clip.notes)
    }
  })

  /* this is an IDEAL scenario in which you either use a reducer or redux in order to manage state. 
    If you have complex state changes that depend on one another, you won't want to use setState in 
    order to update the state (because it's hard to follow and you might miss something). Resources to learn 
    about complex state updating: 
    https://reactjs.org/docs/hooks-reference.html#usereducer (this is where I would start, redux is probably not 
    necessary here)
    https://redux.js.org/api/api-reference

    */
  const handleSubmit = (event) => {
    if (props.actionToTake === 'update') {
      event.preventDefault()

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

      //TODO: Update link to backend after deployment (potentially use clips service but was running into rendering errors previously)
      if (
        document.querySelectorAll('.error.active').length === 0 &&
        title.length !== 0 &&
        link.length !== 0 &&
        uploadDate.length !== 0 &&
        showName.length !== 0 &&
        hosts.length !== 0
      ) {
        axios
          .put(`http://localhost:3001/api/clips/${id}`, {
            startTime: startTime,
            endTime: endTime,
            title: title,
            datePublished: uploadDate,
            link: link,
            name: showName,
            guests: guests,
            hosts: hosts,
            notes: notes,
          })
          .then((response) => {
            //Updates list of clips that are rendered/filtered to reflect the updated data
            setClips(
              clips.map((clip) => (clip.id !== id ? clip : response.data))
            )
            console.log('response:', response)
          })
          // Creates a pop-up alerting the user of the successful update to the server
          .then(
            alert(`Entry has updated on the server:
                    "startTime": ${startTime}, \n
                    "endTime": ${endTime}, \n
                    "title": ${title}, \n
                    "datePublished": ${uploadDate}, \n
                    "link": ${link}, \n
                    "name": ${showName}, \n
                    "guests": ${guests}, \n
                    "hosts": ${hosts}, \n
                    "notes": ${notes}
                `)
          )

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
        alert('Fix your validation errors first')
      }
    } else if (props.actionToTake === 'create') {
      event.preventDefault()

      if (
        document.querySelectorAll('.error.active').length === 0 &&
        title.length !== 0 &&
        link.length !== 0 &&
        uploadDate.length !== 0 &&
        showName.length !== 0 &&
        hosts.length !== 0
      ) {
        axios
          .post('http://localhost:3001/api/clips', {
            startTime: startTime,
            endTime: endTime,
            title: title,
            datePublished: uploadDate,
            link: link,
            name: showName,
            guests: guests,
            hosts: hosts,
            notes: notes,
          })
          .then((response) => {
            setClips(clips.concat(response.data))
            console.log('response:', response)
          })
          .then(
            alert(`Entry has posted to the server:
                    "startTime": ${startTime}, \n
                    "endTime": ${endTime}, \n
                    "title": ${title}, \n
                    "datePublished": ${uploadDate}, \n
                    "link": ${link}, \n
                    "name": ${showName}, \n
                    "guests": ${guests}, \n
                    "hosts": ${hosts}, \n
                    "notes": ${notes}
                `)
          )
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
        alert('Fix your validation errors first')
      }
    }
  }

  return (
    <div className="form-wrapper">
      <div className="clip-form">
        <FormInput
          inputId={`${props.actionToTake}Title`}
          inputType="text"
          isRequired={true}
          pattern={'.*'}
          valDescriptor="Episode Title:"
          beingChanged={title}
          changeFunction={setTitle}
        />

        <FormInput
          inputId={`${props.actionToTake}Link`}
          inputType="text"
          isRequired={true}
          pattern={'.*'}
          valDescriptor="Link to episode:"
          beingChanged={link}
          changeFunction={setLink}
        />

        <FormInput
          inputId={`${props.actionToTake}Date`}
          inputType="text"
          isRequired={true}
          pattern={
            '(?:19d{2}|20[01][0-9]|202[0-2])[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])'
          }
          valDescriptor="Date uploaded:"
          beingChanged={uploadDate}
          changeFunction={setUploadDate}
        />

        <FormInput
          inputId={`${props.actionToTake}Start`}
          inputType="text"
          isRequired={false}
          pattern={'([0-9]{2}:)?[0-6][0-9]:[0-6][0-9]'}
          valDescriptor="Timestamp where the clip begins:"
          beingChanged={startTime}
          changeFunction={setStartTime}
        />

        <FormInput
          inputId={`${props.actionToTake}End`}
          inputType="text"
          isRequired={false}
          pattern={'([0-9]{2}:)?[0-6][0-9]:[0-6][0-9]'}
          valDescriptor="Timestamp where the clip ends:"
          beingChanged={endTime}
          changeFunction={setEndTime}
        />

        <FormInput
          inputId={`${props.actionToTake}Name`}
          inputType="text"
          isRequired={true}
          pattern=".*"
          valDescriptor="Podcast/Show name:"
          beingChanged={showName}
          changeFunction={setShowName}
        />

        <PeopleCreatable
          valDescriptor="Hosts"
          beingChanged={hosts}
          changeFunction={setHosts}
          clips={clips}
        />
        <PeopleCreatable
          valDescriptor="Guests"
          beingChanged={guests}
          changeFunction={setGuests}
          clips={clips}
        />

        <TextAreaInput
          valDescriptor="notes"
          beingChanged={notes}
          changeFunction={setNotes}
        />

        <button onClick={handleSubmit}>
          <img src={createIcon} alt="Create icon" width="40%" />
          <br />
          Submit
        </button>
      </div>
    </div>
  )
}

export default NewForm
