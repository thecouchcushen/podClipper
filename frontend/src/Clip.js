import './Clip.css'
import editIcon from './edit.svg'
import deleteIcon from './delete.svg'

const Clip = ({clip}) => {

    // String automatically created based on clip link
    const str1 = "https://img.youtube.com/vi/"
    const str2 = clip.link.slice(clip.link.indexOf("=")+1)
    const str3 = "/default.jpg"
    const imgString = str1.concat(str2,str3)
    // console.log(imgString)
    
    //TODO: Implement Edit/Delete functionalities
    return (
        <div className="clipPanel">
            <a href="" target="_blank">
                <img src={editIcon} alt="Edit" width="8%"></img>
            </a>
            <a href="" target="_blank">
                <img src={deleteIcon} alt="Delete" width="8%"></img>
            </a>
            <p className="epTitle">{clip.title}</p>

            {clip.link.includes("youtube.com") ? <img src={imgString} alt="No img available (not on YouTube)" width="25%"></img> : <p>No img available (not on YouTube)</p>}
            <br />
            <a className="epLink" href={clip.link} target="_blank" rel="noreferrer">Link to podcast</a>
            <p className="epDate">Uploaded: {clip.datePublished}</p>
            <p className="timestamp">Time: {clip.startTime} - {clip.endTime}</p>
            <p className="showName">{clip.name}</p>
            <div>Hosts: {clip.hosts.map((host, i) => <p className="hostNames" key={"Host"+i}>{host}</p>)}</div>
            <div>Guests: {clip.guests.map((guest, i) => <p className="guestNames" key={"Guest"+i}>{guest}</p>)}</div>
            <p className="clipNotes">{clip.notes}</p>
        </div>
    )
}
export default Clip