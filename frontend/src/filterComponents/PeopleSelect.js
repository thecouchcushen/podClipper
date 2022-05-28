import { useState } from 'react'
import Select from 'react-select'

const PeopleSelect = (props) => {

    //Creates list of unique people by combining arrays of hosts and guests
    var hostsBlank = props.clips.map(clip => [...clip.hosts]).flat()
    //console.log("hostsBlank:", hostsBlank)
    var guestsBlank = props.clips.map(clip => [...clip.guests]).flat()
    //console.log("guestsBlank:", guestsBlank)
    var peopleBlank = hostsBlank.concat(guestsBlank)
    var peopleOptions = [...new Set(peopleBlank)]
    
    console.log("peopleOptions:", peopleOptions)

    //Maps the list of unique people to an array compatible with the React-select componenet
    var persons = []
    persons.push({
        value: "",
        label: "Everyone (no filter)"
    })
    peopleOptions.map(person => {
        persons.push({
            value: person,
            label: person
        })
    })

    const [selectedOption, setSelectedOption] = useState(null)
    
    const handleChange = (selectedOption) => {
        //setSelectedOption( selectedOption )
        console.log(`Person filter selected: ${selectedOption.value}`)
        props.changeFunction( selectedOption.value )
    }

    return (
        <div>
            <label>{props.valDescriptor}
                <Select
                name="personsFilter"
                options={persons}
                defaultValue={persons[0]}
                className="basic-react-select"
                onChange={handleChange}
                />
            </label>
        </div>
        
    )
}

export default PeopleSelect