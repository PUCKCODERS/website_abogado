import React from "react";
import PText from "../../../components/PText";
import AboutImg from "../../../assets/images/about-page-img.png";
import styled from "styled-components";
import ContactBanner from "../../../components/ContactBanner";
import Advantages from "../../../components/Advantages";
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

export default function DEFENSAENCASODEJUICIOPENAL() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              REPRESENTACIÓN TÉCNICA Y <span>ESTRATÉGICA</span>
            </p>
            <h2 className="about__heading">DEFENSA EN JUICIO PENAL</h2>
            <div className="about__info">
              <PText>
                LA ETAPA DE JUICIO ES EL MOMENTO CULMINANTE DEL PROCESO PENAL.
                AQUÍ SE DEFINE SU LIBERTAD Y SU FUTURO. NO ES MOMENTO PARA
                IMPROVISACIONES, SINO PARA UNA DEFENSA TÉCNICA RIGUROSA.
                <br /> <br />
                COMO SU ABOGADO DEFENSOR, MI ROL ES CUESTIONAR LA TESIS DE LA
                FISCALÍA, PRESENTAR PRUEBAS CONTUNDENTES A SU FAVOR Y PERSUADIR
                AL TRIBUNAL MEDIANTE TÉCNICAS AVANZADAS DE LITIGACIÓN ORAL.
                <br /> <br />
                MI MISIÓN ES DESVIRTUAR LA ACUSACIÓN Y LOGRAR QUE SU VERSIÓN DE
                LOS HECHOS PREVALEZCA ANTE LOS JUECES, ASEGURANDO EL RESPETO
                IRRESTRICTO A SU PRESUNCIÓN DE INOCENCIA.
                <br /> <br />
                NO DEJE SU LIBERTAD AL AZAR; NECESITA UNA DEFENSA PREPARADA PARA
                EL DEBATE.
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
            heading="ESTRATEGIA DE LITIGIO"
            subheading="ACTUACIÓN EN LA AUDIENCIA DE JUICIO"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="TEORÍA DEL CASO SÓLIDA"
              desc="CONSTRUCCIÓN DE UNA NARRATIVA LÓGICA Y PERSUASIVA QUE EXPLIQUE LOS HECHOS DESDE SU PERSPECTIVA, APOYADA EN LA PRUEBA ACTUADA."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="INTERROGATORIO EXPERTO"
              desc="TÉCNICAS PARA EXTRAER LA VERDAD DE SUS TESTIGOS Y EVIDENCIAR CONTRADICCIONES O MENTIRAS EN LOS TESTIGOS DE CARGO MEDIANTE EL CONTRAINTERROGATORIO."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="DEBATE PROBATORIO"
              desc="IMPUGNACIÓN DE PRUEBAS ILÍCITAS O IMPERTINENTES Y PRESENTACIÓN EFICAZ DE PERITAJES Y DOCUMENTOS QUE DEMUESTREN SU INOCENCIA."
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
              GARANTÍAS EN EL <span>DEBATE ORAL</span>
            </p>
            <h2 className="about__heading">PRINCIPIOS DEL JUICIO</h2>
            <p className="about__subheading">
              <span>CONTRADICCIÓN E INMEDIACIÓN</span>
            </p>
            <div className="about__info">
              <PText>
                EN EL JUICIO, NADA SE DA POR SENTADO. EJERZO SU DERECHO A
                CONTRADECIR CADA PRUEBA PRESENTADA EN SU CONTRA. VIGILO QUE LOS
                JUECES PERCIBAN DIRECTAMENTE LA PRUEBA (INMEDIACIÓN) Y QUE SE
                RESPETE LA IGUALDAD DE ARMAS. MI PRESENCIA GARANTIZA QUE NO SE
                VULNEREN SUS DERECHOS CONSTITUCIONALES FRENTE AL PODER PUNITIVO
                DEL ESTADO.
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
              LA FUERZA DE LOS <span>ALEGATOS</span>
            </p>
            <h2 className="about__heading">PERSUASIÓN Y ARGUMENTACIÓN</h2>
            <p className="about__subheading">
              <span>CIERRE CONTUNDENTE</span>
            </p>
            <div className="about__info">
              <PText>
                LOS ALEGATOS DE APERTURA Y CLAUSURA SON MOMENTOS CUMBRE. PREPARO
                ARGUMENTOS JURÍDICOS Y FÁCTICOS PRECISOS PARA DEMOSTRAR LA
                INSUFICIENCIA DE LA ACUSACIÓN FISCAL. EL OBJETIVO ES SEMBRAR LA
                DUDA RAZONABLE O DEMOSTRAR LA CERTEZA DE SU INOCENCIA,
                ASEGURANDO QUE EL TRIBUNAL TENGA RAZONES DE PESO PARA DICTAR UNA
                SENTENCIA ABSOLUTORIA.
              </PText>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="top-section reverse">
          <div className="right">
            <img src={PenalImg} alt="penal" />
          </div>
          <div className="left">
            <p className="about__subheading">
              ESCENARIOS Y <span>RESULTADOS</span>
            </p>
            <h2 className="about__heading">BUSCANDO LA ABSOLUCIÓN</h2>
            <p className="about__subheading">
              <span>O LA PENA MÁS JUSTA</span>
            </p>
            <div className="about__info">
              <PText>
                TRABAJAMOS INCANSABLEMENTE POR SU ABSOLUCIÓN (RATIFICACIÓN DE
                INOCENCIA). SIN EMBARGO, EN ESCENARIOS COMPLEJOS, TAMBIÉN
                PREPARAMOS ESTRATEGIAS SUBSIDIARIAS PARA DISCUTIR LA TIPICIDAD,
                ATENUANTES TRASCENDENTALES O LA SUSPENSIÓN CONDICIONAL DE LA
                PENA, MINIMIZANDO CUALQUIER IMPACTO EN SU PROYECTO DE VIDA.
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
