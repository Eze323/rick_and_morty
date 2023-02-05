import { useState } from "react";
export default function SearchBar({onSearch}) {

   const [character,setCharacter]=useState('');
  // const [input, setInput] = useState('');

   /*const takeChangeInput = (e) => {
       setInput(e.target.value);
   } */
   const handleChange = (e)=>{
      setCharacter(e.target.value);
      /*e.target.value='';
      console.log(e.preventDefault());*/

   }
   
   /*const limpiarInput = (e)=>{e.target.value='';
         
            
}*/
   
   
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
      </div>
   );
}
