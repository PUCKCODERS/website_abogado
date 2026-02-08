import React, { useState } from "react";
import styled from "styled-components";
import { MdAdd, MdRemove } from "react-icons/md";
import PText from "./PText";

const FaqStyles = styled.div`
  padding: 5rem 0;
  background-color: var(--dark-bg);

  .faq__header-strip {
    background-color: var(--deep-dark);
    padding: 3rem 2rem;
    text-align: center;
    border-radius: 12px;
    margin-bottom: 5rem;
    border: 1px solid var(--gray-2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

    h3 {
      font-size: 2rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
      line-height: 1.5;
    }
  }

  .faq__item {
    background-color: var(--deep-dark);
    margin-bottom: 2rem;
    border-radius: 8px;
    border: 1px solid var(--gray-2);
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      border-color: var(--gray-1);
    }
  }

  .faq__title {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    transition: 0.3s ease;

    h4 {
      font-size: 1.8rem;
      font-family: "Montserrat Bold";
      color: var(--gray-1);
      text-transform: uppercase;
    }

    .icon {
      font-size: 2.5rem;
      color: var(--gray-1);
      transition: 0.3s ease;
    }
  }

  .faq__content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out;
    background-color: #000;

    .text-wrapper {
      padding: 2rem;
      border-top: 1px solid var(--gray-2);

      p {
        font-size: 1.6rem;
        line-height: 1.8;
        color: var(--gray-1);
      }
    }
  }

  .faq__item.active {
    .faq__content {
      max-height: 1000px; /* Altura suficiente para el contenido */
    }
    .faq__title {
      background-color: var(--gray-2);
    }
  }

  @media only screen and (max-width: 768px) {
    .faq__header-strip h3 {
      font-size: 1.6rem;
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
          Consultoría legal personalizada en Quito.
          <br />
          <br />
          ¡Elija mi asesoría legal! Cuento con amplia experiencia, atención
          personalizada y resultados comprobados. Ofrezco un enfoque integral en
          diversas áreas del derecho, manteniendo una comunicación transparente
          y constante con mis clientes.
          <br />
          <br />
          Si necesita una consulta con un abogado en Ecuador, me comprometo a
          brindarle un servicio legal de calidad para proteger sus derechos y
          resolver sus problemas legales.
        </>
      ),
    },
    {
      title: "EXPERIENCIA",
      desc: (
        <>
          Encuentre la solución a su duda legal con asesoría especializada en
          Quito.
          <br />
          <br />
          Mi práctica legal se destaca por una amplia experiencia y
          conocimientos especializados en diversas áreas del derecho. Brindo
          representación personalizada, enfocada en sus necesidades
          individuales, con el objetivo de lograr una resolución efectiva de su
          caso.
          <br />
          <br />
          Como abogado en Quito, mi compromiso, confidencialidad y habilidades
          de negociación me convierten en la elección adecuada para proteger sus
          intereses legales y obtener resultados positivos.
        </>
      ),
    },
    {
      title: "COMPROMISO Y ÉTICA",
      desc: (
        <>
          Abogado en Quito, estudio jurídico | Consulte ahora con un experto
          legal.
          <br />
          <br />
          Mi despacho se distingue por la dedicación y ética profesional. Me
          comprometo a brindar un servicio personalizado, respetando altos
          estándares éticos y actuando con transparencia.
          <br />
          <br />
          Con amplia experiencia y conocimientos especializados, ofrezco
          estrategias legales adaptadas a sus necesidades. Mi enfoque centrado
          en el cliente se basa en la atención al detalle, la comunicación clara
          y la búsqueda de resultados favorables. Al elegirme, puede confiar en
          que protegeré sus derechos y trabajaré en su beneficio de manera
          diligente y ética.
        </>
      ),
    },
    {
      title: "ESPECIALISTAS",
      desc: (
        <>
          Cuento con especialización en diversas áreas legales, no lo dude más y
          contacte conmigo en Quito.
          <br />
          <br />
          Destaco como un abogado en Quito que ofrece servicios legales en
          diversas áreas del derecho, tales como civil, mercantil, laboral,
          penal, administrativo, familiar, entre otras. Le proporcionaré
          asesoramiento y representación integral, personalizada y eficaz,
          buscando la mejor solución para sus intereses y derechos como cliente.
          <br />
          <br />
          Elija mi asesoría debido a mi amplia gama de especialidades legales,
          mi comprobada experiencia, mi enfoque personalizado, mis servicios
          legales integrales, mi guía basada en la honestidad y transparencia, y
          mi excepcional atención al cliente.
        </>
      ),
    },
    {
      title: "FACILIDADES",
      desc: (
        <>
          Consulte su duda legal conmigo en Quito en línea.
          <br />
          <br />
          Como abogado en Quito, le ofrezco honorarios adaptados, consultas en
          línea, atención telefónica y servicios integrales en todas las ramas
          del derecho.
          <br />
          <br />
          Me comprometo a proteger sus intereses, actuar con profesionalismo y
          ética, y brindarle un servicio de calidad que se adapte a sus
          necesidades individuales. Confíe en mí para luchar por sus derechos y
          ofrecerle soluciones legales apropiadas.
        </>
      ),
    },
    {
      title: "TIPS PARA ELEGIR ABOGADO",
      desc: (
        <>
          Si tiene una duda legal y cuenta con una lista de abogados en Quito
          pero no sabe en quien confiar, consulte los siguientes tips para
          encontrar el mejor abogado para su caso:
          <br />
          <br />
          Elegir al mejor abogado que se adapte a su caso de derecho es una
          tarea importante para garantizar una representación legal efectiva. A
          continuación, le presento algunas pautas para ayudarle en este
          proceso:
          <br />
          <br />
          <strong>Defina sus necesidades legales:</strong> Antes de buscar un
          abogado, determine claramente cuál es el problema legal que enfrenta.
          Identifique la especialidad legal necesaria para su caso.
          <br />
          <strong>Investigue y recopile información:</strong> Realice una
          investigación exhaustiva. En mi despacho, cuento con experiencia en
          diversas áreas del derecho ecuatoriano.
          <br />
          <strong>Revise la experiencia y especialización:</strong> Verifique la
          experiencia y antecedentes del abogado en el área específica del
          derecho que necesita.
          <br />
          <strong>Verifique la reputación y credenciales:</strong> Es importante
          investigar la reputación. Mi despacho mantiene una elevada tasa de
          éxito y numerosas reseñas positivas de mis clientes.
          <br />
          <strong>Programe consultas iniciales:</strong> Aproveche esta
          oportunidad para discutir su caso y plantear sus preocupaciones.
          <br />
          <strong>Discuta los honorarios y costos:</strong> Hable abiertamente
          sobre los honorarios y costos asociados con el caso. Es importante
          tener claridad en este aspecto desde el principio.
        </>
      ),
    },
    {
      title: "CONSULTE SU CASO Y DUDA LEGAL",
      desc: (
        <>
          Asesórese legalmente en mi despacho en Quito.
          <br />
          <br />
          Mi práctica legal en Quito se destaca por su alta tasa de éxito y
          reputación en el campo. Cuento con conocimientos actualizados y
          ofrezco representación integral y un enfoque centrado en el cliente.
          <br />
          <br />
          Trabajo estrechamente con usted, adaptando estrategias legales a sus
          necesidades específicas. Mi compromiso es brindarle resultados
          positivos y proteger sus derechos en todos los aspectos de su caso
          legal.
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
            para atender sus requerimientos en Quito.
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
                  {activeIndex === index ? <MdRemove /> : <MdAdd />}
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
