import SearchBar from './SearchBar';
import styled from 'styled-components';

const ContentBuscador=styled.div`
      background-color: limegreen;
      padding: 10px;
      border-radius: 20px;
`;

export default function Nav(props){
    const {onSearch}= props;
    
    return(
        <ContentBuscador>
        <SearchBar onSearch={onSearch}/>
        </ContentBuscador>
    )
}