import React from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
  width: 13vw;
  overflow: hidden;
  font-family: "Roboto";
  margin-right: 4vw;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 19vw;
  transition: 0.3s;
  &:hover {
    transform: scale(1.02);
    transition: 0.3s;
  }
`;

const ActorName = styled.h3`
  font-size: 1vw;
  color: #fafafa;
`;

const CharacterName = styled.p`
  font-size: 0.8vw;
  color: grey;
  margin-bottom: 4vw;
`;

const CastCard = ({ data }) => {
  const { profile_path, name, character } = data;
  return (
    <StyledArticle>
      <StyledImg
        src={
          profile_path === null
            ? "https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available.jpg"
            : `https://image.tmdb.org/t/p/original${profile_path}`
        }
      />
      <ActorName>{name}</ActorName>
      <CharacterName>{character}</CharacterName>
    </StyledArticle>
  );
};

export default CastCard;
