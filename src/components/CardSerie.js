
import React from "react";
import styled from "styled-components";


import Rating from "./Rating";

const Card = styled.article`
  width: 23%;
`;
const Img = styled.img`
  width: 85%;
  transition: 0.3s;
  &:hover {
    transform: scale(1.02);
    transition: 0.3s;
  }
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 14px;
  font-weight: 300;
  font-family: roboto;
  letter-spacing: .4px;
  color: #fff;
`;

const CardSerie = ({data}) => {
    const {name, poster_path, vote_average} = data 

  return (
        <Card>
          <Img src={`http://image.tmdb.org/t/p/w342/${poster_path}`} />
          <Title>{name}</Title>
          <Rating rating={vote_average} />
        </Card>   
  );
};

export default CardSerie;
