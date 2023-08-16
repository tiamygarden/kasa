import React from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import fullStar from "../assets/full-star.png";
import emptyStar from "../assets/empty-star.png";
import data from "../datas/data.json";

function StarsRating({ sellerName, sellerImage }) {
    const urlParams = useParams();

    const housingData = data.filter((data) => data.id === urlParams.id);

    if (housingData === []) {
        return <Navigate to="/error" />;
    }
    const allStars = [1, 2, 3, 4, 5];
    return (
        <LogRating>
            <LogSeller>
                <p>{sellerName}</p>
                <img src={sellerImage} alt={sellerName} />
            </LogSeller>

            <Stars>
                {housingData.map((star, index) =>
                    allStars.map((stars) =>
                        star.rating <= stars - 1 ? (
                            <img
                                src={emptyStar}
                                alt="empty-star"
                                key={`${index}-${stars}`}
                            />
                        ) : (
                            <img
                                src={fullStar}
                                alt="full-star"
                                key={`${index}-${stars}`}
                            />
                        )
                    )
                )}
            </Stars>
        </LogRating>
    );
}

const LogRating = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    @media (max-width: 800px) {
        padding: 0;
        width: 100%;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
    }
`;

const LogSeller = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
    width: 210px;

    img {
        border-radius: 100%;
        width: 65px;
        height: 65px;
    }

    p {
        width: 80px;
        display: flex;
        justify-content: center;
        margin-right: 10px;
        text-align: end;
        font-size: 1.125rem;
    }

    @media (max-width: 800px) {
        width: 160px;
        padding: 0;
        margin: 20px 0 0 0;
        flex-direction: row;
        align-items: center;

        p {
            font-size: 1rem;
        }
    }
`;

const Stars = styled.div`
    img {
        margin-left: 10px;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        img {
            width: 25px;
            margin: 0 5px 0 0;
        }
    }
    @media (max-width: 500px) {
        img {
            width: 18px;
        }
    }
`;
export default StarsRating;
