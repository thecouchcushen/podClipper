const FormInput = (props) => {
    
    const handleChange = (event) => {
        console.log(props.valDescriptor , event.target.value)
        props.changeFunction(event.target.value)
    }
    
    return (
        <label>{props.valDescriptor}
            <input
                type="text" 
                name={props.valDescriptor}
                value={props.beingChanged}
                onChange={handleChange}
            />
        </label>
    )
}

export default FormInput