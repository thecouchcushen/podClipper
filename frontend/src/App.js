import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'

function App() {

  const [clips, setClips] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [shows, setShows] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {

    const clipsRequest = axios.get("http://localhost:3001/clips")
    const episodesRequest = axios.get("http://localhost:3001/episodes")
    const showsRequest = axios.get("http://localhost:3001/shows")
    const peopleRequest = axios.get("http://localhost:3001/people")

    axios.all([clipsRequest, episodesRequest, showsRequest, peopleRequest]).then((response) => {
      
      const clipsResponse = response[0]

      const episodesResponse = response[1]

      const showsResponse = response[2]

      const peopleResponse = response[3]

      setClips(clipsResponse)
      setEpisodes(episodesResponse)
      setShows(showsResponse)
      setPeople(peopleResponse)

    }
    )
    
  }, [])

  console.log("clips: ", clips)
  console.log("episodes: ", episodes)
  console.log("shows: ", shows)
  console.log("people: ", people)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
