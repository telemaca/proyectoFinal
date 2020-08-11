import React from "react";
import styled from "styled-components";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";

import Section from "../components/native components/Section";

import Hero from "../components/Hero";
import CardListPreview from "../components/CardListPreview";

const MainFlex = styled.main`
  display: flex;
  flex-direction: column;
  transform: translateX(-0.7px);
`;

const Home = () => {
  const {
    trendingMovie,
    trendingMovies,
    trendingSeries,
  } = useMoviesSeriesContext();

  return (
    <MainFlex>
      <Section>
        <Hero data={trendingMovie} link="movie" />
      </Section>

      <CardListPreview title="Trending Movies" elements={trendingMovies} />
      <CardListPreview title="Trending Tv Show" elements={trendingSeries} />
    </MainFlex>
  );
};

export default Home;
