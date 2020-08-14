import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import API_KEY from "../data/apiKey";

const MoviesSeriesContext = createContext();

const MoviesSeriesProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState("");
  const [trendingMovie, setTrendingMovie] = useState({});
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [popularMovie, setPopularMovie] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularSerie, setPopularSerie] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [onAirSeries, setOnAirSeries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then((response) => {
        setTrendingMovie(response.data.results[0]);
        setTrendingMovies(response.data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
      .then((response) => {
        setTrendingSeries(response.data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => {
        setPopularMovie(response.data.results[0]);
        setPopularMovies(response.data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((response) => {
        setTopRatedMovies(response.data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then((response) => {
        setNowPlayingMovies(response.data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
      .then((response) => {
        setPopularSerie(response.data.results[0]);
        setPopularSeries(response.data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`)
      .then((response) => {
        setTopRatedSeries(response.data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`)
      .then((response) => {
        setOnAirSeries(response.data.results);
      });
  }, []);

  return (
    <MoviesSeriesContext.Provider
      value={{
        selectedId,
        setSelectedId,
        trendingMovie,
        trendingMovies,
        trendingSeries,
        popularMovie,
        popularMovies,
        topRatedMovies,
        nowPlayingMovies,
        popularSerie,
        popularSeries,
        topRatedSeries,
        onAirSeries,
      }}
    >
      {children}
    </MoviesSeriesContext.Provider>
  );
};

const useMoviesSeriesContext = () => useContext(MoviesSeriesContext);

export { MoviesSeriesProvider };
export default useMoviesSeriesContext;
