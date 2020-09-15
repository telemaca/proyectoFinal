import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 93.5vw;
  padding-left: 5vw;
  transform: translateX(-0.7px);
  @media (max-width: 850px) {
    padding-left: 0;
    width: 98vw;
  }
`;

//PROBANDOOOOOOOOOOO

const MainFlex = ({ children, ...props }) => {
  return <StyledMain {...props}>{children}</StyledMain>;
};

export default MainFlex;
