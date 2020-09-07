import React from "react";
import styled from "styled-components";

import useMoviesContext from "../contexts/MoviesContext";
import useSeriesContext from "../contexts/SeriesContext";
import useLanguageContext from "../contexts/LanguageContext";

import Hero from "../components/Hero";
import CardListPreview from "../components/CardListPreview";
import MainFlex from "../components/MainFlex";
import Footer from "../components/Footer";
import LoadingPage from "./LoadingPage";
import SearchBar from "../components/SearchBar"

const Bodycontainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TITLES = {
  eng: ["Trending Movies", "Trending Tv Show"],
  spa: ["Películas en tendencia", "Series en tendencia"],
};

const Home = () => {
  const { language } = useLanguageContext();

  const {
    trendingMovie,
    trendingMovies,
    isMoviesDataLoading,
  } = useMoviesContext();
  const { trendingSeries, isSeriesDataLoading } = useSeriesContext();

  return isMoviesDataLoading && isSeriesDataLoading ? (
    <LoadingPage />
  ) : (
    <Bodycontainer>
      <MainFlex>
        <Hero data={trendingMovie} media_type="movie" page="home" />

        <CardListPreview
          title={TITLES[language][0]}
          elements={trendingMovies}
          media_type="movie"
          categoryId="trending"
        />
        <CardListPreview
          title={TITLES[language][1]}
          elements={trendingSeries}
          media_type="tv"
          categoryId="trending"
        />
      </MainFlex>
      <Footer />
    </Bodycontainer>
  );
};

export default Home;
