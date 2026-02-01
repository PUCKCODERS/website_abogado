import React from "react";
import PText from "../../../components/PText";
import AboutImg from "../../../assets/images/about-page-img.png";
import styled from "styled-components";
import ContactBanner from "../../../components/ContactBanner";
import SectionTitle from "../../../components/SectionTitle";
import ServicesSectionItem from "../../../components/ServicesSectionItem";
import { MdAccountBalance } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectItem from "../../../components/ProjectItem";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import projects from "../../../assets/data/projects";
import PenalImg from "../../../assets/images/penal.png";

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    right: auto;
    left: auto;
    top: 30%;
    transform: translateY(50%);
    color: white;
    border-radius: 8px;
    border: 3px solid #000;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
    }
    .projectItem__img {
      width: 100%;
    }
  }
`;

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
      box-shadow: 6px 6px 6px #000;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .top-section.inverted {
    flex-direction: row-reverse;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .top-section.inverted {
      flex-direction: column;
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

export default function NegociacionDeAcuerdosConLaFiscalia() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              SOLUCIONES ESTRATÉGICAS Y <span>BENEFICIOSAS</span>
            </p>
            <h2 className="about__heading">NEGOCIACIÓN DE ACUERDOS</h2>
            <div className="about__info">
              <PText>
                NO SIEMPRE EL JUICIO ES EL ÚNICO CAMINO. EN MUCHAS OCASIONES,
                UNA NEGOCIACIÓN INTELIGENTE PUEDE EVITAR RIESGOS MAYORES Y
                ASEGURAR UN RESULTADO MÁS FAVORABLE.
                <br /> <br />
                COMO SU ABOGADO, MI ROL ES EVALUAR OBJETIVAMENTE LA FUERZA DEL
                CASO EN SU CONTRA Y DETERMINAR SI ES CONVENIENTE BUSCAR UN
                ACUERDO CON EL MINISTERIO PÚBLICO.
                <br /> <br />
                MI OBJETIVO EN ESTA FASE ES OBTENER BENEFICIOS TANGIBLES:
                REDUCCIÓN DE PENAS, RECALIFICACIÓN DE DELITOS O LA APLICACIÓN DE
                SALIDAS ALTERNATIVAS QUE EVITEN LA PRISIÓN.
                <br /> <br />
                NEGOCIAR NO ES RENDIRSE; ES TOMAR EL CONTROL DEL RESULTADO
                CUANDO LAS CIRCUNSTANCIAS LO REQUIEREN.
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={AboutImg} alt="Gabriel Rodriguez img" />
          </div>
        </div>
      </div>

      <ServicesItemStyles>
        <div className="container">
          <SectionTitle
            heading="ESTRATEGIAS DE ACUERDO"
            subheading="OPCIONES LEGALES DISPONIBLES"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="PROCEDIMIENTO ABREVIADO"
              desc="GESTIÓN PARA LA APLICACIÓN DE ESTE MECANISMO QUE PERMITE UNA REDUCCIÓN SIGNIFICATIVA DE LA PENA A CAMBIO DE LA ACEPTACIÓN DE LOS HECHOS."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="SUSPENSIÓN CONDICIONAL"
              desc="NEGOCIACIÓN PARA SUSPENDER EL PROCESO BAJO CONDICIONES ESPECÍFICAS, EVITANDO ASÍ UNA SENTENCIA CONDENATORIA Y ANTECEDENTES."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="ACUERDOS REPARATORIOS"
              desc="SOLUCIÓN DEL CONFLICTO MEDIANTE LA REPARACIÓN INTEGRAL A LA VÍCTIMA EN DELITOS PATRIMONIALES O CULPOSOS, EXTINGUIENDO LA ACCIÓN PENAL."
            />
          </div>
          <div className="services__allItems"></div>
        </div>
      </ServicesItemStyles>

      <div className="container ">
        <div className="top-section reverse">
          <div className="right">
            <img src={PenalImg} alt="penal" />
          </div>
          <div className="left">
            <p className="about__subheading">
              CONTROL DE <span>RIESGOS</span>
            </p>
            <h2 className="about__heading">MINIMIZACIÓN DE IMPACTO</h2>
            <p className="about__subheading">
              <span>CERTEZA JURÍDICA</span>
            </p>
            <div className="about__info">
              <PText>
                UN JUICIO SIEMPRE CONLLEVA INCERTIDUMBRE. AL NEGOCIAR,
                ELIMINAMOS EL FACTOR AZAR. MI EXPERIENCIA ME PERMITE IDENTIFICAR
                CUÁNDO LA FISCALÍA TIENE UN CASO DÉBIL PARA PRESIONAR POR
                MEJORES CONDICIONES O CUÁNDO ES PRUDENTE ACEPTAR UN TRATO PARA
                EVITAR UNA CONDENA SEVERA. CADA PASO SE DA CON SU PLENO
                CONSENTIMIENTO Y COMPRENSIÓN DE LAS CONSECUENCIAS.
              </PText>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="top-section reverse inverted">
          <div className="right">
            <img src={PenalImg} alt="penal" />
          </div>
          <div className="left">
            <p className="about__subheading">
              TRANSPARENCIA Y <span>ESTRATEGIA</span>
            </p>
            <h2 className="about__heading">DECISIÓN INFORMADA</h2>
            <p className="about__subheading">
              <span>SU FUTURO ES PRIORIDAD</span>
            </p>
            <div className="about__info">
              <PText>
                NUNCA LE PRESIONARÉ PARA ACEPTAR UN ACUERDO QUE NO LE CONVENGA.
                MI DEBER ES EXPLICARLE CLARAMENTE LOS PROS Y CONTRAS DE CADA
                OPCIÓN. SI DECIDIMOS NEGOCIAR, LO HAREMOS DESDE UNA POSICIÓN DE
                FUERZA, UTILIZANDO LAS DEBILIDADES DE LA INVESTIGACIÓN FISCAL
                COMO MONEDA DE CAMBIO PARA PROTEGER SU LIBERTAD Y SU FUTURO.
              </PText>
            </div>
          </div>
        </div>
      </div>

      <ContactBanner />

      <ProjectSectionStyle>
        <div className="container">
          <SectionTitle
            heading="AREAS LEGALES"
            subheading="EXPERTOS EN SOLUCIONES LEGALES"
          />
          <div className="projects__allItems">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {projects.map((project, index) => {
                if (index >= 10) return null;
                return (
                  <SwiperSlide key={project.id}>
                    <ProjectItem
                      navLink={project.navLink}
                      title={project.name}
                      img={project.img}
                      desc={project.desc}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </ProjectSectionStyle>
    </AboutPageStyles>
  );
}
