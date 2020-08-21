import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 95vw;
  padding-left: 5vw;
  transform: translateX(-0.7px);
`;

const MainFlex = ({ children, ...props }) => {
  return <StyledMain {...props}>{children}</StyledMain>;
};

export default MainFlex;
