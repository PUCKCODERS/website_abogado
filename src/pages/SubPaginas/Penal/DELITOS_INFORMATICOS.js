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

export default function DelitosInformaticos() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              DEFENSA EN EL <span>ENTORNO DIGITAL</span>
            </p>
            <h2 className="about__heading">DELITOS INFORMÁTICOS</h2>
            <div className="about__info">
              <PText>
                LA ERA DIGITAL HA TRAÍDO CONSIGO NUEVAS FORMAS DE CRIMINALIDAD.
                LOS DELITOS INFORMÁTICOS REQUIEREN UNA DEFENSA ALTAMENTE
                ESPECIALIZADA QUE ENTIENDA NO SOLO DE LEYES, SINO DE TECNOLOGÍA.
                <br /> <br />
                DESDE EL ACCESO NO AUTORIZADO A SISTEMAS HASTA EL FRAUDE
                ELECTRÓNICO, ESTOS CASOS DEPENDEN CASI EXCLUSIVAMENTE DE LA
                EVIDENCIA DIGITAL.
                <br /> <br />
                MI LABOR ES CUESTIONAR LA VALIDEZ TÉCNICA DE LAS PRUEBAS EN SU
                CONTRA, ASEGURANDO QUE SE HAYA RESPETADO LA CADENA DE CUSTODIA Y
                LOS PROTOCOLOS FORENSES PARA PROTEGER SU LIBERTAD.
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
            heading="CIBERDELITOS COMUNES"
            subheading="ÁREAS DE EXPERTICIA"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="FRAUDE ELECTRÓNICO"
              desc="DEFENSA EN CASOS DE PHISHING, CLONACIÓN DE TARJETAS Y ESTAFAS REALIZADAS A TRAVÉS DE MEDIOS DIGITALES O BANCARIOS."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="ACCESO NO CONSENTIDO"
              desc="REPRESENTACIÓN EN ACUSACIONES DE HACKING, INTERCEPTACIÓN DE DATOS O VULNERACIÓN DE SISTEMAS INFORMÁTICOS PROTEGIDOS."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="DELITOS CONTRA LA INTIMIDAD"
              desc="ASISTENCIA LEGAL EN CASOS DE DIFUSIÓN DE CONTENIDO ÍNTIMO, GROOMING O VIOLACIÓN A LA PRIVACIDAD DE DATOS PERSONALES."
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
              EVIDENCIA <span>DIGITAL</span>
            </p>
            <h2 className="about__heading">CADENA DE CUSTODIA</h2>
            <p className="about__subheading">
              <span>INTEGRIDAD DE LA PRUEBA</span>
            </p>
            <div className="about__info">
              <PText>
                LA PRUEBA DIGITAL ES VOLÁTIL Y FÁCILMENTE MANIPULABLE. UN ERROR
                EN LA RECOLECCIÓN O ANÁLISIS DE UN DISPOSITIVO PUEDE INVALIDAR
                TODA LA ACUSACIÓN. EXAMINAMOS RIGUROSAMENTE SI SE RESPETARON LOS
                CÓDIGOS HASH Y LOS PROCEDIMIENTOS DE EXTRACCIÓN FORENSE PARA
                GARANTIZAR QUE LA EVIDENCIA NO HAYA SIDO ALTERADA.
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
              PERITAJE <span>INFORMÁTICO</span>
            </p>
            <h2 className="about__heading">DEFENSA TÉCNICA</h2>
            <p className="about__subheading">
              <span>CONTRAINTERROGATORIO EXPERTO</span>
            </p>
            <div className="about__info">
              <PText>
                TRABAJAMOS DE LA MANO CON PERITOS INFORMÁTICOS FORENSES PARA
                CONTRADECIR LOS INFORMES DE LA POLICÍA O LA FISCALÍA. TRADUCIMOS
                EL LENGUAJE TÉCNICO AL JURÍDICO PARA QUE LOS JUECES COMPRENDAN
                LAS FALLAS EN LA INVESTIGACIÓN, DEMOSTRANDO QUE UNA DIRECCIÓN IP
                NO SIEMPRE IDENTIFICA AL AUTOR DEL DELITO.
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
              DERECHO A LA <span>PRIVACIDAD</span>
            </p>
            <h2 className="about__heading">SECRETO DE COMUNICACIONES</h2>
            <p className="about__subheading">
              <span>PROTECCIÓN CONSTITUCIONAL</span>
            </p>
            <div className="about__info">
              <PText>
                LA INVESTIGACIÓN DE CIBERDELITOS A MENUDO ROZA LOS LÍMITES DE LA
                PRIVACIDAD. VIGILAMOS QUE CUALQUIER INTERCEPTACIÓN DE
                COMUNICACIONES, ACCESO A CORREOS O REVISIÓN DE CELULARES CUENTE
                CON LA DEBIDA ORDEN JUDICIAL. SI SE VIOLÓ SU INTIMIDAD SIN
                AUTORIZACIÓN, PELEAREMOS PARA QUE ESA PRUEBA SEA EXCLUIDA DEL
                PROCESO.
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
