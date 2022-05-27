import './Clip.css';

const Clip = ({clip}) => {

    // FIXME: change where it says v56GnmWN to the ID of a youtube video
    // TODO: Create helper function that splices the link provided in the DB into the video ID
    //TODO: Add alt in case img doesnt load

    return (
        <div className="clipPanel">
            <p className="epTitle">{clip.title}</p>

            {clip.link.includes("youtube.com") ? <img src="https://img.youtube.com/vi/v56GnmWN_wY/default.jpg" alt="No img available (not on YouTube)"></img> : <p>No img available (not on YouTube)</p>}
            
            <a className="epLink" href={clip.link} target="_blank">Link to podcast</a>
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