import {linkValidate, startValidate, endValidate, titleValidate, nameValidate, dateValidate} from "../../hooks/validate"

const FormInput = (props) => {
    const handleChange = (event) => {
        console.log(props.valDescriptor , event.target.value)
        props.changeFunction(event.target.value)
        
        switch (props.inputId) {
            case "createTitle":
                console.log("validating title")
                //console.log("error before validating: ", error)
                titleValidate("createTitle")
                //console.log("error: ", error)
                break
            
            case "createLink":
                console.log("validating link")
                linkValidate("createLink")
                break

            case "createDate":
                console.log("validating date")
                dateValidate("createDate", props.errors, props.setErrors)
                break

            case "createStart":
                console.log("validating start time")
                startValidate("createStart", props.errors, props.setErrors)
                break

            case "createEnd":
                console.log("validating end time")
                endValidate("createEnd", props.errors, props.setErrors)
                break

            case "createName":
                console.log("validating show name")
                nameValidate("createName", props.errors, props.setErrors)
                break

            case "updateTitle":
                console.log("validating episode Title")
                titleValidate("updateTitle", props.errors, props.setErrors)
                break

            case "updateLink":
                console.log("validating episode Link")
                linkValidate("updateLink", props.errors, props.setErrors)
                break

            case "updateStart":
                console.log("validating start time")
                startValidate("updateStart", props.errors, props.setErrors)
                break

            case "updateEnd":
                console.log("validating end time")
                endValidate("updateEnd", props.errors, props.setErrors)
                break

            case "updateName":
                console.log("validating show name")
                nameValidate("updateName", props.errors, props.setErrors)
                break

            case "updateDate":
                console.log("validating date")
                dateValidate("updateDate", props.errors, props.setErrors)
                break

            default:
                return
        }
        //console.log(props.errors)
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