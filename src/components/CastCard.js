import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledArticle = styled.article`
  width: 13vw;
  font-family: "Roboto";
  margin-right: 4vw;
  position: relative;

  @media (max-width: 850px) {
    width: 26vw;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 19vw;
  transition: 0.3s;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
    transition: 0.3s;
    cursor: pointer;
  }

  @media (max-width: 850px) {
    height: 38vw;
  }
`;

const ActorName = styled.h3`
  font-size: 1vw;
  color: #fafafa;

  @media (max-width: 850px) {
    font-size: 2vw;
    margin-bottom: 0;
  }
`;

const CharacterName = styled.p`
  font-size: 0.8vw;
  color: grey;
  margin-bottom: 4vw;

  @media (max-width: 850px) {
    font-size: 1.6vw;
  }
`;

const CastCard = ({ data }) => {
  const { profile_path, name, character, id } = data;
  const history = useHistory();

  const handleMediaClick = (id) => {
    history.push(`/person/${id}`);
  };

  return (
    <StyledArticle>
      <StyledImg
        onClick={() => handleMediaClick(id)}
        src={
          profile_path === null
            ? "https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available.jpg"
            : `https://image.tmdb.org/t/p/w342/${profile_path}`
        }
      />
      <ActorName>{name}</ActorName>
      <CharacterName>{character}</CharacterName>
    </StyledArticle>
  );
};

export default CastCard;
