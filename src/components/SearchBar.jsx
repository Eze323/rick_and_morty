import { useState } from "react";
export default function SearchBar({onSearch}) {

   const [character,setCharacter]=useState('');
   const [input, setInput] = useState('');

   const takeChangeInput = (e) => {
       setInput(e.target.value);
   } 
   const handleChange = (e)=>{
      setCharacter(e.target.value);

   }
   const limpiarInput = (e)=>{e.target.value='';
            setInput(e.target.value);
            
}
   
   
   return (
      <div>
         <input 
               type='text' 
               placeholder="Buscar Personaje ..."
               onChange={handleChange}
         />
      <button 
               onClick={()=>{onSearch(character);limpiarInput();}}
      >
        Agregar
      
      </button> 
      </div>
   );
}
