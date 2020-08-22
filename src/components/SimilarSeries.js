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

const SimilarSeries = ({ series }) => {
  return (
    <StyledSection>
      {series.map((serie) => (
        <BasicCard
          data={serie}
          link="tv"
          customStyle={{ marginBottom: "3vw" }}
        />
      ))}
    </StyledSection>
  );
};

export default SimilarSeries;
