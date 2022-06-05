import {linkValidate, startValidate, endValidate, titleValidate, nameValidate} from "../../hooks/validate"

const FormInput = (props) => {
    
    const handleChange = (event) => {
        console.log(props.valDescriptor , event.target.value)
        props.changeFunction(event.target.value)

        switch (props.inputId) {
            case "createTitle":
                console.log("validating title")
                titleValidate()
                break
            
            case "createLink":
                console.log("validating link")
                linkValidate()
                break
            /*
            FIXME: Fix date creation validation
            case "createDate":
                console.log("validating date")
                dateValidate()
                break
            */
            case "createStart":
                console.log("validating start time")
                startValidate()
                break

            case "createEnd":
                console.log("validating end time")
                endValidate()
                break

            case "createName":
                console.log("validating show name")
                nameValidate()
                break

            default:
                return
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