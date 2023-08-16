import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import HousingDetails from "../components/HousingDetails";
import Error404 from "../pages/Error404";
import styled from "styled-components";
import data from "../datas/data.json";

function Housing() {
    let { id } = useParams();

    const housingData = data.filter((data) => data.id === id);

    if (housingData[0] !== undefined) {
        return (
            <MainStyle className="main main-Housings">
                {housingData.map((location, index) => (
                    <section className="container" key={index}>
                        <Carousel key="carousel" />
                        <HousingDetails
                            key={location.title}
                            title={location.title}
                            location={location.location}
                        />
                    </section>
                ))}
            </MainStyle>
        );
    } else {
        if (data.length === 0) {
            return <main className="loading">Loading...</main>;
        } else {
            return (
                <main>
                    <Error404 />
                </main>
            );
        }
    }
}

const MainStyle = styled.main`
    margin-bottom: 100px;
`;

export default Housing;
