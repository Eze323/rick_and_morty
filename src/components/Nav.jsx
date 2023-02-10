import SearchBar from './SearchBar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContentBuscador=styled.div`
    font-family: 'rym';
    font-size: 25px;
    background-color: limegreen;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    -webkit-box-shadow: 5px 5px 15px 1px #000000; 
box-shadow: 5px 5px 15px 1px #000000;
`;

const Logo=styled.img`
        width: 210px;
`;
const BotonLogout=styled.button`
font-family: 'rym-regular';
padding: 5px;
background-color: orange;
border-radius: 10px;
width: 120px;
-webkit-box-shadow: 5px 5px 15px 1px #000000; 
box-shadow: 5px 5px 15px 1px #000000;
cursor:pointer; 
`;

export default function Nav(props){
    const {onSearch}= props;
    
    return(
        <ContentBuscador>
       
            <Logo src='https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png' alt='logo'/>
            <Link to='/home'>Home</Link>
            <Link to='/about'>about</Link>
            
            <SearchBar onSearch={onSearch} random={props.random} />
            <BotonLogout  onClick={()=>props.logout()} > logout </BotonLogout> 
        </ContentBuscador>
    )
}