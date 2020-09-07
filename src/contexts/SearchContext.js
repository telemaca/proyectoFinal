import React, { createContext, useContext, useState, useEffect } from "react";

import axios from "axios";

import API_KEY from "../data/apiKey";
import API_URL from "../utils/API_URL";
import { FaGalacticSenate } from "react-icons/fa";
const SearchContext = createContext()

const SearchProvider = ({ children }) => {  
    const [media, setMedia] = useState("movie")
    const [inputValue, setInputValue] = useState("")    
    const [ newSearch, setNewSearch ] = useState(false);  
    const [ results, setResults] = useState([])
    const [ showResults, setShowResults] = useState(false)

    

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setShowResults(false)    
    };

    const handleMediaClick = (event) => {
        setMedia(event.target.value);
    };

    useEffect(() => { 
  
        axios
          .get(`https://api.themoviedb.org/3/search/${media}?api_key=${API_KEY}&query=${inputValue}`)
          .then((response) => {
            setResults(response.data.results)
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
            setNewSearch,            
        }}>
            {children}
        </SearchContext.Provider>
    )
}

const useSearchContext = () => useContext(SearchContext)

export { SearchProvider }
export default useSearchContext