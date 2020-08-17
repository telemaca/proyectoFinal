import React from "react";

import styled from "styled-components";

import BasicCard from "../components/CardMovie";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3vw;
  background-color: #1d1d1d;
  box-shadow: inset -100px -50px 110px 41px #000;
`;

const SimilarMovies = ({ movies, popularMovies }) => {

  return (
  movies.length >= 1 ?
   <StyledSection>
      {movies.map((movie) => (
        <BasicCard
          data={movie}
          link="movie"
          customStyle={{ marginBottom: "3vw" }}
        />
      ))}
    </StyledSection> 
    :
    <StyledSection>
      {popularMovies.map((movie) => (
        <BasicCard
          data={movie}
          link="movie"
          customStyle={{ marginBottom: "3vw" }}
        />
      ))}
    </StyledSection>
   
    
    
  );
};

export default SimilarMovies;
