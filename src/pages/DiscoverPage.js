import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

import MainFlex from "../components/MainFlex";
import Home from "../pages/Home";
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

const DiscoverPage = () => {
  const { tvId, seasonNumber } = useParams();
  const [media, setMedia] = useState();

  const history = useHistory();

  const handleChange = (e) => {
    // const numberValue = Number(e.target.value);
    // history.push(`/tv/${tvId}/season/${numberValue}`);
    setMedia(e.target.value);
  };

  console.log(media);

  useEffect(() => {
    // setIsSerieDataLoading(true);
    axios
      .get(`${API_URL}tv/${tvId}/season/${seasonNumber}?api_key=${API_KEY}`)
      .then((response) => {
        //   setEpisodes(response.data);
        //   setIsSerieDataLoading(false);
      });
  }, []);

  return (
    <Container>
      <Select onChange={handleChange}>
        {/* {seasons.map((media) => ( */}
        <Option value={"tv"}>Movies</Option>
        <Option value={"series"}>Series</Option>
        {/* ))} */}
      </Select>
      <Home />
    </Container>
  );
};

export default DiscoverPage;
