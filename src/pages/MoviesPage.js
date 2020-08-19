import React from "react";
import styled from "styled-components";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";

import Hero from "../components/Hero";
import CardListPreview from "../components/CardListPreview";


const MainFlex = styled.main`
  display: flex;
  flex-direction: column;
  width: 93vw;
  transform: translateX(-0.7px);
`;

const MoviesPage = () => {
  const { popularMovie, popularMovies, topRatedMovies, nowPlayingMovies } = useMoviesSeriesContext();     

  return (
    <MainFlex>
      <Hero data={popularMovie} media_type="movie" />
      
      <MainFlex>         
      
      <CardListPreview
        title="Popular Movies"
        elements={popularMovies}
        media_type="movie"
        categoryId="popular"
      />
      
      </MainFlex>

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
