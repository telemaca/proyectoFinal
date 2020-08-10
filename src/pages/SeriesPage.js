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

const SeriesPage = () => {
  const [popularSerie, setPopularSerie] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [onAirSeries, setOnAirSeries] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
      .then((response) => {
        setPopularSerie(response.data.results[0]);
        setPopularSeries(response.data.results.slice(0, 5))
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`)
      .then((response) => {        
        setTopRatedSeries(response.data.results.slice(0, 5))
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`)
      .then((response) => {        
        setOnAirSeries(response.data.results.slice(0, 5))
      });
  }, []);
  return (

    <Container>
      <StyledContainer>
        <Hero data={popularSerie} />
      </StyledContainer>
    
      <CardListPreview title= 'Popular TV Shows'>
        <ContainerFlex>
          {
          popularSeries.map((tv) => (     
            <CardMovie data={tv}/>       
          ))    
          }
        </ContainerFlex>   
      </CardListPreview>

      <CardListPreview title= 'Top Rated TV Shows'>
        <ContainerFlex>
          {
          topRatedSeries.map((tv) => (     
            <CardSerie data={tv}/>       
          ))    
            }
        </ContainerFlex>   
      </CardListPreview>

      <CardListPreview title= 'TV Shows Airing Today'>
        <ContainerFlex>
          {
          onAirSeries.map((tv) => (     
            <CardSerie data={tv}/>       
          ))    
          }
        </ContainerFlex>   
      </CardListPreview>
    </Container>
  );
};

export default SeriesPage;
