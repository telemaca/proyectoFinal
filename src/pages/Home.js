import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Hero from "../components/Hero";
import CardListPreview from '../components/CardListPreview'
import CardMovie from '../components/CardMovie'
import CardSerie from '../components/CardSerie'

import API_KEY from "../data/apiKey";

const StyledContainer = styled.div`
  width: 95vw;
  transform: translateX(-0.7px);
`;

const Container = styled.div `
  display: flex;
  flex-direction: column;
`
const ContainerFlex = styled.div `
  display: flex;
  
`

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then((response) => {
        setTrendingMovie(response.data.results[0]);
        setTrendingMovies(response.data.results.slice(0, 5))
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
      .then((response) => {        
        setTrendingSeries(response.data.results.slice(0, 5))
      });
  }, []);

  return (
    <Container>
      <StyledContainer>
        <Hero data={trendingMovie} />
      </StyledContainer>
    
      <CardListPreview title= 'Trending Movies'>
        <ContainerFlex>
          {
          trendingMovies.map((movie) => (     
            <CardMovie data={movie}/>       
          ))    
          }
        </ContainerFlex>   
      </CardListPreview>

      <CardListPreview title= 'Trending Tv Show'>
        <ContainerFlex>
          {
          trendingSeries.map((tv) => (     
            <CardSerie data={tv}/>       
          ))    
          }
        </ContainerFlex>   
      </CardListPreview>
    </Container>
  );
};

export default Home;
