import React, { useEffect, useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import axios from "axios";

import API_KEY from "../data/apiKey";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";

import Hero from "../components/Hero";
import MovieNavLinks from "../components/MovieNavLinks";
import MovieInfo from "../components/MovieInfo";
import MovieCast from "../components/MovieCast";
import SimilarMovies from "../components/SimilarMovies";
import MainFlex from "../components/MainFlex";

const MoviePage = () => {
  const { movieId } = useParams();

  const { popularMovies } = useMoviesSeriesContext();
  const [selectedMovie, setSelectedMovie] = useState({});
  const [selectedMovieCast, setSelectedMovieCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => {
        setSelectedMovie(response.data);
      });
  }, [movieId]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      )
      .then((response) => {
        setSelectedMovieCast(response.data.cast.slice(0, 18));
      });
  }, [movieId]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}`
      )
      .then((response) => {
        setSimilarMovies(response.data.results);
      });
  }, [movieId]);

  return (
    <MainFlex>
      <Hero data={selectedMovie} media_type="movie" />
      <MovieNavLinks />
      <Switch>
        {/* <Route path="/movie/:movieId">
          <MovieInfo data={selectedMovie} />
        </Route> */}
        <Route path="/movie/:movieId/info">
          <MovieInfo data={selectedMovie} />
        </Route>
        <Route path="/movie/:movieId/cast">
          <MovieCast actors={selectedMovieCast} />
        </Route>
        <Route path="/movie/:movieId/similar">
          <SimilarMovies
            movies={similarMovies.length !== 0 ? similarMovies : popularMovies}
            notFound={similarMovies.length !== 0}
          />
        </Route>
      </Switch>
    </MainFlex>
  );
};

export default MoviePage;
