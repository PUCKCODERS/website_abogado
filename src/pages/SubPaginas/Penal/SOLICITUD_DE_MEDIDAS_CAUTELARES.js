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

export default function SolicitudDeMedidasCautelares() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              DEFENSA DE LA <span>LIBERTAD</span>
            </p>
            <h2 className="about__heading">MEDIDAS CAUTELARES</h2>
            <div className="about__info">
              <PText>
                EN EL PROCESO PENAL, LA LIBERTAD DEBE SER LA REGLA Y LA PRISIÓN
                LA EXCEPCIÓN. SIN EMBARGO, ES COMÚN QUE SE SOLICITE LA PRISIÓN
                PREVENTIVA DE MANERA AUTOMÁTICA.
                <br /> <br />
                MI LABOR ES EVITAR QUE USTED SEA PRIVADO DE SU LIBERTAD MIENTRAS
                SE INVESTIGA O SE JUZGA SU CASO. PARA ELLO, ARGUMENTAMOS
                SÓLIDAMENTE SOBRE LA INEXISTENCIA DE RIESGO DE FUGA O DE
                OBSTACULIZACIÓN A LA JUSTICIA.
                <br /> <br />
                PRESENTAMOS ARRAIGOS Y SOLICITAMOS MEDIDAS ALTERNATIVAS QUE LE
                PERMITAN CONTINUAR CON SU VIDA Y SU DEFENSA DESDE LA LIBERTAD.
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
            heading="ALTERNATIVAS A LA PRISIÓN"
            subheading="OPCIONES PROCESALES"
          />
          <div className="services__allItems">
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="MEDIDAS SUSTITUTIVAS"
              desc="SOLICITUD DE PROHIBICIÓN DE SALIDA DEL PAÍS, PRESENTACIÓN PERIÓDICA O USO DE GRILLETE ELECTRÓNICO EN LUGAR DE LA PRISIÓN."
            />
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="CAUCIÓN O FIANZA"
              desc="GESTIÓN PARA LA FIJACIÓN DE UNA GARANTÍA ECONÓMICA QUE ASEGURE SU COMPARECENCIA AL PROCESO SIN NECESIDAD DE ESTAR DETENIDO."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="REVOCATORIA DE PRISIÓN"
              desc="ACCIÓN LEGAL PARA DEJAR SIN EFECTO LA PRISIÓN PREVENTIVA CUANDO HAN DESAPARECIDO LOS MOTIVOS QUE LA ORIGINARON."
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
              PRINCIPIO DE <span>INOCENCIA</span>
            </p>
            <h2 className="about__heading">EXCEPCIONALIDAD</h2>
            <p className="about__subheading">
              <span>LA REGLA ES LA LIBERTAD</span>
            </p>
            <div className="about__info">
              <PText>
                LA CONSTITUCIÓN Y LOS TRATADOS INTERNACIONALES ESTABLECEN QUE
                NADIE DEBE SER TRATADO COMO CULPABLE ANTES DE UNA SENTENCIA. LA
                PRISIÓN PREVENTIVA NO ES UNA PENA ANTICIPADA. LUCHAMOS PARA QUE
                LOS JUECES APLIQUEN ESTE PRINCIPIO Y NO CEDAN ANTE LA PRESIÓN
                MEDIÁTICA O SOCIAL, GARANTIZANDO QUE LA PRIVACIÓN DE LIBERTAD
                SEA SOLO EL ÚLTIMO RECURSO.
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
              DEMOSTRACIÓN DE <span>ARRAIGOS</span>
            </p>
            <h2 className="about__heading">SEGURIDAD PROCESAL</h2>
            <p className="about__subheading">
              <span>VÍNCULOS SÓLIDOS</span>
            </p>
            <div className="about__info">
              <PText>
                PARA EVITAR LA PRISIÓN, ES FUNDAMENTAL DEMOSTRAR QUE USTED NO
                HUIRÁ. PREPARAMOS UNA CARPETA COMPLETA DE ARRAIGOS: SOCIALES,
                FAMILIARES, LABORALES Y DOMICILIARIOS. PRESENTAMOS CERTIFICADOS,
                TESTIMONIOS Y DOCUMENTACIÓN QUE ACREDITEN SU ESTABILIDAD Y SU
                COMPROMISO DE COMPARECER ANTE LA JUSTICIA CADA VEZ QUE SEA
                REQUERIDO.
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
              ESTRATEGIA <span>DINÁMICA</span>
            </p>
            <h2 className="about__heading">REVISIÓN CONSTANTE</h2>
            <p className="about__subheading">
              <span>ADAPTACIÓN A LAS CIRCUNSTANCIAS</span>
            </p>
            <div className="about__info">
              <PText>
                LAS CIRCUNSTANCIAS DE UN PROCESO CAMBIAN. SI INICIALMENTE SE
                DICTÓ PRISIÓN, NO SIGNIFICA QUE DEBA MANTENERSE INDEFINIDAMENTE.
                MONITOREAMOS CONSTANTEMENTE EL AVANCE DE LA INVESTIGACIÓN PARA
                IDENTIFICAR NUEVOS ELEMENTOS QUE PERMITAN SOLICITAR UNA
                AUDIENCIA DE REVISIÓN O SUSTITUCIÓN DE MEDIDAS, BUSCANDO SIEMPRE
                RECUPERAR SU LIBERTAD LO ANTES POSIBLE.
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
