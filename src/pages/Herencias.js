import React from "react";
import styled from 'styled-components';
import PText from "../components/PText"; 
import TestamentoImg from '../assets/images/testamento.jpg';
import ContactInfoItem from '../components/ContactInfoItem';
import { FaBalanceScale } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { FaBalanceScaleRight } from "react-icons/fa";
import ContactBanner from '../components/ContactBanner';





const HerenciasPageStyles = styled.div`
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

export default function Herencias() {
    return(
        <HerenciasPageStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about__subheading">
                        PROTEGIENDO SUS DERECHOS CON <span>EXPERIENCIA Y COMPROMISO</span>
                        </p>
                        <h2 className="about__heading">DEFENSA PENAL</h2>
                        <div className="about__info">
                            <PText>
                            EN EL ÁMBITO PENAL, CADA CASO REQUIERE UNA DEFENSA SÓLIDA Y ESTRATÉGICA. 
                            COMO ABOGADO ESPECIALIZADO EN DERECHO PENAL, LE BRINDO ASESORAMIENTO 
                            LEGAL INTEGRAL Y REPRESENTACIÓN EN TODAS LAS ETAPAS DEL PROCESO, GARANTIZANDO 
                            LA PROTECCIÓN DE SUS DERECHOS. YA SEA QUE ENFRENTE ACUSACIONES INJUSTAS, 
                            NECESITE ASISTENCIA EN PROCESOS JUDICIALES O REQUIERA ORIENTACIÓN PARA RESOLVER 
                            SU SITUACIÓN LEGAL, ESTARÉ A SU LADO PARA OFRECERLE LA MEJOR DEFENSA POSIBLE
                            </PText>
                        </div>
                    </div>
                    <div className="right">
                        <img src={TestamentoImg} alt="penal"/>
                    </div>
                </div>
            </div>
            <div className="container">
                        <p className="about__subheading__up">
                            <span>EXPERTO PENALISTA EN CASOS DE</span>
                        </p>
                <div className="top-section">
                    
                    <div className="left__left">
                        
                            <ContactInfoItem icon={<FaBalanceScale />} text="ASESORAMIENTO LEGAL EN CASO DE INVESTIGACIÓN PENAL"/>
                            <ContactInfoItem icon={<MdAccountBalance />} text="DEFENSA EN CASO DE JUICIO PENAL"/>
                            <ContactInfoItem icon={<FaBalanceScaleLeft />} text="REPRESENTACIÓN EN CASO DE APELACIÓN"/>
                            <ContactInfoItem icon={<CgFileDocument />} text="NEGOCIACIÓN DE ACUERDOS CON LA FISCALÍA"/>
                            <ContactInfoItem icon={<FaBalanceScaleRight />} text="SOLICITUD DE MEDIDAS CAUTELARES"/>
                            <ContactInfoItem icon={<FaBalanceScale />} text="RECURSOS PENALES"/>
                            <ContactInfoItem icon={<MdAccountBalance />} text="INDULTOS Y CONMUTACIONES DE PENAS"/>
                            
                    </div>
                    <div className="right__right">
                        
                            <ContactInfoItem icon={<FaBalanceScale />} text="REPARACIÓN DEL DAÑO"/>
                            <ContactInfoItem icon={<MdAccountBalance />} text="DELITOS CONTRA LAS PERSONAS Y LA VIDA"/>
                            <ContactInfoItem icon={<FaBalanceScaleLeft />} text="DELITOS CONTRA EL PATRIMONIO"/>
                            <ContactInfoItem icon={<CgFileDocument />} text="DELITOS CONTRA LA ADMINISTRACIÓN PÚBLICA"/>
                            <ContactInfoItem icon={<FaBalanceScaleRight  />} text="DELITOS INFORMÁTICOS"/>
                            <ContactInfoItem icon={<FaBalanceScale />} text="DELITOS ECONÓMICOS"/>
                            <ContactInfoItem icon={<MdAccountBalance />} text="DELITOS INTERNACIONALES"/>
                    </div>
                    
                </div>
                
            </div>
            <ContactBanner />
        </HerenciasPageStyles>
    )
}