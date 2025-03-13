import React from "react";
import PText from "./PText";
import styled from "styled-components";

const AboutItemStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-star;
    margin-top: 3rem;
    .title {
        font-size: 2.4rem;
    }
    .items {
        display: flex;
        gap: 1.5rem;
        position: absolute;
        left: 30rem;
    }
    .item {
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 8px;
    }
    
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-star;
        gap: 1rem;
        .items {
        position: initial;
            gap: 1rem;
        }
        .title {
            font-size: 2rem;
        }
    }
    
`;

export default function AboutInfoItem({
    title = 'Este es titulo',
    items = ['Html','CSS','JS'],
}) {
    return(
        <AboutItemStyles>
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        <PText>{item}</PText>
                    </div>
                ))}
            </div>
        </AboutItemStyles>
    )
}