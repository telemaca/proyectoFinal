import React from "react";

import useMoviesContext from "../contexts/MoviesContext";
import useLanguageContext from "../contexts/LanguageContext";

import Hero from "../components/Hero";
import CardListPreview from "../components/CardListPreview";
import MainFlex from "../components/MainFlex";
import LoadingPage from "./LoadingPage";

const TITLES = {
  eng: ["Popular Movies", "Top Rated Movies", "Now Playing Movies"],
  spa: [
    "Películas más populares",
    "Películas mejor calificadas",
    "Películas que se pueden ver ahora",
  ],
};

const MoviesPage = () => {
  const { language } = useLanguageContext();

  const {
    popularMovie,
    popularMovies,
    topRatedMovies,
    nowPlayingMovies,
    isMoviesDataLoading,
  } = useMoviesContext();

  //Ordeno por la mayor cantidad de votos para que no muestre en la pagina principal pelis medio random
  const filteredTopRatedMovies = topRatedMovies.sort(
    (a, b) => b.vote_count - a.vote_count
  );

  return isMoviesDataLoading ? (
    <LoadingPage />
  ) : (
    <MainFlex>
      <Hero data={popularMovie} media_type="movie" />

      <CardListPreview
        title={TITLES[language][0]}
        elements={popularMovies}
        media_type="movie"
        categoryId="popular"
      />

      <CardListPreview
        title={TITLES[language][1]}
        elements={filteredTopRatedMovies}
        media_type="movie"
        categoryId="top_rated"
      />

      <CardListPreview
        title={TITLES[language][2]}
        elements={nowPlayingMovies}
        media_type="movie"
        categoryId="now_playing"
      />
    </MainFlex>
  );
};

export default MoviesPage;
