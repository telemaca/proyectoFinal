import React from "react";
import styled, { css } from "styled-components";
import { SiImdb } from "react-icons/si";

const textSharedStyle = css`
  font-family: "Roboto";
  font-size: 1vw;
  color: #fafafa;
  @media (max-width: 1100px) {
    font-size: 1.3vw;
  }
`;

const PersonDetails = styled.div`
  display: flex;
  padding: 4.5vw;
  @media (max-width: 1030px) {
    padding-top: 5.5vw;
  }
  @media (max-width: 610px) {
    padding-top: 9vw;
  }
  @media (max-width: 280px) {
    padding-top: 12vw;
  }
`;

const PersonImg = styled.img`
  width: 18vw;
  height: 27vw;
  @media (max-width: 850px) {
    width: 25vw;
    height: 36vw;
  }
  @media (max-width: 650px) {
    width: 40vw;
    height: 55vw;
  }
`;

const StyledContainerName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2vw;
  position: relative;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const StyledName = styled.h1`
  font-family: "Baloo Tamma 2";
  font-weight: 600;
  font-size: 3vw;
  color: #fafafa;
  margin: 0;
  @media (max-width: 850px) {
    font-size: 5vw;
    line-height: 5vw;
  }

  @media (max-width: 650px) {
    font-size: 9vw;
    line-height: 9vw;
    padding-top: 3px;
  }
`;

const StyledLink = styled.a`
  @media (max-width: 650px) {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const ImdbIcon = styled(SiImdb)`
  font-size: 2.2vw;
  margin-left: 2vw;
  color: #fafafa;
  cursor: pointer;
  @media (max-width: 650px) {
    font-size: 9vw;
  }
`;

const StyledText = styled.p`
  ${textSharedStyle}
  @media (max-width: 850px) {
    font-size: 1.5vw;
  }
  @media (max-width: 650px) {
    font-size: 3vw;
  }
`;

const StyledBiography = styled.p`
  ${textSharedStyle}
  @media (max-width: 850px) {
    font-size: 1.4vw;
    line-height: 2vw;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;

const PersonInfo = ({ data }) => {
  const {
    birthday,
    name,
    profile_path,
    imdb_id,
    deathday,
    place_of_birth,
    biography,
  } = data;

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
    const personBirthday = new Date(birthday);
    const today = new Date();
    const yearDifference = today.getFullYear() - personBirthday.getFullYear();
    const hadBirthday =
      personBirthday.getMonth() < today.getMonth() ||
      (personBirthday.getMonth() === today.getMonth() &&
        personBirthday.getDate <= today.getDate());

    return hadBirthday ? yearDifference : yearDifference - 1;
  };

  return (
    <PersonDetails>
      <PersonImg
        src={
          profile_path === null
            ? "https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available.jpg"
            : `https://image.tmdb.org/t/p/w342/${profile_path}`
        }
      />
      <StyledContainerName>
        <FlexContainer>
          <StyledName>{name}</StyledName>
          <StyledLink
            target="_blank"
            href={`https://www.imdb.com/name/${imdb_id}`}
          >
            <ImdbIcon />
          </StyledLink>
        </FlexContainer>
        <StyledText>
          Born on {getDate(birthday)}{" "}
          {deathday === null
            ? `(${getAge()} years)`
            : `  -  Died on ${getDate(deathday)}`}
        </StyledText>
        {place_of_birth !== null && (
          <StyledText style={{ marginTop: 0 }}>
            Place of birth: {place_of_birth}
          </StyledText>
        )}
        <StyledBiography style={{ whiteSpace: "pre-line" }}>
          {biography}
        </StyledBiography>
      </StyledContainerName>
    </PersonDetails>
  );
};

export default PersonInfo;
