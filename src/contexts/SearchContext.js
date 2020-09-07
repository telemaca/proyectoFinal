import React, { createContext, useContext, useState, useEffect } from "react";

import axios from "axios";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";
import { FaGalacticSenate } from "react-icons/fa";
const SearchContext = createContext()

const SearchProvider = ({ children }) => {  
    const [media, setMedia] = useState("movie")
    const [inputValue, setInputValue] = useState("")   
    
    const [ results, setResults] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [ showResults, setShowResults] = useState(false)

    const [searchBarVisible, setSearchBarVisible] = useState(false)
    const [visibleResults, setVisibleResults] = useState(false)

    const handleShowResultsClick = (event) => {  
       
    }; 

   const handleInputChange = (event) => {       
        setInputValue(event.target.value);
        setVisibleResults(true);
    }; 

    const handleMediaClick = (event) => {
        setMedia(event.target.value);
    };

    useEffect(() => {   
         axios         
          .get(`https://api.themoviedb.org/3/search/${media}?api_key=${API_KEY}&query=${inputValue}`)
          .then((response) => {
           
            setSearchResults(response.data.results)        
            console.log(response.data.results)           
        });
    }, [media, inputValue]);
      
    return (
        <SearchContext.Provider value={{            
            results,
            setResults,
            media,
            setMedia,
            handleMediaClick,
            handleInputChange,     
            showResults,
            setShowResults,              
            handleShowResultsClick,           
            searchBarVisible,
            setSearchBarVisible,   
            searchResults,  
            visibleResults,
            setVisibleResults,  
        }}>
            {children}
        </SearchContext.Provider>
    )
}

const useSearchContext = () => useContext(SearchContext)

export { SearchProvider }
export default useSearchContext