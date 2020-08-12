import React from "react";
import styled from "styled-components";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";

import Hero from "../components/Hero";
import CardListPreview from "../components/CardListPreview";


const MainFlex = styled.main`
  display: flex;
  flex-direction: column;
  width: 95vw;
  transform: translateX(-0.7px);
`;

const MoviesPage = () => {
  const {
    popularMovie,
    popularMovies,
    topRatedMovies,
    nowPlayingMovies,
  } = useMoviesSeriesContext();

  return (
    <MainFlex>

      <Hero data={popularMovie} link="movie" />


      <CardListPreview title="Popular Movies" elements={popularMovies} />
      <CardListPreview title="Top Rated Movies" elements={topRatedMovies} />
      <CardListPreview title="Now Playing Movies" elements={nowPlayingMovies} />
    </MainFlex>
  );
};

export default MoviesPage;
