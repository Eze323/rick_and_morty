import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const ContainerDetail = styled.div`
font-family:'rym-regular';
margin-top: 30px;
background-color:#01a6b980;
width: 100%;
color: white;
text-shadow: 1px 1px 2px black;
box-shadow: 5px 5px 15px 1px #000000;
border-radius: 20px;
display: flex;
overflow:hidden;
`;
const ContainerCharacteristics = styled.div`
width: 50%;
display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`
const ContainerImage=styled.div`
width: 50%;
display: flex;
flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    overflow:hidden;
 & .imageCard{
   width:240px;
   clear: both;
   float: left;
   margin: 20px;
    border: 3px solid #03747e;
    border-radius: 15px;
    cursor: zoom-in;

}
 & .imageCard:hover{-webkit-transform:scale(1.3);transform:scale(1.3); transition: all 0.5s ease-out;
    transition:all 0.5s ease;}

`

export default function Detail() {

  const navigate = useNavigate();
  

  function handleBack() {
    navigate("/home");
  }

  const { detailId } = useParams();
  const [character, setCharacter] = useState({
      name:'',
      status:'',
      species:'',
      gender:'',
      origin:'',
      image:''

  });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char)=>{
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
        console.log(err);
      window.alert("No hay personajes con ese ID");
    });
  return ()=> setCharacter({});
}, [detailId]);

return (
  <ContainerDetail>
    <ContainerCharacteristics>
      <h2>Nombre: {character.name}</h2>
      <h5>Status: {character.status}</h5>
      <h5>Especie: {character.species}</h5>
      <h5>Genero: {character.gender}</h5>
      <h5>Origin: {character.origin.name}</h5>
    </ContainerCharacteristics>
    <ContainerImage>
      <img className="imageCard" src={character.image} alt={character.name} />
    </ContainerImage>
    <div>
      <button onClick={handleBack}>Home</button>
    </div>
  </ContainerDetail>
);
}
