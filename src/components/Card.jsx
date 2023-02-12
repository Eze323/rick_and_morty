import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
   
   align-items: center;
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    top: 74%;
    left: 50%;
    color: white;
    padding: 5px;
    min-height: 70px;
    -webkit-transform: translate(-50%,-50%);
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
   width:300px;
   clear: both;
   float: left;
}
`;
export default function Card(props) {
 
   return (
      <Figurita>
         <button onClick={()=>props.onClose(props.id)}>X</button>
         
         <img class='imageCard'  src={props.image} alt={props.name}/> 
         <Link to={`/detail/${props.id}`}>
               <h2 class='name'>{props.name}</h2>
         </Link>
         <h2 class='specie'>{props.species} - {props.gender}</h2>
         {/* <h2 class='genero'></h2> */}
         
      </Figurita>
   );
}
