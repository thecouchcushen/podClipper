import CreatableSelect from 'react-select/creatable';

const CreatableInput = (props) => {
    //Creates list of unique people by combining arrays of hosts and guests
    var optionsBlank = []
    var hostsBlank = props.clips.map(clip => [...clip.hosts]).flat()
    console.log("hostsBlank:", hostsBlank)
    var guestsBlank = props.clips.map(clip => [...clip.guests]).flat()
    console.log("guestsBlank:", guestsBlank)
    var peopleBlank = hostsBlank.concat(guestsBlank)
    var peopleOptions = [...new Set(peopleBlank)]
    console.log("peopleOptions:", peopleOptions)

    return (
        <div></div>
    )
}

export default CreatableInput