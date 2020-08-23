import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [isMoviesDataLoading, setIsMoviesDataLoading] = useState(true);
  const [trendingMovie, setTrendingMovie] = useState({});
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovie, setPopularMovie] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    setIsMoviesDataLoading(true);
    axios
      .get(`${API_URL}trending/movie/day?api_key=${API_KEY}`)
      .then((response) => {
        setTrendingMovie(response.data.results[0]);
        setTrendingMovies(response.data.results);
        setIsMoviesDataLoading(false);
      });

    axios.get(`${API_URL}movie/popular?api_key=${API_KEY}`).then((response) => {
      setPopularMovie(response.data.results[0]);
      setPopularMovies(response.data.results);
    });

    axios
      .get(`${API_URL}movie/top_rated?api_key=${API_KEY}`)
      .then((response) => {
        setTopRatedMovies(response.data.results);
      });

    axios
      .get(`${API_URL}movie/now_playing?api_key=${API_KEY}`)
      .then((response) => {
        setNowPlayingMovies(response.data.results);
      });
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        trendingMovie,
        trendingMovies,
        popularMovie,
        popularMovies,
        topRatedMovies,
        nowPlayingMovies,
        setIsMoviesDataLoading,
        isMoviesDataLoading,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const useMoviesContext = () => useContext(MoviesContext);

export { MoviesProvider };
export default useMoviesContext;
