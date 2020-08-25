import React from "react";
import styled from "styled-components";

import Rating from "./Rating";

const Card = styled.article`
  width: 17%;
  margin-top: 1vw;
`;

const Img = styled.img`
  width: 100%;
  transition: 0.3s;
  &:hover {
    transform: scale(1.02);
    transition: 0.3s;
    cursor: pointer;
  }
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 14px;
  font-weight: 300;
  font-family: roboto;
  letter-spacing: 0.4px;
  color: #fff;
`;

const BasicCard = ({ data, customStyle, media_type }) => {
  const { name, still_path, vote_average, id } = data;

  return (
    <Card key={id} id={id} style={customStyle} media_type={media_type}>
      <Img src={`http://image.tmdb.org/t/p/w342/${still_path}`} />
      <Title>{name}</Title>
      <Rating rating={vote_average} />
    </Card>
  );
};

export default BasicCard;