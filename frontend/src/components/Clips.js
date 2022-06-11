import './Clips.css'
import {useState} from 'react'
import Clip from './Clip'
import FormInput from './formComponents/FormInput'
import PeopleSelect from './filterComponents/PeopleSelect'
import ShowSelect from './filterComponents/ShowSelect'

const Clips = ({clips, setClips}) => {

    const [noteFilter, setNoteFilter] = useState('')
    const [showFilter, setShowFilter] = useState('')
    const [personFilter, setPersonFilter] = useState('')

    //Cascades the filters so that they are all applied concurrently

    //All filters check to see if the value in the filter inputs is found anywhere within the respective clips fields (notes, show name, or persons involved as either guests or hosts)
    const clipsToShowNOTES = (noteFilter === '') ? clips : clips.filter(clip => clip.notes.toLowerCase().includes(noteFilter.toLowerCase()))
    const clipsToShowSHOW = (showFilter === '') ? clipsToShowNOTES : clipsToShowNOTES.filter(clip => clip.name.toLowerCase().includes(showFilter.toLowerCase()))
    const clipsToShowPERSON = (personFilter === '') ? clipsToShowSHOW : clipsToShowSHOW.filter(clip => clip.hosts.includes(personFilter) || clip.guests.includes(personFilter))

    const clipsToShow = clipsToShowPERSON

    return (
        <div>
            <div className='filter-wrapper'>
                <PeopleSelect 
                    clips={clips} 
                    valDescriptor="Filter by People: (guests or hosts)" 
                    beingChanged={personFilter} 
                    changeFunction={setPersonFilter} />

                <ShowSelect 
                    clips={clips} 
                    valDescriptor="Filter by Show:" 
                    beingChanged={showFilter} 
                    changeFunction={setShowFilter} />

                <div className='individual-filter-container'>
                    <FormInput 
                        valDescriptor="Filter by description/notes: " 
                        beingChanged={noteFilter} 
                        changeFunction={setNoteFilter} />
                </div>
            </div>
            <div className='clip-wrapper'>
            {clipsToShow.map((clip, i) => <Clip key={"clip"+i} clip={clip} clips={clips} setClips={setClips} /> )}
            </div>
        </div>
    )
}

export default Clips