import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  backgroundcolor: black;
`;

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;
