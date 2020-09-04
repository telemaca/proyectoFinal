import React from "react";
import styled, { css, keyframes } from "styled-components";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const fadeIn = keyframes`
from {
  transform: scale(2);
}
to {
  transform: scale(1);
}
`;

const StyledContainer = styled.div`
  display: flex;
  margin-bottom: ${(props) => (props.page === "home" ? 0 : "2vw")};

  @media (max-width: 650px) {
    padding-top: 0;
  }
`;

const StyledDescription = styled.p`
  font-family: "Roboto";
  color: #fafafa;
  margin: 0;
  padding-left: 1vw;
  font-size: 1rem;

  @media (max-width: 650px) {
    font-size: 2.5vw;
  }
`;

const starsStyle = css`
  padding-right: 5px;
  color: #0d8cd6;
  font-size: 1rem;
  @media (max-width: 650px) {
    font-size: 2.5vw;
  }
`;

const StarFull = styled(BsStarFill)`
  ${starsStyle}
`;

const StarHalf = styled(BsStarHalf)`
  ${starsStyle}
`;

const StarEmpty = styled(BsStar)`
  ${starsStyle}
`;

const StyledSpan = styled.span`
  animation: ${fadeIn} 0.5s ${(props) => props.delay};
`;

const Rating = ({ rating, page, component = "hero" }) => {
  const showRating = (rating) => {
    const fullStars = Math.floor(rating / 2);
    const halfStars = rating / 2 - fullStars;
    const starArray = [];
    for (let i = 0; i < fullStars; i++) {
      starArray.push(<StarFull />);
    }
    if (halfStars >= 0.5) {
      starArray.push(<StarHalf />);
    }
    for (let i = starArray.length; i < 5; i++) {
      starArray.push(<StarEmpty />);
    }
    return starArray;
  };

  const finalRating = showRating(rating);

  return (
    <StyledContainer page={page}>
      {component === "hero"
        ? finalRating.map((star, i) => (
            <StyledSpan delay={`${i / 3}s`}>{star}</StyledSpan>
          ))
        : finalRating}
      <StyledDescription>{rating}</StyledDescription>
    </StyledContainer>
  );
};

export default Rating;
