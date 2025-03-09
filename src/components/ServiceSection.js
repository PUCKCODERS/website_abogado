import React from "react";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem"
import { MdOutlineBalance } from "react-icons/md";
import { MdOutlineAccountBalance } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import styled from "styled-components";

const ServicesItemStyles = styled.div`
    padding: 10rem 0;
    .services__allItems {
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
    }
    @media only screen and (max-width: 768px) {
        .services__allItems {
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }
`;

export default function ServiceSection(){   
    return (
        <ServicesItemStyles>
            <div className="container">
                <SectionTitle heading="SERVICIOS"
                subheading="LO QUE HARÉ POR TI"/>

                <div className="services__allItems">
                    <ServicesSectionItem
                    icon={<MdOutlineAccountBalance/>} 
                    title="ASESORÍA Y CONSULTORÍA LEGAL"
                    desc = "ORIENTACIÓN PERSONALIZADA PARA QUE LOS CLIENTES COMPRENDAN SUS DERECHOS Y TOMEMOS LAS MEJORES DECISIONES LEGALES."
                    />
                    <ServicesSectionItem
                     icon={<MdOutlineBalance />}
                     title="REPRESENTACIÓN LEGAL"
                     desc = "DEFENSA Y ACOMPAÑAMIENTO EN JUICIOS, NEGOCIACIONES Y PROCEDIMIENTOS LEGALES ANTE TRIBUNALES Y EMPRESAS."
                    />
                    <ServicesSectionItem
                    icon={<GrDocumentText  />}
                    title="REDACCIÓN Y REVISIÓN DE DOCUMENTOS LEGALES"
                    desc = "ELABORACIÓN, ANÁLISIS Y VALIDACIÓN DE CONTRATOS, TESTAMENTOS Y DEMANDAS PARA GARANTIZAR SU LEGALIDAD."
                    />
                </div>
            </div>
        </ServicesItemStyles>
    )
}