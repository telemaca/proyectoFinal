import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import useLanguageContext from "../contexts/LanguageContext";
import useSeriesContext from "../contexts/SeriesContext";

import CardEpisode from "../components/CardEpisode";
import SmallLoader from "./SmallLoader";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 3vw;
  background-color: black;
  background-color: #1d1d1d;
  box-shadow: inset -100px -50px 110px 41px #000;
  @media (max-width: 850px) {
    padding: 3vw 0 15vw 6vw;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 3vw;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Select = styled.select`
  color: #fafafa;
  height: 2vw;
  width: 7vw;
  margin-bottom: 2vw;
  padding-left: 0.7vw;
  font-family: "Roboto";
  font-size: 0.8vw;
  background-color: #1d1d1d;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  @media (max-width: 850px) {
    font-size: 1.4vw;
    height: 4vw;
    width: 13vw;
  }
  @media (max-width: 650px) {
    font-size: 2.5vw;
    height: 7vw;
    width: 22vw;
    border-radius: 6px;
    padding-left: 2vw;
  }
`;

const Option = styled.option`
  color: #fafafa;
  font-family: "Roboto";
  font-size: 1vw;
  margin: 5px;
  text-align: center;
  box-shadow: inset -100px -50px 110px 41px #000;
  @media (max-width: 850px) {
    font-size: 1.4vw;
  }
  @media (max-width: 650px) {
    font-size: 2.5vw;
  }
`;

const StyledOverview = styled.div`
  @media (max-width: 850px) {
    padding-bottom: 3vw;
  }
`;

const Text = styled.p`
  color: grey;
  font-family: "Roboto";
  font-size: 0.9vw;
  text-align: center;
  margin: 0.5vw 1.5vw;
  @media (max-width: 850px) {
    font-size: 1.5vw;
    margin: 1.1vw 2vw;
  }
  @media (max-width: 650px) {
    font-size: 2.5vw;
    margin: 1.9vw 3vw;
  }
`;

const SEASON_DATA = {
  eng: ["Season", "episodes"],
  spa: ["Temporada", "episodios"],
};

const SerieSeasons = ({ data }) => {
  const { tvId, seasonNumber } = useParams();
  const [isSerieDataLoading, setIsSerieDataLoading] = useState(true);
  const [episodes, setEpisodes] = useState();
  const { setSeasonNumber } = useSeriesContext();
  const { language } = useLanguageContext();
  const { seasons } = data;

  const history = useHistory();

  const handleChange = (e) => {
    const numberValue = Number(e.target.value);
    setSeasonNumber(numberValue);
    history.push(`/tv/${tvId}/season/${numberValue}`);
  };

  useEffect(() => {
    setIsSerieDataLoading(true);
    setSeasonNumber(1);
    axios
      .get(`${API_URL}tv/${tvId}/season/${seasonNumber}?api_key=${API_KEY}`)
      .then((response) => {
        setEpisodes(response.data);
        setIsSerieDataLoading(false);
      });
  }, [seasonNumber]);

  return isSerieDataLoading ? (
    <SmallLoader type="season" />
  ) : (
    <StyledSection>
      {tvId && seasons && (
        <>
          <StyledContainer>
            <Container>
              <Select onChange={handleChange} value={seasonNumber}>
                {seasons
                  .filter((season) => season.name !== "Specials")
                  .map((season, index) => (
                    <Option value={index + 1} key={season.id} id={season.id}>
                      {SEASON_DATA[language][0]} {index + 1}
                    </Option>
                  ))}
              </Select>
              {episodes && (
                <StyledOverview>
                  <Text>
                    {episodes.episodes.length} {SEASON_DATA[language][1]}
                  </Text>
                </StyledOverview>
              )}
            </Container>
            {episodes &&
              episodes.episodes.map((episode, i) => (
                <CardEpisode
                  key={i}
                  data={episode}
                  media_type="tv"
                  customStyle={{ marginBottom: "3vw" }}
                />
              ))}
          </StyledContainer>
        </>
      )}
    </StyledSection>
  );
};

export default SerieSeasons;
