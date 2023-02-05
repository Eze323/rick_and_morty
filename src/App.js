import { useState } from 'react'
import Cards from './components/Cards.jsx'
import Form from './components/Form.jsx';
import Nav from './components/Nav.jsx'

import GlobalStyles from './styles/GlobalStyles'

function App () {
 const [characters,setCharacters]=useState([]);
 function onClose(){

 }
 function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
               characters.find((element)=>element.id===data.id)===undefined
               ?setCharacters((prevChars) => [...prevChars, data])
               :window.alert('Personaje repetido, pruebe otro ID');
                    } else {
                     window.alert('No hay personajes con ese ID');
        }
     });

}
  return (
    <>
    <GlobalStyles/>

    <div className='App' style={{ padding: '25px' }}>
      
        <Form />
    
        <Nav onSearch={onSearch}/>
      
    <Cards characters={characters} onClose={onClose}/>
    </div>
    </>
  )
}

export default App
