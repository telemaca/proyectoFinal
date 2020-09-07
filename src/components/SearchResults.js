import React from 'react'
import styled from "styled-components"

import useSearchContext from "../contexts/SearchContext"

import BasicCard from "./CardMovie"

const Container = styled.div `
 margin: 0 3vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const SearchResults = () => {
    const { results, media} = useSearchContext()
    return (
        <Container>
        { results && results.map((result) => (
            <BasicCard key={result.id} id={result.id} data={result} media_type={media} />
          ))}
      </Container>
    )
}

export default SearchResults
