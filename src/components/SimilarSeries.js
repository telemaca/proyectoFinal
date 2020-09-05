import React from "react";

import styled from "styled-components";

import usePaginationContext from "../contexts/PaginationContext";

import BasicCard from "../components/CardMovie";
import Pagination from "../components/Pagination";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #1d1d1d;
  box-shadow: inset -100px -50px 110px 41px #000;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3vw;
  @media (max-width: 850px) {
    justify-content: initial;
    margin-left: 3vw;
    margin-bottom: 15vw;
  }
`;

const Text = styled.p`
  color: #fafafa;
  font-family: "Roboto";
  font-size: 1.5vw;
  text-align: center;
  @media (max-width: 650px) {
    font-size: 3vw;
  }
`;

const SimilarSeries = ({ series, notFound = false }) => {
  return (
    <StyledSection>
      {notFound && (
        <Text>Similar Series not found. Showing Popular Series instead.</Text>
      )}
      <StyledContainer>
        {series.map((serie) => (
          <BasicCard
            data={serie}
            media_type="tv"
            customStyle={{ marginBottom: "3vw" }}
          />
        ))}
      </StyledContainer>
    </StyledSection>
  );
};

export default SimilarSeries;
