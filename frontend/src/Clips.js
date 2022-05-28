import {useState} from 'react'
import Clip from './Clip'
import FormInput from './formComponents/FormInput'
import PeopleSelect from './filterComponents/PeopleSelect'
import ShowSelect from './filterComponents/ShowSelect'

const Clips = ({clips}) => {

    const [noteFilter, setNoteFilter] = useState('')
    const [showFilter, setShowFilter] = useState('')
    const [personFilter, setPersonFilter] = useState('')

    //Cascades the filters so that they are all applied concurrently

    //All filters check to see if the value in the filter inputs is found anywhere within the respective clips fields (notes, show name, or persons involved as either guests or hosts)
    const clipsToShowNOTES = (noteFilter === '') ? clips : clips.filter(clip => clip.notes.toLowerCase().includes(noteFilter.toLowerCase()))
    const clipsToShowSHOW = (showFilter === '') ? clipsToShowNOTES : clipsToShowNOTES.filter(clip => clip.name.toLowerCase().includes(showFilter.toLowerCase()))
    const clipsToShowPERSON = (personFilter === '') ? clipsToShowSHOW : clipsToShowSHOW.filter(clip => clip.hosts.includes(personFilter) || clip.guests.includes(personFilter))

    const clipsToShow = clipsToShowPERSON

    // TODO: Notes filter form input validation
    return (
        <div>
            <PeopleSelect clips={clips} valDescriptor="peopleFilter" beingChanged={personFilter} changeFunction={setPersonFilter} />
            <ShowSelect clips={clips} valDescriptor="showFilter" beingChanged={showFilter} changeFunction={setShowFilter} />
            
            <FormInput valDescriptor="noteFilter" beingChanged={noteFilter} changeFunction={setNoteFilter} />
            

            {clipsToShow.map((clip, i) => <Clip key={"clip"+i} clip={clip} /> )}
        </div>
    )
}

export default Clips