import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdPlayArrow as PlayIcon } from "react-icons/md";
import Rating from "./Rating";

const StyledSection = styled.section`
  height: ${(props) => (props.page === "home" ? "70vh" : "90vh")};
  display: flex;
  background-color: black;
  flex-direction: ${(props) =>
    props.page === "home" ? "row" : "column-reverse"};
  justify-content: ${(props) =>
    props.page === "home" ? "initial" : "flex-end"};
  /* @media(max-width: 950px) {
    flex-direction: column;
  } */
`;

const StyledContainerInfo = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.page === "home" ? "column" : "row")};
  justify-content: center;
  width: ${(props) => (props.page === "home" ? "30%" : "auto")};
  background-color: black;
  padding: ${(props) => props.page === "secondary" && "4vw 0 0 2vw"};
  padding-left: ${(props) => props.page === "home" && "3vw"};
`;

const Container = styled.div`
  padding-right: ${(props) => (props.page === "home" ? "0" : "5vw")};
  max-width: ${(props) => props.page === "secondary" && "30%"};
`;

const BackgrdImgContainer = styled.div`
  width: ${(props) => (props.page === "home" ? "70%" : "95vw")};
  height: ${(props) => (props.page === "home" ? "auto" : "30vw")};
  background-image: url(${(props) => props.img});
  background-size: cover;
  box-shadow: ${(props) =>
    props.page === "home" ? "inset 50px -20px 60px 60px #000" : "none"};
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
`;

const StyledDescription = styled.p`
  font-family: "Roboto";
  color: #fafafa;
  font-size: 1vw;
  z-index: 200;
  width: ${(props) => (props.page === "home" ? "auto" : "50%")};
  margin: ${(props) => props.page === "secondary" && "0"};
`;

const Button = styled.button`
  width: 13vw;
  height: 3.3vw;
  background-color: #202124;
  border: solid #202124;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #2f2f2f;
    border: solid #2f2f2f;
    transition: 0.2s;
  }
`;
const StyledPlayIcon = styled(PlayIcon)`
  font-size: 1.7vw;
  color: #fff;
  margin-right: 0.7vw;
`;
const StyledTrailerLink = styled(Link)`
  text-decoration: none;
  width: 13vw;
  margin-top: 2vw;
`;
const Text = styled.p`
  color: #fff;
  font-family: roboto;
  font-size: 1.1vw;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

const Hero = ({ data, media_type, page = "home" }) => {
  const { title, overview, backdrop_path, vote_average, name, id } = data;

  return (
    <StyledSection page={page}>
      <StyledContainerInfo page={page}>
        <Container page={page}>
          <StyledTitleLink page={page} to={`/${media_type}/${id}`}>
            {title || name}
          </StyledTitleLink>
          <Rating rating={vote_average} />
        </Container>
        <StyledDescription page={page}>{overview}</StyledDescription>
        <StyledTrailerLink to={`/video/${media_type}/${id}`}>
          <Button>
            <StyledPlayIcon />
            <Text>Watch Trailer</Text>
          </Button>
        </StyledTrailerLink>
      </StyledContainerInfo>
      <BackgrdImgContainer
        page={page}
        img={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      ></BackgrdImgContainer>
    </StyledSection>
  );
};

export default Hero;
