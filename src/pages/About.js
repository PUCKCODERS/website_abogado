
import React from "react";
import PText from "../components/PText";
import AboutImg from "../assets/images/about-page-img.png"
import styled from "styled-components";
import ContactBanner from "../components/ContactBanner";
import Advantages from "../components/Advantages";

const AboutPageStyles = styled.div`
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
    .right {
        flex: 2;
    }
    .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
            background-color: var(--deep-dark);
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
    .about__info__items {
        margin-top: 15rem;
    }
    .about__info__item {
        margin-botton: 10rem;
    }
    .about__info__heading {
        font-size: 3.6rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px) {
        padding: 10rem 0;
        .top-section {
            flex-direction: column;
            gap: 5rem;
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
    }

`;

export default function About() {
    return (
        <AboutPageStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about__subheading">
                            HOLA, SOY <span>GABRIEL RODRIGUEZ</span>
                        </p>
                        <h2 className="about__heading">DOCTOR EN JURISPRUDENCIA</h2>
                        <div className="about__info">
                            <PText>
                            COMO ABOGADO, MI PRINCIPAL COMPROMISO ES DEFENDER LOS DERECHOS 
                            DE MIS CLIENTES CON INTEGRIDAD Y PROFESIONALISMO.
                            CADA CASO REPRESENTA UN RETO ÚNICO QUE REQUIERE UN ANÁLISIS 
                            DETALLADO Y ESTRATEGIAS PERSONALIZADAS PARA GARANTIZAR LA MEJOR 
                            REPRESENTACIÓN LEGAL POSIBLE
                            <br /> <br />
                            CUENTO CON UNA AMPLIA EXPERIENCIA EN DIVERSAS ÁREAS DEL DERECHO, 
                            INCLUYENDO DERECHO CIVIL, PENAL, LABORAL, MERCANTIL, FAMILIAR Y 
                            ADMINISTRATIVO. ESTA TRAYECTORIA ME PERMITE ABORDAR CADA CASO CON 
                            UNA VISIÓN INTEGRAL Y PROPONER SOLUCIONES EFECTIVAS ADAPTADAS A LAS NECESIDADES DE MIS CLIENTES
                            <br /> <br />
                            EL EJERCICIO DEL DERECHO EXIGE NO SOLO CONOCIMIENTO PROFUNDO 
                            DE LAS NORMATIVAS VIGENTES, SINO TAMBIÉN LA CAPACIDAD DE NEGOCIAR Y ARGUMENTAR CON SOLIDEZ.
                            EN CADA SITUACIÓN, BUSCO SOLUCIONES EFICIENTES Y FAVORABLES, 
                            PRIORIZANDO SIEMPRE LOS INTERESES Y LA TRANQUILIDAD DE MIS REPRESENTADOS
                            <br /> <br />
                            EN UN MUNDO EN CONSTANTE CAMBIO, LA ACTUALIZACIÓN JURÍDICA ES FUNDAMENTAL.
                            POR ELLO, ME MANTENGO AL DÍA CON LAS ÚLTIMAS REFORMAS LEGALES Y PRECEDENTES 
                            JUDICIALES, ASEGURANDO QUE MIS CLIENTES RECIBAN ASESORÍA BASADA EN LA LEGISLACIÓN MÁS RECIENTE Y EFECTIVA
                            </PText>
                        </div>
                       
                    </div>
                    <div className="right">
                        <img src={AboutImg} alt="Gabriel Rodriguez img"/>
                    </div>
                </div>
                <Advantages />
            </div>
            <ContactBanner />
        </AboutPageStyles>
    );
}