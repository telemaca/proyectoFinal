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

const MoviesPage = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => {
        setPopularMovie(response.data.results[0]);
        setPopularMovies(response.data.results.slice(0, 5))
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((response) => {        
        setTopRatedMovies(response.data.results.slice(0, 5))
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then((response) => {        
        setNowPlayingMovies(response.data.results.slice(0, 5))
      });
  }, []);
  return (
    <Container>
      <StyledContainer>
        <Hero data={popularMovie} />
      </StyledContainer>
    
      <CardListPreview title= 'Popular Movies'>
        <ContainerFlex>
          {
          popularMovies.map((movie) => (     
            <CardMovie data={movie}/>       
          ))    
          }
        </ContainerFlex>   
      </CardListPreview>

      <CardListPreview title= 'Top Rated Movies'>
        <ContainerFlex>
          {
          topRatedMovies.map((movie) => (     
            <CardSerie data={movie}/>       
          ))    
            }
        </ContainerFlex>   
      </CardListPreview>

      <CardListPreview title= 'Now Playing Movies'>
        <ContainerFlex>
          {
          nowPlayingMovies.map((movie) => (     
            <CardSerie data={movie}/>       
          ))    
          }
        </ContainerFlex>   
      </CardListPreview>
    </Container>
  );
};

export default MoviesPage;

