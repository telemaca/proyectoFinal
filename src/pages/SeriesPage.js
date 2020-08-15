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
  width: 95vw;
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
      <Hero data={popularSerie} link="tv" />

      <CardListPreview
        title="Popular TV Shows"
        elements={popularSeries}
        link="tv"
      />
      <CardListPreview
        title="Top Rated TV Shows"
        elements={topRatedSeries}
        link="tv"
      />
      <CardListPreview
        title="TV Shows Airing Today"
        elements={onAirSeries}
        link="tv"
      />
    </MainFlex>
  );
};

export default SeriesPage;
