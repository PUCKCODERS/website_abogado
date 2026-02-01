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
              HOLA, SOY <span>GABRIEL RODRIGUEZ</span>
            </p>
            <h2 className="about__heading">DOCTOR EN JURISPRUDENCIA</h2>
            <div className="about__info">
              <PText>
                COMO ABOGADO, MI PRINCIPAL COMPROMISO ES DEFENDER LOS DERECHOS
                DE MIS CLIENTES CON INTEGRIDAD Y PROFESIONALISMO. CADA CASO
                REPRESENTA UN RETO ÚNICO QUE REQUIERE UN ANÁLISIS DETALLADO Y
                ESTRATEGIAS PERSONALIZADAS PARA GARANTIZAR LA MEJOR
                REPRESENTACIÓN LEGAL POSIBLE
                <br /> <br />
                CUENTO CON UNA AMPLIA EXPERIENCIA EN DIVERSAS ÁREAS DEL DERECHO,
                INCLUYENDO DERECHO CIVIL, PENAL, LABORAL, MERCANTIL, FAMILIAR Y
                ADMINISTRATIVO. ESTA TRAYECTORIA ME PERMITE ABORDAR CADA CASO
                CON UNA VISIÓN INTEGRAL Y PROPONER SOLUCIONES EFECTIVAS
                ADAPTADAS A LAS NECESIDADES DE MIS CLIENTES
                <br /> <br />
                EL EJERCICIO DEL DERECHO EXIGE NO SOLO CONOCIMIENTO PROFUNDO DE
                LAS NORMATIVAS VIGENTES, SINO TAMBIÉN LA CAPACIDAD DE NEGOCIAR Y
                ARGUMENTAR CON SOLIDEZ. EN CADA SITUACIÓN, BUSCO SOLUCIONES
                EFICIENTES Y FAVORABLES, PRIORIZANDO SIEMPRE LOS INTERESES Y LA
                TRANQUILIDAD DE MIS REPRESENTADOS
                <br /> <br />
                EN UN MUNDO EN CONSTANTE CAMBIO, LA ACTUALIZACIÓN JURÍDICA ES
                FUNDAMENTAL. POR ELLO, ME MANTENGO AL DÍA CON LAS ÚLTIMAS
                REFORMAS LEGALES Y PRECEDENTES JUDICIALES, ASEGURANDO QUE MIS
                CLIENTES RECIBAN ASESORÍA BASADA EN LA LEGISLACIÓN MÁS RECIENTE
                Y EFECTIVA
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
          <SectionTitle heading="SERVICIOS" subheading="LO QUE HARÉ POR TI" />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="ASESORÍA Y CONSULTORÍA LEGAL"
              desc="ORIENTACIÓN PERSONALIZADA PARA QUE LOS CLIENTES COMPRENDAN SUS DERECHOS Y TOMEMOS LAS MEJORES DECISIONES LEGALES."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="REPRESENTACIÓN LEGAL"
              desc="DEFENSA Y ACOMPAÑAMIENTO EN JUICIOS, NEGOCIACIONES Y PROCEDIMIENTOS LEGALES ANTE TRIBUNALES Y EMPRESAS."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="REDACCIÓN Y REVISIÓN DE DOCUMENTOS LEGALES"
              desc="ELABORACIÓN, ANÁLISIS Y VALIDACIÓN DE CONTRATOS, TESTAMENTOS Y DEMANDAS PARA GARANTIZAR SU LEGALIDAD."
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
              REPRESENTACIÓN LEGAL EN PROCESOS PENALES Y ASESORAMIENTO
              ESTRATÉGICO
            </p>
            <h2 className="about__heading">DERECHO PENAL</h2>
            <p className="about__subheading">
              <span>DEFENSA EFECTIVA Y PROTECCIÓN DE SUS DERECHOS</span>
            </p>
            <div className="about__info">
              <PText>
                EN EL ÁMBITO PENAL, CADA SITUACIÓN REQUIERE UNA DEFENSA SÓLIDA Y
                UN ASESORAMIENTO PRECISO. COMO ABOGADO PENALISTA, LE BRINDO
                REPRESENTACIÓN EN DELITOS, INVESTIGACIONES, JUICIOS Y RECURSOS,
                GARANTIZANDO EL RESPETO DE SUS DERECHOS Y UNA DEFENSA EFICAZ. MI
                COMPROMISO ES PROPORCIONARLE LA MEJOR ESTRATEGIA LEGAL PARA
                OBTENER UNA SOLUCIÓN JUSTA Y FAVORABLE
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
              REPRESENTACIÓN LEGAL EN PROCESOS PENALES Y ASESORAMIENTO
              ESTRATÉGICO
            </p>
            <h2 className="about__heading">DERECHO PENAL</h2>
            <p className="about__subheading">
              <span>DEFENSA EFECTIVA Y PROTECCIÓN DE SUS DERECHOS</span>
            </p>
            <div className="about__info">
              <PText>
                EN EL ÁMBITO PENAL, CADA SITUACIÓN REQUIERE UNA DEFENSA SÓLIDA Y
                UN ASESORAMIENTO PRECISO. COMO ABOGADO PENALISTA, LE BRINDO
                REPRESENTACIÓN EN DELITOS, INVESTIGACIONES, JUICIOS Y RECURSOS,
                GARANTIZANDO EL RESPETO DE SUS DERECHOS Y UNA DEFENSA EFICAZ. MI
                COMPROMISO ES PROPORCIONARLE LA MEJOR ESTRATEGIA LEGAL PARA
                OBTENER UNA SOLUCIÓN JUSTA Y FAVORABLE
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
              REPRESENTACIÓN LEGAL EN PROCESOS PENALES Y ASESORAMIENTO
              ESTRATÉGICO
            </p>
            <h2 className="about__heading">DERECHO PENAL</h2>
            <p className="about__subheading">
              <span>DEFENSA EFECTIVA Y PROTECCIÓN DE SUS DERECHOS</span>
            </p>
            <div className="about__info">
              <PText>
                EN EL ÁMBITO PENAL, CADA SITUACIÓN REQUIERE UNA DEFENSA SÓLIDA Y
                UN ASESORAMIENTO PRECISO. COMO ABOGADO PENALISTA, LE BRINDO
                REPRESENTACIÓN EN DELITOS, INVESTIGACIONES, JUICIOS Y RECURSOS,
                GARANTIZANDO EL RESPETO DE SUS DERECHOS Y UNA DEFENSA EFICAZ. MI
                COMPROMISO ES PROPORCIONARLE LA MEJOR ESTRATEGIA LEGAL PARA
                OBTENER UNA SOLUCIÓN JUSTA Y FAVORABLE
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
