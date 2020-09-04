import React from 'react'
import styled from "styled-components"
import { RiArrowDropLeftLine as ArrowLeft, RiArrowDropRightLine as ArrowRight } from "react-icons/ri"

const Container = styled.div `
`
const PaginationButton = styled.button `
`
const PageItem = styled.button `
`

const Pagination = ({page, maxPage, setPage}) => {
  
  const toPreviousPage = () => page !== 1 ? setPage(page - 1) : setPage(page)
  
  const toNextPage = () => page !== maxPage ? setPage(page + 1) : setPage(page)

  const pages = maxPage > 6 ? 6 : maxPage

  return (
    <>
      {
        pages && 
        <Container>
          {page > 1 && (
            <PaginationButton onClick={() => toPreviousPage()}>
              <ArrowLeft/>
            </PaginationButton>
          )}
          {pages >= 6 && page < 5 && (
            <>
              {[...Array(5)]. map((pageButton, i) => (
                <PageItem
                  setPage={setPage}
                  page={page}
                  key={i + 1}
                  value={i + 1}
                  content={i + 1}
                />                
              ))}
              <PageItem
                setPage={setPage}
                page={page}
                key={maxPage - 3}
                value={maxPage - 3}
                content={"..."}
              /> 
              <PageItem
                setPage={setPage}
                page={page}
                key={maxPage}
                value={maxPage}
                content={maxPage}
              /> 
            </>
          )}

          {pages >= 6 && page >= 5 && page < maxPage - 4 && (
            <>
              <PageItem
                setPage={setPage}
                page={page}
                key={1}
                value={1}
                content={1}
              /> 
              <PageItem
                setPage={setPage}
                page={page}
                key={3}
                value={3}
                content={"..."}
              /> 
              <PageItem
                setPage={setPage}
                page={page}
                key={page - 1}
                value={page - 1}
                content={page - 1}
              /> 
              <PageItem
                setPage={setPage}
                page={page}
                key={page}
                value={page}
                content={page}
              /> 
              <PageItem
                setPage={setPage}
                page={page}
                key={page + 1}
                value={page + 1}
                content={page + 1}
              /> 
               <PageItem
                setPage={setPage}
                page={page}
                key={maxPage - 3}
                value={maxPage - 3}
                content={"..."}
              /> 
               <PageItem
                setPage={setPage}
                page={page}
                key={maxPage}
                value={maxPage}
                content={maxPage}
              /> 
            </>
          )}
          {pages >= 6 && page >= maxPage - 4 && (
            <>
              <PageItem
                setPage={setPage}
                page={page}
                key={1}
                value={1}
                content={1}
              /> 
              <PageItem
                setPage={setPage}
                page={page}
                key={4}
                value={4}
                content={"..."}
              /> 
               <PageItem
                setPage={setPage}
                page={page}
                key={maxPage - 4}
                value={maxPage - 4}
                content={maxPage - 4}
              /> 
              <PageItem
                setPage={setPage}
                page={page}
                key={maxPage - 3}
                value={maxPage - 3}
                content={maxPage - 3}
              /> 
              <PageItem
                setPage={setPage}
                page={page}
                key={maxPage - 2}
                value={maxPage - 2}
                content={maxPage - 2}
              /> 
              <PageItem
                setPage={setPage}
                page={page}
                key={maxPage - 1}
                value={maxPage - 1}
                content={maxPage - 1}
              /> 
              <PageItem
                setPage={setPage}
                page={page}
                key={maxPage}
                value={maxPage}
                content={maxPage}
              /> 
            </>
          )}
          {pages < 6 && (
            <>
            {[...Array(pages - 1)].map((pageButton, i) => (
              <PageItem
                setPage={setPage}
                page={page}
                key={i + 1}
                value={i + 1}
                content={i + 1}
              />
            ))}
            <PageItem
              setPage={setPage}
              page={page}
              value={maxPage}
              key={maxPage}
              content={maxPage}
            />
          </>
          )}
          {page < maxPage && (
            <PaginationButton             
              onClick={() => toNextPage()}
            >
              <ArrowRight  />
            </PaginationButton>
          )}
        </Container>
      }
    </>
  )
}

export default Pagination
