import React from "react";

import useSeriesContext from "../contexts/SeriesContext";
import useLanguageContext from "../contexts/LanguageContext";

import Hero from "../components/Hero";
import CardListPreview from "../components/CardListPreview";
import MainFlex from "../components/MainFlex";
import LoadingPage from "./LoadingPage";

const TITLES = {
  eng: ["Popular TV Shows", "Top Rated TV Shows", "TV Shows Airing Today"],
  spa: [
    "Series más populares",
    "Series mejor calificadas",
    "Series que se pueden ver ahora",
  ],
};

const SeriesPage = () => {
  const { language } = useLanguageContext();

  const {
    popularSerie,
    popularSeries,
    topRatedSeries,
    onAirSeries,
    isSeriesDataLoading,
  } = useSeriesContext();

  return isSeriesDataLoading ? (
    <LoadingPage />
  ) : (
    <MainFlex>
      <Hero data={popularSerie} media_type="tv" />

      <CardListPreview
        title={TITLES[language][0]}
        elements={popularSeries}
        media_type="tv"
        categoryId="popular"
      />
      <CardListPreview
        title={TITLES[language][1]}
        elements={topRatedSeries}
        media_type="tv"
        categoryId="top_rated"
      />
      <CardListPreview
        title={TITLES[language][2]}
        elements={onAirSeries}
        media_type="tv"
        categoryId="on_the_air"
      />
    </MainFlex>
  );
};

export default SeriesPage;
