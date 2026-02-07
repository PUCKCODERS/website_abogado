import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaAward,
  FaClipboardCheck,
  FaUserClock,
  FaRocket,
  FaGavel,
  FaChartLine,
  FaHandHoldingUsd,
  FaPercent,
} from "react-icons/fa";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const FeaturesBannerStyles = styled.div`
  padding: 5rem 0;
  background-color: var(--dark-bg);

  .features__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .features__item {
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

  .features__icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: var(--gray-1);
    display: inline-block;
    /* Aplicamos la animación aquí */
    animation: ${float} 3s ease-in-out infinite;
  }

  .features__title {
    font-size: 1.4rem;
    font-family: "Montserrat SemiBold";
    color: var(--gray-1);
    text-transform: uppercase;
    line-height: 1.5;
  }

  /* Responsividad */
  @media only screen and (max-width: 900px) {
    .features__wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 500px) {
    .features__wrapper {
      grid-template-columns: 1fr;
    }
  }
`;

export default function FeaturesBanner() {
  const features = [
    { id: 1, icon: <FaAward />, title: "Alta especialización y experiencia" },
    { id: 2, icon: <FaClipboardCheck />, title: "Comprobamos Viabilidad" },
    { id: 3, icon: <FaUserClock />, title: "Atención personalizada y puntual" },
    { id: 4, icon: <FaRocket />, title: "Agilizamos procesos al máximo" },
    {
      id: 5,
      icon: <FaGavel />,
      title: "Dirigimos con eficiencia muchos casos al año",
    },
    { id: 6, icon: <FaChartLine />, title: "ALTO % ÉXITO" },
    {
      id: 7,
      icon: <FaHandHoldingUsd />,
      title: "Honorarios Económicos Ajustados",
    },
    { id: 8, icon: <FaPercent />, title: "Pagos Fraccionados | 0% Intereses" },
  ];

  return (
    <FeaturesBannerStyles>
      <div className="container">
        <div className="features__wrapper">
          {features.map((item) => (
            <div className="features__item" key={item.id}>
              <div className="features__icon">{item.icon}</div>
              <p className="features__title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </FeaturesBannerStyles>
  );
}
