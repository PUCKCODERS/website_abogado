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

export default function IndultosYConmutacionesDePenas() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              UNA SEGUNDA <span>OPORTUNIDAD</span>
            </p>
            <h2 className="about__heading">INDULTOS Y CONMUTACIONES</h2>
            <div className="about__info">
              <PText>
                CUANDO LAS VÍAS JUDICIALES ORDINARIAS SE HAN AGOTADO, AÚN
                EXISTEN MECANISMOS EXTRAORDINARIOS DE GRACIA. EL INDULTO Y LA
                CONMUTACIÓN DE PENAS SON HERRAMIENTAS HUMANITARIAS Y LEGALES QUE
                PERMITEN LA EXTINCIÓN O REDUCCIÓN DE LA CONDENA.
                <br /> <br />
                MI LABOR ES GESTIONAR ESTAS SOLICITUDES ANTE LA AUTORIDAD
                COMPETENTE, FUNDAMENTANDO ADECUADAMENTE LAS RAZONES
                HUMANITARIAS, DE SALUD O DE REHABILITACIÓN QUE JUSTIFICAN EL
                PERDÓN DE LA PENA O SU MODIFICACIÓN.
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
            heading="MECANISMOS DE GRACIA"
            subheading="OPCIONES DISPONIBLES"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="INDULTO PRESIDENCIAL"
              desc="SOLICITUD DE PERDÓN DE LA PENA IMPUESTA POR RAZONES HUMANITARIAS O POLÍTICA CRIMINAL, OTORGADO POR EL PRESIDENTE DE LA REPÚBLICA."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="CONMUTACIÓN DE PENA"
              desc="GESTIÓN PARA CAMBIAR UNA PENA MÁS GRAVE POR OTRA MENOS SEVERA, GENERALMENTE BASADA EN EL COMPORTAMIENTO O CIRCUNSTANCIAS SOBREVENIDAS."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="REBAJA DE PENAS"
              desc="TRÁMITES ADMINISTRATIVOS Y JUDICIALES PARA OBTENER REDUCCIONES DE TIEMPO EN PRISIÓN POR MÉRITOS EDUCATIVOS, LABORALES O DE CONDUCTA."
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
              RAZONES <span>HUMANITARIAS</span>
            </p>
            <h2 className="about__heading">SALUD Y VULNERABILIDAD</h2>
            <p className="about__subheading">
              <span>DIGNIDAD HUMANA</span>
            </p>
            <div className="about__info">
              <PText>
                EL SISTEMA PENITENCIARIO NO DEBE SER UNA SENTENCIA DE MUERTE NI
                DE SUFRIMIENTO INHUMANO. SI USTED O SU FAMILIAR PADECE
                ENFERMEDADES CATASTRÓFICAS, TERMINALES O SE ENCUENTRA EN UNA
                SITUACIÓN DE VULNERABILIDAD EXTREMA, PREPARAMOS LA DOCUMENTACIÓN
                MÉDICA Y LEGAL NECESARIA PARA SOLICITAR EL INDULTO, APELANDO AL
                SENTIDO DE HUMANIDAD Y A LOS DERECHOS HUMANOS.
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
              REINSERCIÓN <span>SOCIAL</span>
            </p>
            <h2 className="about__heading">DEMOSTRACIÓN DE CAMBIO</h2>
            <p className="about__subheading">
              <span>MÉRITOS Y CONDUCTA</span>
            </p>
            <div className="about__info">
              <PText>
                PARA ACCEDER A CONMUTACIONES O REBAJAS, ES CRUCIAL DEMOSTRAR QUE
                LA PENA HA CUMPLIDO SU FIN REHABILITADOR. RECOPILAMOS
                CERTIFICADOS DE CONDUCTA, ESTUDIOS, TRABAJO Y EVALUACIONES
                PSICOLÓGICAS QUE ACREDITEN SU PREPARACIÓN PARA REINTEGRARSE A LA
                SOCIEDAD. CONSTRUIMOS UN PERFIL POSITIVO QUE RESPALDE LA
                SOLICITUD DE BENEFICIOS.
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
              GESTIÓN <span>ESTRATÉGICA</span>
            </p>
            <h2 className="about__heading">TRÁMITE EFICAZ</h2>
            <p className="about__subheading">
              <span>SEGUIMIENTO CONSTANTE</span>
            </p>
            <div className="about__info">
              <PText>
                ESTOS PROCESOS SUELEN SER BUROCRÁTICOS Y COMPLEJOS, INVOLUCRANDO
                A DIVERSAS INSTITUCIONES COMO EL SNAI O LA PRESIDENCIA. MI
                EQUIPO SE ENCARGA DE DAR SEGUIMIENTO PORMENORIZADO A CADA ETAPA
                DEL TRÁMITE, EVITANDO DILACIONES INNECESARIAS Y ASEGURANDO QUE
                EL EXPEDIENTE CUMPLA CON TODOS LOS REQUISITOS FORMALES Y DE
                FONDO PARA MAXIMIZAR LAS POSIBILIDADES DE ÉXITO.
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
