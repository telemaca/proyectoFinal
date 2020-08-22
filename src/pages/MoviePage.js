import React, { useEffect, useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import axios from "axios";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

import useMoviesContext from "../contexts/MoviesContext";

import Hero from "../components/Hero";
import MovieNavLinks from "../components/MovieNavLinks";
import MovieInfo from "../components/MovieInfo";
import MovieCast from "../components/MovieCast";
import SimilarMovies from "../components/SimilarMovies";
import MainFlex from "../components/MainFlex";
import LoadingPage from "../pages/LoadingPage";

const MoviePage = () => {
  const { movieId } = useParams();

  const { popularMovies } = useMoviesContext();
  const [selectedMovie, setSelectedMovie] = useState({});
  const [selectedMovieCast, setSelectedMovieCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isMovieDataLoading, setIsMovieDataLoading] = useState(true);

  useEffect(() => {
    setIsMovieDataLoading(true);
    axios
      .get(`${API_URL}movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => {
        setSelectedMovie(response.data);
        setIsMovieDataLoading(false);
      });

    axios
      .get(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
      .then((response) => {
        setSelectedMovieCast(response.data.cast.slice(0, 20));
      });

    axios
      .get(`${API_URL}movie/${movieId}/similar?api_key=${API_KEY}`)
      .then((response) => {
        setSimilarMovies(response.data.results);
      });
  }, [movieId]);

  return isMovieDataLoading ? (
    <LoadingPage />
  ) : (
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
