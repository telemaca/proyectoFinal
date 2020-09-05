import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import { MdPlayArrow as PlayIcon } from "react-icons/md";

import Rating from "./Rating";
import TrailerModal from "./TrailerModal";

const animatedFadeLeft = keyframes`
    0% {
        transform: translateX(-20px);
        opacity: 0;
    }
    100% {
        transform: translateX(0)
        opacity: 1;
    }
`;

const animatedFadeRight = keyframes`
    0% {
        transform: translateX(20px);
        opacity: 0;
    }
    100% {
        transform: translateX(0)
        opacity: 1;
    }
`;

const animatedPlayIcon = keyframes`
    0% {
        transform: scale(2);
        opacity: 0;
    }
    100% {
        transform: scale(1)
        opacity: 1;
    }
`;

const StyledSection = styled.section`
  @media (min-width: 850px) {
    height: ${(props) => props.page === "home" && "70vh"};
  }
  display: flex;
  background-color: black;
  flex-direction: ${(props) =>
    props.page === "home" ? "row" : "column-reverse"};
  justify-content: ${(props) =>
    props.page === "home" ? "initial" : "flex-end"};
`;

const StyledContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => (props.page === "home" ? "30%" : "74.2%")};
  background-color: rgba(0, 0, 0, 0.3);
  padding-left: ${(props) => (props.page === "home" ? "3vw" : "20vw")};
  position: ${(props) => props.page === "secondary" && "absolute"};
  height: ${(props) => props.page === "secondary" && "53vw"};

  @media (min-width: 850px) {
    background-color: ${(props) => props.page === "home" && "black"};
  }

  @media (max-width: 850px) {
    width: 78vw;
    position: absolute;
    height: 53vw;
    padding-left: 20vw;
  }

  @media (max-width: 650px) {
    justify-content: flex-end;
  }
`;

const Container = styled.div`
  padding-right: ${(props) => (props.page === "home" ? "0" : "5vw")};
`;

const BackgrdImgContainer = styled.div`
  width: ${(props) => (props.page === "home" ? "100%" : "95vw")};
  height: ${(props) => (props.page === "home" ? "auto" : "53vw")};
  background-image: url(${(props) => props.img});
  background-size: cover;

  @media (min-width: 850px) {
    box-shadow: ${(props) =>
      props.page === "home" && "inset 50px -20px 60px 60px #000"};
  }

  @media (max-width: 850px) {
    width: 98vw;
    height: 53vw;
  }
`;

const StyledTitleLink = styled(Link)`
  text-decoration: none;
  color: #fafafa;

  &:hover {
    color: ${(props) => (props.page === "home" ? "#2196f3" : "#fafafa")};
  }
`;

const StyledTitle = styled.h1`
  font-family: "Baloo Tamma 2";
  font-weight: 600;
  font-size: 3vw;
  line-height: 3vw;
  margin: 0;
  animation: ${animatedFadeLeft} 2s;

  @media (max-width: 1050px) {
    font-size: 4vw;
    max-width: 70%;
  }

  @media (max-width: 750px) {
    font-size: 6vw;
    margin-bottom: 2vw;
  }
  @media (max-width: 650px) {
    font-size: ${(props) => props.page === "home" && "7vw"};
    line-height: 6vw;
  }
`;

const StyledDescription = styled.p`
  font-family: "Roboto";
  color: #fafafa;
  font-size: 1vw;
  z-index: 200;
  width: ${(props) => (props.page === "home" ? "auto" : "70%")};
  margin: ${(props) => props.page === "secondary" && "0"};
  animation: ${animatedFadeRight} 2s;

  @media (max-width: 1050px) {
    font-size: 1.3vw;
  }

  @media (max-width: 850px) {
    width: 75%;
    font-size: 1.4vw;
  }

  @media (max-width: 650px) {
    display: ${(props) => props.page === "secondary" && "none"};
    font-size: ${(props) => props.page === "home" && "2.3vw"};
  }
`;

const Button = styled.button`
  height: 2.3vw;
  background-color: #202124;
  border: solid #202124;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0.7vw;
  transition: 0.2s;
  width: ${(props) => (props.page === "home" ? "50%" : "10vw")};
  margin-top: ${(props) => props.page === "secondary" && "3vw"};

  &:hover {
    cursor: pointer;
    background-color: #2f2f2f;
    border: solid #2f2f2f;
    transition: 0.2s;
  }

  @media (max-width: 850px) {
    width: 15vw;
    height: 4vw;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

const SmallButton = styled.button`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  border: 2px solid #fafafa;
  background-color: transparent;
  position: absolute;
  top: 35%;
  left: 44%;
  animation: ${animatedPlayIcon} 2s;
  display: ${(props) => props.page === "home" && "none"};

  @media (min-width: 650px) {
    display: none;
  }
`;

const StyledPlayIcon = styled(PlayIcon)`
  font-size: 1.3vw;
  color: #fff;
  margin-right: 0.7vw;
  @media (max-width: 850px) {
    font-size: 1.5vw;
  }
`;

const SmallPlayIcon = styled(PlayIcon)`
  font-size: 6.5vw;
  color: #fff;
`;

const Text = styled.p`
  color: #fff;
  font-family: roboto;
  font-size: 0.8vw;
  letter-spacing: 0.1em;
  @media (max-width: 850px) {
    font-size: 1.1vw;
  }
`;

const Hero = ({ data, media_type, page = "home" }) => {
  const { title, overview, backdrop_path, vote_average, name, id } = data;
  const [isTrailerSelected, setIsTrailerSelected] = useState(false);

  const handleClick = () => setIsTrailerSelected(true);
  const handleClickClose = () => setIsTrailerSelected(false);

  return (
    <StyledSection page={page}>
      <StyledContainerInfo page={page}>
        <Container page={page}>
          <StyledTitleLink page={page} to={`/${media_type}/${id}/info`}>
            <StyledTitle page={page}>{title || name}</StyledTitle>
          </StyledTitleLink>
          <Rating rating={vote_average} page={page} />
        </Container>
        <StyledDescription page={page}>{overview}</StyledDescription>
        <Button onClick={handleClick} page={page}>
          <StyledPlayIcon />
          <Text>Watch Trailer</Text>
        </Button>
        <SmallButton onClick={handleClick} page={page}>
          <SmallPlayIcon />
        </SmallButton>
      </StyledContainerInfo>
      <BackgrdImgContainer
        page={page}
        img={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      ></BackgrdImgContainer>
      {isTrailerSelected && (
        <TrailerModal
          media={media_type}
          id={id}
          onHandleClick={handleClickClose}
        />
      )}
    </StyledSection>
  );
};

export default Hero;
