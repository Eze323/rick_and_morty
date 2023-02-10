import Card from './Card';
import styled from 'styled-components';

const ContieneFiguritas=styled.div`
   padding-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;  


`;
const ContieneTarjeta=styled.div`
      margin-top: 15px;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      align-items: center;  
`;



export default function Cards(props) {
   const { characters } = props;
   let i=0;
   if(!characters){
      return <h1>No hay Personajes disponibles</h1>
   }else{
      return (
         <ContieneTarjeta >   
           <ContieneFiguritas>
              
              {characters.map((character)=>(
                 <Card
                    onClose={props.onClose}
                    key={i++}
                    name={character.name}
                    species={character.species}
                    gender={character.gender}
                    image={character.image}
                    id={character.id}
                 />
              )
              
                 
              )}
                   
        
           </ContieneFiguritas>  
         </ContieneTarjeta>
           );
   }
   
}
