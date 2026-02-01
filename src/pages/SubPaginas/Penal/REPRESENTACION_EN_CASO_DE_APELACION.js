import React from "react";
import PText from "../../../components/PText";
import AboutImg from "../../../assets/images/about-page-img.png";
import styled from "styled-components";
import ContactBanner from "../../../components/ContactBanner";
import SectionTitle from "../../../components/SectionTitle";
import ServicesSectionItem from "../../../components/ServicesSectionItem";
import { MdAccountBalance } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
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

export default function REPRESENTACION_EN_CASO_DE_APELACION() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              REVISIÓN DE <span>SENTENCIAS</span>
            </p>
            <h2 className="about__heading">REPRESENTACIÓN EN APELACIÓN</h2>
            <div className="about__info">
              <PText>
                UNA SENTENCIA CONDENATORIA NO SIEMPRE ES EL FINAL DEL CAMINO. SI
                CONSIDERA QUE EL FALLO HA SIDO INJUSTO O QUE SE HAN COMETIDO
                ERRORES EN LA VALORACIÓN DE LA PRUEBA, TIENE DERECHO A RECURRIR.
                <br /> <br />
                LA APELACIÓN ES UNA FASE TÉCNICA Y CRÍTICA DONDE SE CUESTIONA LA
                DECISIÓN DE LOS JUECES DE PRIMERA INSTANCIA ANTE UN TRIBUNAL
                SUPERIOR. AQUÍ NO SE VUELVE A JUZGAR TODO EL CASO, SINO QUE SE
                ATACAN LOS ERRORES ESPECÍFICOS DE LA SENTENCIA.
                <br /> <br />
                MI TRABAJO CONSISTE EN ANALIZAR MINUCIOSAMENTE LA RESOLUCIÓN
                JUDICIAL, DETECTAR VICIOS DE NULIDAD O ERRORES DE DERECHO Y
                CONSTRUIR UN ARGUMENTO SÓLIDO PARA REVERTIR EL RESULTADO.
                <br /> <br />
                LUCHAMOS PARA QUE SU CASO SEA REVISADO CON LA RIGUROSIDAD QUE
                EXIGE LA LEY.
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
            heading="ESTRATEGIA RECURSIVA"
            subheading="ACCIONES EN SEGUNDA INSTANCIA"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="ANÁLISIS DE LA SENTENCIA"
              desc="ESTUDIO PROFUNDO DEL FALLO PARA IDENTIFICAR ERRORES EN LA APLICACIÓN DE LA LEY O EN LA VALORACIÓN DE LAS PRUEBAS."
            />
            <ServicesSectionItem
              icon={<FaBalanceScaleLeft />}
              title="FUNDAMENTACIÓN TÉCNICA"
              desc="REDACCIÓN DEL RECURSO DE APELACIÓN CON ARGUMENTOS JURÍDICOS SÓLIDOS QUE DEMUESTREN EL AGRAVIO CAUSADO."
            />
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="DEFENSA EN ESTRADOS"
              desc="LITIGACIÓN ORAL ANTE LA CORTE PROVINCIAL PARA PERSUADIR A LOS MAGISTRADOS SOBRE LA NECESIDAD DE CORREGIR LA SENTENCIA."
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
              DERECHO AL <span>DOBLE CONFORME</span>
            </p>
            <h2 className="about__heading">GARANTÍA DE REVISIÓN</h2>
            <p className="about__subheading">
              <span>CORRIGIENDO ERRORES JUDICIALES</span>
            </p>
            <div className="about__info">
              <PText>
                EL DERECHO A RECURRIR EL FALLO ES UNA GARANTÍA FUNDAMENTAL.
                PERMITE QUE UN TRIBUNAL SUPERIOR REVISE SI SE RESPETÓ EL DEBIDO
                PROCESO Y SI LA DECISIÓN FUE CORRECTA. MI OBJETIVO ES ASEGURAR
                QUE NINGUNA ARBITRARIEDAD QUEDE EN FIRME Y QUE SE RESPETE SU
                PRESUNCIÓN DE INOCENCIA HASTA LA ÚLTIMA INSTANCIA.
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
              OBJETIVOS DE LA <span>APELACIÓN</span>
            </p>
            <h2 className="about__heading">BUSCANDO JUSTICIA</h2>
            <p className="about__subheading">
              <span>NULIDAD O REVOCATORIA</span>
            </p>
            <div className="about__info">
              <PText>
                DEPENDIENDO DE LOS ERRORES ENCONTRADOS, BUSCAMOS DIFERENTES
                RESULTADOS: LA NULIDAD DEL JUICIO SI HUBO VICIOS DE
                PROCEDIMIENTO, LA REVOCATORIA DE LA CONDENA PARA LOGRAR SU
                ABSOLUCIÓN, O LA REFORMA DE LA SENTENCIA PARA OBTENER UNA PENA
                MÁS JUSTA Y PROPORCIONAL. CADA ESTRATEGIA SE DISEÑA A MEDIDA DE
                SU CASO.
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
