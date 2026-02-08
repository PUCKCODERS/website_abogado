import React from "react";
import styled, { keyframes } from "styled-components";
import { FaLaptop, FaPhoneVolume, FaUserTie } from "react-icons/fa";

// Animación de flotación
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const ConsultationBannerStyles = styled.div`
  padding: 5rem 0;
  background-color: var(--dark-bg);

  .consultation__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .consultation__item {
    background-color: var(--black);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    border: 1px solid var(--gray-2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.05);
      border-color: var(--gray-1);
      background-color: #1e293b;
    }
  }

  .consultation__icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: var(--gray-1);
    display: inline-block;
    /* Aplicamos la animación aquí */
    animation: ${float} 3s ease-in-out infinite;
  }

  .consultation__title {
    font-size: 1.4rem;
    font-family: "Montserrat SemiBold";
    color: var(--gray-1);
    text-transform: uppercase;
    line-height: 1.5;
  }

  /* Responsividad */
  @media only screen and (max-width: 900px) {
    .consultation__wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 600px) {
    .consultation__wrapper {
      grid-template-columns: 1fr;
    }
  }
`;

export default function ConsultationBanner() {
  const items = [
    {
      id: 1,
      icon: <FaLaptop />,
      title: "Consulte su duda legal  en Quito en línea",
    },
    {
      id: 2,
      icon: <FaPhoneVolume />,
      title: "Consulta por TELÉFONO AHORA",
    },
    {
      id: 3,
      icon: <FaUserTie />,
      title: "CONSULTA PRESENCIAL ",
    },
  ];

  return (
    <ConsultationBannerStyles>
      <div className="container">
        <div className="consultation__wrapper">
          {items.map((item) => (
            <div className="consultation__item" key={item.id}>
              <div className="consultation__icon">{item.icon}</div>
              <p className="consultation__title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </ConsultationBannerStyles>
  );
}
