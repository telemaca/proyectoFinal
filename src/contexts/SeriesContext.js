import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

const SeriesContext = createContext();

const SeriesProvider = ({ children }) => {
  const [isSeriesDataLoading, setIsSeriesDataLoading] = useState(true);
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [popularSerie, setPopularSerie] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [onAirSeries, setOnAirSeries] = useState([]);
  const [seasonNumber, setSeasonNumber] = useState(1)

  useEffect(() => {
    setIsSeriesDataLoading(true);
    axios
      .get(`${API_URL}trending/tv/day?api_key=${API_KEY}`)
      .then((response) => {
        setTrendingSeries(response.data.results);
        setIsSeriesDataLoading(false);
      });

    axios.get(`${API_URL}tv/popular?api_key=${API_KEY}`).then((response) => {
      setPopularSerie(response.data.results[0]);
      setPopularSeries(response.data.results);
    });

    axios.get(`${API_URL}tv/top_rated?api_key=${API_KEY}`).then((response) => {
      setTopRatedSeries(response.data.results);
    });

    axios.get(`${API_URL}tv/on_the_air?api_key=${API_KEY}`).then((response) => {
      setOnAirSeries(response.data.results);
    });
  }, []);

  return (
    <SeriesContext.Provider
      value={{
        trendingSeries,
        popularSerie,
        popularSeries,
        topRatedSeries,
        onAirSeries,
        isSeriesDataLoading,
        seasonNumber,
        setSeasonNumber,
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
};

const useSeriesContext = () => useContext(SeriesContext);

export { SeriesProvider };
export default useSeriesContext;

