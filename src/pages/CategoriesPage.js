import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import { useParams } from "react-router-dom";

import BasicCard from "../components/CardMovie";
import Section from "../components/native components/Section";
import Pagination from "../components/Pagination"
import MainFlex from "../components/MainFlex";
import LoadingPage from "../pages/LoadingPage";

import usePaginationContext from "../contexts/PaginationContext"
import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

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
    justify-content: initial;
    margin: 2vw 0 0 7vw;
    padding-bottom: 15vw;
  }
`;

const Title = styled.h3`
  margin: 0 2.4vw;
  padding: 2vw 0;
  font-size: 5vw;
  font-weight: 400;
  font-family: roboto;
  letter-spacing: 0.4px;
  color: #fff;

  @media (max-width: 850px) {
    margin: 4vw 0 0 7vw;
  }
`;

const CategoriesPage = () => {
  const { categoryId, media } = useParams();
  const [categoriesMovies, setCategoriesMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentPage, setCurrentPage, maxPage, setMaxPage } = usePaginationContext()

  const categoryTitle = categoryId.split("_").join(" ");
  const upperCaseTitle =
    categoryTitle[0].toUpperCase() + categoryTitle.slice(1);

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
      });
  }, [categoryId, media, currentPage]);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <MainFlex>
      <StyledSection>
        <Title>
          {media === "tv"
            ? `${upperCaseTitle} TV Shows`
            : `${upperCaseTitle} Movies`}
        </Title>
        <ContainerFlex>
          {categoriesMovies.map((movie) => (
            <BasicCard data={movie} media_type={media} />
          ))}
        </ContainerFlex>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage}/>
      </StyledSection>
      
    </MainFlex>
  );
};

export default CategoriesPage;
