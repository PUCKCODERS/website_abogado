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
  padding: 2rem 0;
  background-color: #000;

  .features__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .features__item {
    padding: 2rem;
    border-radius: 12px;
    text-align: left;
    transition: 0.3s ease;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    &:hover {
      transform: scale(1.05);
      border-color: var(--gray-1);
    }
  }

  .features__icon {
    font-size: 3rem;
    width: 8rem;
    height: 8rem;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: var(--gray-2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    margin-right: 1.5rem;
    color: var(--gray-1);
    /* Aplicamos la animación aquí */
    animation: ${float} 3s ease-in-out infinite;
    svg {
      width: 5rem;
      height: 5rem;
    }
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
