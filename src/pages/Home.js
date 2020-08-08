import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Hero from "../components/Hero";

import API_KEY from "../data/apiKey";

const StyledContainer = styled.div`
  width: 100%;
`;

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then((response) => {
        setTrendingMovie(response.data.results[0]);
      });
  }, []);

  return (
    <StyledContainer>
      <Hero data={trendingMovie} />
    </StyledContainer>
  );
};

export default Home;
