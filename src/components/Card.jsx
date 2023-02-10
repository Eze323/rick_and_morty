import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Figurita=styled.div`

font-size: 10px;
border:3px solid green;
position:relative;
background-color: ghostwhite;
padding: 5px;
border-radius: 15px;
-webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000;
& button{
   clear: both;
    float: right;
    margin: 6px;
}
& img{
   clear: both;
    float: left;
}
& .name{ 
   
   max-height: 34px;
   position: absolute;
   background-color: rgba(0,0,0,0.5);
   top: 75%;
   left: 50%;
   transform: translate(-50%, -50%);
   color:white;
   padding:5px;
   max-height: 34px;
   -webkit-transform: translate(-50%,-50%);
   -ms-transform: translate(-50%,-50%);
   width: 94%;
}
& .specie{
   overflow: overlay;
    max-height: 34px;
   float: left;
    clear: both;
    width: 50%;
    font-size: 11px;
}
& .genero{
   float:right;
   width:50%;
   font-size: 11px;
}
`;
export default function Card(props) {
 
   return (
      <Figurita>
         <button onClick={()=>props.onClose(props.id)}>X</button>
         
         <img  src={props.image} alt={props.name}/> 
         <Link to={`/detail/${props.id}`}>
               <h2 class='name'>{props.name}</h2>
         </Link>
         <h2 class='specie'>{props.species}</h2>
         <h2 class='genero'>{props.gender}</h2>
         
      </Figurita>
   );
}
