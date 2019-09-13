import React, {useEffect, useState} from 'react';
import './App.css';
import styled from 'styled-components';
import Name from './components/Name';
import Attributes from './components/Attributes';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results)
        setData(response.data.results)
      })
      .catch (error => {
        console.log(error)
      })
  }, [])
  return (
    <div className="App">
      <div>
        {data.map((item, index) => {
          return <Name name={item.name} key={index}/>
        })}
      </div>
      <div>
        {data.map((item, index) => {
          return <Attributes height={item.height} mass={item.mass} gender={item.gender} key={index}/>
        })}
      </div>
    </div>
  );
}

export default App;
