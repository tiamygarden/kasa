import React from "react";
import logo from "../assets/logo_footer.png";
import styled from "styled-components";

export default function footer() {
    return (
        <Footer>
            <img src={logo} alt="logo" />
            <p>&copy; 2022 Kasa. All rights reserved</p>
        </Footer>
    );
}

const Footer = styled.div`
    font-family: "Montserrat", sans-serif;
    width: 100%;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    text-align: center;
    margin: auto;
    height: 209px;

    img {
        width: 100px;
        max-height: 40px;
        margin: 10px 0 30px;
    }

    p {
        font-size: 1.5rem;
    }
`;
