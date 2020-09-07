import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { BsSearch as SearchIcon } from "react-icons/bs";
import { useHistory } from "react-router-dom"

import useSearchContext from "../contexts/SearchContext"


const Button = styled.button `
  width: 4.5vw;
  height: 4.5vw;
  position: absolute;
  top: 4.7vw;
  right: 42.8vw;
  border-radius: 0 5px 5px 0;
  background-color: #202124;
  border: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 850px) {
    top: 7.2vw;
    right: 44.1vw;
    }
`
const InputSearch = styled.input `
  width: 50vw;
  height: 4.5vw;
  margin: 20px 0;
  padding-left: 1.5vw;
  border: none;
  background-color: #2C313B;
  border-radius: 5px;
  position: relative;
  color: #fafafa;
  justify-content: flex-start;
  &:focus {
  outline: none;
  }
`

const Container = styled.div `
  margin: 0 3vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Label = styled.label `
  color: #fff;
  margin: 2vw;
  font-family: roboto;
`
const Form = styled.form `
  margin-left: 4vw;
`
const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 6vw;
    padding-top: 20px;
    position: absolute;
    z-index: 600;
    width: 100%;
    background-color: black;      
    @media (max-width: 850px) {
        margin: 0;
       
    }
`
const InputRadio = styled.input `

`
const StyledSearchIcon = styled(SearchIcon) `
  color: #fafafa;
  font-size: 1.5vw;
  &:hover {
    cursor: pointer;
  }    
`

const SearchBar = () => {
  const { setNewSearch, setShowResults,  handleMediaClick, handleInputChange, inputValue } = useSearchContext()
  const history = useHistory()

  const handleClick = () => {
    history.push("/discover");   
    setShowResults(false);
  };

  return (
    <>
    <StyledSection>
      <Form  onClick={(event) => handleMediaClick(event)}>
        <Label >
          Movie
          <InputRadio
            type="radio"
            name="media_type"
            value="movie"            
            defaultChecked
          />
        </Label>
        <Label >
          TV Show
          <InputRadio
            type="radio"
            name="media_type"
            value="tv"            
          />
        </Label>
      </Form>
    
      <Form type= "submit"  >
        <InputSearch onChange={(event) => handleInputChange(event)} value={inputValue} type="text" placeholder="Search..." name="text"/>
       <Button onClick={handleClick}>
         <StyledSearchIcon /> 
        </Button> 
      </Form>         
    </StyledSection>
    </>
  )
}

export default SearchBar