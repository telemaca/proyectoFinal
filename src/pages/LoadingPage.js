import React from "react";
import styled, { keyframes } from "styled-components";

import useLanguageContext from "../contexts/LanguageContext";

import MainFlex from "../components/MainFlex";
import LoadingBB8 from "../components/LoadingBB8";

const Text = styled.p`
  color: #fafafa;
  font-family: "Roboto";
  font-size: 36px;
  position: absolute;
  top: 30%;
  letter-spacing: 12px;
`;

const appear = keyframes`
from {
    opacity: 0;
    transform: translateX(20px);
}
to {
    opacity: 1;
    transform: translateX(0);
}
`;

const MovingDot = styled.span`
  animation: ${appear} 1s linear infinite ${(props) => props.delay};
`;

const loadingPageStyle = {
  height: "100vh",
  backgroundColor: "black",
  justifyContent: "center",
  alignItems: "center",
};

const LOADING_TEXT = {
  eng: "Loading",
  spa: "Cargando",
};

const LoadingPage = () => {
  const { language } = useLanguageContext();

  return (
    <MainFlex style={loadingPageStyle}>
      <Text>
        {LOADING_TEXT[language]}
        <MovingDot delay=".66s">.</MovingDot>
        <MovingDot delay="0s">.</MovingDot>
        <MovingDot delay=".33s">.</MovingDot>
      </Text>
      <LoadingBB8 />
    </MainFlex>
  );
};

export default LoadingPage;
