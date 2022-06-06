const TextAreaInput = (props) => {
    
    const handleChange = (event) => {
        console.log(props.valDescriptor , event.target.value)
        props.changeFunction(event.target.value)
    }

    return (
        <label>{props.valDescriptor}
        <br/>
            <textarea 
                name={props.valDescriptor}
                value={props.beingChanged}
                onChange={handleChange}
                >
            </textarea>
        </label>
    )
}

export default TextAreaInput