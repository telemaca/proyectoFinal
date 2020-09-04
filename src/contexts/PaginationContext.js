import React, {useState, useContext, createContext} from 'react'


const PaginationContext = createContext()

const PaginationProvider = ({children}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1000);
  
  const toPreviousPage = () => currentPage !== 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage)
  
  const toNextPage = () => currentPage !== maxPage ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage)

  return (
    <PaginationContext.Provider value={{ 
      currentPage,
      setCurrentPage,
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
