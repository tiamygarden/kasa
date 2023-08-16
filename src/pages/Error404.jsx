import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Error404() {
    return (
        <>
            <div className="container">
                <SectionError>
                    {<h1>404 </h1>}
                    {<h2>Oups! La page que vous demandez n'existe pas.</h2>}
                    <Link to="/">Retournez à la page d'accueil</Link>
                </SectionError>
            </div>
        </>
    );
}

const SectionError = styled.div`
     {
        font-family: "Montserrat", sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 15%;
    }

    h1 {
        font-weight: 700;
        font-size: 288px;
        text-align: center;
    }

    h2 {
        font-weight: 500;
        font-size: 2rem;
    }

    a {
        font-size: 1.5rem;
        color: #ff6060;
        font-weight: 500;
        margin-top: 2rem;
        padding: 1rem 2rem;
    }

    @media (max-width: 800px) {
        h1 {
            font-size: 12rem;
        }
        p {
            font-size: 2rem;
            margin: auto;
            display: flex;
            flex-direction: column;
        }

        a {
            margin: 0 0 35px 0;
            padding: 0;
            font-size: 1rem;
        }
    }
    @media (max-width: 500px) {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        text-align: center;
        height: 100vh;
        h1 {
            font-size: 5.1rem;
        }
        p {
            font-size: 1.5rem;
            padding: 0;
            margin: auto;
            display: flex;
            flex-direction: column;
        }

        a {
            padding: 0;
            font-size: 0.85rem;
            margin: 0 0 35px 0;
        }
    }
`;
