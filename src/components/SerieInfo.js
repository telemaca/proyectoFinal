import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import useLanguageContext from "../contexts/LanguageContext";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

const StyledSection = styled.section`
  display: flex;
  padding: 3vw;
  background-color: black;
  color: #fafafa;
  font-family: "Roboto";
  background-color: #1d1d1d;
  box-shadow: inset 0px 30px 100px -30px #000;
  @media (max-width: 850px) {
    margin-bottom: 15vw;
    padding-top: 3vw;
  }
`;

const StyledImg = styled.img`
  height: 25vw;
  width: 17vw;
  @media (max-width: 850px) {
    height: 46vw;
    width: 30vw;
  }
  @media (max-width: 650px) {
    height: 59vw;
    width: 40vw;
  }
`;

const StyledContainer = styled.div`
  padding-left: 3vw;
`;

const StyledOverview = styled.div`
  @media (min-width: 850px) {
    width: 90%;
    margin-bottom: 2vw;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  margin: 1vw 0;
`;

const StyledCategory = styled.div`
  width: 150px;
  font-size: 1vw;
  @media (max-width: 850px) {
    font-size: 1.5vw;
  }
  @media (max-width: 650px) {
    font-size: 2.3vw;
    width: 20vw;
  }
`;

const StyledTitle = styled.h2`
  font-size: 1.5vw;
  @media (max-width: 850px) {
    font-size: 2.5vw;
    margin-top: 0;
  }
  @media (max-width: 650px) {
    font-size: 4vw;
    /* margin-top: 0; */
  }
`;

const StyledText = styled.div`
  font-size: 1vw;
  @media (max-width: 850px) {
    font-size: 1.5vw;
    max-width: 84%;
  }
  @media (max-width: 650px) {
    font-size: 2.3vw;
    width: -webkit-fill-available;
  }
`;

const TITLES = {
  eng: [
    "Storyline",
    "Original Title",
    "Genre",
    "Released",
    "Seasons",
    "Episodes",
  ],
  spa: [
    "Sinopsis",
    "Título original",
    "Género(s)",
    "Estreno",
    "Temporadas",
    "Episodios",
  ],
};

const SerieInfo = ({ data }) => {
  const { language } = useLanguageContext();
  const [translations, setTranslations] = useState([]);

  const {
    overview,
    poster_path,
    genres,
    first_air_date,
    number_of_seasons,
    number_of_episodes,
    original_language,
    original_name,
    id,
  } = data;

  const getReleaseDate = () => {
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
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const serieDate = new Date(first_air_date);
    return `${serieDate.getDate() + 1} ${language === "spa" ? "de" : ""} ${
      language === "eng"
        ? months[serieDate.getMonth()]
        : meses[serieDate.getMonth()]
    }, ${serieDate.getFullYear()}`;
  };

  useEffect(() => {
    axios
      .get(`${API_URL}tv/${id}/translations?api_key=${API_KEY}`)
      .then((response) => {
        setTranslations(response.data.translations);
      });
  }, [language]);

  const spanishText = translations.find(
    (translation) => translation.name === "Español"
  );

  const hasSpanishTranslation =
    translations.length > 1 &&
    spanishText !== undefined &&
    spanishText.data.overview !== "";

  return (
    <StyledSection>
      <StyledImg src={`https://image.tmdb.org/t/p/original${poster_path}`} />
      <StyledContainer>
        <StyledOverview>
          <StyledTitle>{TITLES[language][0]}</StyledTitle>
          <StyledText>
            {language === "spa" && hasSpanishTranslation
              ? spanishText.data.overview
              : overview}
          </StyledText>
        </StyledOverview>
        <div>
          <StyledList>
            {original_language !== "en" && (
              <StyledListItem>
                <StyledCategory
                  style={{
                    fontWeight: 800,
                    fontSize: "1.2vw",
                    letterSpacing: "1px",
                  }}
                >
                  {TITLES[language][1]}
                </StyledCategory>
                <StyledText>{original_name}</StyledText>
              </StyledListItem>
            )}
            <StyledListItem>
              <StyledCategory>{TITLES[language][2]}</StyledCategory>
              <StyledText>
                {genres.map((genre, i) => (
                  <span>
                    {/* si el género es el último, no lleva coma; si no, sí */}
                    {i === genres.length - 1 ? genre.name : genre.name + ", "}
                  </span>
                ))}
              </StyledText>
            </StyledListItem>
            <StyledListItem>
              <StyledCategory>{TITLES[language][3]}</StyledCategory>
              <StyledText>{getReleaseDate()}</StyledText>
            </StyledListItem>
            <StyledListItem>
              <StyledCategory>{TITLES[language][4]}</StyledCategory>
              <StyledText>{number_of_seasons}</StyledText>
            </StyledListItem>
            <StyledListItem>
              <StyledCategory>{TITLES[language][5]}</StyledCategory>
              <StyledText>{number_of_episodes}</StyledText>
            </StyledListItem>
          </StyledList>
        </div>
      </StyledContainer>
    </StyledSection>
  );
};

export default SerieInfo;
