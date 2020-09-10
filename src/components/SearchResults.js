import React from "react";
import styled from "styled-components";

import useSearchContext from "../contexts/SearchContext";
import LoadingPage from "../pages/LoadingPage";
import BasicCard from "./CardMovie";

const StyledSection = styled.section`
  padding: 3vw 7vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #1d1d1d;
  box-shadow: inset -100px -50px 110px 41px #000;
`;
const SearchResults = () => {
  const { media, searchResults } = useSearchContext();

  return (
    <StyledSection>
      {searchResults.map((result) => (
        <BasicCard
          key={result.id}
          id={result.id}
          data={result}
          media_type={media}
        />
      ))}
    </StyledSection>
  );
};

export default SearchResults;
