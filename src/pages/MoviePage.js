import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";

import API_KEY from "../data/apiKey";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";

import Section from "../components/native components/Section";

import Hero from "../components/Hero";

const MainFlex = styled.main`
  display: flex;
  flex-direction: column;
  width: 95vw;
  transform: translateX(-0.7px);
`;

const MoviePage = () => {
    const { selectedId } = useMoviesSeriesContext();
    const [selectedMovie, setSelectedMovie] = useState({});

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${selectedId}?api_key=${API_KEY}`)
            .then((response) => {
                setSelectedMovie(response.data);
            });
    }, [])

    return (
        <MainFlex>

            <Hero data={selectedMovie} link="movie" />


        </MainFlex>
    )
}

export default MoviePage
