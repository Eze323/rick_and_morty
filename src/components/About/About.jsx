import React from "react";
import styled from "styled-components";

const ContentAbout=styled.div`
background-color:#01a6b980;
color: white;
text-shadow: 1px 1px 2px black;
box-shadow: 5px 5px 15px 1px #000000;
border-radius: 20px;

&::after{
    background-color:orange;
    opacity:0.7;
}
& p{padding: 20px;}
`;

export default function About(){
    return(
        <ContentAbout>
            <h1>Ezequiel Irace</h1>
            <h3>Aplicacion de Rick y Morty - M2 - Henry</h3>
            <p>Rick y Morty (en inglés: Rick and Morty) es una serie de televisión americana de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Dan Harmon, el co-creador de la serie y Justin Roiland son los encargados de las voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.

La serie se originó por un cortometraje rudimentario animado por Roiland para el festival de cine Channel 101 llamado Doc and Mharti, una parodia de los principales protagonistas de Back to the Future. Cuando la cadena NBC despidió a Harmon en 2013 por discusiones entre él y los ejecutivos de la serie que había creado, Community, él y Roiland desarrollaron una serie basada en los personajes ya creados por Roiland.1​</p>
        </ContentAbout>
    )
}