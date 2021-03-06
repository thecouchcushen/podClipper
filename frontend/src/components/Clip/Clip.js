import './Clip.css'
import editIcon from '../../edit.svg'
import deleteIcon from '../../delete.svg'
import { useState } from 'react'
import clipService from '../../services/clips'
import NewForm from '../NewForm'

/* I moved this into a folder to demonstrate how you can group components and styles in a folder, and then export it using an index file  */

const Clip = ({ clip, setClips, clips }) => {
  const [dispUpdateForm, setDispUpdateForm] = useState(false)
  const [buttonContents, setButtonContents] = useState('Update Clip')

  //destructure the object
  const { id, title: clipTitle, link: clipLink } = clip

  const [title, setTitle] = useState(clipTitle)
  const [link, setLink] = useState(clipLink)
  const [datePublished, setDatePublished] = useState(
    clip.datePublished.slice(0, clip.datePublished.indexOf('T'))
  )
  const [startTime, setStartTime] = useState(clip.startTime)
  const [endTime, setEndTime] = useState(clip.endTime)
  const [showName, setShowName] = useState(clip.name)
  const [hosts, setHosts] = useState(clip.hosts)
  const [guests, setGuests] = useState(clip.guests)
  const [notes, setNotes] = useState(clip.notes)

  // String automatically created based on clip link
  const str1 = 'https://img.youtube.com/vi/'
  const str2 = clip.link.slice(clip.link.indexOf('=') + 1)
  const str3 = '/default.jpg'
  const imgString = str1.concat(str2, str3)
  // console.log(imgString)

  const deleteFunction = () => {
    clipService.del(id)
    setClips(clips.filter((clip) => clip.id !== id))
  }

  const handleEditDisplaySubmit = () => {
    if (!dispUpdateForm) {
      setDispUpdateForm(true)
      setButtonContents('Cancel Update')
    } else {
      setDispUpdateForm(false)
      setButtonContents('Update Clip')
    }
  }

  const handleFormDisplay = () =>
    dispUpdateForm ? (
      <NewForm
        clips={clips}
        setClips={setClips}
        clip={clip}
        actionToTake="update"
        changeFunctions={{
          setTitle,
          setLink,
          setDatePublished,
          setStartTime,
          setEndTime,
          setShowName,
          setHosts,
          setGuests,
          setNotes,
        }}
      />
    ) : (
      <>
        <button onClick={deleteFunction}>
          Delete Clip
          <img 
            src={deleteIcon} 
            alt="Delete" 
            width="80%">  
          </img>
        </button>
        <p className="epTitle">
          <strong>{title}</strong>
        </p>

        <p className="showName">{showName}</p>
        {link.includes('youtube.com') ? (
          <img
            src={imgString}
            alt="No img available (not on YouTube)"
            width="60%"
          ></img>
        ) : (
          <p>No img available (not on YouTube)</p>
        )}
        <br />
        <a className="App-link" href={link} target="_blank" rel="noreferrer">
          Link to episode
        </a>
        <p className="epDate">
          <strong>Uploaded:</strong> {datePublished}
        </p>
        <p className="timestamp">
          <strong>Time: </strong> {startTime} - {endTime}
        </p>

        <div>
          <strong>Hosts: </strong>
          {hosts.map((host, i) => (
            <p className="hostNames" key={'Host' + i}>
              {host}
            </p>
          ))}
        </div>
        <div>
          <strong>Guests: </strong>{' '}
          {guests.map((guest, i) => (
            <p className="guestNames" key={'Guest' + i}>
              {guest}
            </p>
          ))}
        </div>
        <p className="clipNotes">
          <strong>Notes/Description: </strong>
          {notes}
        </p>
      </>
    )

  return (
    <div className="clipPanel">
      <button onClick={handleEditDisplaySubmit}>
        {buttonContents}
        <img 
          src={editIcon} 
          alt="Edit" 
          width="80%">
        </img>
      </button>

      {handleFormDisplay()}
    </div>
  )
}
export default Clip
