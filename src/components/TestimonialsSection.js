import React from "react";
import SectionTitle from "./SectionTitle";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import PText from "./PText";
import styled from "styled-components";

const TestimonialSectionStyles = styled.div`
    padding: 10rem 0;
    text-align: center;
    .testimonial__wrapper {
        position: relative;
        max-width: 700px;
        margin: 0 auto;
    }
    .testimonial__info {
        width: 100%;
        height: fit-content;
        padding: 3rem;
        background-color: var(--deep-dark);
        border-radius: 12px;
        margin-top: 5rem;
    }
    .testimonial__desc {
        .para {
            text-align: center;
        }
    }
    .testimonial__name {
        margin-top: 4rem;
        font-family: 'Montserrat Bold';
        font-size: 2.2rem;
    }
    
`;


export default function TestimonialsSection(){
    return(
        <TestimonialSectionStyles>
            <div className="container">
                <SectionTitle 
                    heading="TESTIMONIOS"
                    subheading="CONOZCA LAS EXPERIENCIAS Y TESTIMONIOS DE QUIENES HAN CONFIADO EN NUESTRA ASESORÍA LEGAL"
                />
                <div className="testimonial__wrapper">
                    <SwitchTransition>
                        <CSSTransition>
                            <div className="testimonial__info">
                                <div className="testimonial__desc">
                                    <PText>
                                    ORIENTACIÓN PERSONALIZADA PARA QUE LOS CLIENTES COMPRENDAN 
                                    SUS DERECHOS Y TOMEMOS LAS MEJORES DECISIONES LEGALES
                                    </PText>
                                </div>
                                <h2 className="testimonial__name">JONATHAN RODRIGUEZ</h2>
                                <p className="testimonial__title">CEO PUCKCODERS</p>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
        </TestimonialSectionStyles>
    )
}