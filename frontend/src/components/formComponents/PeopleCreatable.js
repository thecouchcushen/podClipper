import { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const PeopleCreatable = (props) => {
    //Creates list of unique people by combining arrays of hosts and guests
    var hostsBlank = props.clips.map(clip => [...clip.hosts]).flat()
    //console.log("hostsBlank:", hostsBlank)
    var guestsBlank = props.clips.map(clip => [...clip.guests]).flat()
    //console.log("guestsBlank:", guestsBlank)
    var peopleBlank = hostsBlank.concat(guestsBlank)
    var peopleOptions = [...new Set(peopleBlank)]
    //console.log("peopleOptions:", peopleOptions)


    //Maps the list of unique people to an array compatible with the React-select componenet
    var persons = []

    peopleOptions.map(person => {
        persons.push({
            value: person,
            label: person
        })
        return null
    })
    const [selectedOption, setSelectedOption] = useState(null)
    // Loads the initial values of the form based on what is fed through props
    // (whether or not Hosts or Guests are being changed in this creatable-select component)
    useEffect(() => {
        var alreadySelected = []
        switch (props.valDescriptor) {
            case "Hosts":
                props.beingChanged.map(host => {
                    alreadySelected.push({
                        value: host,
                        label: host
                    })
                    return null
                })
                break
            case "Guests":
                props.beingChanged.map(guest => {
                    alreadySelected.push({
                        value: guest,
                        label: guest
                    })
                    return null
                })
                break
            default:
                alreadySelected = []
        } 
    
        setSelectedOption(alreadySelected)
    }, [props.beingChanged, props.valDescriptor])

    
      
    const handleChange = (selectedOption) => {
        setSelectedOption( selectedOption )
        //console.log(`${props.valDescriptor} selected:`, selectedOption)
        var names = []
        selectedOption.map(option => names.push(option.value))
        console.log(`${props.valDescriptor} selected:`, names)
        props.changeFunction( names )
    }

    return (
        
            <label>{props.valDescriptor}
            <CreatableSelect
                isMulti
                options={persons}
                value={selectedOption}
                onChange={handleChange} />
            </label>
       
    )
}

export default PeopleCreatable