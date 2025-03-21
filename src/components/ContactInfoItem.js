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
    margin-bottom: 2rem;
    box-shadow: 17px 11px 23px #000;
    .icon {
        color: var(--white);
        background-color: var(--gray-2);
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
    text = 'ESTE ES LA INFORMACION',
}) {
    return (

        <ItemStyles>
            <div className="icon">{icon}</div>
                <div className="info"> 
                    <PText>{text}</PText>
                </div>
        </ItemStyles>
    )
}