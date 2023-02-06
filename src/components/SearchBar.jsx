import { useState } from "react";
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
      <button 
               onClick={()=>onSearch(character)}
      >
        Agregar
      
      </button> 
      <button 
               onClick={()=>random()}
      >
        Agregar random
      
      </button> 
      </div>
   );
}
