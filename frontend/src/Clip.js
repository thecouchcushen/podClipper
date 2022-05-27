import './Clip.css';

const Clip = ({clip}) => {

    return (
        <div className="clipPanel">
            <p className="epTitle">{clip.title}</p>
            <a className="epLink" href={clip.link}>Link to video</a>
            <p className="epDate">Uploaded: {clip.datePublished}</p>
            <p className="timestamp">Time: {clip.startTime} - {clip.endTime}</p>
            <p className="showName">{clip.name}</p>
            <div>Hosts: {clip.hosts.map((host, i) => <p className="hostNames" key={i}>{host}</p>)}</div>
            <div>Guests: {clip.guests.map((guest, i) => <p className="guestNames" key={i}>{guest}</p>)}</div>
            <p className="clipNotes">{clip.notes}</p>
        </div>
    )
}
export default Clip