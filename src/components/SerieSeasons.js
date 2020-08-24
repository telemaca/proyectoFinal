import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

import CardEpisode from "../components/CardEpisode";
import LoadingPage from "../pages/LoadingPage";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 3vw;
  background-color: black;
  background-color: #1d1d1d;
  box-shadow: inset -100px -50px 110px 41px #000;
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
`;

const Option = styled.option`
  color: #fafafa;
  font-family: "Roboto";
  font-size: 1vw;
  margin: 5px;
  text-align: center;
  box-shadow: inset -100px -50px 110px 41px #000;
`;

const StyledOverview = styled.div``;

const Text = styled.p`
  color: grey;
  font-family: "Roboto";
  font-size: 0.9vw;
  text-align: center;
  margin: 0.5vw 1.5vw;
`;

const SerieSeasons = ({ data }) => {
  const [isSerieDataLoading, setIsSerieDataLoading] = useState(true);
  const [seasonSelected, setSeasonSelected] = useState(1);
  const [episodes, setEpisodes] = useState();

  const { seasons } = data;

  const history = useHistory();

  const { tvId } = useParams();

  const handleChange = (e) => {
    setSeasonSelected(e.target.value);
    history.push(`/tv/${tvId}/season/${e.target.value}`);
  };

  useEffect(() => {
    setIsSerieDataLoading(true);
    axios
      .get(`${API_URL}tv/${tvId}/season/${seasonSelected}?api_key=${API_KEY}`)
      .then((response) => {
        setIsSerieDataLoading(false);
        setEpisodes(response.data);
      });
  }, [seasonSelected]);

  return isSerieDataLoading ? (
    <LoadingPage />
  ) : (
    <StyledSection>
      {tvId && seasons && (
        <>
          <StyledContainer>
            <Container>
              <Select onChange={handleChange} value={seasonSelected}>
                {seasons
                  .filter((season) => season.name !== "Specials")
                  .map((season, index) => (
                    <Option value={index + 1} key={season.id} id={season.id}>
                      Season {index + 1}
                    </Option>
                  ))}
              </Select>
              {episodes && (
                <StyledOverview>
                  <Text>{episodes.episodes.length} episodes</Text>
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
