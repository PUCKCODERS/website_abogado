import React, { useState, useRef } from "react";
import SectionTitle from "./SectionTitle";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import PText from "./PText";
import styled from "styled-components";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import testimonials from "../assets/data/testimonials";

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
    box-shadow: 17px 11px 23px #000;
  }
  .testimonial__desc {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: "Montserrat Bold";
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
  }
  .next,
  .prev {
    margin: 0 0.5rem;
    width: fit-content;
    background-color: var(--deep-dark);
    padding: 0.5rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 12px 6px 18px #000;
  }
}
.fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: opacity, transform;
}
.fade-exit {
    opacity: 1;
    transform: scale(1);
}
.fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 250ms ease-in;
    transition-property: opacity, transform;
}
`;

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];
  
  // Agregamos useRef para evitar el error con findDOMNode
  const nodeRef = useRef(null);

  function handleNext() {
    setActiveIndex((prevIndex) =>
      prevIndex >= testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handlePrev() {
    setActiveIndex((prevIndex) =>
      prevIndex <= 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }

  return (
    <TestimonialSectionStyles>
      <div className="container">
        <SectionTitle
          heading="TESTIMONIOS"
          subheading="CONOZCA LAS EXPERIENCIAS Y TESTIMONIOS DE QUIENES HAN CONFIADO EN NUESTRA ASESORÍA LEGAL"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition>
            <CSSTransition
              key={activeSlide.id}
              timeout={300}
              classNames="fade"
              nodeRef={nodeRef} //Asignamos la referencia
            >
              <div className="testimonial__info" ref={nodeRef}>
                <div className="testimonial__desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="testimonial__name">{activeSlide.name}</h2>
                <p className="testimonial__title">
                  {activeSlide.title}, <br />
                  {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div className="prev" onClick={handlePrev} role="button" tabIndex={0}>
            <MdArrowBack />
          </div>
          <div className="next" onClick={handleNext} role="button" tabIndex={0}>
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonialSectionStyles>
  );
}
