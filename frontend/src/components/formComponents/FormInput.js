import {linkValidate, startValidate, endValidate, titleValidate, nameValidate, dateValidate} from "../../hooks/validate"

const FormInput = (props) => {
    
    const handleChange = (event) => {
        console.log(props.valDescriptor , event.target.value)
        props.changeFunction(event.target.value)

        switch (props.inputId) {
            case "createTitle":
                console.log("validating title")
                titleValidate("createTitle")
                break
            
            case "createLink":
                console.log("validating link")
                linkValidate("createLink")
                break

            case "createDate":
                console.log("validating date")
                dateValidate("createDate")
                break

            case "createStart":
                console.log("validating start time")
                startValidate("createStart")
                break

            case "createEnd":
                console.log("validating end time")
                endValidate("createEnd")
                break

            case "createName":
                console.log("validating show name")
                nameValidate("createName")
                break

            case "updateTitle":
                console.log("validating episode Title")
                titleValidate("updateTitle")
                break

            case "updateLink":
                console.log("validating episode Link")
                linkValidate("updateLink")
                break

            case "updateStart":
                console.log("validating start time")
                startValidate("updateStart")
                break

            case "updateEnd":
                console.log("validating end time")
                endValidate("updateEnd")
                break

            case "updateName":
                console.log("validating show name")
                nameValidate("updateName")
                break

            case "updateDate":
                console.log("validating date")
                dateValidate("updateDate")
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