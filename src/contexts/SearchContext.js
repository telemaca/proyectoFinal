import React, { createContext, useContext, useState, useEffect } from "react";

const SearchContext = createContext()

const SearchProvider = ({ children }) => {
    const [searchBarVisible, setSearchBarVisible] = useState(false)
    const [media, setMedia] = useState("movie")
    const [inputValue, setInputValue] = useState("")
    const [visibleResults, setVisibleResults] = useState(false);
    const [newSearch, setNewSearch] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.input.value);
        setVisibleResults(true);
      };

    const handleMediaClick = (event) => {
    setMedia(event.target.value);
    };

    const handleSearchBarVisibleClick = () => {
        setSearchBarVisible(!searchBarVisible)
       /*  setVisibleResults(false); */
      };
    const handleCloseSearchClick = () => {
        setVisibleResults(false);
        setSearchBarVisible(false);
      };
    return (
        <SearchContext.Provider value={{
            searchBarVisible,
            handleMediaClick,
            handleInputChange,
            handleCloseSearchClick,
            setNewSearch,
            handleSearchBarVisibleClick,
        }}>
            {children}
        </SearchContext.Provider>
    )
}

const useSearchContext = () => useContext(SearchContext)

export { SearchProvider }
export default useSearchContext