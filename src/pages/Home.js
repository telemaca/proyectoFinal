import React from "react";
import styled from "styled-components";

import useMoviesContext from "../contexts/MoviesContext";
import useSeriesContext from "../contexts/SeriesContext";

import Hero from "../components/Hero";
import CardListPreview from "../components/CardListPreview";
import MainFlex from "../components/MainFlex";
import Footer from "../components/Footer";
import LoadingPage from "./LoadingPage";

const Bodycontainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
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
          title="Trending Movies"
          elements={trendingMovies}
          media_type="movie"
          categoryId="trending"
        />
        <CardListPreview
          title="Trending Tv Show"
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

