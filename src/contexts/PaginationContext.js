import React, {useState, useEffect, useContext, createContext} from 'react'


const PaginationContext = createContext()

const PaginationProvider = ({children}) => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1000);
  
  const toPreviousPage = () => page !== 1 ? setPage(page - 1) : setPage(page)
  
  const toNextPage = () => page !== maxPage ? setPage(page + 1) : setPage(page)
  return (
    <PaginationContext.Provider value={{ 
      page,
      setPage,
      setMaxPage,
      maxPage,
      toPreviousPage,
      toNextPage,
      }}>
      {children}
    </PaginationContext.Provider>
  )
}

const usePaginationContext = () => useContext(PaginationContext)

export {PaginationProvider}
export default usePaginationContext
