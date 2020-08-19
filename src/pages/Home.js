import React from "react";
import styled from "styled-components";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";

import Hero from "../components/Hero";
import CardListPreview from "../components/CardListPreview";

const MainFlex = styled.main`
  display: flex;
  width: 93vw;
  flex-direction: column;
  transform: translateX(-0.7px);
`;

const Home = () => {
  const {
    trendingMovie,
    trendingMovies,
    trendingSeries,
  } = useMoviesSeriesContext();
  
  return (
    <MainFlex>
      <Hero data={trendingMovie} media_type="movie" />

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
  );
};

export default Home;
