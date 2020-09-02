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
  top: 65vh;
  left: 45%;
`;

const Dot = styled.div`
  width: 3vw;
  height: 3vw;
  background-color: grey;
  border-radius: 50%;
  animation: ${animate} 1s ${(props) => props.delay} infinite;
`;

const SmallLoader = () => {
  return (
    <Container>
      <Dot delay="0s" />
      <Dot delay=".3s" />
      <Dot delay=".6s" />
    </Container>
  );
};

export default SmallLoader;
