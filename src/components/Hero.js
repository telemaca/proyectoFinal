import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdPlayArrow as PlayIcon } from "react-icons/md";
import Rating from "./Rating";
import TrailerPage from "../pages/TrailerPage";

const StyledSection = styled.section`
  height: ${(props) => (props.page === "home" ? "70vh" : "90vh")};
  display: flex;
  background-color: black;
  flex-direction: ${(props) =>
    props.page === "home" ? "row" : "column-reverse"};
  justify-content: ${(props) =>
    props.page === "home" ? "initial" : "flex-end"};

  @media (max-width: 950px) {
    flex-direction: column-reverse;
    height: auto;
    justify-content: flex-end;
    /* margin-bottom: ${(props) => props.page === "secondary" && "2rem"}; */
  }
`;

const StyledContainerInfo = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.page === "home" ? "column" : "row")};
  justify-content: center;
  width: ${(props) => (props.page === "home" ? "30%" : "auto")};
  background-color: black;
  padding: ${(props) => props.page === "secondary" && "4vw 0 0 2vw"};
  padding-left: ${(props) => props.page === "home" && "3vw"};
  @media (max-width: 950px) {
    width: 90%;
    justify-content: left;
    margin: 6vw 0;
  }
`;

const Container = styled.div`
  padding-right: ${(props) => (props.page === "home" ? "0" : "5vw")};
  max-width: ${(props) => props.page === "secondary" && "30%"};
  @media (max-width: 950px) {
    padding-left: ${(props) => props.page === "secondary" && "3vw"};
    max-width: ${(props) => props.page === "secondary" && "100%"};
  }
`;

const BackgrdImgContainer = styled.div`
  width: ${(props) => (props.page === "home" ? "100%" : "95vw")};
  height: ${(props) => (props.page === "home" ? "auto" : "30vw")};
  background-image: url(${(props) => props.img});
  background-size: cover;
  box-shadow: ${(props) =>
    props.page === "home" ? "inset 50px -20px 60px 60px #000" : "none"};

  @media (max-width: 950px) {
    width: 100vw;
    height: 18rem;
    box-shadow: inset 0px -20px 30px 6px #000;
    background-position-x: center;
  }
`;

const StyledTitleLink = styled(Link)`
  font-family: "Baloo Tamma 2";
  font-weight: 600;
  font-size: 3vw;
  line-height: 3vw;
  padding-bottom: 2vw;
  text-decoration: none;
  color: #fafafa;
  &:hover {
    color: ${(props) => (props.page === "home" ? "#2196f3" : "#fafafa")};
  }
  @media (max-width: 950px) {
    font-size: 2.5rem;
    line-height: 6vh;
  }
`;

const StyledDescription = styled.p`
  font-family: "Roboto";
  color: #fafafa;
  font-size: 1vw;
  z-index: 200;
  width: ${(props) => (props.page === "home" ? "auto" : "50%")};
  margin: ${(props) => props.page === "secondary" && "0"};

  @media (max-width: 950px) {
    display: none;
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
  width: ${(props) => props.page === "home" && "50%"};

  &:hover {
    cursor: pointer;
    background-color: #2f2f2f;
    border: solid #2f2f2f;
    transition: 0.2s;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

const StyledPlayIcon = styled(PlayIcon)`
  font-size: 1.3vw;
  color: #fff;
  margin-right: 0.7vw;
`;

const Text = styled.p`
  color: #fff;
  font-family: roboto;
  font-size: 0.8vw;
  letter-spacing: 0.1em;
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
          <StyledTitleLink page={page} to={`/${media_type}/${id}`}>
            {title || name}
          </StyledTitleLink>
          <Rating rating={vote_average} page={page} />
          {page === "secondary" && (
            <Button onClick={handleClick}>
              <StyledPlayIcon />
              <Text>Watch Trailer</Text>
            </Button>
          )}
        </Container>
        <StyledDescription page={page}>{overview}</StyledDescription>
        {page === "home" && (
          <Button onClick={handleClick} page={page}>
            <StyledPlayIcon />
            <Text>Watch Trailer</Text>
          </Button>
        )}
      </StyledContainerInfo>
      <BackgrdImgContainer
        page={page}
        img={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      ></BackgrdImgContainer>
      {isTrailerSelected && (
        <TrailerPage
          media={media_type}
          id={id}
          onHandleClick={handleClickClose}
        />
      )}
    </StyledSection>
  );
};

export default Hero;
