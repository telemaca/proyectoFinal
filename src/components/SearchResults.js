import React from "react";
import styled from "styled-components";

import useSearchContext from "../contexts/SearchContext";
import BasicCard from "./CardMovie";

const StyledSection = styled.section`
  padding: 3vw 5vw 3vw 9vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #1d1d1d;
  box-shadow: inset -100px -50px 110px 41px #000;
  @media (max-width: 850px) {
    padding-left: 5vw;
  }
`;

const StyledText = styled.p`
color: #fafafa;
font-family: "Roboto";
font-size: 2vw;
`

const SearchResults = () => {
  const { media, searchResults, notFound } = useSearchContext();

  return (
    <StyledSection>
      {notFound ? <StyledText>Sorry, no matching results.</StyledText> :
        searchResults.map((result) => (
          <BasicCard
            key={result.id}
            id={result.id}
            data={result}
            media_type={media}
            component="search"
          />
        ))
      }
    </StyledSection>
  );
};

export default SearchResults;
