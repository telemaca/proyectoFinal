import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import BasicCard from "../components/CardMovie";
import Pagination from "../components/Pagination";
import MainFlex from "../components/MainFlex";
import LoadingPage from "../pages/LoadingPage";
import Footer from "../components/Footer";

import usePaginationContext from "../contexts/PaginationContext";
import useLanguageContext from "../contexts/LanguageContext";
import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

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

  @media (max-width: 850px) {
    margin-top: 2vw;
    padding-bottom: 15vw;
  }
`;

const Title = styled.h3`
  margin: 0 2.4vw;
  padding: 2vw 0;
  font-size: 2vw;
  font-weight: 400;
  font-family: roboto;
  letter-spacing: 0.4px;
  color: #fff;

  @media (max-width: 850px) {
    margin: 4vw 0 0 7vw;
    font-size: 5vw;
  }
`;

const CATEGORIES_NAMES = {
  eng: {
    movie: {
      trending: "Trending Movies",
      popular: "Popular Movies",
      top_rated: "Top Rated Movies",
      now_playing: "Now Playing Movies",
    },
    tv: {
      trending: "Trending TV Shows",
      popular: "Popular TV Shows",
      top_rated: "Top Rated TV Shows",
      on_the_air: "TV Shows Airing Today",
    },
  },
  spa: {
    movie: {
      trending: "Películas en tendencia",
      popular: "Películas más populares",
      top_rated: "Películas mejor calificadas",
      now_playing: "Películas que se pueden ver ahora",
    },
    tv: {
      trending: "Series en tendencia",
      popular: "Series más populares",
      top_rated: "Series mejor calificadas",
      on_the_air: "Series que se pueden ver ahora",
    },
  },
};

const CategoriesPage = () => {
  const { categoryId, media } = useParams();
  const [categoriesMovies, setCategoriesMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentPage, setMaxPage } = usePaginationContext();
  const { language } = useLanguageContext();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        categoryId === "trending"
          ? `${API_URL}${categoryId}/${media}/day?api_key=${API_KEY}&page=${currentPage}`
          : `${API_URL}${media}/${categoryId}?api_key=${API_KEY}&page=${currentPage}`
      )
      .then((response) => {
        setCategoriesMovies(response.data.results);
        setMaxPage(response.data.total_pages);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [categoryId, media, currentPage]);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <Bodycontainer>
      <MainFlex>
        <StyledSection>
          <Title>{CATEGORIES_NAMES[language][media][categoryId]}</Title>
          <ContainerFlex>
            {categoriesMovies.map((movie, i) => (
              <BasicCard key={i} data={movie} media_type={media} />
            ))}
          </ContainerFlex>
          <Pagination />
        </StyledSection>
      </MainFlex>
      <Footer />
    </Bodycontainer>
  );
};

export default CategoriesPage;
