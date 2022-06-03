import {TitleValidate} from "../../hooks/TitleValidate"

const FormInput = (props) => {
    
    const handleChange = (event) => {
        console.log(props.valDescriptor , event.target.value)
        props.changeFunction(event.target.value)

        if (props.inputId === "createTitle") {
            TitleValidate()
        }
    }
    
    return (
        <label htmlFor={props.valDescriptor}>{props.valDescriptor}
            <input
                id={props.inputId}
                type={props.inputType} 
                required={props.isRequired}
                pattern={props.pattern}
                name={props.valDescriptor}
                value={props.beingChanged}
                onChange={handleChange}
            />
            <span className="error" aria-live="polite"></span>
        </label>
    )
}

export default FormInput