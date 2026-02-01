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

export default function RecursosPenales() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              AGOTAR TODAS LAS <span>INSTANCIAS</span>
            </p>
            <h2 className="about__heading">RECURSOS PENALES</h2>
            <div className="about__info">
              <PText>
                UNA SENTENCIA CONDENATORIA NO SIEMPRE ES LA ÚLTIMA PALABRA. EL
                SISTEMA JUDICIAL ES FALIBLE Y LOS JUECES PUEDEN COMETER ERRORES.
                LOS RECURSOS PENALES SON LAS HERRAMIENTAS LEGALES DISEÑADAS PARA
                CORREGIR FALLOS INJUSTOS O ILEGALES.
                <br /> <br />
                MI LABOR ES ANALIZAR MINUCIOSAMENTE SU CASO PARA IDENTIFICAR
                VICIOS DE NULIDAD, ERRORES EN LA APLICACIÓN DE LA LEY O
                VALORACIONES PROBATORIAS INCORRECTAS, Y LLEVAR SU CAUSA ANTE
                TRIBUNALES SUPERIORES PARA BUSCAR LA REVOCATORIA O MODIFICACIÓN
                DE LA SENTENCIA.
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
            heading="TIPOS DE RECURSOS"
            subheading="ESTRATEGIAS DE IMPUGNACIÓN"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="APELACIÓN"
              desc="REVISIÓN INTEGRAL DEL FALLO POR UN TRIBUNAL SUPERIOR PARA CORREGIR ERRORES DE HECHO O DE DERECHO COMETIDOS EN PRIMERA INSTANCIA."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="CASACIÓN"
              desc="RECURSO EXTRAORDINARIO Y TÉCNICO ANTE LA CORTE NACIONAL POR VIOLACIONES A LA LEY EN LA SENTENCIA, SIN DISCUTIR LOS HECHOS."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="REVISIÓN"
              desc="ACCIÓN PARA ANULAR SENTENCIAS FIRMES CUANDO APARECEN PRUEBAS NUEVAS QUE DEMUESTRAN LA INOCENCIA DEL CONDENADO."
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
              RIGOR <span>TÉCNICO</span>
            </p>
            <h2 className="about__heading">RECURSO DE CASACIÓN</h2>
            <p className="about__subheading">
              <span>DEFENSA DE LA LEY</span>
            </p>
            <div className="about__info">
              <PText>
                LA CASACIÓN NO ES UNA TERCERA INSTANCIA PARA VOLVER A DISCUTIR
                LOS HECHOS. ES UN RECURSO ALTAMENTE TÉCNICO QUE BUSCA CORREGIR
                ERRORES DE DERECHO EN LA SENTENCIA. REQUIERE UNA FUNDAMENTACIÓN
                JURÍDICA PRECISA PARA DEMOSTRAR QUE LOS JUECES INFERIORES
                VIOLARON LA LEY O LA INTERPRETARON ERRÓNEAMENTE. MI EXPERIENCIA
                PERMITE FORMULAR ESTOS RECURSOS CON LA SOLVENCIA NECESARIA.
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
              CORRIGIENDO <span>INJUSTICIAS</span>
            </p>
            <h2 className="about__heading">ACCIÓN DE REVISIÓN</h2>
            <p className="about__subheading">
              <span>LA VERDAD PREVALECE</span>
            </p>
            <div className="about__info">
              <PText>
                A VECES, LA VERDAD SALE A LA LUZ DESPUÉS DE UNA CONDENA. EL
                RECURSO DE REVISIÓN ES LA VÍA PARA REPARAR ERRORES JUDICIALES
                GRAVES CUANDO APARECEN NUEVAS PRUEBAS, SE DEMUESTRA LA FALSEDAD
                DE TESTIMONIOS O DOCUMENTOS, O SE ESTABLECE QUE EL DELITO NO
                EXISTIÓ. ES EL MECANISMO SUPREMO PARA RESTABLECER LA INOCENCIA
                DE QUIEN HA SIDO INJUSTAMENTE CONDENADO.
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
              PROTECCIÓN <span>CONSTITUCIONAL</span>
            </p>
            <h2 className="about__heading">GARANTÍAS JURISDICCIONALES</h2>
            <p className="about__subheading">
              <span>DERECHOS FUNDAMENTALES</span>
            </p>
            <div className="about__info">
              <PText>
                ADEMÁS DE LOS RECURSOS ORDINARIOS, EXISTEN ACCIONES
                CONSTITUCIONALES COMO LA ACCIÓN EXTRAORDINARIA DE PROTECCIÓN,
                APLICABLE CUANDO SE HAN VULNERADO DERECHOS CONSTITUCIONALES O EL
                DEBIDO PROCESO EN LA SENTENCIA DEFINITIVA. ANALIZO SI SU CASO
                CUMPLE CON LOS REQUISITOS PARA ACUDIR A LA CORTE CONSTITUCIONAL,
                AGOTANDO ASÍ TODAS LAS VÍAS POSIBLES PARA DEFENDER SU LIBERTAD.
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
