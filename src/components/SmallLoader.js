import React from "react";
import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0%, 100% {
        transform: scale(0.4)
    }
    50% {
        transform: scale(1)
    }
`;

const Container = styled.div`
  width: 12vw;
  z-index: 500;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: ${(props) => (props.type === "trailer" ? "50vh" : "130vh")};
  left: 45%;
`;

const Dot = styled.div`
  width: 3vw;
  height: 3vw;
  background-color: #2196f3;
  border-radius: 50%;
  animation: ${animate} 1s ${(props) => props.delay} infinite;
`;

const SmallLoader = ({ type = "trailer" }) => {
  return (
    <Container type={type}>
      <Dot delay="0s" />
      <Dot delay=".3s" />
      <Dot delay=".6s" />
    </Container>
  );
};

export default SmallLoader;
