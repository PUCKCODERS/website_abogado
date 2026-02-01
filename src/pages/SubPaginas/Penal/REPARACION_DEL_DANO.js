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

export default function ReparacionDelDano() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              JUSTICIA <span>RESTAURATIVA</span>
            </p>
            <h2 className="about__heading">REPARACIÓN DEL DAÑO</h2>
            <div className="about__info">
              <PText>
                LA JUSTICIA NO ESTÁ COMPLETA SI NO SE REPARA EL DAÑO CAUSADO. EN
                EL PROCESO PENAL, NO SOLO BUSCAMOS LA SANCIÓN DEL RESPONSABLE,
                SINO TAMBIÉN GARANTIZAR QUE LA VÍCTIMA RECIBA UNA COMPENSACIÓN
                JUSTA POR LOS PERJUICIOS SUFRIDOS.
                <br /> <br />
                MI LABOR SE ENFOCA EN CUANTIFICAR ADECUADAMENTE EL DAÑO
                MATERIAL, MORAL Y PSICOLÓGICO, Y EN EJERCER LAS ACCIONES LEGALES
                NECESARIAS PARA QUE EL RESPONSABLE CUMPLA CON SU OBLIGACIÓN DE
                INDEMNIZAR Y RESTITUIR LOS DERECHOS VULNERADOS.
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
            heading="ALCANCE DE LA REPARACIÓN"
            subheading="COMPONENTES DE LA INDEMNIZACIÓN"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="INDEMNIZACIÓN ECONÓMICA"
              desc="CÁLCULO Y RECLAMO DE PERJUICIOS MATERIALES, LUCRO CESANTE Y DAÑO EMERGENTE DERIVADOS DIRECTAMENTE DEL DELITO."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="DAÑO MORAL"
              desc="VALORACIÓN Y EXIGENCIA DE COMPENSACIÓN POR EL SUFRIMIENTO PSICOLÓGICO, EL DOLOR Y LA AFECTACIÓN AL PROYECTO DE VIDA DE LA VÍCTIMA."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="MEDIDAS DE NO REPETICIÓN"
              desc="SOLICITUD DE GARANTÍAS, DISCULPAS PÚBLICAS Y ACCIONES ESPECÍFICAS PARA ASEGURAR QUE LOS HECHOS NO VUELVAN A OCURRIR."
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
              MÁS ALLÁ DEL <span>DINERO</span>
            </p>
            <h2 className="about__heading">REPARACIÓN INTEGRAL</h2>
            <p className="about__subheading">
              <span>RESTITUCIÓN DE DERECHOS</span>
            </p>
            <div className="about__info">
              <PText>
                LA REPARACIÓN INTEGRAL BUSCA RESTABLECER, EN LA MEDIDA DE LO
                POSIBLE, LA SITUACIÓN ANTERIOR AL DELITO. ESTO NO SOLO IMPLICA
                DINERO, SINO TAMBIÉN EL ACCESO A REHABILITACIÓN FÍSICA Y
                PSICOLÓGICA, LA RECUPERACIÓN DE BIENES SUSTRAÍDOS Y EL
                RECONOCIMIENTO PÚBLICO DE LA VERDAD Y LA DIGNIDAD DE LA VÍCTIMA.
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
              EJECUCIÓN DE LA <span>SENTENCIA</span>
            </p>
            <h2 className="about__heading">COBRO EFECTIVO</h2>
            <p className="about__subheading">
              <span>INVESTIGACIÓN DE BIENES</span>
            </p>
            <div className="about__info">
              <PText>
                UNA SENTENCIA QUE ORDENA EL PAGO NO SIRVE SI NO SE EJECUTA.
                REALIZAMOS UNA INVESTIGACIÓN EXHAUSTIVA DE LOS BIENES Y ACTIVOS
                DEL CONDENADO PARA ASEGURAR EL COBRO EFECTIVO DE LA
                INDEMNIZACIÓN. UTILIZAMOS MECANISMOS DE COACCIÓN LEGAL PARA
                EVITAR QUE EL RESPONSABLE EVADA SU OBLIGACIÓN DE REPARAR EL
                DAÑO.
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
              DERECHOS DE LA <span>VÍCTIMA</span>
            </p>
            <h2 className="about__heading">ROL ACTIVO</h2>
            <p className="about__subheading">
              <span>VOZ Y VOTO</span>
            </p>
            <div className="about__info">
              <PText>
                LA VÍCTIMA ES PARTE FUNDAMENTAL DEL PROCESO PENAL. NOS
                ASEGURAMOS DE QUE SU VOZ SEA ESCUCHADA EN TODAS LAS ETAPAS Y QUE
                SUS INTERESES ECONÓMICOS Y MORALES SEAN PRIORITARIOS EN
                CUALQUIER NEGOCIACIÓN, ACUERDO O SENTENCIA. NO PERMITIMOS QUE EL
                PROCESO SE CENTRE ÚNICAMENTE EN EL ACUSADO, OLVIDANDO A QUIEN
                SUFRIÓ EL DAÑO.
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
