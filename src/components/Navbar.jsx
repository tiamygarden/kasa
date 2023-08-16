import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

function Navbar() {
    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? "underline" : "none",
        };
    };

    return (
        <header className="header">
            <section className="container">
                <HeaderStyle>
                    <NavLink style={navLinkStyles} to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <NavStyle>
                        <NavLink style={navLinkStyles} to="/">
                            Accueil
                        </NavLink>
                        <NavLink style={navLinkStyles} to="/about">
                            A Propos
                        </NavLink>
                    </NavStyle>
                </HeaderStyle>
            </section>
        </header>
    );
}

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    max-width: 1440px;
    width: 100%;
    margin-top: 10px;

    img {
        width: 200px;
    }
    
    @media (max-width: 800px) {
    img {
      width: 200px;
    }
    @media (max-width: 500px) {
      padding: 10px 0;
      img {
        width: 100px;
      }
    }
`;

const NavStyle = styled.nav`
    display: flex;
    justify-content: space-between;

    a {
        margin-left: 40px;
        text-decoration: none;
        color: #ff6060;
        font-weight: 500;
        font-size: 1.3rem;
    }
    @media (max-width: 800px) {
        a {
            font-size: 1.3rem;
        }
    }
    @media (max-width: 500px) {
        a {
            font-size: 1rem;
            margin-left: 15px;
        }
    }
`;

export default Navbar;
