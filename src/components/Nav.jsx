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
`;

const Logo=styled.img`
        width: 210px;
`

export default function Nav(props){
    const {onSearch}= props;
    
    return(
        <ContentBuscador>
       
            <Logo src='https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png' alt='logo'/>
            <Link to='/home'>Home</Link>
           
            <Link to='/about'>about</Link>
        
        <SearchBar onSearch={onSearch} random={props.random} logout={props.logout}/>
        </ContentBuscador>
    )
}