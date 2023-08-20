import React from "react";
import styled from "styled-components";

export default function Section({ text, classname }) {
    return (
        <SectionStyle className={classname}>
            <h1>{text}</h1>
        </SectionStyle>
    );
}

const SectionStyle = styled.div`
    & {
        position: relative;
        margin: 50px 0;
        padding: 40px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 220px;

        & h1 {
            position: absolute;
            font-weight: normal;
            text-align: center;
            font-size: 3rem;
            color: #fff;
        }
    }

    @media (max-width: 800px) {
        & {
            padding: 40px 10px;
            height: 150px;
            margin: 45px 0;
        }

        & h1 {
            font-size: 2.5rem;
            text-align: left;
        }
    }

    @media (max-width: 500px) {
        & {
            padding: 25px 10px;
            margin: 10px 0;
            height: 111px;
        }

        & h1 {
            font-size: 1.5rem;
            width: 214px;
            margin-right: auto;
        }
    }
`;
