import React from "react";
import HeroImg from "../assets/images/portada1.png";
import PText from "./PText";
import Button from "./Button";
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import styled from "styled-components";

const HeroStyles = styled.div`
    .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    }
    .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
        display: inline-block;
        width: 100%;
    }
    .hero__name {
        font-size: 5.5rem;
        font-family: 'RobotoMono Regular';
        color: var(--white);
    }
}
.hero__img {
    max-width: 900px;
    width: 100%;
    height: 550px;
    margin: 0 auto;
    border: 1px solid var(--gray-1);
}
.hero__info {
    margin-top: -18rem;
}
.hero__social,
.hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
}
.hero__social {
    left: 50px;
}
.hero__scrollDown {
    right: 50px;
}

.hero__social__indicator,
.hero__scrollDown {
    width: 50px;
    p {
        font-size: 1.6rem;
        transform: translateY(-70px) rotate(90deg);
    }
}
`;

export default function HeroSection() {
    return (
        <HeroStyles>
            <div className="hero">
            <div className="container">
                <h1 className="hero__heading">
                    <span>HOLA, ME LLAMO </span>
                    <span className="hero__name">GABRIEL RODRIGUEZ</span>
                </h1>
                <div className="hero__img">
                    <img src={HeroImg} alt=""/>
                </div>
                <div className="hero__info">
                <PText>ESTE ES MY TEXTO</PText>
                <Button btnLink="/projects" btnText="ESPECIALIDADES" />
                </div>
                <div className="hero__social">
                    <div className="hero__social__indicator">
                        <p>SIGUEME</p>
                        <img src={SocialMediaArrow} alt="social media arrow"/>
                    </div>
                    <div className="hero_social_text">
                        <ul>
                            <li>
                                <a 
                                href="http://facebook.com/webcifar"
                                target="_blank"
                                rel="noneferrer noreferrer"
                                >
                                    FB
                                </a>
                            </li>
                            <li>
                                <a 
                                href="http://facebook.com/webcifar"
                                target="_blank"
                                rel="noneferrer noreferrer"
                                >
                                    TW
                                </a>
                            </li>
                            <li>
                                <a 
                                href="http://facebook.com/webcifar"
                                target="_blank"
                                rel="noneferrer noreferrer"
                                >
                                    IN
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hero__scrollDown">
                    <p>SUBTITULO</p>
                    {/*<img src={ScrollDownArrow} alt=""/>*/}
                </div>
            </div>
        </div>
        </HeroStyles>
    );
}