import React, { useState } from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
  width: 13vw;
  font-family: "Roboto";
  margin-right: 4vw;
  position: relative;
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

const CastCard = ({ data, index }) => {
  const { profile_path, name, character, id } = data;
  const [isPersonSelected, setIsPersonSelected] = useState(false);

  const handleClickClose = () => setIsPersonSelected(false);

  return (
    <StyledArticle>
      <StyledImg
        onClick={() => setIsPersonSelected(true)}
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
