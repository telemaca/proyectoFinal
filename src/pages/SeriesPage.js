import React from "react";
import styled from "styled-components";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";

import Hero from "../components/Hero";
import CardListPreview from "../components/CardListPreview";

const StyledContainer = styled.div`
  width: 95vw;
`;

const MainFlex = styled.main`
  display: flex;
  flex-direction: column;
  transform: translateX(-0.7px);
`;

const SeriesPage = () => {
  const {
    popularSerie,
    popularSeries,
    topRatedSeries,
    onAirSeries,
  } = useMoviesSeriesContext();

  return (
    <MainFlex>
      <StyledContainer>
        <Hero data={popularSerie} link="tv" />
      </StyledContainer>

      <CardListPreview title="Popular TV Shows" elements={popularSeries} />
      <CardListPreview title="Top Rated TV Shows" elements={topRatedSeries} />
      <CardListPreview title="TV Shows Airing Today" elements={onAirSeries} />
    </MainFlex>
  );
};

export default SeriesPage;
