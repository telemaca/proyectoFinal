/* import React, {useState, useEffect, useContext, createContext} from 'react'
import axios from "axios";

import API_KEY from "../data/apiKey";

const PaginationContext = createContext()

const PaginationProvider = ({children}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1)

  const updateTotalPages = (totalPages) => setPages(totalPages)
  
  const updateCurrentPage = (numberPage) => setCurrentPage(numberPage)

  
  return (
    <PaginationContext.Provider value={{pages, currentPage, updateCurrentPage, updateTotalPages}}>
      {children}
    </PaginationContext.Provider>
  )
}

const usePaginationContext = () => useContext(PaginationContext)

export {PaginationProvider}
export default usePaginationContext
 */