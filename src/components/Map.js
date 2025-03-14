import React from "react";
import PText from "./PText";
import styled from "styled-components";
import MapImg from '../assets/images/map.png'; // Adjust the path as necessary

const MapStyles = styled.div`
    background: url(${MapImg}) no-repeat center / cover;
    min-height: 400px;
    .container {
        position: relative;
        min-height: 400px;
    }
    .map__card {
        position: absolute;
        right: 10%;
        bottom: 10%;
        padding: 2rem;
        background: var(--deep-dark);
        width: 100%;
        max-width: 300px;
        border-radius: 12px;
    }
    .map__card__heading {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .map__card__link {
        display: inline-block;
        font-size: 1.6rem;
        margin-top: 3rem;
        text-decoration: underline;
    }
    @media only screen and (max-width: 768px) {
        background-position: 80% center;
    }
    @media only screen and (max-width: 400px) {
        .map__card {
            max-width: none;
            right: auto;
        }
    }
`;

export default function Map() {
    return (
        <MapStyles>
            <div className="container">
                <div className="map__card">
                    <h3 className="map__card__heading">MI UBICACION</h3>
                    <PText>TURUBAMBA ALTO, QUITO, ECUADOR</PText>
                    <a href="https://maps.app.goo.gl/XR43erw1ehYxL2SN8"
                    target="_black"
                    rel="noreferrer"
                    className="map__card__link"
                    >
                    ABRIR EN GOOGLE</a>
                </div>
            </div>
        </MapStyles>
    )
}