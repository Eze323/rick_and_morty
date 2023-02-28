import Card from "../Card/Card";
import {connect,useDispatch} from "react-redux";
import {filterCards,orderCards} from "../../redux/actions";
import {ContieneFiguritas,ContieneTarjeta} from '../Cards/Cards';
import { useRef } from "react";
import styled from "styled-components";

const SelectStyle=styled.select`
margin-right: 15px;
padding: 10px;
border-radius: 5px;
`


export function Favorites({myFavorites}) {
  console.log(myFavorites);
  const dispatch = useDispatch();
  const filter=useRef(null);
  const order=useRef(null);
  
  function handleReset(e){
    dispatch({type:'RESET'});
    filter.current.value="";
    order.current.value="";
    
  }

  
  return (<>
  
  <SelectStyle ref={order} onChange={(e)=>dispatch(orderCards(e.target.value))}>
      {['Ascendente', 'Descendente'].map((e,i) =>(<option value={e} key={i}>{e}</option>) )}
  </SelectStyle>
  <SelectStyle ref={filter} onChange={(e)=>dispatch(filterCards(e.target.value))}>
      {['Male', 'Female', 'unknown', 'Genderless'].map((e,i) =>(<option value={e} key={i}>{e}</option> ))}
  </SelectStyle>
  
  <button  value="reset" onClick={handleReset}>
Reset
  </button>

  <ContieneTarjeta >   
           <ContieneFiguritas>
            
    {myFavorites.length === 0 ? 
          <p style={{ color: "violet", marginTop: "150px", fontSize: "24px" }}>
            ¡Agrega un favorito!
          </p>
         : (myFavorites.map((fav,i) => {
    return(<Card 
        id={fav.id}
        name={fav.name}
        specie={fav.species}
        gender={fav.gender}
        image={fav.image}
        onClose={fav.onClose}
        fav={true}
        key={i++}
        />)
    
  }))}
          </ContieneFiguritas>  
         </ContieneTarjeta>
  </>)
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  };
}

export default connect(mapStateToProps, null)(Favorites);