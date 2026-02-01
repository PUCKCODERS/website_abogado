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

export default function DelitosContraElPatrimonio() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              PROTECCIÓN DE <span>BIENES</span>
            </p>
            <h2 className="about__heading">DELITOS PATRIMONIALES</h2>
            <div className="about__info">
              <PText>
                LOS DELITOS CONTRA EL PATRIMONIO ABARCAN UNA AMPLIA GAMA DE
                CONDUCTAS QUE AFECTAN LOS BIENES Y DERECHOS ECONÓMICOS DE LAS
                PERSONAS. DESDE EL HURTO HASTA FRAUDES COMPLEJOS, ESTAS
                ACUSACIONES PUEDEN TENER CONSECUENCIAS DEVASTADORAS TANTO EN LO
                PENAL COMO EN LO ECONÓMICO.
                <br /> <br />
                MI OBJETIVO ES BRINDARLE UNA DEFENSA TÉCNICA QUE DESMONTE LA
                ACUSACIÓN, YA SEA CUESTIONANDO LA EXISTENCIA DEL DELITO, LA
                VALORACIÓN DE LOS BIENES O SU PARTICIPACIÓN EN LOS HECHOS.
                <br /> <br />
                EN MUCHOS CASOS, LO QUE PARECE UN DELITO ES EN REALIDAD UN
                INCUMPLIMIENTO CIVIL. MI LABOR ES TRAZAR ESA LÍNEA CLARAMENTE
                PARA EVITAR UNA CONDENA INJUSTA.
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
            heading="TIPOS DE DELITOS"
            subheading="DEFENSA ESPECIALIZADA"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="ROBO Y HURTO"
              desc="DEFENSA EN CASOS DE SUSTRACCIÓN DE BIENES, DIFERENCIANDO ENTRE EL USO DE FUERZA/VIOLENCIA Y EL APODERAMIENTO SIMPLE."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="ESTAFA Y ABUSO DE CONFIANZA"
              desc="REPRESENTACIÓN EN DELITOS DE ENGAÑO ECONÓMICO, ANALIZANDO DOCUMENTACIÓN FINANCIERA Y CONTRACTUAL PARA DESVIRTUAR EL DOLO."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="DAÑOS Y APROPIACIÓN"
              desc="ASISTENCIA LEGAL EN CASOS DE DESTRUCCIÓN DE PROPIEDAD O RETENCIÓN INDEBIDA DE BIENES AJENOS."
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
              CIVIL VS <span>PENAL</span>
            </p>
            <h2 className="about__heading">NATURALEZA DEL CONFLICTO</h2>
            <p className="about__subheading">
              <span>¿DELITO O DEUDA?</span>
            </p>
            <div className="about__info">
              <PText>
                ES COMÚN QUE SE UTILICE EL DERECHO PENAL PARA COBRAR DEUDAS. SIN
                EMBARGO, NO TODO INCUMPLIMIENTO DE PAGO ES UNA ESTAFA. MI
                ESTRATEGIA SE CENTRA EN DEMOSTRAR QUE EL CONFLICTO ES DE
                NATURALEZA CIVIL O MERCANTIL, Y QUE NO EXISTIÓ LA INTENCIÓN DE
                DELINQUIR (DOLO) DESDE EL INICIO, LOGRANDO ASÍ QUE EL CASO SE
                DESESTIME EN LA VÍA PENAL.
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
              VALORACIÓN DE LA <span>PRUEBA</span>
            </p>
            <h2 className="about__heading">CUANTÍA Y PERITAJES</h2>
            <p className="about__subheading">
              <span>DETERMINACIÓN DEL DAÑO</span>
            </p>
            <div className="about__info">
              <PText>
                EN LOS DELITOS PATRIMONIALES, EL VALOR DE LO SUPUESTAMENTE
                SUSTRAÍDO O DEFRAUDADO ES CRUCIAL, PUES DETERMINA LA PENA.
                IMPUGNAMOS LOS AVALÚOS EXAGERADOS DE LA FISCALÍA Y PRESENTAMOS
                PERITAJES CONTABLES O COMERCIALES PROPIOS PARA ESTABLECER EL
                VALOR REAL, LO CUAL PUEDE REDUCIR SIGNIFICATIVAMENTE LA SANCIÓN
                O INCLUSO CAMBIAR EL TIPO PENAL.
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
              SOLUCIONES <span>PRÁCTICAS</span>
            </p>
            <h2 className="about__heading">ACUERDOS REPARATORIOS</h2>
            <p className="about__subheading">
              <span>FIN DEL PROCESO</span>
            </p>
            <div className="about__info">
              <PText>
                LA LEY PERMITE EN MUCHOS DELITOS PATRIMONIALES LLEGAR A ACUERDOS
                CON LA VÍCTIMA PARA REPARAR EL DAÑO Y EXTINGUIR LA ACCIÓN PENAL.
                SI LA EVIDENCIA ES CONTUNDENTE, GESTIONO NEGOCIACIONES EFICACES
                QUE LE PERMITAN RESOLVER EL PROBLEMA MEDIANTE UNA COMPENSACIÓN
                ECONÓMICA, EVITANDO LA CÁRCEL Y LOS ANTECEDENTES PENALES.
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
