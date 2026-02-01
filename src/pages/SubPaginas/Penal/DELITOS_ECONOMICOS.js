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

export default function DelitosEconomicos() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              DEFENSA <span>CORPORATIVA</span>
            </p>
            <h2 className="about__heading">DELITOS ECONÓMICOS</h2>
            <div className="about__info">
              <PText>
                EL DERECHO PENAL ECONÓMICO ABORDA INFRACCIONES COMPLEJAS QUE
                OCURREN EN EL ÁMBITO EMPRESARIAL Y FINANCIERO. ESTOS DELITOS, A
                MENUDO CONOCIDOS COMO DE "CUELLO BLANCO", REQUIEREN UNA DEFENSA
                QUE COMBINE EL CONOCIMIENTO JURÍDICO CON LA COMPRENSIÓN DE
                DINÁMICAS CONTABLES Y FINANCIERAS.
                <br /> <br />
                MI PRÁCTICA SE ENFOCA EN PROTEGER EL PATRIMONIO Y LA REPUTACIÓN
                DE EMPRESAS Y EJECUTIVOS FRENTE A INVESTIGACIONES POR LAVADO DE
                ACTIVOS, DEFRAUDACIÓN TRIBUTARIA O PÁNICO ECONÓMICO.
                <br /> <br />
                ANALIZAMOS CADA TRANSACCIÓN Y REGISTRO PARA DEMOSTRAR LA LICITUD
                DE LAS OPERACIONES Y LA AUSENCIA DE DOLO EN LA GESTIÓN
                EMPRESARIAL.
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
            heading="ÁREAS DE PRÁCTICA"
            subheading="DEFENSA EN DELITOS FINANCIEROS"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="LAVADO DE ACTIVOS"
              desc="DEFENSA EN INVESTIGACIONES SOBRE EL ORIGEN DE FONDOS, JUSTIFICANDO LA TRAZABILIDAD Y LEGALIDAD DEL PATRIMONIO."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="DEFRAUDACIÓN TRIBUTARIA"
              desc="REPRESENTACIÓN EN CASOS DE EVASIÓN FISCAL, DIFERENCIANDO ENTRE EL ERROR CONTABLE Y LA INTENCIÓN DE ENGAÑAR AL FISCO."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="DELITOS SOCIETARIOS"
              desc="ASISTENCIA LEGAL EN CONFLICTOS ENTRE SOCIOS, ADMINISTRACIÓN FRAUDULENTA O FALSEDAD EN BALANCES Y ESTADOS FINANCIEROS."
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
              COMPLIANCE <span>PENAL</span>
            </p>
            <h2 className="about__heading">PREVENCIÓN DE RIESGOS</h2>
            <p className="about__subheading">
              <span>CULTURA DE CUMPLIMIENTO</span>
            </p>
            <div className="about__info">
              <PText>
                LA MEJOR DEFENSA ES LA PREVENCIÓN. ASESORAMOS EN LA
                IMPLEMENTACIÓN DE PROGRAMAS DE CUMPLIMIENTO NORMATIVO
                (COMPLIANCE) PARA DETECTAR Y MITIGAR RIESGOS PENALES DENTRO DE
                LA EMPRESA. SI YA EXISTE UNA INVESTIGACIÓN, EL HABER CONTADO CON
                ESTOS PROTOCOLOS PUEDE SER UN EXIMENTE O ATENUANTE DE
                RESPONSABILIDAD PARA LA PERSONA JURÍDICA Y SUS DIRECTIVOS.
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
              PERITAJE <span>FINANCIERO</span>
            </p>
            <h2 className="about__heading">AUDITORÍA FORENSE</h2>
            <p className="about__subheading">
              <span>LA PRUEBA EN LOS NÚMEROS</span>
            </p>
            <div className="about__info">
              <PText>
                EN LOS DELITOS ECONÓMICOS, LA BATALLA SE LIBRA EN LOS INFORMES
                PERICIALES. CONTAMOS CON UN EQUIPO DE AUDITORES FORENSES QUE
                ANALIZAN LA CONTABILIDAD PARA REFUTAR LAS CONCLUSIONES DE LA
                UAFE O DEL SRI. TRADUCIMOS LOS DATOS FINANCIEROS EN ARGUMENTOS
                LEGALES SÓLIDOS PARA DEMOSTRAR QUE NO HUBO PERJUICIO NI ILICITUD
                EN LAS OPERACIONES.
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
              RESPONSABILIDAD <span>PENAL</span>
            </p>
            <h2 className="about__heading">PERSONA JURÍDICA</h2>
            <p className="about__subheading">
              <span>DEFENSA DE LA EMPRESA</span>
            </p>
            <div className="about__info">
              <PText>
                HOY EN DÍA, LAS EMPRESAS TAMBIÉN PUEDEN SER PROCESADAS
                PENALMENTE, LO QUE PONE EN RIESGO SU EXISTENCIA, SUS ACTIVOS Y
                SU CAPACIDAD PARA CONTRATAR. NUESTRA ESTRATEGIA BUSCA
                DESVINCULAR A LA COMPAÑÍA DE LOS ACTOS INDIVIDUALES DE SUS
                EMPLEADOS O DIRECTIVOS, PROTEGIENDO LA CONTINUIDAD DEL NEGOCIO Y
                EVITANDO SANCIONES COMO LA DISOLUCIÓN O MULTAS EXORBITANTES.
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
