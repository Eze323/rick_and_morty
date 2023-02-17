import Card from "./Card";
import { useSelector } from "react-redux";
import {connect,useDispatch} from "react-redux";
import * as actions from "../redux/actions";
import { useRef } from "react";



export function Favorites(props) {
  const dispatch = useDispatch();
  const filter=useRef(null);
  const order=useRef(null);
  
  function handleReset(e){
    dispatch({type:'RESET'});
   
    filter.current.value="";
    order.current.value="";
    
  }

  const favoritos = useSelector((state) => state.myFavorites);
  return <>
  
  <select ref={order} onChange={(e)=>dispatch(orderCards(e.target.value))}>
      {['Ascendente', 'Descendente'].map((e,i) =><option value={e} key={i}></option> )}
  </select>
  <select ref={filter} onChange={(e)=>dispatch(filterCards(e.target.value))}>
      {['Male', 'Female', 'unknown', 'Genderless'].map((e,i) =><option value={e} key={i}></option> )}
  </select>
  
  <button  >

  </button>
  
    {favoritos.map((fav) => {
    return(<Card 
        id={fav.id}
        name={fav.name}
        specie={fav.specie}
        gender={fav.gender}
        image={fav.image}
    
        />)
    
  })}</>;
}
