import React, { useEffect, useState } from "react";
import { Route, Switch, useParams, useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

import useSeriesContext from "../contexts/SeriesContext";

import Hero from "../components/Hero";
import SerieNavLinks from "../components/SerieNavLinks";
import SerieInfo from "../components/SerieInfo";
import SerieSeasons from "../components/SerieSeasons";
import SimilarSeries from "../components/SimilarSeries";
import MainFlex from "../components/MainFlex";
import LoadingPage from "../pages/LoadingPage";
import ButtonBack from "../components/ButtonBack"

const SeriePage = () => {
  const { tvId } = useParams();
  const { path } = useRouteMatch();
  const history = useHistory()  
  const { popularSeries } = useSeriesContext();
  const [selectedSerie, setSelectedSerie] = useState({});
  const [similarSeries, setSimilarSeries] = useState([]);
  const [isSerieDataLoading, setIsSerieDataLoading] = useState(true); 
  
  const handleGoBackClick = () => {
    history.push("/tv")
  }
  
  useEffect(() => {
    setIsSerieDataLoading(true);
    axios
      .get(`${API_URL}tv/${tvId}?api_key=${API_KEY}`)
      .then((response) => {
        setSelectedSerie(response.data);        
        setIsSerieDataLoading(false);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${API_URL}tv/${tvId}/similar?api_key=${API_KEY}`)
      .then((response) => {
        setSimilarSeries(response.data.results);
      })
      .catch((err) => console.log(err));
  }, [tvId]);

  return isSerieDataLoading ? (
    <LoadingPage />
  ) : (
    <MainFlex>    
      <ButtonBack handleClick={handleGoBackClick}/>
      <Hero data={selectedSerie} media_type="tv" page="secondary" />
      <SerieNavLinks />
      <Switch>
        <Route path={`${path}/info`}>
          <SerieInfo data={selectedSerie} />
        </Route>
        <Route path={`${path}/season/:seasonNumber`}>
          <SerieSeasons data={selectedSerie} />
        </Route>
        <Route path={`${path}/similar`}>
          <SimilarSeries
            series={similarSeries.length !== 0 ? similarSeries : popularSeries}
            notFound={similarSeries.length === 0}
          />
        </Route>
      </Switch>
    </MainFlex>
  );
};

export default SeriePage;
