import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { CgCloseR as CloseIcon } from "react-icons/cg";

import SmallLoader from "./SmallLoader";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

const move = keyframes`
from {
    transform: scale(0.2);
}
to {
    transform: scale(1);
}
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 300;  
`;

const StyledCloseIcon = styled(CloseIcon)`
  color: #fff;
  position: absolute;
  top: 1vw;
  right: 6vw;
  font-size: 2.5vw;
  z-index: 500;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    right: 7vw;    
  }
  @media (max-width: 850px) {
    top: 2vw;    
    right: 3vw;
  }
  @media(max-width: 768px) {   
    right: 2vw;
  }  
  @media (max-width: 414px) {
    right: 3vw;
    font-size: 4vw;
  }
`;

const StyledText = styled.p`
  color: #fafafa;
  font-size: 2vw;
  font-family: "Roboto";
`;

const StyledPlayer = styled(ReactPlayer)`
  z-index: 400;
  animation: ${move} 2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const MainPlayerContainer = styled.div `
  width: 100%;
  height: 100%;  
  display: flex;
  justify-content: center;
  align-items: center;  
`
const PlayerContainer = styled.div `
  width: 70%;
  height: 85%;  
  z-index: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 1260px) {
    width: 80%;
    height: 70%; 
  }
 @media (max-width: 1060px) {
    width: 95%;
    height: 70%;
  } 
  @media (max-width: 920px) {
    width: 95%;
    height: 60%;
  } 
   @media(max-width: 700px) {
    
    height: 50%; 
  }  
  @media(max-width: 620px) {
    width: 95%;
    height: 40%; 
  }    
  @media (max-width: 420px) {
    height: 27%;
  }   
`
const TrailerPage = ({ media, id, onHandleClick }) => {
  const [trailerData, setTrailerData] = useState([]);
  const [isTrailerDataLoading, setIsTrailerDataLoading] = useState(true);

  useEffect(() => {
    setIsTrailerDataLoading(true);
    axios
      .get(`${API_URL}${media}/${id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        setTrailerData(
          response.data.results.filter((index) => index.type === "Trailer")
        );
        setIsTrailerDataLoading(false);
      });
  }, [media, id]);

  return isTrailerDataLoading ? (
    <SmallLoader />
  ) : (
    <Container>
      <StyledCloseIcon onClick={onHandleClick} />
      {trailerData.length === 0 ? (
        <StyledText>Sorry, no video found</StyledText>
      ) : (
        <MainPlayerContainer>
        <PlayerContainer>
          <StyledPlayer
            className= "react-player"
            url={`https://www.youtube.com/watch?v=${trailerData[0]?.key}`}
            width="100%"
            height="100%"
            volume="0.5"
            controls
            onReady
            light
          />
        </PlayerContainer>
        </MainPlayerContainer>
      )}
    </Container>
  );
};

export default TrailerPage;