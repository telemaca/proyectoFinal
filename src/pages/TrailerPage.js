import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import axios from "axios";
import {useParams, useHistory} from "react-router-dom";
import styled from "styled-components";

import { CgCloseR as CloseIcon } from "react-icons/cg";
import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";

import LoadingPage from "../pages/LoadingPage"

const Container = styled.div `
  width: calc(100% - 4vw);
  height: 100vh;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 4vw;
`
const StyledCloseIcon = styled(CloseIcon) `
  color: #fff;
  position: absolute;
  top: 0.2vw;
  right: 13vw;
  font-size: 1.6vw;
  &:hover {
    cursor: pointer;   
  }
`
const TrailerPage = () => {
  const { media, id } = useParams()
  const [trailerData, setTrailerData] = useState([])
  const [isTrailerDataLoading, setIsTrailerDataLoading] = useState(true);
  const history = useHistory()

  const handleGoBackClick = () => {
    history.go(-1)
  }

  useEffect (() => {
    setIsTrailerDataLoading(true);
    axios
      .get(`${API_URL}${media}/${id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        setTrailerData(response.data.results.filter((index) => index.type === "Trailer"))  
        setIsTrailerDataLoading(false);      
      })
  }, [media, id]) 

  return isTrailerDataLoading ? (
    <LoadingPage />
  ) : (    
    <Container >  
      <StyledCloseIcon onClick={handleGoBackClick} />
      <ReactPlayer 
        url= {`https://www.youtube.com/watch?v=${trailerData[0]?.key}`}   
        width="70vw"
        height="90vh"
        volume="0.5"
        controls
        onReady
        /> 
    </Container>
  )
}

export default TrailerPage