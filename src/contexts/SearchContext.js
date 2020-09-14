import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [media, setMedia] = useState("movie");
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [notFound, setNotFound] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        media,
        setMedia,
        searchResults,
        setSearchResults,
        isLoading,
        setIsLoading,
        isSent,
        setIsSent,
        query,
        setQuery,
        notFound,
        setNotFound
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearchContext = () => useContext(SearchContext);

export { SearchProvider };
export default useSearchContext;
