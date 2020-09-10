import React from "react";
import styled from "styled-components";

import useSearchContext from "../contexts/SearchContext";

import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Pagination from "../components/Pagination";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const SearchPage = () => {
  const { searchResults } = useSearchContext();

  return (
    <>
      <StyledSection>
        <SearchBar />
        <SearchResults />
        {searchResults.length > 0 && <Pagination />}
      </StyledSection>
    </>
  );
};

export default SearchPage;
