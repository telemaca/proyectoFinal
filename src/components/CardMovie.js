import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Rating from "./Rating";

const Card = styled.article`
  width: 17%;
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

const BasicCard = ({ data }) => {
  const { title, poster_path, vote_average, name, id, media_type } = data;

  return (
    <Card>
      <Link to={`/${media_type ? "movie" : "tv"}/${id}`}>
        <Img src={`http://image.tmdb.org/t/p/w342/${poster_path}`} />
      </Link>
      <Title>{title || name}</Title>
      <Rating rating={vote_average} />
    </Card>
  );
};

export default BasicCard;
