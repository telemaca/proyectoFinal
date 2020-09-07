import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

import Home from "./Home";
import Pagination from "../components/Pagination";
import MainFlex from "../components/MainFlex";
import BasicCard from "../components/CardMovie";
import LoadingPage from "../pages/LoadingPage";
import ToggleStarWars from "../components/ToggleStarWars";

import usePaginationContext from "../contexts/PaginationContext";

const StyledSection = styled.section`
  background-color: #1d1d1d;
  box-shadow: inset -100px -50px 110px 41px #000;
`;

const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-bottom: 4vw;
  width: 93vw;
  margin-top: 5vw;

  @media (max-width: 850px) {
    justify-content: initial;
    margin: 2vw 0 0 7vw;
    padding-bottom: 15vw;
  }
`;

const Input = styled.input`
  background-color: #202124;
  font-family: "Roboto";
  padding-left: 5vw;
  font-size: 36px;
  position: fixed;
  top: 0;
  right: 0;
  width: 95vw;
  letter-spacing: 12px;
  z-index: 3;
  height: 8.5vh;
  border: none;
`;

const FilterContainer = styled.div`
  background-color: #202124;
  font-family: "Roboto";
  padding-left: 5vw;
  font-size: 36px;
  position: fixed;
  height: 100%;
  width: 20vw;
  right: 0;
  letter-spacing: 12px;
  z-index: 3;
`;

const ContainerToggle = styled.div`
  display: flex;
`;

const Select = styled.select`
  color: #fafafa;
  height: 3vw;
  margin: 2vw auto 1vw;
  width: 16vw;
  padding-left: 0.7vw;
  font-family: "Roboto";
  font-size: 0.8vw;
  background-color: #1d1d1d;
  text-align: center;
  cursor: pointer;
  @media (max-width: 850px) {
    font-size: 1.4vw;
    height: 4vw;
    width: 13vw;
  }
  @media (max-width: 650px) {
    font-size: 2.5vw;
    height: 7vw;
    width: 22vw;
    border-radius: 6px;
    padding-left: 2vw;
  }
`;

const Option = styled.option`
  color: #fafafa;
  font-family: "Roboto";
  font-size: 1vw;
  margin: 5px;
  text-align: center;
  box-shadow: inset -100px -50px 110px 41px #000;
  @media (max-width: 850px) {
    font-size: 1.4vw;
  }
  @media (max-width: 850px) {
    font-size: 2.5vw;
  }
`;

const StyledTitle = styled.h2`
  text-align: center;
  font-size: 1.5vw;
  color: white;
  width: 16vw;
  margin: 6vw 0 1vw;
  @media (max-width: 850px) {
    font-size: 4vw;
    margin-top: 0;
  }
