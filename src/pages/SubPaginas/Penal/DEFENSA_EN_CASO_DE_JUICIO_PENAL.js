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

export default function AsesoramientoLegalInvestigacionPenal() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              PROTECCIÓN INMEDIATA DE <span>SUS DERECHOS</span>
            </p>
            <h2 className="about__heading">
              ASESORAMIENTO EN INVESTIGACIÓN PENAL
            </h2>
            <div className="about__info">
              <PText>
                ENFRENTAR UNA INVESTIGACIÓN PENAL PUEDE SER UNA EXPERIENCIA
                ABRUMADORA. DESDE EL MOMENTO EN QUE SE TIENE CONOCIMIENTO DE UNA
                INDAGACIÓN EN SU CONTRA, ES CRUCIAL CONTAR CON ASESORAMIENTO
                LEGAL EXPERTO.
                <br /> <br />
                MI OBJETIVO ES PROTEGER SUS DERECHOS CONSTITUCIONALES, EVITAR
                ABUSOS DE AUTORIDAD Y CONSTRUIR UNA DEFENSA SÓLIDA DESDE LA FASE
                PREPROCESAL.
                <br /> <br />
                UNA INTERVENCIÓN TEMPRANA PUEDE MARCAR LA DIFERENCIA ENTRE EL
                ARCHIVO DE LA CAUSA O UN JUICIO LARGO Y COMPLEJO. COMO SU
                ABOGADO, ME ASEGURARÉ DE QUE CADA PASO QUE DÉ ESTÉ RESPALDADO
                POR UNA ESTRATEGIA LEGAL INTELIGENTE.
                <br /> <br />
                NO ESPERE A QUE SE FORMULEN CARGOS. LA DEFENSA COMIENZA AHORA.
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
            heading="ASISTENCIA LEGAL"
            subheading="ACCIONES EN FASE DE INVESTIGACIÓN"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="ANÁLISIS DE RIESGOS LEGALES"
              desc="EVALUACIÓN DE LA SITUACIÓN JURÍDICA PARA ANTICIPAR POSIBLES IMPUTACIONES Y PREPARAR RESPUESTAS EFECTIVAS ANTE LA FISCALÍA."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="ASISTENCIA EN DILIGENCIAS"
              desc="ACOMPAÑAMIENTO PRESENCIAL EN DECLARACIONES, RECONOCIMIENTOS Y PERITAJES PARA GARANTIZAR EL DEBIDO PROCESO Y EVITAR AUTOINCRIMINACIÓN."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="CONTROL DE LA CARPETA FISCAL"
              desc="REVISIÓN CONSTANTE DEL EXPEDIENTE PARA CONOCER LOS ELEMENTOS DE CONVICCIÓN Y REFUTARLOS OPORTUNAMENTE CON PRUEBAS DE DESCARGO."
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
              CONOZCA Y EJERZA <span>SUS GARANTÍAS</span>
            </p>
            <h2 className="about__heading">DERECHOS FUNDAMENTALES</h2>
            <p className="about__subheading">
              <span>RESPETO AL DEBIDO PROCESO</span>
            </p>
            <div className="about__info">
              <PText>
                DURANTE LA FASE DE INVESTIGACIÓN, USTED TIENE DERECHOS
                INALIENABLES, COMO LA PRESUNCIÓN DE INOCENCIA, EL DERECHO A
                GUARDAR SILENCIO Y A NO AUTOINCRIMINARSE. MI LABOR ES ASEGURAR
                QUE ESTOS DERECHOS SEAN RESPETADOS RIGUROSAMENTE POR LA POLICÍA
                Y LA FISCALÍA. CUALQUIER PRUEBA OBTENIDA VULNERANDO ESTOS
                PRINCIPIOS PUEDE SER ANULADA, Y ES MI DEBER IDENTIFICAR ESAS
                IRREGULARIDADES PARA SU BENEFICIO.
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
              LA IMPORTANCIA DE LA <span>DEFENSA ACTIVA</span>
            </p>
            <h2 className="about__heading">ESTRATEGIA PROBATORIA</h2>
            <p className="about__subheading">
              <span>PREVENCIÓN Y ACTUACIÓN</span>
            </p>
            <div className="about__info">
              <PText>
                NO BASTA CON ESPERAR A VER QUÉ HACE LA FISCALÍA. UNA DEFENSA
                EFICAZ EN LA ETAPA DE INVESTIGACIÓN IMPLICA APORTAR ELEMENTOS DE
                DESCARGO, PROPONER DILIGENCIAS Y PRESENTAR TESTIGOS QUE
                RESPALDEN SU VERSIÓN. TRABAJAMOS PARA DESVIRTUAR LAS ACUSACIONES
                ANTES DE QUE SE FORMULEN CARGOS, BUSCANDO EL ARCHIVO DE LA
                INVESTIGACIÓN O LA DESESTIMACIÓN DE LA DENUNCIA CUANDO SEA
                POSIBLE.
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
              SOLUCIONES ALTERNATIVAS Y <span>PREVENCIÓN</span>
            </p>
            <h2 className="about__heading">MINIMIZACIÓN DE IMPACTO</h2>
            <p className="about__subheading">
              <span>TRANQUILIDAD FUTURA</span>
            </p>
            <div className="about__info">
              <PText>
                EN CIERTOS CASOS, LA MEJOR ESTRATEGIA PUEDE SER LA NEGOCIACIÓN O
                LA BÚSQUEDA DE SALIDAS ALTERNATIVAS AL PROCESO PENAL. ANALIZO
                CADA ESCENARIO PARA DETERMINAR SI ES CONVENIENTE BUSCAR ACUERDOS
                REPARATORIOS O SUSPENSIONES CONDICIONALES QUE EVITEN
                ANTECEDENTES PENALES Y EL DESGASTE DE UN JUICIO. MI PRIORIDAD ES
                SIEMPRE SU LIBERTAD.
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
