import React from "react";
import styled from "styled-components";

import CastCard from "../components/CastCard";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 3vw;
  background-color: black;
  background-color: #1d1d1d;
  box-shadow: inset -100px -50px 110px 41px #000;
`;

const MovieCast = ({ actors }) => {
  return (
    <StyledSection>
      {actors.map((actor, i) => (
        <CastCard key={i} data={actor} />
      ))}
    </StyledSection>
  );
};

export default MovieCast;
