import React from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "./ContactForm";

const ContactSectionStyle = styled.div`
    padding: 10rem 0;
    .contactSection__wrapper {
        display: flex;
        gap: 5rem;
        margin-top: 7rem;
        justify-content: space-between;
        position: relative;
    }
    .contactSection__wrapper::after {
        position: absolute;
        content: '';
        width: 2px;
        height: 50%;
        background-color: var(--gray-1);
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);
    }
    .left {
        width: 100%;
        max-width: 500px;
    }
    .right {
        max-width: 500px;
        width: 100%;
    }
    @media only screen and (max-width: 768px) {
        .contactSection__wrapper {
            flex-direction: column;
        }
        .contactSection__wrapper::after {
            display: none
        }
        .left,
        .right {
            max-width: 100%;
        }
        .right {
            padding: 4rem 2rem 2rem 2rem;
        }
    }
`;

export default function ContactSection(){
    return (
        <ContactSectionStyle>
            <div className="container">
                <SectionTitle heading="Contacto"
                subheading="NO DUDES EN CONTACTARNOS"/>
                <div className="contactSection__wrapper">
                    <div className="left">
                        <ContactInfoItem icon={<MdLocalPhone />} text="0968873896"/>
                        <ContactInfoItem icon={<MdEmail />} text="jlc.rodriguez316@gmail.com"/>
                        <ContactInfoItem text="QUITO, ECUADOR"/>
                    </div>
                    <div className="right">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </ContactSectionStyle>
    )
}