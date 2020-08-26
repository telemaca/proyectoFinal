import React from "react";
import styled from "styled-components";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const StyledContainer = styled.div`
  display: flex;
  margin-bottom: ${props => props.page === "home" ? 0 : "2vw"};
  
  @media(max-width: 950px) {
    padding-top: 2vh;
  }
`;

const StyledDescription = styled.p`
  font-family: "Roboto";
  color: #fafafa;
  margin: 0;
  padding-left: 1vw;
  font-size: 1rem;
`;

const StarFull = styled(BsStarFill)`
  padding-right: 5px;
  color: #0d8cd6;
  font-size: 1rem;
`;

const StarHalf = styled(BsStarHalf)`
  padding-right: 5px;
  color: #0d8cd6;
  font-size: 1rem;
`;

const StarEmpty = styled(BsStar)`
  padding-right: 5px;
  color: #0d8cd6;
  font-size: 1rem;
`;

const Rating = ({ rating, page }) => {
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

  return (
    <StyledContainer page={page}>
      {showRating(rating)}
      <StyledDescription>{rating}</StyledDescription>
    </StyledContainer>
  );
};

export default Rating;
