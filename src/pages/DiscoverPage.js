import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

import Pagination from "../components/Pagination";
import MainFlex from "../components/MainFlex";
import BasicCard from "../components/CardMovie";
import Footer from "../components/Footer";
import LoadingPage from "../pages/LoadingPage";
import ToggleStarWars from "../components/ToggleStarWars";

import usePaginationContext from "../contexts/PaginationContext";
import useLanguageContext from "../contexts/LanguageContext";

const Bodycontainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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
    margin: 25vw 0 0;
    padding-bottom: 15vw;
    width: 100%;
    justify-content: space-evenly;
  }

  @media (max-width: 1050px) {
    margin-top: 15vw;
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
  @media (max-width: 850px) {
    width: 40vw;
  }
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
    font-size: 3.5vw;
    height: 7vw;
    width: 35vw;
    border-radius: 6px;
    padding: 0 2vw;
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
    font-size: 5vw;
    width: 40vw;
    margin-top: 25vw;
  }
  @media (max-width: 1325px) {
    margin-top: 17vw;
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
    width: 35vw;
    height: 7vw;
  }
`;

const Text = styled.p`
  color: #fff;
  font-family: roboto;
  font-size: 0.8vw;
  letter-spacing: 0.1em;
  @media (max-width: 850px) {
    margin: 0;
    padding: 1.5vw;
    font-size: 3.5vw;
  }
`;

const FILTER_TEXTS = {
  eng: ["Choose by media:", "Movie", "TV Show", "By genre:", "All", "Release filter:", "Before than", "Exact year", "After than", "Year of filter:", "Order by:", "Most popular", "Less popular", "Newest", "Oldest", "Higher incomes", "Lower incomes", "Show Results", "Filter by:"],
  spa: ["Elegí el medio:", "Película", "Serie", "Por género", "Todos", "Por año de estreno", "Antes de", "Año exacto", "Después de", "Año", "Ordenar por:", "Más popular", "Menos popular", "Más nuevo", "Más viejo", "Mayores ingresos", "Menores ingresos", "Mostrar", "Filtrar por"]
}

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

  const { language } = useLanguageContext();

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
        <Bodycontainer>
          <MainFlex>
            {results && (
              <StyledSection>
                <ContainerFlex>
                  {results &&
                    results.map((result, i) => (
                      <BasicCard key={i} data={result} media_type={selectedMedia} />
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
          <Footer />
        </Bodycontainer>
        {handleToggle && (
          <FilterContainer>
            <StyledTitle>{FILTER_TEXTS[language][18]}</StyledTitle>
            <Select onChange={handleMedia}>
              <Option disabled>{FILTER_TEXTS[language][0]}</Option>
              <Option defaultValue value={"movie"}>
                {FILTER_TEXTS[language][1]}
              </Option>
              <Option value={"tv"}>{FILTER_TEXTS[language][2]}</Option>
            </Select>
            <Select onChange={handleGenre}>
              <Option disabled selected>
                {FILTER_TEXTS[language][3]}
              </Option>
              <Option value={"all"}>{FILTER_TEXTS[language][4]}</Option>
              {genres &&
                genres.map((genre) => (
                  <Option value={genre.id}>{genre.name}</Option>
                ))}
            </Select>
            <Select onChange={handleParameter}>
              <Option disabled selected>
                {FILTER_TEXTS[language][5]}
              </Option>
              <Option value={"before"}>{FILTER_TEXTS[language][6]}</Option>
              <Option value={"exact"}>{FILTER_TEXTS[language][7]}</Option>
              <Option value={"after"}>{FILTER_TEXTS[language][8]}</Option>
            </Select>
            <Select onChange={handleYear}>
              <Option disabled selected>
                {FILTER_TEXTS[language][9]}
              </Option>
              <Option value={"all"}>{FILTER_TEXTS[language][4]}</Option>
              {oldestYear && getYears().map((year) => <Option>{year}</Option>)}
            </Select>
            <Select onChange={handleSort}>
              <Option disabled selected>
                {FILTER_TEXTS[language][10]}
              </Option>
              <Option value={"popularity.desc"}>{FILTER_TEXTS[language][11]}</Option>
              <Option value={"popularity.asc"}>{FILTER_TEXTS[language][12]}</Option>
              <Option
                value={
                  selectedMedia === "movie"
                    ? "primary_release_date.desc"
                    : "first_air_date.desc"
                }
              >
                {FILTER_TEXTS[language][13]}
              </Option>
              <Option
                value={
                  selectedMedia === "movie"
                    ? "primary_release_date.asc"
                    : "first_air_date.asc"
                }
              >
                {FILTER_TEXTS[language][14]}
              </Option>
              <Option value={"revenue.desc"}>{FILTER_TEXTS[language][15]}</Option>
              <Option value={"revenue.asc"}>{FILTER_TEXTS[language][16]}</Option>
            </Select>
            <Button onClick={handleClick}>
              <Text>{FILTER_TEXTS[language][17]}</Text>
            </Button>
          </FilterContainer>
        )}
      </>
    );
};

export default DiscoverPage;
