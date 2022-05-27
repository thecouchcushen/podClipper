import {useState, useEffect} from 'react'
import Clip from './Clip'
import FormInput from './formComponents/FormInput'

const Clips = ({clips}) => {

    const [noteFilter, setNoteFilter] = useState('')
    const [showFilter, setShowFilter] = useState('')
    const [personFilter, setPersonFilter] = useState('')

    //Cascades the filters so that they are all applied concurrently
    const clipsToShowNOTES = (noteFilter === '') ? clips : clips.filter(clip => clip.notes.toLowerCase().includes(noteFilter.toLowerCase()))
    const clipsToShowSHOW = (showFilter === '') ? clipsToShowNOTES : clipsToShowNOTES.filter(clip => clip.name.toLowerCase().includes(showFilter.toLowerCase()))
    const clipsToShowPERSON = (personFilter === '') ? clipsToShowSHOW : clipsToShowSHOW.filter(clip => clip.hosts.includes(personFilter) || clip.guests.includes(personFilter))

    const clipsToShow = clipsToShowPERSON

    return (
        <div>
            <FormInput valDescriptor="personFilter" beingChanged={personFilter} changeFunction={setPersonFilter} />
            <FormInput valDescriptor="noteFilter" beingChanged={noteFilter} changeFunction={setNoteFilter} />
            <FormInput valDescriptor="showFilter" beingChanged={showFilter} changeFunction={setShowFilter} />

            {clipsToShow.map(clip => <Clip key={clip.id} clip={clip} /> )}
        </div>
    )
}

export default Clips