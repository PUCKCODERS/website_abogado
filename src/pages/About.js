
import React from "react";
import PText from "../components/PText"; 
import Button from "../components/Button"; 
import AboutImg from "../assets/images/about-page-img.png"
import AboutInfoItem from "../components/AboutInfoItem";
import styled from "styled-components";
import ContactBanner from "../components/ContactBanner";

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
                            Como abogado, mi principal compromiso es defender los derechos 
                            de mis clientes con integridad y profesionalismo. 
                            Cada caso representa un reto único que requiere un análisis detallado 
                            y estrategias personalizadas para garantizar la mejor representación legal posible.
                            <br /> <br />
                            El ejercicio del derecho exige no solo conocimiento profundo de las 
                            normativas vigentes, sino también la capacidad de negociar y argumentar con solidez. 
                            En cada situación, busco soluciones eficientes y favorables, priorizando siempre los 
                            intereses y la tranquilidad de mis representados.
                            <br /> <br />
                            En un mundo en constante cambio, la actualización jurídica es fundamental. 
                            Por ello, me mantengo al día con las últimas reformas legales y precedentes judiciales, 
                            asegurando que mis clientes reciban asesoría basada en la legislación más reciente y efectiva.
                            </PText>
                        </div>
                       
                    </div>
                    <div className="right">
                        <img src={AboutImg} alt="Gabriel Rodriguez img"/>
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info__heading">EDUCACION</h1>
                        <AboutInfoItem 
                        title="ESCUELA"
                        items={['FRANCISCO ZURITA GUAYASAMIN']}
                        />
                        <AboutInfoItem 
                        title="COLEGIO"
                        items={['MARIA AUGUSTA URRUTIA DE ESCUDERO']}
                        />
                        <AboutInfoItem 
                        title="UNIVERSIDAD"
                        items={['UNIVERSIDAD CENTRAL DE ECUADOR']}
                        />
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info__heading">EDUCACION</h1>
                        <AboutInfoItem 
                        title="ESCUELA"
                        items={['FRANCISCO ZURITA GUAYASAMIN']}
                        />
                        <AboutInfoItem 
                        title="COLEGIO"
                        items={['MARIA AUGUSTA URRUTIA DE ESCUDERO']}
                        />
                        <AboutInfoItem 
                        title="UNIVERSIDAD"
                        items={['UNIVERSIDAD CENTRAL DE ECUADOR']}
                        />
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info__heading">EDUCACION</h1>
                        <AboutInfoItem 
                        title="ESCUELA"
                        items={['FRANCISCO ZURITA GUAYASAMIN']}
                        />
                        <AboutInfoItem 
                        title="COLEGIO"
                        items={['MARIA AUGUSTA URRUTIA DE ESCUDERO']}
                        />
                        <AboutInfoItem 
                        title="UNIVERSIDAD"
                        items={['UNIVERSIDAD CENTRAL DE ECUADOR']}
                        />
                    </div>
                </div>
            </div>
            <ContactBanner />
        </AboutPageStyles>
    );
}