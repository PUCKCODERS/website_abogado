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

export default function DelitosInternacionales() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              JUSTICIA SIN <span>FRONTERAS</span>
            </p>
            <h2 className="about__heading">DELITOS INTERNACIONALES</h2>
            <div className="about__info">
              <PText>
                LA GLOBALIZACIÓN HA EXPANDIDO EL DERECHO PENAL MÁS ALLÁ DE LAS
                FRONTERAS NACIONALES. ENFRENTAR UN PROCESO QUE INVOLUCRA A
                VARIOS PAÍSES REQUIERE UNA DEFENSA QUE ENTIENDA NO SOLO LAS
                LEYES LOCALES, SINO TAMBIÉN LOS TRATADOS INTERNACIONALES Y LOS
                DERECHOS HUMANOS.
                <br /> <br />
                MI PRÁCTICA SE EXTIENDE A LA DEFENSA EN CASOS DE EXTRADICIÓN,
                NOTIFICACIONES DE INTERPOL Y DELITOS TRANSNACIONALES,
                COORDINANDO ESTRATEGIAS COMPLEJAS PARA PROTEGER SU LIBERTAD DE
                MOVIMIENTO Y SUS DERECHOS FUNDAMENTALES EN CUALQUIER
                JURISDICCIÓN.
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
            heading="ÁREAS DE ACTUACIÓN"
            subheading="COOPERACIÓN INTERNACIONAL"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="EXTRADICIÓN"
              desc="DEFENSA TÉCNICA EN PROCESOS DE EXTRADICIÓN PASIVA Y ACTIVA, VELANDO POR EL CUMPLIMIENTO DE LOS TRATADOS Y GARANTÍAS."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="INTERPOL"
              desc="GESTIÓN PARA EL LEVANTAMIENTO O SUSPENSIÓN DE NOTIFICACIONES ROJAS Y ALERTAS INTERNACIONALES QUE RESTRINJAN SU LIBERTAD."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="CRIMEN TRANSNACIONAL"
              desc="REPRESENTACIÓN EN DELITOS COMO NARCOTRÁFICO O LAVADO DE ACTIVOS CON COMPONENTES INTERNACIONALES."
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
              PROCESOS DE <span>EXTRADICIÓN</span>
            </p>
            <h2 className="about__heading">DEFENSA DE LA SOBERANÍA</h2>
            <p className="about__subheading">
              <span>NO AUTOMATICIDAD</span>
            </p>
            <div className="about__info">
              <PText>
                LA EXTRADICIÓN NO ES UN TRÁMITE AUTOMÁTICO. ANALIZAMOS SI SE
                CUMPLE EL PRINCIPIO DE DOBLE INCRIMINACIÓN, SI EXISTEN MOTIVOS
                POLÍTICOS DETRÁS DE LA SOLICITUD O SI HAY RIESGO DE TORTURA O
                PENA DE MUERTE EN EL PAÍS REQUIRENTE. PELEAMOS PARA QUE LA CORTE
                NACIONAL NIEGUE LA ENTREGA SI SE VULNERAN SUS DERECHOS HUMANOS.
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
              ALERTAS DE <span>INTERPOL</span>
            </p>
            <h2 className="about__heading">NOTIFICACIONES ROJAS</h2>
            <p className="about__subheading">
              <span>CONTROL DE FICHEROS</span>
            </p>
            <div className="about__info">
              <PText>
                UNA NOTIFICACIÓN ROJA PUEDE DETENER SU VIDA EN CUALQUIER
                AEROPUERTO DEL MUNDO. TRABAJAMOS ANTE LA COMISIÓN DE CONTROL DE
                FICHEROS DE INTERPOL (CCF) EN FRANCIA PARA SOLICITAR EL BORRADO
                DE ALERTAS QUE VIOLEN LAS REGLAS DE NEUTRALIDAD DE LA
                ORGANIZACIÓN O QUE SE BASEN EN PROCESOS JUDICIALES VICIADOS.
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
              COORDINACIÓN <span>GLOBAL</span>
            </p>
            <h2 className="about__heading">DEFENSA MULTIJURISDICCIONAL</h2>
            <p className="about__subheading">
              <span>ESTRATEGIA UNIFICADA</span>
            </p>
            <div className="about__info">
              <PText>
                EN CASOS DE CRIMEN ORGANIZADO O DELITOS FINANCIEROS
                TRANSNACIONALES, ES COMÚN TENER PROCESOS ABIERTOS EN VARIOS
                PAÍSES SIMULTÁNEAMENTE. COORDINAMOS CON BUFETES ALIADOS EN EL
                EXTRANJERO PARA ASEGURAR QUE LA ESTRATEGIA DE DEFENSA SEA
                COHERENTE Y QUE LO QUE SE DIGA EN UN PAÍS NO LE PERJUDIQUE EN EL
                OTRO.
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
