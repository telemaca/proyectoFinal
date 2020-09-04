import React, {useState, useEffect, useContext, createContext} from 'react'


const PaginationContext = createContext()

const PaginationProvider = ({children}) => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1000);
  
  return (
    <PaginationContext.Provider value={{ 
      page,
      setPage,
      setMaxPage,
      maxPage,
      }}>
      {children}
    </PaginationContext.Provider>
  )
}

const usePaginationContext = () => useContext(PaginationContext)

export {PaginationProvider}
export default usePaginationContext
