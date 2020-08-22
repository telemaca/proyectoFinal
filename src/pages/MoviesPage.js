import React from "react";

import useMoviesContext from "../contexts/MoviesContext";

import Hero from "../components/Hero";
import CardListPreview from "../components/CardListPreview";
import MainFlex from "../components/MainFlex";
import LoadingPage from "./LoadingPage";

const MoviesPage = () => {
  const {
    popularMovie,
    popularMovies,
    topRatedMovies,
    nowPlayingMovies,
    isMoviesDataLoading,
  } = useMoviesContext();

  //Ordeno por la mayor cantidad de votos para que no muestre en la pagina principal pelis medio random
  const filteredTopRatedMovies = topRatedMovies
    .sort((a, b) => b.vote_count - a.vote_count)
    .slice(0, 5);

  return isMoviesDataLoading ? (
    <LoadingPage />
  ) : (
    <MainFlex>
      <Hero data={popularMovie} media_type="movie" />

      <CardListPreview
        title="Popular Movies"
        elements={popularMovies}
        media_type="movie"
        categoryId="popular"
      />

      <CardListPreview
        title="Top Rated Movies"
        elements={filteredTopRatedMovies}
        media_type="movie"
        categoryId="top_rated"
      />

      <CardListPreview
        title="Now Playing Movies"
        elements={nowPlayingMovies}
        media_type="movie"
        categoryId="now_playing"
      />
    </MainFlex>
  );
};

export default MoviesPage;
