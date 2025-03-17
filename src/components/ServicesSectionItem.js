import React from "react";
import { FaBalanceScale } from "react-icons/fa"; // Balanza de la justicia
import PText from './PText';
import styled from "styled-components";

const ItemStyles = styled.div`
    text-align: center;
    background-color: var(--deep-dark);
    padding: 4rem  2rem 4rem 2rem;
    border-radius: 2rem;
    border: 3px solid var(--gray-2);
    box-shadow: 17px 11px 23px #000;
    .servicesItem__icon {
        svg {
            width: 4.5rem;
            margin-bottom: 1.5rem;
        }
    }

    .servicesItem__title {
        font-size: 2rem;
        font-family: 'Montserrat SemiBold';
        
    }

    .para {
        margin-top: 1.5rem;
        background-color: var(--deep-dark);
        
        
        

    }
`;

export default function ServicesSectionItem({
    icon = <FaBalanceScale/>,
    title = 'ASESORÍA Y CONSULTORÍA LEGAL',
    desc = "BRINDAR ORIENTACIÓN LEGAL PERSONALIZADA SOBRE DISTINTOS TEMAS JURÍDICOS, AYUDANDO A LOS CLIENTES A COMPRENDER SUS DERECHOS Y OPCIONES ANTES DE TOMAR DECISIONES LEGALES."
}){
    return (
        <ItemStyles>
            <div className="servicesItem__icon">{icon}</div>
            <div className="servicesItem__title">{title}</div>
            <PText>{desc}</PText>
        </ItemStyles>
    )
}