import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import API_KEY from "../data/apiKey";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";

import Hero from "../components/Hero";
import MovieNavLinks from "../components/MovieNavLinks";
import MovieInfo from "../components/MovieInfo";
import MovieCast from "../components/MovieCast";
import SimilarMovies from "../components/SimilarMovies";

const MainFlex = styled.main`
  display: flex;
  flex-direction: column;
  width: 95vw;
  transform: translateX(-0.7px);
`;

const MoviePage = () => {
  const { selectedId } = useMoviesSeriesContext();
  const [selectedMovie, setSelectedMovie] = useState({});
  const [selectedMovieCast, setSelectedMovieCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${selectedId}?api_key=${API_KEY}`
      )
      .then((response) => {
        setSelectedMovie(response.data);
      });
  }, [selectedId]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${selectedId}/credits?api_key=${API_KEY}`
      )
      .then((response) => {
        setSelectedMovieCast(response.data.cast.slice(0, 18));
      });
  }, [selectedId]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${selectedId}/similar?api_key=${API_KEY}`
      )
      .then((response) => {
        setSimilarMovies(response.data.results);
      });
  }, [selectedId]);

  return (
    <MainFlex>
      <Hero data={selectedMovie} link="movie" />
      <MovieNavLinks />
      <Switch>
        <Route path="/movie/:movieId/info">
          <MovieInfo data={selectedMovie} />
        </Route>
        <Route path="/movie/:movieId/cast">
          <MovieCast actors={selectedMovieCast} />
        </Route>
        <Route path="/movie/:movieId/similar">
          <SimilarMovies movies={similarMovies} />
        </Route>
      </Switch>
    </MainFlex>
  );
};

export default MoviePage;
