import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext"
import Rating from "./Rating";

const StyledSection = styled.section`
  height: 70vh;
  display: flex;

  @media(max-width: 950px) {
    flex-direction: column;
  }
`;

const StyledContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  background-color: black;
  padding-left: 2vw;
`;

const BackgrdImgContainer = styled.div`
  width: 70%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  box-shadow: inset 50px -20px 60px 60px #000;
`;

const StyledTitleLink = styled(Link)`
  font-family: "Baloo Tamma 2";
  font-weight: 600;
  font-size: 3vw;
  text-decoration: none;
  color: #fafafa;
  &:hover {
    color: #2196f3;
  }
`;

const StyledDescription = styled.p`
  font-family: "Roboto";
  color: #fafafa;
  font-size: 1vw;
  z-index: 200;
`;

const Hero = ({ data, link }) => {
  const { setSelectedId } = useMoviesSeriesContext();
  const { title, overview, backdrop_path, vote_average, name, id } = data;
  const handleClick = () => setSelectedId(id)

  return (
    <StyledSection>
      <StyledContainerInfo>
        <StyledTitleLink to={`/${link}/${id}`} onClick={handleClick}>{title || name}</StyledTitleLink>
        <Rating rating={vote_average} />
        <StyledDescription>{overview}</StyledDescription>
      </StyledContainerInfo>
      <BackgrdImgContainer
        img={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      ></BackgrdImgContainer>
    </StyledSection>
  );
};

export default Hero;
