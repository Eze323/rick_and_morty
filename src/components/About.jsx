import React from "react";
import styled from "styled-components";

const ContentAbout=styled.div`
background-color:green;
&::after{
    background-color:orange;
    opacity:0.7;
}
`;

export default function About(){
    return(
        <ContentAbout>
            <h1>Ezequiel Irace</h1>
            <h3>Aplicacion de Rick y Morty - M2 - Henry</h3>
        </ContentAbout>
    )
}