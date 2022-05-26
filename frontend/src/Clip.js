

const Clip = (props) => {

    return (
        <div className="clipPanel">
            <p>{props.startTime} - {props.endTime}</p>
            <p>{props.notes}</p>
        </div>
    )
}