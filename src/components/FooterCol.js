import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ColStyles = styled.div`
    .heading {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    li {
        margin-bottom: 1rem;
    }
    a {
        font-size: 1.8rem;
    }
`;

export default function FooterCol({
    heading = 'col heading',
    links = [
        {
            type:'links',
            title: 'Home',
            path: '/home',
        },
        {
            type:'links',
            title: 'About',
            path: '/about',
        },
    ],
 }) {
    
    return (
        <ColStyles>
            <h1 className="heading">{heading}</h1>
            <ul>
                {
                    links.map((item,index) => (
                        <li key={index}>
                            {item.type === 'Link' ? (
                                <Link to={item.path}>{item.title}</Link>
                            ): (
                                <a href={item.path} target="_black"
                                rel="noreferrer">
                                    {item.title}
                                </a>
                            )}
                        </li>
                    ))
                }
            </ul>
        </ColStyles>
    )
}