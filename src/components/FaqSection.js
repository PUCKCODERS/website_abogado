import React, { useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import PText from "./PText";

const FaqStyles = styled.div`
  padding: 5rem 0;
  background-color: var(--dark-bg);

  .faq__header-strip {
    text-align: center;
    margin-bottom: 8rem;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding: 4rem;
    background: linear-gradient(145deg, var(--deep-dark), #1a222f);
    border-radius: 20px;
    border: 2px solid #363636;
    font-family: "Roboto Mono";

    h3 {
      font-size: 2.4rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
      line-height: 1.6;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
  }

  .faq__wrapper {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .faq__item {
    background-color: #000;
    border-radius: 8px;
    overflow: hidden;
    border: 2px solid #363636;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--gray-1);
      transform: scaleY(0);
      transition: transform 0.4s ease;
      transform-origin: bottom;
    }

    &:hover {
      transform: translateY(-5px);
      border-color: #fff;
    }

    &.active {
      background-color: #1a222f;
      border-color: rgba(255, 255, 255, 0.2);

      &::before {
        transform: scaleY(1);
        transform-origin: top;
      }
    }
  }

  .faq__title {
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: 0.3s ease;

    h4 {
      font-size: 2rem;
      font-family: "Montserrat Bold";
      color: var(--gray-1);
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    .icon {
      font-size: 2.4rem;
      color: var(--gray-1);
      transition: all 0.4s ease;
      background-color: rgba(255, 255, 255, 0.05);
      width: 45px;
      height: 45px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  }

  .faq__item.active .icon {
    transform: rotate(135deg);
    background-color: var(--gray-1);
    color: var(--deep-dark);
  }

  .faq__content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);

    .text-wrapper {
      padding: 0 3rem 3rem 3rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);

      p {
        font-size: 1.7rem;
        line-height: 1.9;
        color: #d1d5db;
        margin-top: 2rem;
        font-weight: 300;
      }
    }
  }

  .faq__item.active .faq__content {
    max-height: 1200px;
  }

  @media only screen and (max-width: 768px) {
    .faq__header-strip h3 {
      font-size: 1.6rem;
    }
    .faq__title {
      padding: 2rem;
    }
    .faq__title h4 {
      font-size: 1.5rem;
    }
  }
`;

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      title: "¿POR QUÉ ELEGIRME?",
      desc: (
        <>
          Consultoría legal de excelencia y rigor técnico en Quito.
          <br />
          <br />
          Mi ejercicio profesional se fundamenta en la solvencia jurídica, la
          experiencia litigiosa y un compromiso inquebrantable con los intereses
          de mis representados. Ofrezco una estrategia legal integral, diseñada
          a la medida de cada caso, garantizando una comunicación transparente y
          resultados tangibles.
          <br />
          <br />
          Si requiere asistencia jurídica en Ecuador, pongo a su disposición mi
          capacidad para blindar sus derechos y resolver conflictos legales con
          la máxima eficacia y profesionalismo.
        </>
      ),
    },
    {
      title: "EXPERIENCIA",
      desc: (
        <>
          Soluciones jurídicas respaldadas por una sólida trayectoria.
          <br />
          <br />
          Cuento con una vasta experiencia en la resolución de conflictos
          complejos en diversas ramas del Derecho. Mi práctica se distingue por
          la habilidad para diseñar estrategias procesales efectivas y una
          capacidad de negociación orientada al éxito.
          <br />
          <br />
          Como su abogado de confianza en Quito, combino el conocimiento
          profundo de la normativa vigente con una destreza práctica que asegura
          la protección óptima de su patrimonio y libertad.
        </>
      ),
    },
    {
      title: "COMPROMISO Y ÉTICA",
      desc: (
        <>
          Integridad profesional y defensa leal de sus intereses.
          <br />
          <br />
          La ética y la transparencia son los pilares de mi despacho. Me
          comprometo a gestionar su causa bajo los más altos estándares
          deontológicos, ofreciendo un pronóstico honesto y realista sobre la
          viabilidad de su caso.
          <br />
          <br />
          Mi enfoque prioriza la atención al detalle y la confidencialidad
          absoluta. Al elegir mi representación, usted cuenta con un aliado
          diligente que trabajará incansablemente para garantizar el respeto
          irrestricto a sus derechos fundamentales.
        </>
      ),
    },
    {
      title: "ESPECIALISTAS",
      desc: (
        <>
          Dominio técnico multidisciplinario para una defensa integral.
          <br />
          <br />
          Brindo asesoría experta en áreas críticas como Derecho Civil, Penal,
          Laboral, Mercantil, Administrativo y de Familia. Esta visión global me
          permite anticipar contingencias y ofrecer soluciones robustas que
          abarcan todas las aristas legales de su situación.
          <br />
          <br />
          Confíe en una gestión legal caracterizada por la actualización
          constante, la especialización técnica y una dedicación exclusiva para
          obtener la mejor resolución posible en favor de sus intereses.
        </>
      ),
    },
    {
      title: "FACILIDADES",
      desc: (
        <>
          Accesibilidad y gestión moderna de servicios legales.
          <br />
          <br />
          Entiendo la importancia de la agilidad en el mundo jurídico. Ofrezco
          modalidades de atención flexibles, incluyendo consultas presenciales y
          telemáticas, así como una estructura de honorarios transparente y
          adaptada a la complejidad del asunto.
          <br />
          <br />
          Mi objetivo es brindarle un servicio de calidad superior, eliminando
          barreras y asegurando que usted disponga del respaldo legal necesario
          en el momento oportuno, con total claridad y profesionalismo.
        </>
      ),
    },
    {
      title: "TIPS PARA ELEGIR ABOGADO",
      desc: (
        <>
          Criterios esenciales para garantizar una representación efectiva.
          <br />
          <br />
          La elección de su defensa técnica es determinante para el éxito de su
          caso. Considere las siguientes pautas profesionales:
          <br />
          <br />
          <strong>Definición del Conflicto:</strong> Identifique con claridad la
          naturaleza de su problema para buscar la especialización adecuada.
          <br />
          <strong>Trayectoria Acreditada:</strong> Valide la experiencia y los
          antecedentes de éxito del profesional en litigios similares.
          <br />
          <strong>Reputación y Ética:</strong> Investigue la solvencia moral y
          las referencias del abogado. Mi despacho se honra de mantener una
          reputación intachable.
          <br />
          <strong>Transparencia en Honorarios:</strong> Exija claridad absoluta
          sobre los costos y condiciones económicas desde la primera consulta.
          <br />
          <strong>Comunicación Asertiva:</strong> Asegúrese de que su abogado
          posea la capacidad de explicarle su situación jurídica con claridad y
          empatía.
        </>
      ),
    },
    {
      title: "CONSULTE SU CASO Y DUDA LEGAL",
      desc: (
        <>
          Diagnóstico jurídico y planificación estratégica.
          <br />
          <br />
          Le invito a agendar una consulta profesional para evaluar la
          viabilidad de su caso. A través de un análisis riguroso,
          determinaremos la mejor ruta legal para proteger sus intereses.
          <br />
          <br />
          No deje sus derechos al azar. Permítame brindarle la seguridad
          jurídica que necesita con una representación firme, experimentada y
          orientada a resultados.
        </>
      ),
    },
  ];

  return (
    <FaqStyles>
      <div className="container">
        <div className="faq__header-strip">
          <h3>
            Resuelva aquí sus dudas más frecuentes sobre el Servicio de Asesoría
            Jurídica Legal. Cuento con la experiencia y el respaldo necesario
            para atender sus requerimientos
          </h3>
        </div>

        <div className="faq__wrapper">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={
                activeIndex === index ? "faq__item active" : "faq__item"
              }
            >
              <div
                className="faq__title"
                onClick={() => toggleAccordion(index)}
                role="button"
                tabIndex={0}
              >
                <h4>{item.title}</h4>
                <div className="icon">
                  <MdAdd />
                </div>
              </div>
              <div className="faq__content">
                <div className="text-wrapper">
                  <PText>{item.desc}</PText>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FaqStyles>
  );
}
