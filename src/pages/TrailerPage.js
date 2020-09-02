import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { CgCloseR as CloseIcon } from "react-icons/cg";

import SmallLoader from "../components/SmallLoader";

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
  width: 95%;
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
  right: 5vw;
  font-size: 2.5vw;
  &:hover {
    cursor: pointer;
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
        <StyledPlayer
          url={`https://www.youtube.com/watch?v=${trailerData[0]?.key}`}
          width="71vw"
          height="85vh"
          volume="0.5"
          controls
          onReady
          light
        />
      )}
    </Container>
  );
};

export default TrailerPage;
