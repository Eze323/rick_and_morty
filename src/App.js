import { useState, useEffect } from 'react'
import Cards from './components/Cards.jsx'
import Form from './components/Form.jsx';
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Detail from './components/Detail'
import {Routes,Route, useLocation,useNavigate} from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'

function App () {
/*function fondoDePantalla(){
  let fondos=['background-01.jpg','background-02.jpg','background-03.jpg','background-04.jpg','background-05.jpg','background-06.jpg'];
  
  document.body.style.backgroundImage='url("./images/'+fondos+'")';

}*/

const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'ejemplo@gmail.com';
const password = '1password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}
function logout(){
  setAccess(false);
  navigate('/');
}

useEffect(() => {
  !access && navigate('/');
}, [access]);

 const [characters,setCharacters]=useState([]);
 function random(){  
  let randomId=Math.floor(Math.random()*826);
  onSearch(randomId);
}

const location= useLocation();
function onClose(id){
   setCharacters(characters.filter((element)=>element.id!==id));
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
      {location.pathname !=='/' && <Nav onSearch={onSearch} random={random} logout={logout}/> }

        <Routes>
          <Route exact path='/'element={<Form  login={login}/> } />
          <Route path="/home" element ={ <Cards characters={characters} onClose={onClose}/> } />
          <Route path="/about" element={<About/>} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
  
    </div>
    </>
  )
}

export default App
