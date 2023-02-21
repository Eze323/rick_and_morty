import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {useState,useEffect} from 'react';
import {addFav,removeFav} from '../redux/actions';



const Figurita=styled.div`
margin-top: 10px;
font-size: 10px;
border:3px solid green;
position:relative;
background-color: ghostwhite;
padding: 5px;
border-radius: 15px;
-webkit-box-shadow: 5px 5px 15px 1px #000000; 
box-shadow: 5px 5px 15px 1px #000000;
& button{
   clear: both;
    float: right;
    margin: 6px;
}

& .name{ 
   font-size: 13px;
   align-items: center;
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    top: 64%;
    left: 2%;
    color: white;
    padding: 5px;
    min-height: 50px;
    opacity: 0.5;
    width: 93%;
    height: min-content;
    text-align: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
}
& .specie{
   overflow: overlay;
    max-height: 34px;
   float: left;
    clear: both;
    width: 100%;
    font-size: 11px;
}
& .genero{
   float:right;
   width:30%;
   font-size: 11px;
}
& .imageCard{
   width:240px;
   clear: both;
   float: left;
}
`;
const BtnContainer=styled.div`
display: flex;
justify-content: space-between;

`

export function Card(props) {
   const [isFav,setIsFav] = useState(false);
   
   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         props.removeFav(props.id);

      }else{
         setIsFav(true);
         props.addFav({
            name:props.name,
            species:props.species,
            gender:props.gender,
            image:props.image,
            id:props.id
         })}
         

   }
   

   return (
      <Figurita>
         <BtnContainer>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={()=>props.onClose(props.id)}>X</button>
         </BtnContainer>
         <img class='imageCard'  src={props.image} alt={props.name}/> 
         <Link to={`/detail/${props.id}`}>
               <h2 class='name'>{props.name}</h2>
         </Link>
         <h2 class='specie'>{props.species} - {props.gender}</h2>
         {/* <h2 class='genero'></h2> */}
         
      </Figurita>
   );
}

export const mapStateToProps = state => {
   return {
      myFavorites: state.myfavorites
   }
}
export function mapDispatchToProps(dispatch) {
   return{
      addFav: function (personaje){
         dispatch(addFav(personaje))
      },
      removeFav:function(id){
         dispatch(removeFav(id))
         
      }

   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);