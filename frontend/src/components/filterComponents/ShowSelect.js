//import { useState } from 'react'
import Select from 'react-select'

const ShowSelect = (props) => {

    //Creates list of unique people by combining arrays of shows
    var showsOptions = []
    props.clips.map(clip => showsOptions.push(clip.name))
    //var showsBlank = props.clips.map(clip => [...clip.name]).flat()
    //console.log("showsBlank:", showsBlank)
    showsOptions = [...new Set(showsOptions)]
    
    //console.log("showsOptions:", showsOptions)

    //Maps the list of unique shows to an array compatible with the React-select componenet
    var shows = []
    shows.push({
        value: "",
        label: "All shows (no filter)"
    })
    
    showsOptions.map(show => {
        shows.push({
            value: show,
            label: show
        })
        return null
    })

    //const [selectedOption, setSelectedOption] = useState(null)
    
    const handleChange = (event) => {
        //setSelectedOption( selectedOption )
        console.log(`Person filter selected: ${event.value}`)
        props.changeFunction( event.value )
    }

    return (
        <div className='individual-filter-container'>
            <label className='filter-label'>{props.valDescriptor}
                <Select
                name="showsFilter"
                options={shows}
                defaultValue={shows[0]}
                className="basic-react-select"
                onChange={handleChange}
                />
            </label>
        </div>
        
    )
}

export default ShowSelect