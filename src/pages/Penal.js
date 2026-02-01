import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PText from "../components/PText";
import PenalImg from "../assets/images/penal.png";
import ContactInfoItem from "../components/ContactInfoItem";
import { FaBalanceScale } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { FaBalanceScaleRight } from "react-icons/fa";
import ContactBanner from "../components/ContactBanner";

const PenalPageStyles = styled.div`
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
  .right,
  .right__right,
  .left__left {
    flex: 2;
  }

  .about__subheading {
    font-size: 2rem;
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
      box-shadow: 17px 11px 23px #000;
    }
  }
  .about__subheading__up {
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    text-align: center;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 1rem;
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
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }

    .left__left,
    .right__right {
      max-width: 100%;
      width: 100%;
      max-width: 500px;
    }
    .about__subheading__up {
      text-align: center;
    }
  }
`;

export default function Penal() {
  return (
    <PenalPageStyles>
      <div className="container">
        <div className="top-section">
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
          <div className="right">
            <img src={PenalImg} alt="penal" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="about__subheading__up">
          <span>
            CONOCIMIENTO PROFUNDO EN LAS DIFERENTES SITUACIONES DEL DERECHO
            PENAL
          </span>
        </p>
        <div className="top-section">
          <div className="left__left">
            <Link
              to="/asesoramiento-legal-investigacion-penal"
              style={{ textDecoration: "none" }}
            >
              <ContactInfoItem
                icon={<FaBalanceScale />}
                text="ASESORAMIENTO LEGAL EN CASO DE INVESTIGACIÓN PENAL"
              />
            </Link>
            <Link
              to="/defensa-en-caso-de-juicio-penal"
              style={{ textDecoration: "none" }}
            >
              <ContactInfoItem
                icon={<MdAccountBalance />}
                text="DEFENSA EN CASO DE JUICIO PENAL"
              />
            </Link>
            <Link
              to="/representacion-en-caso-de-apelacion"
              style={{ textDecoration: "none" }}
            >
              <ContactInfoItem
                icon={<FaBalanceScaleLeft />}
                text="REPRESENTACIÓN EN CASO DE APELACIÓN"
              />
            </Link>
            <Link
              to="/negociacion-de-acuerdos-con-la-fiscalia"
              style={{ textDecoration: "none" }}
            >
              <ContactInfoItem
                icon={<CgFileDocument />}
                text="NEGOCIACIÓN DE ACUERDOS CON LA FISCALÍA"
              />
            </Link>
            <Link
              to="/solicitud-de-medidas-cautelares"
              style={{ textDecoration: "none" }}
            >
              <ContactInfoItem
                icon={<FaBalanceScaleRight />}
                text="SOLICITUD DE MEDIDAS CAUTELARES"
              />
            </Link>
            <Link to="/recursos-penales" style={{ textDecoration: "none" }}>
              <ContactInfoItem
                icon={<FaBalanceScale />}
                text="RECURSOS PENALES"
              />
            </Link>
            <Link
              to="/indultos-y-conmutaciones-de-penas"
              style={{ textDecoration: "none" }}
            >
              <ContactInfoItem
                icon={<MdAccountBalance />}
                text="INDULTOS Y CONMUTACIONES DE PENAS"
              />
            </Link>
          </div>
          <div className="right__right">
            <Link to="/reparacion-del-dano" style={{ textDecoration: "none" }}>
              <ContactInfoItem
                icon={<FaBalanceScale />}
                text="REPARACIÓN DEL DAÑO"
              />
            </Link>
            <Link
              to="/delitos-contra-las-personas-y-la-vida"
              style={{ textDecoration: "none" }}
            >
              <ContactInfoItem
                icon={<MdAccountBalance />}
                text="DELITOS CONTRA LAS PERSONAS Y LA VIDA"
              />
            </Link>
            <Link
              to="/delitos-contra-el-patrimonio"
              style={{ textDecoration: "none" }}
            >
              <ContactInfoItem
                icon={<FaBalanceScaleLeft />}
                text="DELITOS CONTRA EL PATRIMONIO"
              />
            </Link>
            <Link
              to="/delitos-contra-la-administracion-publica"
              style={{ textDecoration: "none" }}
            >
              <ContactInfoItem
                icon={<CgFileDocument />}
                text="DELITOS CONTRA LA ADMINISTRACIÓN PÚBLICA"
              />
            </Link>
            <Link to="/delitos-informaticos" style={{ textDecoration: "none" }}>
              <ContactInfoItem
                icon={<FaBalanceScaleRight />}
                text="DELITOS INFORMÁTICOS"
              />
            </Link>
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="DELITOS ECONÓMICOS"
            />
            <ContactInfoItem
              icon={<MdAccountBalance />}
              text="DELITOS INTERNACIONALES"
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </PenalPageStyles>
  );
}
