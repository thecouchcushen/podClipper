//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'
import noteService from './services/clips'

import ClipForm from './ClipForm'
import Clips from './Clips'

function App() {

  const [clips, setClips] = useState([])
  
  //Requests the clips upon first load of the website
  useEffect(() => {
    //TODO: Integrate services/clips functions here
    const clipsRequest = axios.get("http://localhost:3001/clips")
    clipsRequest.then(response => {
      const clipsResponse = response
      //console.log("clips: ", clipsResponse.data)
      setClips(clipsResponse.data)
    })  
  }, [])

  return (
    <div className="App">
      <h1>Add a Clip:</h1>
      <ClipForm clips={clips}/>
      <h1>Clips:</h1>
      <h3>TODO: Add filtering functionality here</h3>
      <Clips clips={clips} />
    </div>
  );
}

export default App;
