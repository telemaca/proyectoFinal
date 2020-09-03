import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  padding: 3vw;
  background-color: black;
  color: #fafafa;
  font-family: "Roboto";
  background-color: #1d1d1d;
  box-shadow: inset 0px 30px 100px -30px #000;
`;

const StyledImg = styled.img`
  height: 25vw;
  width: 17vw;
`;

const StyledContainer = styled.div`
  padding-left: 3vw;
`;

const StyledOverview = styled.div`
  width: 90%;
  margin-bottom: 2vw;
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
`;

const StyledTitle = styled.h2`
  font-size: 1.5vw;
`;

const StyledText = styled.div`
  font-size: 1vw;
`;

const SerieInfo = ({ data }) => {
  const {
    overview,
    poster_path,
    genres,
    first_air_date,
    number_of_seasons,
    number_of_episodes,
    original_language,
    original_name,
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
    const serieDate = new Date(first_air_date);
    return `${serieDate.getDate() + 1} ${
      months[serieDate.getMonth()]
    }, ${serieDate.getFullYear()}`;
  };

  return (
    <StyledSection>
      <StyledImg src={`https://image.tmdb.org/t/p/original${poster_path}`} />
      <StyledContainer>
        <StyledOverview>
          <StyledTitle>Storyline</StyledTitle>
          <StyledText>{overview}</StyledText>
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
                  Original Title
                </StyledCategory>
                <StyledText>{original_name}</StyledText>
              </StyledListItem>
            )}
            <StyledListItem>
              <StyledCategory>Genre</StyledCategory>
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
              <StyledCategory>Released</StyledCategory>
              <StyledText>{getReleaseDate()}</StyledText>
            </StyledListItem>
            <StyledListItem>
              <StyledCategory>Seasons</StyledCategory>
              <StyledText>{number_of_seasons}</StyledText>
            </StyledListItem>
            <StyledListItem>
              <StyledCategory>Episodes</StyledCategory>
              <StyledText>{number_of_episodes}</StyledText>
            </StyledListItem>
          </StyledList>
        </div>
      </StyledContainer>
    </StyledSection>
  );
};

export default SerieInfo;
