// Hero
// Debe mostrar una imagen de fondo
// Debe mostrar título, rating y sinopsis
// Debe poder tener una opción para llevar a la página de la película o serie
// Los datos de los puntos anteriores se pasan como props

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Rating from "./Rating";

const BackgrdImgContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;
const StyledTitle = styled.h1``;
const StyledDescription = styled.p``;

const Hero = ({ data }) => {
  const { title, overview, backdrop_path, vote_average } = data;
  return (
    <BackgrdImgContainer
      img={`https://image.tmdb.org/t/p/original${backdrop_path}`}
    >
      <Link>
        <StyledTitle>{title}</StyledTitle>
      </Link>
      <Rating rating={vote_average} />
      <StyledDescription>{overview}</StyledDescription>
    </BackgrdImgContainer>
  );
};

export default Hero;
