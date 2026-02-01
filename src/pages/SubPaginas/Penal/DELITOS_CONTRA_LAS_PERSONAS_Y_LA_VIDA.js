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

export default function DelitosContraLasPersonasYLaVida() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              DEFENSA EN CASOS DE <span>ALTO IMPACTO</span>
            </p>
            <h2 className="about__heading">DELITOS CONTRA LA VIDA</h2>
            <div className="about__info">
              <PText>
                LOS DELITOS QUE ATENTAN CONTRA LA VIDA Y LA INTEGRIDAD FÍSICA
                SON LOS MÁS GRAVES EN NUESTRO ORDENAMIENTO JURÍDICO Y CONLLEVAN
                LAS PENAS MÁS SEVERAS. ENFRENTAR UNA ACUSACIÓN DE ESTA
                NATURALEZA REQUIERE UNA DEFENSA TÉCNICA IMPECABLE Y
                EXPERIMENTADA.
                <br /> <br />
                MI COMPROMISO ES ANALIZAR CADA DETALLE DE LA ACUSACIÓN, DESDE LA
                ESCENA DEL CRIMEN HASTA LOS INFORMES FORENSES, PARA CONSTRUIR
                UNA ESTRATEGIA QUE PROTEJA SU LIBERTAD Y SU FUTURO.
                <br /> <br />
                YA SEA DEMOSTRANDO SU INOCENCIA, JUSTIFICANDO SU ACTUAR O
                BUSCANDO LA PENA MÁS JUSTA POSIBLE, ESTOY AQUÍ PARA DEFENDERLE
                CON TODO EL RIGOR DE LA LEY.
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
            heading="ÁREAS DE DEFENSA"
            subheading="TIPOS PENALES COMUNES"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="HOMICIDIO Y ASESINATO"
              desc="DEFENSA ESPECIALIZADA EN CASOS DE MUERTE VIOLENTA, ANALIZANDO LA INTENCIONALIDAD Y LAS CIRCUNSTANCIAS DEL HECHO."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="LESIONES"
              desc="REPRESENTACIÓN EN CASOS DE DAÑO A LA INTEGRIDAD FÍSICA, CUESTIONANDO LA GRAVEDAD Y LA INCAPACIDAD DETERMINADA POR LOS PERITOS."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="FEMICIDIO"
              desc="DEFENSA TÉCNICA EN CASOS DE VIOLENCIA DE GÉNERO, CON UN ENFOQUE EN EL DEBIDO PROCESO Y LA OBJETIVIDAD PROBATORIA."
            />
          </div>
        </div>
      </ServicesItemStyles>

      <div className="container">
        <div className="top-section reverse">
          <div className="right">
            <img src={PenalImg} alt="penal" />
          </div>
          <div className="left">
            <p className="about__subheading">
              CAUSAS DE <span>JUSTIFICACIÓN</span>
            </p>
            <h2 className="about__heading">LEGÍTIMA DEFENSA</h2>
            <p className="about__subheading">
              <span>PROTECCIÓN PROPIA O DE TERCEROS</span>
            </p>
            <div className="about__info">
              <PText>
                NO TODA ACCIÓN QUE CAUSA DAÑO ES UN DELITO. LA LEY RECONOCE EL
                DERECHO A DEFENDERSE ANTE UNA AGRESIÓN ILEGÍTIMA. SI USTED ACTUÓ
                PARA PROTEGER SU VIDA O LA DE SU FAMILIA, TRABAJARÉ PARA
                DEMOSTRAR QUE SU CONDUCTA ESTUVO JUSTIFICADA Y QUE NO DEBE SER
                SANCIONADO PENALMENTE.
              </PText>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="top-section reverse inverted">
          <div className="right">
            <img src={PenalImg} alt="penal" />
          </div>
          <div className="left">
            <p className="about__subheading">
              CIENCIA A SU <span>FAVOR</span>
            </p>
            <h2 className="about__heading">PRUEBA PERICIAL</h2>
            <p className="about__subheading">
              <span>ANÁLISIS FORENSE</span>
            </p>
            <div className="about__info">
              <PText>
                EN ESTOS DELITOS, LA PRUEBA CIENTÍFICA ES DETERMINANTE.
                AUTOPSIAS, TRAYECTORIA BALÍSTICA, ADN Y PERITAJES MÉDICOS PUEDEN
                SER LA CLAVE DE SU LIBERTAD. CUENTO CON EL APOYO DE PERITOS
                EXPERTOS PARA CUESTIONAR LAS CONCLUSIONES DE LA FISCALÍA Y
                PRESENTAR EVIDENCIA TÉCNICA QUE RESPALDE SU VERSIÓN DE LOS
                HECHOS.
              </PText>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="top-section reverse">
          <div className="right">
            <img src={PenalImg} alt="penal" />
          </div>
          <div className="left">
            <p className="about__subheading">
              ESTRATEGIA <span>INTEGRAL</span>
            </p>
            <h2 className="about__heading">CIRCUNSTANCIAS ATENUANTES</h2>
            <p className="about__subheading">
              <span>REDUCCIÓN DE LA PENA</span>
            </p>
            <div className="about__info">
              <PText>
                CUANDO LA RESPONSABILIDAD ES INNEGABLE, LA ESTRATEGIA SE ENFOCA
                EN MINIMIZAR LAS CONSECUENCIAS. IDENTIFICAMOS Y PROBAMOS
                CIRCUNSTANCIAS ATENUANTES COMO LA COLABORACIÓN CON LA JUSTICIA,
                LA REPARACIÓN DEL DAÑO O EL ESTADO EMOCIONAL AL MOMENTO DE LOS
                HECHOS, PARA LOGRAR LA IMPOSICIÓN DE LA PENA MÍNIMA POSIBLE.
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
