import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
max-width:700px;
margin: 0 auto;
font-size: 1.5rem;
line-height: 2.5rem;
@media only screen and (max-width: 768px){
font-size: 1.4rem;
}
`;

export default function PText({children}) {
    return (
        <PStyle>
            <p>
            "GABRIEL RODRÍGUEZ, ABOGADO CON AMPLIA EXPERIENCIA EN DIVERSAS ÁREAS DEL DERECHO. 
            BRINDO ASESORÍA LEGAL PERSONALIZADA, ÉTICA Y EFICAZ PARA PROTEGER SUS DERECHOS E INTERESES.
            </p>
        </PStyle>
    );
}