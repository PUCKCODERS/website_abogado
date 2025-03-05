import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: var(--deep-dark);
    ul {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    li{
    display: inline-block;
    border-radius: 8px;
    transition: 0.3s ease background-color;
    &:hover {
      background-color: var(--deep-dark);}}
    a {
    display: inline-block;
    font-family: 'RobotoMono Regular';
    padding: 1rem 2rem;
    font-size: 2rem;
    color: var(--gray-1);
    outline: none;
    }
    .active {
    color: var(--white);
    }
}
    .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    }
    .closeNavIcon {
    display: none;
    }
    @media only screen and (max-width: 768px) {
     .mobile-menu-icon {
        display: block;
        }
     .navItems {
        transition: 0.3s ease transform;
        background-color: var(--deep-dark);
    }
     .closeNavIcon {
        display: block;
        }
    }
`;

export default function NavMenu() {
    return (
        <NavMenuStyles>
            <div className="mobile-menu-icon">
                <MdMenu />
            </div>
            <ul>
                <div className="closeNavIcon">
                    <MdClose />
                </div>
                <li>
                <NavLink to="/" exact>INICIO</NavLink>
                </li>
                <li>
                <NavLink to="/about">SOBRE MI</NavLink>
                </li>
                <li>
                <NavLink to="/projects">ESPECIALIDADES</NavLink>
                </li>
                <li>
                <NavLink to="/contact">CONTACTO</NavLink>
                </li>
                
            </ul>
        </NavMenuStyles>

    );
}

