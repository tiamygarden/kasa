import React from "react";
import Card from "./Card";
import styled from "styled-components";
import data from "../datas/data.json";

function Gallery() {
    return (
        <GallerySectionStyle>
            {data &&
                data.map((location, index) => (
                    <Card
                        key={`${location.title}-${index}`}
                        title={location.title}
                        id={location.id}
                        cover={location.cover}
                    />
                ))}
        </GallerySectionStyle>
    );
}

const GallerySectionStyle = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 56px 0;
    background-color: #f6f6f6;
    border-radius: 25px;
    margin-bottom: 50px;
    min-height: 200vh;
`;

export default Gallery;
