import React, {useEffect, useState} from 'react';
import './App.css';
import styled from 'styled-components';
import Attributes from './components/Attributes';
import Species from './components/Species'
import axios from 'axios';

const CardCon = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: space-evenly;
    justify-content: space-evenly;
    max-width: 100%;
    height: 100vh;
    margin: 1rem;

`;

// const ButtonStyle = styled.button`
//     font-size: 2rem;
// `;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([])
  const [species, setSpecies] = useState([])

  // const ChangeSpecies = e => {
  //   // setSpecies()
  // }

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
  }, []);

    useEffect(() => {
      axios
        .get(`https://swapi.co/api/species`)
        .then(response => {
          console.log(response.data.results)
          setSpecies(response.data.results[0])
        })
        .catch (error => {
          console.log(error)
        })
    }, []);


  return (
    <div className="App">
      <CardCon>
        {data.map((item, index) => {
          return <Attributes name={item.name} height={item.height} mass={item.mass} gender={item.gender} key={index}/>
        })}

        <Species name={species.name} designation={species.designation} language={species.language} />
        {/* <ButtonStyle onClick={() => ChangeSpecies()}>Button</ButtonStyle> */}
        
      </CardCon>
    </div>
  );
}

export default App;
