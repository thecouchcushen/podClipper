import './Clip.css'
import editIcon from '../edit.svg'
import deleteIcon from '../delete.svg'
import {useState} from 'react'
import clipService from '../services/clips'
import UpdateForm from './UpdateForm'

const Clip = ({clip, setClips, clips}) => {

    

    const [id, setId] = useState(clip.id)

    const [title, setTitle] = useState(clip.title)
    const [link, setLink] = useState(clip.link)
    const [datePublished, setDatePublished] = useState(clip.datePublished)
    const [startTime, setStartTime] = useState(clip.startTime)
    const [endTime, setEndTime] = useState(clip.endTime)
    const [showName, setShowName] = useState(clip.name)
    const [hosts, setHosts] = useState(clip.hosts)
    const [guests, setGuests] = useState(clip.guests)
    const [notes, setNotes] = useState(clip.notes)

    // String automatically created based on clip link
    const str1 = "https://img.youtube.com/vi/"
    const str2 = clip.link.slice(clip.link.indexOf("=")+1)
    const str3 = "/default.jpg"
    const imgString = str1.concat(str2,str3)
    // console.log(imgString)

    const deleteFunction = () => {
        clipService.del(id)
        setClips(clips.filter(clip => clip.id !== id))
    }

    return (
        <div className="clipPanel">
            <a href="#top">
                <img src={editIcon} alt="Edit" width="8%"></img>
            </a>
            <UpdateForm clips={clips} setClips={setClips} clip={clip} />
            <img src={deleteIcon} onClick={deleteFunction} alt="Delete" width="8%"></img>
            <p className="epTitle">{title}</p>

            {link.includes("youtube.com") ? <img src={imgString} alt="No img available (not on YouTube)" width="25%"></img> : <p>No img available (not on YouTube)</p>}
            <br />
            <a className="epLink" href={link} target="_blank" rel="noreferrer">Link to podcast</a>
            <p className="epDate">Uploaded: {datePublished}</p>
            <p className="timestamp">Time: {startTime} - {endTime}</p>
            <p className="showName">{showName}</p>
            <div>Hosts: {hosts.map((host, i) => <p className="hostNames" key={"Host"+i}>{host}</p>)}</div>
            <div>Guests: {guests.map((guest, i) => <p className="guestNames" key={"Guest"+i}>{guest}</p>)}</div>
            <p className="clipNotes">{notes}</p>
        </div>
    )
}
export default Clip