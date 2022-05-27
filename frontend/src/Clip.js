const Clip = ({clip}) => {

    return (
        <div className="clipPanel">
            <p>{clip.title}</p>
            <a href={clip.link}>Link to video</a>
            <p>Uploaded: {clip.datePublished}</p>
            <p>Time: {clip.startTime} - {clip.endTime}</p>
            <p>{clip.name}</p>
            <div>Hosts: {clip.hosts.map((host, i) => <p key={i}>{host}</p>)}</div>
            <div>Guests: {clip.guests.map((guest, i) => <p key={i}>{guest}</p>)}</div>
            <p>{clip.notes}</p>
        </div>
    )
}
export default Clip