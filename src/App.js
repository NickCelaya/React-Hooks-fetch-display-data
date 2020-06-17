import React, {useState, useEffect} from 'react';
import axios from 'axios'
import nick from './nick.svg';
import Cristobal from './Components/Nick'
import './App.css';




const App = () => {
  const [data] = useState(['Elk', 'Deer', 'Moose', 'Sheep', 'Bear', 'Pheasant'])
  const [starWars, setStarWars] = useState([])
  const [truthy, setTruthy] = useState(true)

useEffect( () => {
  const getData = async () => {
  const result = await axios.get('https://swapi.dev/api/people')
  console.log(result, 'Made the Api call')
  setStarWars(result.data.results)
  };

  getData()
}, [])


  const toggle = () => {
    setTruthy(!truthy)
}

console.log({starWars}, 'nick')


  return (
    <div className="App">
      <header className="App-header">
        <img src={nick} className="App-logo" alt="logo" />
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
        <Cristobal test = {starWars} data = {data}/>
        <button onClick={toggle}>Toogle Greeting </button>
        {truthy && <h1>Hello Nick</h1> }
        <a className="youTube" href="https://www.youtube.com/watch?v=pVowWA7OJVk">Go to youtube</a>
      </header>
    </div>
  );
}

export default App;


// <button onClick={() => setShowText(!showText)}>Toggle Text</button>
// {showText && <div>This text will show!</div>}