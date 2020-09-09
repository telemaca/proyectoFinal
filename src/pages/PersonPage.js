import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

import useLanguageContext from "../contexts/LanguageContext";

import PersonInfo from "../components/PersonInfo";
import BasicCard from "../components/CardMovie";
import MainFlex from "../components/MainFlex";
import LoadingPage from "../pages/LoadingPage";
import ButtonBack from "../components/ButtonBack";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 3vw;
`;

const SectionTitle = styled.h3`
  font-family: "Roboto";
  color: #fafafa;
  font-size: 1.5vw;
  font-weight: 100;
  letter-spacing: 1px;
  margin-left: 3vw;
  @media (max-width: 850px) {
    font-size: 3vw;
  }
  @media (max-width: 650px) {
    font-size: 4.5vw;
  }
`;

const PersonPage = () => {
  const { personId } = useParams();
  const history = useHistory();
  const { language } = useLanguageContext();

  const [personData, setPersonData] = useState({});
  const [personMovies, setPersonMovies] = useState([]);
  const [personSeries, setPersonSeries] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  const handleGoBackClick = () => {
    history.goBack();
  };

  useEffect(() => {
    setIsDataLoading(true);
    axios
      .get(`${API_URL}person/${personId}?api_key=${API_KEY}`)
      .then((response) => {
        setPersonData(response.data);
        setIsDataLoading(false);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${API_URL}person/${personId}/movie_credits?api_key=${API_KEY}`)
      .then((response) => {
        setPersonMovies(response.data.cast);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${API_URL}person/${personId}/tv_credits?api_key=${API_KEY}`)
      .then((response) => {
        setPersonSeries(response.data.cast);
      })
      .catch((err) => console.log(err));
  }, [personId]);

  const gender = personData.gender === 1 ? "her" : "him";
  const genero = personData.gender === 1 ? "la" : "lo";

  return isDataLoading ? (
    <LoadingPage />
  ) : (
    <MainFlex style={{ backgroundColor: "#191919" }}>
      <ButtonBack handleClick={handleGoBackClick} />
      <PersonInfo data={personData} />
      <SectionTitle>
        {language === "eng"
          ? `You may know ${gender} for...`
          : `Quizá ${genero} conozcas por...`}
      </SectionTitle>
      <StyledContainer style={{ borderBottom: "1px dashed #fafafa" }}>
        {personMovies
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 15)
          .map((movie) => (
            <BasicCard
              data={movie}
              media_type="movie"
              style={{ marginLeft: "2vw" }}
            />
          ))}
      </StyledContainer>
      <SectionTitle>TV Appearances</SectionTitle>
      <StyledContainer>
        {personSeries
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 15)
          .map((serie) => (
            <BasicCard
              data={serie}
              media_type="tv"
              style={{ marginLeft: "2vw" }}
            />
          ))}
      </StyledContainer>
    </MainFlex>
  );
};

export default PersonPage;
