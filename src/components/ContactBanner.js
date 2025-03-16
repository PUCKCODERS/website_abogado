import React from "react";
import PText from "./PText"; 
import Button from "./Button"; 
import styled from "styled-components";

const ContactBannerStyles = styled.div`
    padding: 10rem 0;
    .contactBanner__wrapper {
        background-color: var(--deep-dark);
        border-radius: 12px;
        padding: 5rem 0rem;
        text-align: center;
        box-shadow: 17px 11px 23px #000;
    }
    .contactBanner__heading {
        font-size: 4rem;
        margin-bottom: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .contactBanner__heading {
            font-size: 2.8rem;
        }
    }
    
`;

export default function ContactBanner() {
    return (
        <ContactBannerStyles>
            <div className="container">
                <div className="contactBanner__wrapper">
                    <PText>TIENES ALGUNA PREGUNTA</PText>
                    <h3 className="contactBanner__heading">DEJAME AYUDARTE</h3>
                    <Button btnText="CONTACTAME AHORA" btnLink="/contact"/>
                </div>
            </div>
        </ContactBannerStyles>
    )
}