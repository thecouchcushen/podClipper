//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import clipService from './services/clips'
import ClipForm from './components/ClipForm'
import Clips from './components/Clips'

function App() {

  const [clips, setClips] = useState([])
  
  //Requests the clips upon first load of the website
  useEffect(() => {
    clipService.getAll()
               .then(response => setClips(response))
  }, [])

  return (
    <div className="App">
      <h1>Add a Clip:</h1>
      <ClipForm clips={clips} setClips={setClips} clip={null}/>
      <h1>Clips:</h1>
      <h3>TODO: Add filtering functionality here</h3>
      <Clips clips={clips} setClips={setClips} />
    </div>
  );
}

export default App;
