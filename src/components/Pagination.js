import React from 'react'
import styled from "styled-components"
import { RiArrowDropLeftLine as ArrowLeft, RiArrowDropRightLine as ArrowRight } from "react-icons/ri"
import usePaginationContext from "../contexts/PaginationContext"
import PageItem from "./PageItem"

const Container = styled.div `
  width: 100%;  
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PaginationButton = styled.button `
  margin-left: 2vw;
  background-color: black;
  border: none;
  &:focus {
    outline: none;    
    }
`

const StyledArrowLeft = styled(ArrowLeft) `
  color: white;
  font-size: 2vw;
  &:hover{
    cursor: pointer;
  }
  
`

const StyledArrowRight = styled(ArrowRight) `
  color: white;
  font-size: 2vw;
  &:hover{
    cursor: pointer;
  }
  
`

const Pagination = ({ currentPage, maxPage, setCurrentPage }) => {
  
  const { toPreviousPage, toNextPage } = usePaginationContext()

  const pages = maxPage > 6 ? 6 : maxPage

  return (    
   <>       
     {
      pages && 
        <Container>
          {currentPage > 1 && (
            <PaginationButton onClick={() => toPreviousPage()}>
              <StyledArrowLeft />
            </PaginationButton>
          )}
          {pages >= 6 && currentPage < 5 && (
            <>
              {[...Array(5)]. map((pageButton, i) => (
                <PageItem
                  setPage={setCurrentPage}
                  page={currentPage}
                  key={i + 1}
                  value={i + 1}
                  content={i + 1}
                />                
              ))}
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={maxPage - 3}
                value={maxPage - 3}
                content={"..."}
              /> 
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={maxPage}
                value={maxPage}
                content={maxPage}
              /> 
            </>
          )}

          {pages >= 6 && currentPage >= 5 && currentPage < maxPage - 4 && (
            <>
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={1}
                value={1}
                content={1}
              /> 
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={3}
                value={3}
                content={"..."}
              /> 
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={currentPage - 1}
                value={currentPage- 1}
                content={currentPage - 1}
              /> 
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={currentPage}
                value={currentPage}
                content={currentPage}
              /> 
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={currentPage + 1}
                value={currentPage + 1}
                content={currentPage + 1}
              /> 
               <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={maxPage - 3}
                value={maxPage - 3}
                content={"..."}
              /> 
               <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={maxPage}
                value={maxPage}
                content={maxPage}
              /> 
            </>
          )}
          {pages >= 6 && currentPage >= maxPage - 4 && (
            <>
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={1}
                value={1}
                content={1}
              /> 
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={4}
                value={4}
                content={"..."}
              /> 
               <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={maxPage - 4}
                value={maxPage - 4}
                content={maxPage - 4}
              /> 
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={maxPage - 3}
                value={maxPage - 3}
                content={maxPage - 3}
              /> 
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={maxPage - 2}
                value={maxPage - 2}
                content={maxPage - 2}
              /> 
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={maxPage - 1}
                value={maxPage - 1}
                content={maxPage - 1}
              /> 
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={maxPage}
                value={maxPage}
                content={maxPage}
              /> 
            </>
          )}
          {pages < 6 && (
            <>
            {[...Array(pages - 1)].map((pageItem, i) => (
              <PageItem
                setPage={setCurrentPage}
                page={currentPage}
                key={i + 1}
                value={i + 1}
                content={i + 1}
              />
            ))}
            <PageItem
              setPage={setCurrentPage}
              page={currentPage}
              value={maxPage}
              key={maxPage}
              content={maxPage}
            />
          </>
          )}
          {currentPage < maxPage && (
            <PaginationButton             
              onClick={() => toNextPage()}
            >
              <StyledArrowRight  />
            </PaginationButton>
          )}
        </Container>
      } 
    </> 
  )
}

export default Pagination
