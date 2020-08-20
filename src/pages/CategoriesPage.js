import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import { useParams } from "react-router-dom";

import BasicCard from "../components/CardMovie";
import Section from "../components/native components/Section";
import MainFlex from "../components/MainFlex";

import API_KEY from "../data/apiKey";

const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-bottom: 4vw;
  width: 93vw;
`;

const Title = styled.h3`
  margin: 0 2.4vw;
  padding: 2vw 0;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: roboto;
  letter-spacing: 0.4px;
  color: #fff;
`;

const CategoriesPage = () => {
  const { categoryId, media } = useParams();
  const [categoriesMovies, setCategoriesMovies] = useState([]);

  const categoryTitle = categoryId.split("_").join(" ");
  const upperCaseTitle =
    categoryTitle[0].toUpperCase() + categoryTitle.slice(1);

  useEffect(() => {
    axios
      .get(
        categoryId === "trending"
          ? `https://api.themoviedb.org/3/${categoryId}/${media}/day?api_key=${API_KEY}`
          : `https://api.themoviedb.org/3/${media}/${categoryId}?api_key=${API_KEY}`
      )
      .then((response) => {
        setCategoriesMovies(response.data.results);
      });
  }, [categoryId, media]);

  return (
    <MainFlex>
      <Section>
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
      </Section>
    </MainFlex>
  );
};

export default CategoriesPage;
