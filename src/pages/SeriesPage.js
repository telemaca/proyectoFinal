import React from "react";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";

import Hero from "../components/Hero";
import CardListPreview from "../components/CardListPreview";
import MainFlex from "../components/MainFlex"

const SeriesPage = () => {
  const {
    popularSerie,
    popularSeries,
    topRatedSeries,
    onAirSeries,
  } = useMoviesSeriesContext();

  return (
    <MainFlex>
      <Hero data={popularSerie} media_type="tv" />

      <CardListPreview
        title="Popular TV Shows"
        elements={popularSeries}
        media_type="tv"
        categoryId="popular"
      />
      <CardListPreview
        title="Top Rated TV Shows"
        elements={topRatedSeries}
        media_type="tv"
        categoryId="top_rated"
      />
      <CardListPreview
        title="TV Shows Airing Today"
        elements={onAirSeries}
        media_type="tv"
        categoryId="on_the_air"
      />
    </MainFlex>
  );
};

export default SeriesPage;
