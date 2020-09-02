import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

import BasicCard from "../components/CardMovie";
import MainFlex from "../components/MainFlex";
import LoadingPage from "../pages/LoadingPage";

const PersonDetails = styled.div`
  display: flex;
  padding: 3vw;
  border-bottom: 1px dashed #fafafa;
`;

const PersonImg = styled.img`
  width: 15vw;
`;

const StyledContainerName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
`;

const StyledName = styled.h1`
  font-family: "Baloo Tamma 2";
  font-weight: 600;
  font-size: 3vw;
  color: #fafafa;
  margin: 0;
`;

const StyledDate = styled.p`
  font-family: "Roboto";
  font-size: 0.8vw;
  color: #fafafa;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 3vw;
  justify-content: space-between;
`;

const SectionTitle = styled.h3`
  font-family: "Roboto";
  color: #fafafa;
  font-size: 1.5vw;
  font-weight: 100;
  letter-spacing: 1px;
  margin-left: 3vw;
`;

const PersonPage = () => {
  const { personId } = useParams();

  const [personData, setPersonData] = useState({});
  const [personMovies, setPersonMovies] = useState([]);
  const [personSeries, setPersonSeries] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

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

  const getDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const specificDate = new Date(date);
    return `${months[specificDate.getMonth()]} ${
      specificDate.getDate() + 1
    }, ${specificDate.getFullYear()}`;
  };

  const getAge = () => {
    const birthday = new Date(personData.birthday);
    const today = new Date();
    const yearDifference = today.getFullYear() - birthday.getFullYear();
    const hadBirthday =
      birthday.getMonth() < today.getMonth() ||
      (birthday.getMonth() === today.getMonth() &&
        birthday.getDate <= today.getDate());

    return hadBirthday ? yearDifference : yearDifference - 1;
  };

  return isDataLoading ? (
    <LoadingPage />
  ) : (
    <MainFlex>
      <PersonDetails>
        <PersonImg
          src={
            personData.profile_path === null
              ? "https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available.jpg"
              : `https://image.tmdb.org/t/p/w342/${personData.profile_path}`
          }
        />
        <StyledContainerName>
          <StyledName>{personData.name}</StyledName>
          <StyledDate>
            Born on {getDate(personData.birthday)}{" "}
            {personData.deathday === null
              ? `(${getAge()} years)`
              : `  -  Died on ${getDate(personData.deathday)}`}
          </StyledDate>
          <p style={{ color: "#fafafa" }}>
            You may know {personData.gender === 1 ? "her" : "him"} for...
          </p>
        </StyledContainerName>
      </PersonDetails>
      <SectionTitle>Movies</SectionTitle>
      <StyledContainer style={{ borderBottom: "1px dashed #fafafa" }}>
        {personMovies
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 15)
          .map((movie) => (
            <BasicCard data={movie} media_type="movie" />
          ))}
      </StyledContainer>
      <SectionTitle>TV Appearances</SectionTitle>
      <StyledContainer>
        {personSeries
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 15)
          .map((serie) => (
            <BasicCard data={serie} media_type="tv" />
          ))}
      </StyledContainer>
    </MainFlex>
  );
};

export default PersonPage;
