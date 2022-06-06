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
      setButtonContents("Cancel Clip Create")
    } else {
      setDispCreateForm(false)
      setButtonContents("+ New Clip")
    }
  }

  const handleFormDisplay = () => {
    if (dispCreateForm) {
      return (<ClipForm id="createForm" clips={clips} setClips={setClips} clip={null} />)
    } else {
      return
    }
  }

  return (
    <div className="App">
      <h1>Add a Clip:</h1>
      <button onClick={handleSubmit}>{buttonContents}</button>
      {handleFormDisplay()}
      
      <h1>Clips:</h1>
      <Clips clips={clips} setClips={setClips} />
    </div>
  );
}

export default App;
