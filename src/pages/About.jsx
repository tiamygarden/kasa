import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Section from "../components/Section";
import Accordion from "../components/Accordion";
import bannerAboutImage from "../assets/IMG_headerBannerAbout.jpg";

function About() {
    const [active, setActive] = useState("");
    const AboutData = [
        {
            id: 1,
            title: "Fiabilité",
            text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        },
        {
            id: 2,
            title: "Respect",
            text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
            id: 3,
            title: "Service",
            text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            id: 4,
            title: "Sécurité",
            text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ];

    return (
        <main className="main">
            <AccordionContainer className="container">
                <Section classname={`about`} />
                <Accordions>
                    {AboutData.map((phrase, index) => (
                        <Accordion
                            key={`${index}-${phrase.title}`}
                            title={phrase.title}
                            active={active}
                            setActive={setActive}
                            text={phrase.text}
                        />
                    ))}
                </Accordions>
            </AccordionContainer>
        </main>
    );
}

const AccordionContainer = styled.div`
    .about {
        position: relative;
        margin: 50px 0;
        color: #fff;
        padding: 40px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${bannerAboutImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.9;
        filter: brightness(0.6);
        border-radius: 25px;
        height: 223px;
    }
`;

const Accordions = styled.div`
    margin-bottom: 150px;
`;

export default About;
