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

export default function DelitosContraLaAdministracionPublica() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              DEFENSA EN DELITOS DE <span>CORRUPCIÓN</span>
            </p>
            <h2 className="about__heading">ADMINISTRACIÓN PÚBLICA</h2>
            <div className="about__info">
              <PText>
                LOS DELITOS CONTRA LA ADMINISTRACIÓN PÚBLICA SON DE LOS MÁS
                COMPLEJOS Y MEDIÁTICOS, PUES INVOLUCRAN EL MANEJO DE RECURSOS
                DEL ESTADO Y LA CONDUCTA DE FUNCIONARIOS PÚBLICOS O
                CONTRATISTAS.
                <br /> <br />
                ENFRENTAR ESTOS PROCESOS REQUIERE NO SOLO CONOCIMIENTO PENAL,
                SINO UN DOMINIO PROFUNDO DEL DERECHO ADMINISTRATIVO Y DE LA LEY
                DE CONTRATACIÓN PÚBLICA.
                <br /> <br />
                MI OBJETIVO ES DESVIRTUAR LA TESIS DE PERJUICIO AL ESTADO,
                DEMOSTRANDO LA LEGALIDAD DE LOS ACTOS ADMINISTRATIVOS Y
                PROTEGIENDO SU REPUTACIÓN Y SU LIBERTAD.
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
            heading="TIPOS PENALES"
            subheading="DEFENSA ESPECIALIZADA"
          />

          <div className="services__allItems">
            <ServicesSectionItem
              icon={<MdAccountBalance />}
              title="PECULADO"
              desc="DEFENSA EN ACUSACIONES DE MALVERSACIÓN O DISPOSICIÓN ARBITRARIA DE FONDOS PÚBLICOS, ANALIZANDO EL DESTINO REAL DE LOS RECURSOS."
            />
            <ServicesSectionItem
              icon={<FaBalanceScale />}
              title="COHECHO Y CONCUSIÓN"
              desc="REPRESENTACIÓN EN CASOS DE SUPUESTOS SOBORNOS O EXIGENCIAS INDEBIDAS, CUESTIONANDO LA VALIDEZ DE LAS PRUEBAS DE CARGO."
            />
            <ServicesSectionItem
              icon={<CgFileDocument />}
              title="TRÁFICO DE INFLUENCIAS"
              desc="ASISTENCIA LEGAL PARA DESVIRTUAR EL USO INDEBIDO DEL CARGO PARA OBTENER BENEFICIOS EN PROCESOS PÚBLICOS."
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
              RESPONSABILIDAD DE <span>FUNCIONARIOS</span>
            </p>
            <h2 className="about__heading">DEFENSA TÉCNICA</h2>
            <p className="about__subheading">
              <span>SERVIDOR PÚBLICO</span>
            </p>
            <div className="about__info">
              <PText>
                DEFENDER A UN SERVIDOR PÚBLICO IMPLICA ENTENDER LA NORMATIVA
                ADMINISTRATIVA QUE RIGE SUS ACTOS. MUCHAS VECES, ERRORES
                ADMINISTRATIVOS SE CRIMINALIZAN INJUSTAMENTE. TRABAJAMOS PARA
                DIFERENCIAR CLARAMENTE ENTRE UNA INFRACCIÓN ADMINISTRATIVA Y UN
                DELITO, EVITANDO QUE SE SANCIONE PENALMENTE LO QUE CORRESPONDE A
                OTRA ESFERA.
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
              PROCESOS DE <span>CONTRATACIÓN</span>
            </p>
            <h2 className="about__heading">COMPRAS PÚBLICAS</h2>
            <p className="about__subheading">
              <span>LEGALIDAD Y TRANSPARENCIA</span>
            </p>
            <div className="about__info">
              <PText>
                GRAN PARTE DE ESTOS DELITOS SURGEN DE PROCESOS DE CONTRATACIÓN.
                REALIZAMOS UN ANÁLISIS EXHAUSTIVO DE PLIEGOS, CONTRATOS Y ETAPAS
                PRECONTRACTUALES PARA DEMOSTRAR QUE NO HUBO SOBREPRECIOS,
                DIRECCIONAMIENTOS NI VIOLACIONES A LOS PRINCIPIOS DE
                TRANSPARENCIA, DESMONTANDO ASÍ LOS INDICIOS DE RESPONSABILIDAD
                PENAL.
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
              INFORMES DE <span>CONTRALORÍA</span>
            </p>
            <h2 className="about__heading">INDICIOS DE RESPONSABILIDAD</h2>
            <p className="about__subheading">
              <span>DEFENSA PREVIA</span>
            </p>
            <div className="about__info">
              <PText>
                LA RELACIÓN ENTRE EL EXAMEN ESPECIAL DE CONTRALORÍA Y EL PROCESO
                PENAL ES DIRECTA. IMPUGNAR LOS INFORMES DE RESPONSABILIDAD PENAL
                (IRP) ES CLAVE PARA LA DEFENSA. CUESTIONAMOS TÉCNICAMENTE LAS
                CONCLUSIONES DE LOS AUDITORES, APORTANDO PRUEBAS QUE JUSTIFIQUEN
                EL USO DE LOS RECURSOS Y LA TOMA DE DECISIONES.
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
