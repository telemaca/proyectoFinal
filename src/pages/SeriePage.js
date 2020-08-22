import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import API_KEY from "../data/apiKey";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";

import Hero from "../components/Hero";
import SerieNavLinks from "../components/SerieNavLinks";
import SerieInfo from "../components/SerieInfo";
import SerieSeasons from "../components/SerieSeasons";
import SimilarSeries from "../components/SimilarSeries";

const MainFlex = styled.main`
  display: flex;
  flex-direction: column;
  width: 95vw;
  transform: translateX(-0.7px);
`;

const SeriePage = () => {
  const { selectedId } = useMoviesSeriesContext();
  const [selectedSerie, setSelectedSerie] = useState({});
  const [selectedSerieSeasons, setSelectedSerieSeasons] = useState([]);
  const [similarSeries, setSimilarSeries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${selectedId}?api_key=${API_KEY}`)
      .then((response) => {
        setSelectedSerie(response.data);
      });
  }, [selectedId]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${selectedId}/credits?api_key=${API_KEY}`
      )
      .then((response) => {
        setSelectedSerieSeasons(response.data.cast.slice(0, 18));
      });
  }, [selectedId]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${selectedId}/similar?api_key=${API_KEY}`
      )
      .then((response) => {
        setSimilarSeries(response.data.results);
      });
  }, [selectedId]);

  return (
    <MainFlex>
      <Hero data={selectedSerie} link="tv" />
      <SerieNavLinks />
      <Switch>
        <Route path="/tv/:tvId/info">
          <SerieInfo data={selectedSerie} />
        </Route>
        {/* <Route path="/tv/:tvId/cast">
          <SerieSeasons actors={selectedSerieSeasons} />
        </Route> */}
        <Route path="/tv/:tvId/similar">
          <SimilarSeries series={similarSeries} />
        </Route>
      </Switch>
    </MainFlex>
  );
};

export default SeriePage;
