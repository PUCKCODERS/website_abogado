import React from "react";
import PText from "./PText";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  border: 2px solid var(--gray-2);
  margin-bottom: 2rem;
  box-shadow: 6px 6px 6px #000;
  .icon {
    color: var(--white);
    background-color: #000;
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "ESTE ES LA INFORMACION",
  className,
}) {
  return (
    <ItemStyles className={className}>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
