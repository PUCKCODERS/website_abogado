import React from "react";
import PText from "./PText"; 
import Button from "./Button"; 
import styled from "styled-components";
import { FaBalanceScale } from "react-icons/fa";
import ContactInfoItem from "./ContactInfoItem";


const ContactBannerStyles = styled.div`
    padding: 10rem 0;
    .contactBanner__wrapper {
        background-color: var(--deep-dark);
        border-radius: 12px;
        padding: 5rem 0rem;
        text-align: center;
        box-shadow: 17px 11px 23px #000;
    }
    .right,
    .right__right,
    .left__left {
        flex: 2;
        .para {
            font-size: 1.3rem;
        }
        
        
    }
        .about__subheading__up {
        margin-top: 3rem;
        margin-bottom: 3rem;
        font-size: 2.5rem;
         text-align: center;
        
       
    }
    
    

    

    @media only screen and (max-width: 1170px) {
        
        .top-section {
            gap: 1rem;
        }
        
        .left__left {
            padding: 2rem 0;
            flex: 3;
            .para {
            font-size: 1rem;
        }
        }
    }
    @media only screen and (max-width: 1030px) {
        padding: 10rem 0;
        .top-section {
            gap: 1rem;
        }
        
        .aboutSection__left {
            flex: 4;
        }
        .left__left {
        padding: 2rem 0;
            flex: 3;
        }
        .left__left,
        .right__right {
            max-width: 100%;
            width: 100%;
            
            .para {
                font-size: 1rem;
           }
            
        }
        .text {
        font-weight: 1rem;
        }
        .icon {
        color: var(--white);
        background-color: var(--gray-2);
        padding: 1.3rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
     svg {
         width: 3rem;
        }
            
    }
    
    @media only screen and (max-width: 931px) {
        padding: 10rem 0;
        .top-section {
            flex-direction: column;
            gap: 0rem;
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
            display: none
        }
        
        .left__left,
        .right__right {
            max-width: 100%;
            padding: 4rem 2rem 2rem 2rem;
           .para {
                font-size: 2rem;
           }
            
        }
            
        .about__subheading__up {
            text-align: center;
        }

        .icon {
        color: var(--white);
        background-color: var(--gray-2);
        padding: 1.3rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        }
        svg {
        width: 4rem;
        }
}
    
`;

export default function ContactBanner() {
    return (
        <ContactBannerStyles>
            <div className="contactBanner__wrapper">
            <div className="container">
                
                    <p className="about__subheading__up">
                                         <span>EXPERTO PENALISTA EN CASOS DE</span>
                                    </p>
                                    <div className="top-section">
                                        
                                        <div className="left__left">
                                            
                                                <ContactInfoItem icon={<FaBalanceScale />} text="ASESORAMIENTO LEGAL EN CASO DE INVESTIGACIÓN PENAL" />
                                                
                                                
                                                
                                        </div>
                                        <div className="left__left">
                                            
                                                <ContactInfoItem icon={<FaBalanceScale />} text="ASESORAMIENTO LEGAL EN CASO DE INVESTIGACIÓN PENAL"/>
                                                
                                                
                                        </div>
                                        <div className="left__left">
                                            
                                                <ContactInfoItem icon={<FaBalanceScale />} text="ASESORAMIENTO LEGAL EN CASO DE INVESTIGACIÓN PENAL"/>
                                                
                                                
                                        </div>
                                        <div className="left__left">
                                            
                                                <ContactInfoItem icon={<FaBalanceScale />} text="ASESORAMIENTO LEGAL EN CASO DE INVESTIGACIÓN PENAL"/>
                                                
                                                
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="top-section">
                                        
                                        <div className="left__left">
                                            
                                                <ContactInfoItem icon={<FaBalanceScale />} text="ASESORAMIENTO LEGAL EN CASO DE INVESTIGACIÓN PENAL"/>
                                                
                                                
                                        </div>
                                        <div className="left__left">
                                            
                                                <ContactInfoItem icon={<FaBalanceScale />} text="ASESORAMIENTO LEGAL EN CASO DE INVESTIGACIÓN PENAL"/>
                                                
                                                
                                        </div>
                                        <div className="left__left">
                                            
                                                <ContactInfoItem icon={<FaBalanceScale />} text="ASESORAMIENTO LEGAL EN CASO DE INVESTIGACIÓN PENAL"/>
                                                
                                                
                                        </div>
                                        <div className="left__left">
                                            
                                                <ContactInfoItem icon={<FaBalanceScale />} text="ASESORAMIENTO LEGAL EN CASO DE INVESTIGACIÓN PENAL"/>
                                                
                                                
                                        </div>
                                        
                                        
                                    </div>
                                    
                </div>
            </div>
        </ContactBannerStyles>
    )
}