//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import clipService from './services/clips'
import ClipForm from './components/ClipForm'
import Clips from './components/Clips'
import Logo from './PodClipperLogo.svg'

function App() {

  const [clips, setClips] = useState([])

  const [dispCreateForm, setDispCreateForm] = useState(false)
  const [buttonContents, setButtonContents] = useState("Add Clips")
  
  //Requests the clips upon first load of the website
  useEffect(() => {
    clipService.getAll()
               .then(response => setClips(response))
  }, [])

  const handleSubmit = (event) => {
    if (!dispCreateForm) {
      setDispCreateForm(true)
      setButtonContents("Cancel/Quit Adding")
    } else {
      setDispCreateForm(false)
      setButtonContents("Add Clips")
    }
  }

  const handleFormDisplay = () => {
    if (dispCreateForm) {
      return (
      <>
        <h2>Add a Clip:</h2>
        <ClipForm id="createForm" clips={clips} setClips={setClips} clip={null} />
      </>
      )
    } else {
      return (
      <>
        <h2>Clips:</h2>
        <Clips clips={clips} setClips={setClips} />
      </>
      )
    }
  }

  return (
    <div className="App">
      <header className='App-header'>
        <img src={Logo} alt='unable to access logo' width="20%"></img>
        <h1>PodClipper</h1>
        <h3>by Liam</h3>
      </header>
      <button className='create-form-button' onClick={handleSubmit}>{buttonContents}</button>
      {handleFormDisplay()}
      
    </div>
  );
}

export default App;
