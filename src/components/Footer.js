import React from "react";
import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";

const StyledFooter = styled.footer`
  height: 150px;
  background-color: #1d1d1d;
  padding-left: 10vw;
  @media (max-width: 850px) {
    font-size: 1.5vw;
    height: 200px;
  }
`;

const StyledText = styled.p`
  font-family: "Roboto";
  color: grey;
`;

const SimpleLink = styled.a`
  color: lightblue;
`;

const StyledLink = styled.a`
  font-family: "Roboto";
  text-decoration: none;
  cursor: pointer;
  color: grey;
  display: flex;
  align-items: center;
`;

const StyledContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;

  @media (max-width: 850px) {
    width: 200px;
  }
`;

const StyledIcon = styled(FaGithubSquare)`
  color: grey;
  font-size: 1.5vw;
  padding-right: 5px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>
        @2020 Sol Zapata, Julia Sartirana, Florencia Holzmann. All rights
        reserved.
      </StyledText>
      <StyledText>
        Designed and built by us. Data provided by{" "}
        <SimpleLink
          color="lightblue"
          target="_blank"
          href="https://www.themoviedb.org/"
        >
          TMDb
        </SimpleLink>
        .
      </StyledText>
      <StyledContainer>
        <StyledLink color="grey" target="_blank" href="https://www.github.com">
          <StyledIcon />
          Sol
        </StyledLink>
        <StyledLink color="grey" target="_blank" href="https://www.github.com">
          <StyledIcon />
          Julia
        </StyledLink>
        <StyledLink color="grey" target="_blank" href="https://www.github.com">
          <StyledIcon />
          Florencia
        </StyledLink>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
