import styled from 'styled-components';

const Figurita=styled.div`
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
   position: absolute;
   background-color: rgba(0,0,0,0.5);
   top: 69%;
   left: 30%;
   transform: translate(-50%, -50%);
   color:white;
   padding:5px;
}
& .specie{
   float: left;
    clear: both;
    width: 50%;
}
& .genero{
   float:right;
   width:50%
}
`;
export default function Card(props) {
 
   return (
      <Figurita>
         <button onClick={props.onClose}>X</button>
         <img  src={props.image} alt="{props.name}" /> 
         <h2 class='name'>{props.name}</h2>
         <h2 class='specie'>{props.species}</h2>
         <h2 class='genero'>{props.gender}</h2>
         
      </Figurita>
   );
}
