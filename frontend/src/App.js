import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'

import ClipForm from './ClipForm'
import Clips from './Clips'

function App() {

  const [clips, setClips] = useState([])

  /*
  TODO: Do I need to separate these models out again?
  const [episodes, setEpisodes] = useState([])
  const [shows, setShows] = useState([])
  const [people, setPeople] = useState([])
  */

  useEffect(() => {

    const clipsRequest = axios.get("http://localhost:3001/clips")

    /*
    const episodesRequest = axios.get("http://localhost:3001/episodes")
    const showsRequest = axios.get("http://localhost:3001/shows")
    const peopleRequest = axios.get("http://localhost:3001/people")
    */

    clipsRequest.then(response => {
      const clipsResponse = response
      console.log("clips: ", clipsResponse.data)
      setClips(clipsResponse.data)
    })

    /*

    axios.all([clipsRequest, episodesRequest, showsRequest, peopleRequest]).then((response) => {
      
      const clipsResponse = response[0]
      const episodesResponse = response[1]
      const showsResponse = response[2]
      const peopleResponse = response[3]

      setClips(clipsResponse.data)
      setEpisodes(episodesResponse.data)
      setShows(showsResponse.data)
      setPeople(peopleResponse.data)
    })

    */
  
  }, [])

  /*
  // Logs all of the initial db values
  console.log("clips: ", clips)
  console.log("episodes: ", episodes)
  console.log("shows: ", shows)
  console.log("people: ", people)
  */
  // TODO: Need to implement filtering here
  return (
    <div className="App">
      <h1>Add a Clip:</h1>
      <ClipForm />
      <h1>Clips:</h1>
      <h3>TODO: Add filtering functionality here</h3>
      <Clips clips={clips} />
    </div>
  );
}

export default App;
