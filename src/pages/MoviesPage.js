import React from "react";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";

import Hero from "../components/Hero";
import CardListPreview from "../components/CardListPreview";
import MainFlex from "../components/MainFlex";

const MoviesPage = () => {
  const { popularMovie, popularMovies, topRatedMovies, nowPlayingMovies } = useMoviesSeriesContext();

  return (
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
        elements={topRatedMovies}
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