`;

const Button = styled.button`
  color: #fafafa;
  height: 3vw;
  width: 16vw;
  padding-left: 0.7vw;
  font-family: "Roboto";
  font-size: 0.8vw;
  background-color: #1d1d1d;
  text-align: center;
  border-top: none;
  border-left: none;
  box-shadow: 2px 2px 9px -6px rgba(255, 242, 255, 1);
  cursor: pointer;
  &:hover {
    cursor: pointer;
    background-color: #2f2f2f;
    border: solid #2f2f2f;
    transition: 0.2s;
  }

  @media (max-width: 850px) {
    width: 15vw;
    height: 4vw;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

const Text = styled.p`
  color: #fff;
  font-family: roboto;
  font-size: 0.8vw;
  letter-spacing: 0.1em;
`;

const DiscoverPage = () => {
  const [isDataLoading, setIsDataLoading] = useState();
  const [isSent, setIsSent] = useState(true);
  const [handleToggle, setHandleToggle] = useState(false);
  const [genres, setGenres] = useState([{}]);
  const [oldestYear, setOldestYear] = useState();
  const [results, setResults] = useState();
  const [selectedMedia, setSelectedMedia] = useState("movie");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedParameter, setSelectedParameter] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSort, setSelectedSort] = useState();
  const [genreQuery, setGenreQuery] = useState("");
  const [parameterQuery, setParameterQuery] = useState("");
  const [sortByQuery, setSortByQuery] = useState("");

  const {
    currentPage,
    setCurrentPage,
    maxPage,
    setMaxPage,
  } = usePaginationContext();

  const handleClick = () => {
    selectedGenre &&
      setGenreQuery(
        selectedGenre === "all" ? "" : `&with_genres=${selectedGenre}`
      );
    selectedYear === "all" ? setParameterQuery("") : getYearsByParameter();
    selectedSort &&
      setSortByQuery(selectedSort ? `&sort_by=${selectedSort}` : "");
    setIsSent(true);
    setHandleToggle(false);
    setSelectedSort("popularity.desc");
  };

  console.log(selectedSort);

  const handleMedia = (e) => {
    setSelectedMedia(e.target.value);
  };

  const handleGenre = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleParameter = (e) => {
    setSelectedParameter(e.target.value);
  };

  const handleYear = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleSort = (e) => {
    setSelectedSort(e.target.value);
  };

  const getYearsByParameter = () => {
    if (selectedParameter === "before") {
      setParameterQuery(
        selectedMedia === "movie"
          ? `&release_date.lte=${selectedYear}-01-01`
          : `&first_air_date.lte=${selectedYear}-01-01`
      );
    } else if (selectedParameter === "exact") {
      setParameterQuery(
        selectedMedia === "movie"
          ? `&primary_release_year=${selectedYear}`
          : `&first_air_date_year=${selectedYear}`
      );
    } else if (selectedParameter === "after") {
      setParameterQuery(
        selectedMedia === "movie"
          ? `&release_date.gte=${selectedYear}-01-01`
          : `&first_air_date.gte=${selectedYear}-01-01`
      );
    }
  };

  const getYears = () => {
    const year = new Date().getFullYear();
    const yearsArray = [];

    for (let i = 0; i <= year - oldestYear; i++) {
      yearsArray[i] = oldestYear + i;
    }

    return yearsArray;
  };

  oldestYear && getYears();

  useEffect(() => {
    setIsDataLoading(true);
    axios
      .get(
        `${API_URL}discover/${selectedMedia}?api_key=${API_KEY}${genreQuery}${parameterQuery}${sortByQuery}&page=${currentPage}`
      )
      .then((response) => {
        setResults(response.data.results);
        setMaxPage(response.data.total_pages);
        setIsDataLoading(false);
      })
      .catch((err) => console.log(err));
  }, [isSent, currentPage]);

  useEffect(() => {
    axios
      .get(`${API_URL}genre/${selectedMedia}/list?api_key=${API_KEY}`)
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((err) => console.log(err));
    axios
      .get(
        `${API_URL}discover/${selectedMedia}?api_key=${API_KEY}&sort_by=primary_release_date.asc`
      )
      .then((response) => {
        selectedMedia === "tv"
          ? setOldestYear(
              new Date(
                response.data.results.find(
                  (result) =>
                    new Date(result.first_air_date).getFullYear() > 1800 &&
                    new Date(result.first_air_date).getFullYear() < 2000
                ).first_air_date
              ).getFullYear()
            )
          : setOldestYear(
              new Date(response.data.results[0].release_date).getFullYear()
            );
      })
      .catch((err) => console.log(err));
  }, [selectedMedia]);

  return isDataLoading ? (
    <LoadingPage />
  ) : (
    <>
      <Input />
      <ContainerToggle
        onClick={() => {
          setHandleToggle(!handleToggle);
          setIsSent(false);
        }}
      >
        <ToggleStarWars />
      </ContainerToggle>
      <MainFlex>
        {results && (
          <StyledSection>
            <ContainerFlex>
              {results &&
                results.map((result) => (
                  <BasicCard data={result} media_type={selectedMedia} />
                ))}
            </ContainerFlex>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              maxPage={maxPage}
            />
          </StyledSection>
        )}
      </MainFlex>
      {handleToggle && (
        <FilterContainer>
          <StyledTitle>Filter By</StyledTitle>
          <Select onChange={handleMedia}>
            <Option disabled>Choose by media:</Option>
            <Option defaultValue value={"movie"}>
              Movies
            </Option>
            <Option value={"tv"}>TV series</Option>
          </Select>
          <Select onChange={handleGenre}>
            <Option disabled selected>
              Choose by genre:
            </Option>
            <Option value={"all"}>All</Option>
            {genres &&
              genres.map((genre) => (
                <Option value={genre.id}>{genre.name}</Option>
              ))}
          </Select>
          <Select onChange={handleParameter}>
            <Option disabled selected>
              Choose release parameter:
            </Option>
            <Option value={"before"}>Before than</Option>
            <Option value={"exact"}>Exact year</Option>
            <Option value={"after"}>After than</Option>
          </Select>
          <Select onChange={handleYear}>
            <Option disabled selected>
              Choose parameter year:
            </Option>
            <Option value={"all"}>All</Option>
            {oldestYear && getYears().map((year) => <Option>{year}</Option>)}
          </Select>
          <Select onChange={handleSort}>
            <Option disabled selected>
              Order by:
            </Option>
            <Option value={"popularity.desc"}>Most popular</Option>
            <Option value={"popularity.asc"}>Less popular</Option>
            <Option
              value={
                selectedMedia === "movie"
                  ? "primary_release_date.desc"
                  : "first_air_date.desc"
              }
            >
              Newest
            </Option>
            <Option
              value={
                selectedMedia === "movie"
                  ? "primary_release_date.asc"
                  : "first_air_date.asc"
              }
            >
              Oldest
            </Option>
            <Option value={"revenue.desc"}>Higher incomes</Option>
            <Option value={"revenue.asc"}>Lower incomes</Option>
          </Select>
          <Button onClick={handleClick}>
            <Text>Show Results</Text>
          </Button>
        </FilterContainer>
      )}
    </>
  );
};

export default DiscoverPage;
