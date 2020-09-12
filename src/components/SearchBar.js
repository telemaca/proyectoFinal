import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BsSearch as SearchIcon } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";
import useSearchContext from "../contexts/SearchContext";
import usePaginationContext from "../contexts/PaginationContext";
import useLanguageContext from "../contexts/LanguageContext";

const slidingBar = keyframes`
from {
  transform: translateY(-500px)
}
to {
  transform: translateY(0)
}

`;

const Button = styled.button`
  position: absolute;
  top: 26%;
  right: 10%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const CategoryButton = styled.button`
  cursor: pointer;
  color: #fafafa;
  background-color: transparent;
  border: 1px solid #fafafa;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 1vw;
  font-family: "Roboto";
  :hover {
    border: 1px dashed #fafafa;
    background-color: #272729;
  }
  @media (max-width: 850px) {
    font-size: 2vw;
  }
  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;

const InputSearch = styled.input`
  width: 90%;
  height: 3vw;
  margin: 20px 0;
  padding-left: 0.5vw;
  border: none;
  border-bottom: 1px solid white;
  background-color: #1d1d1d;
  position: relative;
  font-family: "Roboto";
  font-size: 1vw;
  color: #fafafa;
  justify-content: flex-start;
  &:focus {
    outline: none;
  }
  @media (max-width: 850px) {
    font-size: 2vw;
  }
  @media (max-width: 600px) {
    font-size: 3vw;
    padding-bottom: 10px;
  }
`;

const Label = styled.label`
  color: #fff;
  margin: 2vw;
  font-family: roboto;
  font-size: 1vw;
  @media (max-width: 850px) {
    font-size: 2vw;
  }
  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;

const Form = styled.form`
  margin-left: 4vw;
  position: relative;
`;

const StyledSection = styled.section`
  display: flex;
  margin-left: 75px;
  padding: 3vw 0 1vw 0;
  width: 95vw;
  background-color: #1d1d1d;
  animation: ${slidingBar} 1s;
  @media (max-width: 850px) {
    margin: 0;
    width: 100vw;
    padding: 4vw 0;
  }
`;
const InputRadio = styled.input``;
const StyledSearchIcon = styled(SearchIcon)`
  color: #fafafa;
  font-size: 1.5vw;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 850px) {
    font-size: 2vw;
  }
  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;

const FlexContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  position: relative;
  @media (max-width: 600px) {
    width: 50%;
  }
`;

const FlexContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  @media (max-width: 600px) {
    width: 50%;
  }
`;

const StyledText = styled.p`
  color: #fafafa;
  font-family: "Roboto";
  font-size: 1vw;

  @media (max-width: 850px) {
    font-size: 2vw;
    margin-top: 0;
  }
  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;

const TEXTS = {
  eng: [
    "Movie",
    "TV Show",
    "Search...",
    "OR -if you prefer",
    "Search by Categories",
  ],
  spa: [
    "Película",
    "Serie",
    "Buscar...",
    "O -si preferís-",
    "Buscá por categorías",
  ],
};

const SearchBar = () => {
  const {
    media,
    setMedia,
    setSearchResults,
    setIsLoading,
    isSent,
    setIsSent,
    query,
    setQuery,
  } = useSearchContext();
  const { currentPage, setCurrentPage, setMaxPage } = usePaginationContext();
  const { language } = useLanguageContext();

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    setQuery(inputValue);
    setCurrentPage(1);
    setIsSent(true);
  };

  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      setQuery(inputValue);
      setCurrentPage(1);
      setIsSent(true);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleMediaClick = (event) => {
    setMedia(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${API_URL}search/${media}?api_key=${API_KEY}${query !== "" && `&query=${query}&page=${currentPage}`
        }`
      )
      .then((response) => {
        setSearchResults(response.data.results);
        setMaxPage(response.data.total_pages);
        setInputValue("");
        setIsLoading(false);
        setIsSent(false);
      });
  }, [isSent, currentPage]);

  return (
    <>
      <StyledSection>
        <FlexContainerLeft>
          <Form onClick={(event) => handleMediaClick(event)}>
            <Label>
              {TEXTS[language][0]}
              <InputRadio
                type="radio"
                name="media_type"
                value="movie"
                defaultChecked
              />
            </Label>
            <Label>
              {TEXTS[language][1]}
              <InputRadio type="radio" name="media_type" value="tv" />
            </Label>
          </Form>

          <Form type="submit" onSubmit={handleSubmit}>
            <InputSearch
              onChange={(event) => handleInputChange(event)}
              value={inputValue}
              type="text"
              placeholder={TEXTS[language][2]}
              name="text"
              onKeyPress={handleOnKeyPress}
            />
            <Button type="submit" onClick={handleClick}>
              <StyledSearchIcon />
            </Button>
          </Form>
        </FlexContainerLeft>
        <FlexContainerRight>
          <StyledText>{TEXTS[language][3]}-</StyledText>
          <Link to="/discover">
            <CategoryButton>{TEXTS[language][4]}</CategoryButton>
          </Link>
        </FlexContainerRight>
      </StyledSection>
    </>
  );
};

export default SearchBar;
