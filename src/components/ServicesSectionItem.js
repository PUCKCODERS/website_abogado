import React from "react";
import { FaBalanceScale } from "react-icons/fa"; // Balanza de la justicia
import PText from './PText';
import styled from "styled-components";

const ItemStyles = styled.div`
    text-align: center;
    .servicesItem__icon {
        svg {
            width: 3rem;
        }
    }

    .servicesItem__title {
        font-size: 2rem;
        font-family: 'Montserrat SemiBold';
    }

    .para {
        margin-top: 1.5rem;
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