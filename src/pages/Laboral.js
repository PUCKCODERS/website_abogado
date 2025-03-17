import React from "react";
import styled from 'styled-components';
import PText from "../components/PText"; 
import LaboralImg from '../assets/images/laboral.png';
import ContactInfoItem from '../components/ContactInfoItem';
import { FaBalanceScale } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { FaBalanceScaleRight } from "react-icons/fa";
import ContactBanner from '../components/ContactBanner';





const LaboralPageStyles = styled.div`
    padding: 20rem 0 10rem 0;
    .top-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .left {
        flex: 3;
        
    }
    .right,
    .right__right,
    .left__left {
        flex: 2;
        
        
    }
    
    .about__subheading {
        font-size: 2rem;
        margin-bottom: 2rem;
        span {
            background-color: #000;
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
    .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
    .about__info {
        margin-bottom: 4rem;
        .para {
            max-width: 100%;
        }
    }
    .right {
        img {
            border: 2px solid var(--gray-1);
            border-radius: 2rem;
            box-shadow: 17px 11px 23px #000;
        }
    }
    .about__subheading__up {
        margin-top: 3rem;
        margin-bottom: 3rem;
        font-size: 2.5rem;
         text-align: center;
        
       
    }
     @media only screen and (max-width: 950px) {
        .aboutSection__left {
            flex: 4;
        }
        .aboutSection__right {
            flex: 3;
        }
    }
    @media only screen and (max-width: 768px) {
        padding: 10rem 0;
        .top-section {
            flex-direction: column;
            gap: 1rem;
        }
        .about__subheading {
            font-size: 1.8rem;
        }
        .about__heading {
            font-size: 2.8rem;
        }
        .about__info__heading {
            font-size: 3rem;
        }
          .contactSection__wrapper {
            flex-direction: column;
        }
        .contactSection__wrapper::after {
            display: none
        }
        
        .left__left,
        .right__right {
            max-width: 100%;
            width: 100%;
            max-width: 500px;
            
        }
        .about__subheading__up {
            text-align: center;
        }
}

`;

export default function Laboral() {
    return(
        <LaboralPageStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about__subheading">
                        PROTECCIÓN LEGAL PARA TRABAJADORES Y EMPLEADORES
                        </p>
                        <h2 className="about__heading">DERECHO LABORAL</h2>
                        <p className="about__subheading">
                        <span>DEFENDIENDO SUS DERECHOS EN EL ÁMBITO LABORAL</span>
                        </p>
                        <div className="about__info">
                            <PText>
                            EL MUNDO LABORAL REQUIERE UN CONOCIMIENTO PROFUNDO DE LAS 
                            LEYES Y DERECHOS QUE LO RIGEN. COMO ABOGADO LABORALISTA, 
                            LE BRINDO ASESORAMIENTO EN DESPIDOS INJUSTIFICADOS, 
                            RECLAMACIONES SALARIALES, ACCIDENTES LABORALES Y OTROS ASUNTOS RELACIONADOS. 
                            TANTO SI ES TRABAJADOR COMO EMPLEADOR, LE AYUDARÉ A PROTEGER SUS INTERESES CON 
                            ESTRATEGIAS LEGALES EFICIENTES
                            </PText>
                        </div>
                    </div>
                    <div className="right">
                        <img src={LaboralImg} alt="penal"/>
                    </div>
                </div>
            </div>
            <div className="container">
                        <p className="about__subheading__up">
                            <span>CONOCIMIENTO PROFUNDO EN LAS DIFERENTES SITUACIONES DEL DERECHO LABORAL</span>
                        </p>
                <div className="top-section">
                    
                    <div className="left__left">
                        
                            <ContactInfoItem icon={<FaBalanceScale />} text="REDACCIÓN DE CONTRATOS DE TRABAJO"/>
                            <ContactInfoItem icon={<MdAccountBalance />} text="NEGOCIACIÓN DE CONVENIOS COLECTIVOS"/>
                            <ContactInfoItem icon={<FaBalanceScaleLeft />} text="REPRESENTACIÓN EN JUICIOS LABORALES"/>
                            <ContactInfoItem icon={<CgFileDocument />} text="DESPIDOS Y TERMINACIÓN LABORAL"/>
                            <ContactInfoItem icon={<FaBalanceScaleRight />} text="RECLAMACIONES LABORALES"/>
                            <ContactInfoItem icon={<FaBalanceScale />} text="ASESORAMIENTO SOBRE SEGURIDAD SOCIAL"/>
                            <ContactInfoItem icon={<MdAccountBalance />} text="OBTENCIÓN DE PERMISOS DE TRABAJO"/>
                            <ContactInfoItem icon={<FaBalanceScaleLeft />} text="INDEMNIZACIONES LABORALES"/>
                            
                    </div>
                    <div className="right__right">
                        
                            <ContactInfoItem icon={<FaBalanceScale />} text="AFILIACIÓN A LA SEGURIDAD SOCIAL"/>
                            <ContactInfoItem icon={<MdAccountBalance />} text="RECLAMACIÓN DE PRESTACIONES SOCIALES"/>
                            <ContactInfoItem icon={<FaBalanceScaleLeft />} text="ACOSO LABORAL"/>
                            <ContactInfoItem icon={<CgFileDocument />} text="DISCRIMINACIÓN LABORAL"/>
                            <ContactInfoItem icon={<FaBalanceScaleRight  />} text="ACCIDENTES DE TRABAJO"/>
                            <ContactInfoItem icon={<FaBalanceScale />} text="NEGOCIACIÓN DE FINIQUITOS"/>
                            <ContactInfoItem icon={<MdAccountBalance />} text="REPRESENTACIÓN EN MEDIACIONES Y ARBITRAJES"/>
                    </div>
                    
                </div>
                
            </div>
            <ContactBanner />
        </LaboralPageStyles>
    )
}