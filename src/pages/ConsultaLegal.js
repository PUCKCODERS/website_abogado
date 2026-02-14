import React, { useState } from "react";
import styled from "styled-components";

import ContactBanner from "../components/ContactBanner";
import {
  MdPhone,
  MdChat,
  MdManageSearch,
  MdCheckCircle,
  MdOutlineFactCheck,
  MdVerifiedUser,
  MdGavel,
  MdPhoneInTalk,
  MdSend,
  MdWorkspacePremium,
  MdAccessTime,
  MdLocationOn,
  MdFlashOn,
  MdPerson,
  MdStar,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";

const ConsultaLegalStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .consulta__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .consulta__heading {
    font-size: 3.6rem;
    margin-bottom: 2rem;
    color: var(--white);
    text-transform: uppercase;
  }
  .consulta__subheading {
    font-size: 2.2rem;
    margin-bottom: 3rem;
    color: var(--gray-1);
    max-width: 800px;
    font-style: italic;
  }
  .consulta__price {
    font-size: 2.5rem;
    font-weight: bold;
    background-color: var(--deep-dark);
    padding: 2rem 4rem;
    border-radius: 8px;
    border: 2px solid var(--gray-1);
    margin-bottom: 4rem;
    color: var(--white);
  }
  .consulta__info {
    margin-top: 6rem;
    max-width: 100%;
  }
  .consulta__info-heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    color: var(--white);
    text-transform: uppercase;
  }
  .consulta__info-text {
    font-size: 1.8rem;
    color: var(--gray-1);
    line-height: 1.5;
  }
  .consulta__methods-heading {
    font-size: 2.2rem;
    color: var(--white);
    margin-top: 6rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
    max-width: 100%;
  }
  .consulta__methods-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: 100%;
    margin-bottom: 4rem;
  }
  .consulta__method-item {
    background-color: var(--dark-bg);
    padding: 2rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    transition: 0.3s ease all;
    cursor: default;
    &:hover {
      border-color: var(--gray-1);
      transform: translateY(-5px);
    }
  }
  .consulta__method-icon {
    font-size: 2rem;
    width: 6em;
    color: var(--gray-1);
  }
  .consulta__method-text {
    font-size: 1.6rem;
    color: var(--white);
    font-weight: 500;
  }
  .consulta__process {
    margin-top: 8rem;
    width: 100%;
  }
  .consulta__process-heading {
    font-size: 2.6rem;
    color: var(--white);
    margin-bottom: 4rem;
    text-transform: uppercase;
  }
  .consulta__process-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
  .consulta__process-item {
    background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
    padding: 3rem 2rem;
    border-radius: 12px;
    text-align: center;
    border: 1px solid #334155;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s ease all;
    &:hover {
      border-color: var(--gray-1);
      transform: translateY(-5px);
    }
  }
  .consulta__process-icon {
    font-size: 4rem;
    width: 4rem;
    height: 4rem;
    color: var(--gray-1);
    margin-bottom: 2rem;
  }
  .consulta__process-title {
    font-size: 2rem;
    color: var(--white);
    margin-bottom: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  .consulta__process-desc {
    font-size: 1.6rem;
    color: var(--gray-1);
    line-height: 1.5;
  }
  .consulta__phone {
    margin-top: 8rem;
    width: 100%;
  }
  .consulta__phone-heading {
    font-size: 2.6rem;
    color: var(--white);
    margin-bottom: 4rem;
    text-transform: uppercase;
  }
  .consulta__phone-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
    align-items: stretch;
    .consulta__phone-item,
    .consulta__phone-right {
      background: linear-gradient(145deg, #1e293b, #0f172a);
      border: 1px solid #334155;
      &:hover {
        border-color: #60a5fa;
        transform: translateY(-5px);
      }
    }
  }
  .consulta__phone-left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .consulta__phone-right {
    background-color: var(--deep-dark);
    border: 1px solid var(--gray-2);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    transition: 0.3s ease all;
    cursor: pointer;
    &:hover {
      border-color: var(--gray-1);
      background-color: var(--black);
    }
  }
  .consulta__phone-item {
    background-color: var(--deep-dark);
    padding: 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    border: 1px solid var(--gray-2);
    transition: 0.3s ease all;
    gap: 2rem;
    &:hover {
      border-color: var(--gray-1);
      transform: translateX(5px);
    }
  }
  .consulta__phone-icon {
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
    color: var(--gray-1);
    flex-shrink: 0;
  }
  .consulta__phone-text {
    font-size: 1.6rem;
    color: var(--gray-1);
    line-height: 1.5;
  }
  .consulta__phone-big-icon {
    font-size: 10rem;
    width: 10rem;
    height: 10rem;
    color: var(--gray-1);
    margin-bottom: 2rem;
  }
  .consulta__phone-cta {
    font-size: 3rem;
    font-weight: bold;
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
  }
  .consulta__whatsapp {
    margin-top: 8rem;
    width: 100%;
  }
  .consulta__whatsapp-heading {
    font-size: 2.6rem;
    color: var(--white);
    margin-bottom: 4rem;
    text-transform: uppercase;
  }
  .consulta__whatsapp-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 2rem;
    align-items: stretch;
    .consulta__phone-item,
    .consulta__phone-right {
      background: linear-gradient(145deg, #242424, #121212);
      border: 1px solid #333;
      &:hover {
        border-color: #25d366;
        transform: translateY(-5px);
      }
    }
  }
  .consulta__form {
    margin-top: 8rem;
    width: 100%;
    background: linear-gradient(145deg, #1c1c1c, #252525);
    padding: 5rem;
    border-radius: 12px;
    border: 1px solid #333;
    border-top: 4px solid #d4af37;
    text-align: left;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
  .consulta__form-heading {
    font-size: 2.6rem;
    color: var(--white);
    margin-bottom: 4rem;
    text-transform: uppercase;
    text-align: center;
  }
  .form__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .form__group {
    margin-bottom: 2rem;
    width: 100%;
  }
  .form__group.full-width {
    grid-column: 1 / -1;
  }
  .form__label {
    font-size: 1.6rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
    display: block;
    font-weight: 500;
  }
  .form__input,
  .form__textarea {
    width: 100%;
    padding: 1.5rem 2rem;
    background-color: var(--dark-bg);
    border: 1px solid var(--gray-2);
    border-radius: 8px;
    color: var(--white);
    font-size: 1.6rem;
    outline: none;
    transition: 0.3s ease all;
    font-family: "Roboto Mono";
    &:focus {
      border-color: var(--gray-1);
      background-color: #000;
    }
  }
  .form__textarea {
    resize: vertical;
    min-height: 180px;
  }
  .form__submit-container {
    text-align: center;
    margin-top: 2rem;
  }
  .form__submit-btn {
    background-color: var(--gray-1);
    color: var(--deep-dark);
    font-size: 2rem;
    font-weight: bold;
    padding: 1.5rem 6rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease all;
    text-transform: uppercase;
    &:hover {
      background-color: var(--white);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }
  .form__error {
    color: #ff6b6b;
    font-size: 1.6rem;
    margin-bottom: 2rem;
    text-align: center;
    background: rgba(255, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #ff6b6b;
    font-weight: bold;
  }
  .form__success {
    color: #4bb543;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-align: center;
    background: rgba(75, 181, 67, 0.1);
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #4bb543;
    font-weight: bold;
  }
  .appointment__section {
    margin-top: 8rem;
    width: 100%;
  }
  .appointment__heading {
    font-size: 2.6rem;
    color: var(--white);
    margin-bottom: 4rem;
    text-transform: uppercase;
    text-align: center;
  }
  .appointment__grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 3rem;
    align-items: start;
    .consulta__form {
      margin-top: 0;
    }
  }
  .appointment__info {
    background: linear-gradient(145deg, #1c1c1c, #252525);
    border: 1px solid #333;
    border-top: 4px solid #d4af37;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    padding: 2rem;
    border-radius: 12px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .appointment__info-title {
    font-size: 2.4rem;
    color: var(--white);
    margin-bottom: 2rem;
    text-transform: uppercase;
    border-bottom: 1px solid var(--gray-2);
    padding-bottom: 1rem;
    text-align: center;
    letter-spacing: 2px;
  }
  .appointment__info-item {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    align-items: flex-start;
    padding: 1rem;
    border-radius: 8px;
    transition: 0.3s ease all;
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
      transform: translateX(10px);
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .appointment__icon {
    font-size: 3rem;
    width: 5rem;
    height: 5rem;
    color: var(--gray-1);
    flex-shrink: 0;
    margin-top: 0.5rem;
  }
  .appointment__text {
    font-size: 1.6rem;
    color: var(--gray-1);
    line-height: 1.5;
    strong {
      display: block;
      color: var(--white);
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .consulta__heading {
      font-size: 2.8rem;
    }
    .consulta__subheading {
      font-size: 1.8rem;
    }
    .consulta__price {
      font-size: 2rem;
      padding: 1.5rem 3rem;
    }
    .consulta__info-heading {
      font-size: 2rem;
    }
    .consulta__info-text {
      font-size: 1.6rem;
    }
    .consulta__methods-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .consulta__methods-heading {
      font-size: 1.8rem;
    }
    .consulta__process-grid {
      grid-template-columns: 1fr;
    }
    .consulta__phone-grid {
      grid-template-columns: 1fr;
    }
    .consulta__phone-item {
      flex-direction: column;
      text-align: center;
    }
    .consulta__phone-icon {
      margin-bottom: 1rem;
    }
    .consulta__whatsapp-grid {
      grid-template-columns: 1fr;
    }
    .consulta__form {
      padding: 2rem;
    }
    .form__grid {
      grid-template-columns: 1fr;
    }
    .appointment__grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default function ConsultaLegal() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    area: "",
    subject: "",
    message: "",
  });
  const [appointmentError, setAppointmentError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [appointmentSuccess, setAppointmentSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccessMessage("");
  };

  const handleAppointmentChange = (e) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
    setAppointmentError("");
    setAppointmentSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name)
      return setError("Por favor, llene el campo: Nombres Completos");
    if (!formData.phone)
      return setError("Por favor, llene el campo: Teléfono de Contacto");
    if (!formData.email)
      return setError("Por favor, llene el campo: Correo Electrónico");
    if (!formData.city)
      return setError("Por favor, llene el campo: Ciudad de Residencia");
    if (!formData.subject)
      return setError("Por favor, llene el campo: Asunto Legal");
    if (!formData.message)
      return setError("Por favor, llene el campo: Detalle de la Consulta");

    // Número de WhatsApp del abogado (incluir código de país sin el '+')
    const lawyerPhoneNumber = "593968873896";

    const message = `
*Nueva Consulta Legal (Formulario Web)*

*Nombres:* ${formData.name}
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}
*Ciudad:* ${formData.city}
*Asunto:* ${formData.subject}

*Mensaje:*
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${lawyerPhoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      subject: "",
      message: "",
    });
    setSuccessMessage(
      "¡Su formulario ha sido enviado correctamente! En breve atenderé su solicitud.",
    );
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    if (!appointmentData.name)
      return setAppointmentError("Por favor, ingrese sus Nombres Completos");
    if (!appointmentData.phone)
      return setAppointmentError("Por favor, ingrese su Teléfono");
    if (!appointmentData.date)
      return setAppointmentError("Por favor, seleccione una Fecha");
    if (!appointmentData.time)
      return setAppointmentError("Por favor, seleccione una Hora");
    if (!appointmentData.area)
      return setAppointmentError("Por favor, seleccione un Área Legal");
    if (!appointmentData.subject)
      return setAppointmentError("Por favor, ingrese el Asunto");
    if (!appointmentData.message)
      return setAppointmentError("Por favor, detalle su consulta");

    const lawyerPhoneNumber = "593968873896";

    const message = `
*Solicitud de Cita Presencial*

*Cliente:* ${appointmentData.name}
*Teléfono:* ${appointmentData.phone}
*Fecha:* ${appointmentData.date}
*Hora:* ${appointmentData.time}
*Área Legal:* ${appointmentData.area}
*Asunto:* ${appointmentData.subject}

*Mensaje:*
${appointmentData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${lawyerPhoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    setAppointmentData({
      name: "",
      phone: "",
      date: "",
      time: "",
      area: "",
      subject: "",
      message: "",
    });
    setAppointmentSuccess("La solicitud de su cita ha sido enviada.");
  };

  const timeOptions = [];
  for (let i = 8; i <= 18; i++) {
    const hour = i < 10 ? `0${i}:00` : `${i}:00`;
    timeOptions.push(hour);
  }

  return (
    <ConsultaLegalStyles>
      <div className="container">
        <div className="consulta__wrapper">
          <h1 className="consulta__heading">
            CONSULTORÍA JURÍDICA PROFESIONAL
          </h1>
          <p className="consulta__subheading">
            «ABOGADO ESPECIALISTA EN LA ABSOLUCIÓN DE CONSULTAS Y DEFENSA
            TÉCNICA DE PERSONAS NATURALES Y JURÍDICAS»
          </p>
          <div className="consulta__price">
            ASESORÍA JURÍDICA INTEGRAL: HONORARIOS PREFERENCIALES
          </div>
          <div className="consulta__info">
            <h2 className="consulta__info-heading">
              PROCEDIMIENTO PARA REALIZAR SU CONSULTA JURÍDICA
            </h2>
            <p className="consulta__info-text">
              Si usted enfrenta una situación legal compleja y requiere
              asistencia profesional, estoy presto a brindarle el soporte
              necesario. Absolveré sus inquietudes con prontitud a través de mis
              canales de comunicación habilitados. Pongo a su disposición una
              Asesoría Jurídica Integral. Cabe destacar que, si me confía el
              patrocinio de su causa, el valor de la consulta será abonado a los
              honorarios totales del proceso. Asegure sus derechos con la mejor
              defensa técnica.
            </p>
            <h3 className="consulta__methods-heading">
              Deje su caso en manos de expertos y consulte en el menor tiempo
              posible.
            </h3>
          </div>
          <div className="consulta__methods-grid">
            <div className="consulta__method-item">
              <MdPhone className="consulta__method-icon" />
              <span className="consulta__method-text">LLAMADAS</span>
            </div>
            <div className="consulta__method-item">
              <FaWhatsapp className="consulta__method-icon" />
              <span className="consulta__method-text">WHATSAPP</span>
            </div>
            <div className="consulta__method-item">
              <FaWpforms className="consulta__method-icon" />
              <span className="consulta__method-text">FORMULARIO ONLINE</span>
            </div>
            <div className="consulta__method-item">
              <FaHandshake className="consulta__method-icon" />
              <span className="consulta__method-text">CITAS PRESENCIALES</span>
            </div>
          </div>
          <div className="consulta__process">
            <h2 className="consulta__process-heading">
              SOLUCIÓN PROFESIONAL A SU SITUACIÓN LEGAL
            </h2>
            <div className="consulta__process-grid">
              <div className="consulta__process-item">
                <MdChat className="consulta__process-icon" />
                <h3 className="consulta__process-title">EXPOSICIÓN DEL CASO</h3>
                <p className="consulta__process-desc">
                  Exponga los antecedentes de su controversia. Recomiendo la vía
                  telefónica por su celeridad; alternativamente, puede agendar
                  una cita en mi Despacho Jurídico o utilizar mis canales
                  digitales.
                </p>
              </div>
              <div className="consulta__process-item">
                <MdManageSearch className="consulta__process-icon" />
                <h3 className="consulta__process-title">ANÁLISIS JURÍDICO</h3>
                <p className="consulta__process-desc">
                  Examinaré la normativa y jurisprudencia aplicable. Realizaré
                  un diagnóstico legal preciso para determinar la viabilidad y
                  estrategia de su defensa.
                </p>
              </div>
              <div className="consulta__process-item">
                <MdCheckCircle className="consulta__process-icon" />
                <h3 className="consulta__process-title">RESOLUCIÓN EFECTIVA</h3>
                <p className="consulta__process-desc">
                  Proveeré la solución jurídica idónea. Absolveré sus consultas
                  y trazaré la hoja de ruta procesal necesaria para la tutela
                  efectiva de sus derechos.
                </p>
              </div>
            </div>
          </div>
          <div className="consulta__phone">
            <h2 className="consulta__phone-heading">
              CONSULTA LEGAL TELEFÓNICA
            </h2>
            <div className="consulta__phone-grid">
              <div className="consulta__phone-left">
                <div className="consulta__phone-item">
                  <MdOutlineFactCheck className="consulta__phone-icon" />
                  <p className="consulta__phone-text">
                    <strong>ORIENTACIÓN ESTRATÉGICA:</strong> Le indicaré la
                    hoja de ruta procesal más adecuada para la defensa de sus
                    intereses.
                  </p>
                </div>
                <div className="consulta__phone-item">
                  <MdVerifiedUser className="consulta__phone-icon" />
                  <p className="consulta__phone-text">
                    <strong>ATENCIÓN PERSONALIZADA:</strong> La excelencia y el
                    trato directo son los pilares de mi servicio legal.
                  </p>
                </div>
                <div className="consulta__phone-item">
                  <MdGavel className="consulta__phone-icon" />
                  <p className="consulta__phone-text">
                    <strong>ESPECIALIZACIÓN JURÍDICA:</strong> Analizaré su caso
                    personalmente, aplicando mi experiencia en la materia
                    consultada.
                  </p>
                </div>
                <div className="consulta__phone-item">
                  <MdPhoneInTalk className="consulta__phone-icon" />
                  <p className="consulta__phone-text">
                    <strong>CELERIDAD Y EFICACIA:</strong> Mediante la consulta
                    telefónica, obtendrá una respuesta ágil y oportuna a sus
                    inquietudes.
                  </p>
                </div>
              </div>
              <div
                className="consulta__phone-right"
                onClick={() => (window.location.href = "tel:0968873896")}
              >
                <MdPhoneInTalk className="consulta__phone-big-icon" />
                <p className="consulta__phone-cta">LLAMA AHORA</p>
              </div>
            </div>
          </div>
          <div className="consulta__whatsapp">
            <h2 className="consulta__whatsapp-heading">
              CONSULTA VÍA MENSAJERÍA DE WHATSAPP
            </h2>
            <div className="consulta__whatsapp-grid">
              <div
                className="consulta__phone-right"
                onClick={() =>
                  window.open("https://wa.me/593968873896", "_blank")
                }
              >
                <FaWhatsapp className="consulta__phone-big-icon" />
                <p className="consulta__phone-cta">ASESORIA INMEDIATA</p>
              </div>
              <div className="consulta__phone-left">
                <div className="consulta__phone-item">
                  <MdSend className="consulta__phone-icon" />
                  <p className="consulta__phone-text">
                    <strong>COMUNICACIÓN INMEDIATA:</strong> Establezca contacto
                    directo conmigo para una atención oportuna.
                  </p>
                </div>
                <div className="consulta__phone-item">
                  <MdWorkspacePremium className="consulta__phone-icon" />
                  <p className="consulta__phone-text">
                    <strong>ASESORAMIENTO DE VALOR:</strong> Reciba orientación
                    jurídica precisa y fundamentada para su caso.
                  </p>
                </div>
                <div className="consulta__phone-item">
                  <MdAccessTime className="consulta__phone-icon" />
                  <p className="consulta__phone-text">
                    <strong>HORARIOS DE ATENCIÓN:</strong> Atenderé sus mensajes
                    y consultas dentro del horario profesional establecido.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="consulta__form">
            <h2 className="consulta__form-heading">FORMULARIO ONLINE</h2>
            <form className="form__wrapper" onSubmit={handleSubmit}>
              {error && <div className="form__error">{error}</div>}
              {successMessage && (
                <div className="form__success">{successMessage}</div>
              )}
              <div className="form__grid">
                <div className="form__group">
                  <label htmlFor="name" className="form__label">
                    Nombres Completos
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form__input"
                    placeholder="Su nombre aquí"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="phone" className="form__label">
                    Teléfono de Contacto
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form__input"
                    placeholder="099..."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="email" className="form__label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form__input"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="city" className="form__label">
                    Ciudad de Residencia
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form__input"
                    placeholder="Quito, Guayaquil..."
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group full-width">
                  <label htmlFor="subject" className="form__label">
                    Asunto Legal
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form__input"
                    placeholder="Divorcio, Herencia, Penal..."
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group full-width">
                  <label htmlFor="message" className="form__label">
                    Detalle de la Consulta
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form__textarea"
                    placeholder="Describa brevemente su situación legal para poder asistirle mejor..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="form__submit-container">
                <button type="submit" className="form__submit-btn">
                  ENVIAR FORMULARIO
                </button>
              </div>
            </form>
          </div>

          <div className="appointment__section">
            <h2 className="appointment__heading">
              Para consultas – citas presenciales es indispensable concertar
              cita previa
            </h2>
            <div className="appointment__grid">
              <div className="consulta__form">
                <form
                  className="form__wrapper"
                  onSubmit={handleAppointmentSubmit}
                >
                  {appointmentError && (
                    <div className="form__error">{appointmentError}</div>
                  )}
                  {appointmentSuccess && (
                    <div className="form__success">{appointmentSuccess}</div>
                  )}
                  <div className="form__grid">
                    <div className="form__group">
                      <label htmlFor="apptName" className="form__label">
                        Nombres Completos
                      </label>
                      <input
                        type="text"
                        id="apptName"
                        name="name"
                        className="form__input"
                        placeholder="Su nombre aquí"
                        value={appointmentData.name}
                        onChange={handleAppointmentChange}
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="apptPhone" className="form__label">
                        Teléfono
                      </label>
                      <input
                        type="text"
                        id="apptPhone"
                        name="phone"
                        className="form__input"
                        placeholder="099..."
                        value={appointmentData.phone}
                        onChange={handleAppointmentChange}
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="apptDate" className="form__label">
                        Fecha de Cita
                      </label>
                      <input
                        type="date"
                        id="apptDate"
                        name="date"
                        className="form__input"
                        value={appointmentData.date}
                        onChange={handleAppointmentChange}
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="apptTime" className="form__label">
                        Hora (08:00 - 18:00)
                      </label>
                      <select
                        id="apptTime"
                        name="time"
                        className="form__input"
                        value={appointmentData.time}
                        onChange={handleAppointmentChange}
                      >
                        <option value="">Seleccione hora</option>
                        {timeOptions.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form__group full-width">
                      <label htmlFor="apptArea" className="form__label">
                        Área Legal de Interés
                      </label>
                      <select
                        id="apptArea"
                        name="area"
                        className="form__input"
                        value={appointmentData.area}
                        onChange={handleAppointmentChange}
                      >
                        <option value="">Seleccione un área</option>
                        <option value="Penal">Derecho Penal</option>
                        <option value="Familia">Derecho de Familia</option>
                        <option value="Divorcio">Divorcios</option>
                        <option value="Laboral">Derecho Laboral</option>
                        <option value="Civil">Derecho Civil</option>
                        <option value="Mercantil">Derecho Mercantil</option>
                        <option value="Tributario">Derecho Tributario</option>
                        <option value="Ambiental">Derecho Ambiental</option>
                        <option value="Herencias">Herencias</option>
                        <option value="Inmobiliario">
                          Derecho Inmobiliario
                        </option>
                      </select>
                    </div>
                    <div className="form__group full-width">
                      <label htmlFor="apptSubject" className="form__label">
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="apptSubject"
                        name="subject"
                        className="form__input"
                        placeholder="Breve motivo de la cita"
                        value={appointmentData.subject}
                        onChange={handleAppointmentChange}
                      />
                    </div>
                    <div className="form__group full-width">
                      <label htmlFor="apptMessage" className="form__label">
                        Mensaje Adicional
                      </label>
                      <textarea
                        id="apptMessage"
                        name="message"
                        className="form__textarea"
                        placeholder="Detalles adicionales..."
                        value={appointmentData.message}
                        onChange={handleAppointmentChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="form__submit-container">
                    <button type="submit" className="form__submit-btn">
                      SOLICITAR CITA
                    </button>
                  </div>
                </form>
              </div>
              <div className="appointment__info">
                <h3 className="appointment__info-title">Cita Presencial</h3>
                <div className="appointment__info-item">
                  <MdLocationOn className="appointment__icon" />
                  <p className="appointment__text">
                    <strong>CONSULTA PRESENCIAL:</strong> Consulta presencial en
                    mi Despacho Jurídico.
                  </p>
                </div>
                <div className="appointment__info-item">
                  <MdFlashOn className="appointment__icon" />
                  <p className="appointment__text">
                    <strong>EFICACIA Y RAPIDEZ:</strong> Es la vía más eficaz y
                    rápida para valorar y realizar el estudio preliminar de su
                    caso.
                  </p>
                </div>
                <div className="appointment__info-item">
                  <MdPerson className="appointment__icon" />
                  <p className="appointment__text">
                    <strong>ATENCIÓN PERSONALIZADA:</strong> Le atenderé
                    personalmente en mi oficina situada en el centro de Quito.
                  </p>
                </div>
                <div className="appointment__info-item">
                  <MdStar className="appointment__icon" />
                  <p className="appointment__text">
                    <strong>ATENCIÓN AL CLIENTE:</strong> Me esfuerzo en dar la
                    mejor atención a mis clientes. Es mi compromiso profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactBanner />
    </ConsultaLegalStyles>
  );
}
