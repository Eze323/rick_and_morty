import { useState } from "react";
import styled from "styled-components";
const BotonBuscar=styled.button`
font-family: 'rym-regular';
color:whitesmoke;
width:180px!important;
margin-left:15px;
padding: 5px;
background-color:#a7d529ad;
border-radius: 10px;
width: 120px;
-webkit-box-shadow: 5px 5px 15px 1px #000000; 
box-shadow: 5px 5px 15px 1px #000000;
cursor:pointer; 
`;

export default function SearchBar({onSearch,random}) {


   const [character,setCharacter]=useState('');

   const handleChange = (e)=>{
      setCharacter(e.target.value);
   }
      
   return (
      <div>
         <input 
               type='text' 
               placeholder="Buscar Personaje ..."
               onChange={handleChange}
         />
      <BotonBuscar 
               onClick={()=>onSearch(character)}
      >
        Agregar
      
      </BotonBuscar> 
      <BotonBuscar 
               onClick={()=>random()}
      >
        Agregar random
      
      </BotonBuscar> 
     
      </div>
   );
}
