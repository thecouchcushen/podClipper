//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import clipService from './services/clips'
import ClipForm from './components/ClipForm'
import Clips from './components/Clips'

function App() {

  const [clips, setClips] = useState([])

  const [dispCreateForm, setDispCreateForm] = useState(false)
  const [buttonContents, setButtonContents] = useState("+ New Clip")
  
  //Requests the clips upon first load of the website
  useEffect(() => {
    clipService.getAll()
               .then(response => setClips(response))
  }, [])

  const handleSubmit = (event) => {
    if (!dispCreateForm) {
      setDispCreateForm(true)
      setButtonContents("Done adding clips")
    } else {
      setDispCreateForm(false)
      setButtonContents("Add Clips")
    }
  }

  const handleFormDisplay = () => {
    if (dispCreateForm) {
      return (
      <>
        <h1>Add a Clip:</h1>
        <ClipForm id="createForm" clips={clips} setClips={setClips} clip={null} />
      </>
      )
    } else {
      return (
      <>
        <h1>Clips:</h1>
        <Clips clips={clips} setClips={setClips} />
      </>
      )
    }
  }

  return (
    <div className="App">
      
      <button onClick={handleSubmit}>{buttonContents}</button>
      {handleFormDisplay()}
      
    </div>
  );
}

export default App;
