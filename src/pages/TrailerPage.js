import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import axios from "axios";
import {useParams, useHistory} from "react-router-dom";
import styled from "styled-components";

import { CgCloseR as CloseIcon } from "react-icons/cg";
import API_KEY from "../data/apiKey";

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
  const history = useHistory()

  const handleGoBackClick = () => {
    history.go(-1)
  }

  useEffect (() => {
    axios
      .get(`https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        setTrailerData(response.data.results.filter((index) => index.type === "Trailer"))        
      })
  }, [media, id]) 

  return (    
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