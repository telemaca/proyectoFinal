import React from "react";
import styled from "styled-components";

import useSearchContext from "../contexts/SearchContext";

import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const Bodycontainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const SearchPage = () => {
  const { searchResults } = useSearchContext();

  return (
    <Bodycontainer>
      <StyledSection>
        <SearchBar />
        <SearchResults />
        {searchResults.length > 0 && <Pagination />}
      </StyledSection>
      {searchResults.length > 0 && <Footer />}
    </Bodycontainer>
  );
};

export default SearchPage;
