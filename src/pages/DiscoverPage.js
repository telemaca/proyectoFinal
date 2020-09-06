import React, { useEffect, useState, useContext } from "react";
import {
  Route,
  Switch,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
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
  const [isSent, setIsSent] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState("movie");
  const [isSerieDataLoading, setIsSerieDataLoading] = useState();
  const [handleToggle, setHandleToggle] = useState(false);
  const [results, setResults] = useState();
  const [genres, setGenres] = useState([{}]);
  const [oldestYear, setOldestYear] = useState();

  const {
    currentPage,
    setCurrentPage,
    maxPage,
    setMaxPage,
  } = usePaginationContext();

  const handleClick = () => {
    setIsSent(!isSent);
    setHandleToggle(false);
  };

  // useEffect(() => {
  //   setIsSerieDataLoading(true);
  //   axios
  //     .get(`${API_URL}discover/${selectedMedia}?api_key=${API_KEY}`)
  //     .then((response) => {
  //       setResults(response.data.results);
  //       console.log(results);
  //       //   setOldestYear(results.map((result) => {
  //       //       r
  //       //   }))
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleMedia = (e) => {
    setSelectedMedia(e.target.value);
  };

  useEffect(() => {
    setIsSerieDataLoading(true);
    axios
      .get(
        `${API_URL}discover/${selectedMedia}?api_key=${API_KEY}&page=${currentPage}`
      )
      .then((response) => {
        setResults(response.data.results);
        setMaxPage(response.data.total_pages);
        setIsSerieDataLoading(false);
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
  }, [selectedMedia]);

  //   useEffect(() => {
  //     for (let i = 1; i <= maxPage; i++) {
  //       axios
  //         .get(`${API_URL}discover/${selectedMedia}?api_key=${API_KEY}&page=${i}`)
  //         .then((response) => {
  //           setOldestYear(
  //             response.data.results.reduce((a, b) =>
  //               a.release_date < b.release_date ? a : b
  //             )
  //           );
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   }, [selectedMedia]);

  console.log(oldestYear);

  return isSerieDataLoading ? (
    <LoadingPage />
  ) : (
    <>
      <Input />
      <ContainerToggle onClick={() => setHandleToggle(!handleToggle)}>
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
            <Option disabled selected>
              Choose by media:
            </Option>
            <Option value={"movie"}>Movies</Option>
            <Option value={"tv"}>TV Series</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Choose by genre:
            </Option>
            {genres && genres.map((genre) => <Option>{genre.name}</Option>)}
          </Select>
          <Select>
            <Option disabled selected>
              Choose release parameter:
            </Option>
            <Option>Before than</Option>
            <Option>Exact year</Option>
            <Option>After than</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Choose parameter year:
            </Option>
            <Option>Movies</Option>
            <Option>TV Series</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Order by:
            </Option>
            Más populares Menos populares Más nuevas Más viejas Con más
            recaudación Con menos recaudación
            <Option>Most popular</Option>
            <Option>Less popular</Option>
            <Option>Newest</Option>
            <Option>Oldest</Option>
            <Option>Higher incomes</Option>
            <Option>Lower incomes</Option>
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
