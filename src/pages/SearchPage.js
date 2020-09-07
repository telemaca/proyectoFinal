import React, {useState} from 'react'
import styled from "styled-components";

import useSearchContext from "../contexts/SearchContext"

const Button = styled.button `
  width: 50px;
  height: 20px;
`
const Input = styled.input `
 width: 200px;
`
const Container = styled.div `
 margin-left: 50px;
`
const SearchPage = () => {
  const { handleSearchBarVisibleClick , searchBarVisible } = useSearchContext()
  /* const [searchBarVisible, setSearchBarVisible] = useState(false)
  const handleSearchBarVisibleClick = () => (
    setSearchBarVisible(!searchBarVisible)
   /*  setVisibleResults(false); */

  return (
    <>
    <Container>
      {searchBarVisible &&
      <Input/>
      }
    </Container>
    <Container>
      <Button onClick={() => handleSearchBarVisibleClick()}>click</Button>
    </Container>
    </>
  )
}

export default SearchPage


/* import React, {useState, useEffect, useParams}from 'react';
import styled from "styled-components";
import axios from "axios";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

import LoadingPage from "../pages/LoadingPage";
import Container from "../components/native components/Container"
import BasicCard from "../components/CardMovie";

const StyledSection = styled.section`
  margin-left: 6vw;
  padding: 3vw;
  background-color: black;
  background-color: #1d1d1d;
  box-shadow: inset -100px -50px 110px 41px #000;
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  color: #fafafa;
  height: 2vw;
  width: 7vw;
  margin-bottom: 2vw;
  padding-left: 0.7vw;
  font-family: "Roboto";
  font-size: 0.8vw;
  background-color: #1d1d1d;
  text-align: center;
`;

const Option = styled.option`
  color: #fafafa;
  font-family: "Roboto";
  font-size: 1vw;
  margin: 5px;
  text-align: center;
  box-shadow: inset -100px -50px 110px 41px #000;
`;

const Input = styled.input `
  width: 10vw;
`
const Form = styled.form `
`
const Button = styled.button `

`
const SearchPage = () => {
  const [media, setMedia] = useState("movie")
  const [mediaSearch, setMediaSearch] = useState("movie") 
  const [isSearchDataLoading, setIsSearchDataLoading] = useState(true)
  const [inputValue, setInputValue] = useState("")
  const [results, setResults] = useState([])

  const handleMediaChange = (event) => setMedia(event.target.value)

  const handleClick = () => setResults(...results)

  const handleInputChange = (event) => {    
    setInputValue(event.target.value);
  }

  useEffect(() => {
    setIsSearchDataLoading(true);
  
    axios
      .get(`https://api.themoviedb.org/3/search/${media}?api_key=${API_KEY}&query=${inputValue}`)
      .then((response) => {
        setResults(response.data.results)
        console.log(response.data.results)
        setIsSearchDataLoading(false)
      });
  }, [media, inputValue]);

  return (
    <StyledSection>
      <Container>
        <Select name="media" onChange={handleMediaChange}>
          <Option value="movie">Movies</Option>
          <Option value="tv">Tv Shows</Option>
        </Select>
        <Form 
            type="submit"
            onSubmit={handleInputChange}>
          <Input type="search" placeholder="Search..." name="input" value="law"/>
        </Form>
      </Container>
      <Button
            type="submit"
            onClick={handleClick}            
          >
           Search
          </Button>
      
      <Container>
        {results.map((result) => (
          <BasicCard key={result.id} id={result.id} data={result} media_type={media} />
        ))}
      </Container>
    </StyledSection>
  )
}

export default SearchPage

 */