import React from 'react'

const SearchPage = () => {
  return (
    <div>
      
    </div>
  )
}

export default SearchPage


/* import React from "react";
import styled from "styled-components"
import BasicCard from "../components/CardMovie";
import Pagination from "../components/Pagination"

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";



const ContainerFlex = styled.div `

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
` 
const Container = styled.div `
display: block;
width: 95%;
`

const SearchPage = () => {
  
  const { popularMovies } = useMoviesSeriesContext();



  return (
  <Container>
    <ContainerFlex>
      {popularMovies.map((movie) => (
      <BasicCard data={movie}/>
      ))}    
    </ContainerFlex>
    <Container>
        <Pagination/>
    </Container>
  </Container>
  
  )
};

export default SearchPage; */
