import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const PeopleCreatable = (props) => {
    //Creates list of unique people by combining arrays of hosts and guests
    var optionsBlank = []
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
    })

    //console.log(persons)
    
    // Failed attempt at rendering guests/hosts below by making it a json
    //var realPeopleOptions = {}
    //realPeopleOptions.people = persons
    //console.log(realPeopleOptions)

    const [selectedOption, setSelectedOption] = useState(null)
    
    const handleChange = (selectedOption) => {
        setSelectedOption( selectedOption )
        console.log(`${props.valDescriptor} selected:`, selectedOption)
        var names = []
        selectedOption.map(option => names.push(option.value))
        console.log(`${props.valDescriptor} selected:`, names)
        props.changeFunction( names )
    }
    
    return (
        <div>
            <label>{props.valDescriptor}</label>
            <CreatableSelect
                isMulti
                options={persons}
                onChange={handleChange} />
        </div>
    )
}

export default PeopleCreatable