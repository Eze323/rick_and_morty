import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {useState,useEffect} from 'react';
import {addFav,removeFav} from '../../redux/actions';



export const Figurita=styled.div`
margin-top: 15px;
font-size: 10px;
border:3px solid #03747e;
position:relative;
background-color:#01a6b980;
padding: 5px;
border-radius: 15px;
-webkit-box-shadow: 5px 5px 15px 1px #9cc831; 
box-shadow: 5px 5px 15px 1px #9cc831;
-webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease-out;
    transition:all 0.5s ease;

&:hover { -webkit-transform: rotate(-7deg);
          -moz-transform: rotate(-7deg);
         transform: rotate(-7deg);
      }
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
    top: 62%;
    left: 9%;
    color: white;
    padding: 5px;
    min-height: 50px;
    width: 79%;
    height: min-content;
    text-align: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    border-radius: 0px 0px 12px 12px;

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
   margin: 20px;
    border: 3px solid #03747e;
    border-radius: 15px;
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
   }, [props.myFavorites,props.id]);

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