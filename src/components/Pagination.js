import React from "react";
import styled from "styled-components";
import {
  RiArrowDropLeftLine as ArrowLeft,
  RiArrowDropRightLine as ArrowRight,
} from "react-icons/ri";
import usePaginationContext from "../contexts/PaginationContext";
import PageItem from "./PageItem";

const Container = styled.div`
  width: 100%;
  margin-bottom: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    padding-top: 5vw;
  }
`;
const PaginationButton = styled.button`
  margin-left: 2vw;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }

  @media (max-width: 850px) {
    margin: 0 3vw;
    color: #fff;
    background-color: black;
    border: none;
    font-size: 5vw;
    width: 5.5vw;
    font-family: roboto;
    transition: 0.2s;
  }
`;

const StyledArrowLeft = styled(ArrowLeft)`
  color: #fff;
  font-size: 30px;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    color: #2296f3;
    transition: 0.2s;
  }
`;

const StyledArrowRight = styled(ArrowRight)`
  color: #fff;
  font-size: 30px;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    color: #2296f3;
    transition: 0.2s;
  }
`;

const Pagination = () => {
  const {
    toPreviousPage,
    toNextPage,
    currentPage,
    maxPage,
  } = usePaginationContext();

  const getPagination = () => {
    if (maxPage <= 7) {
      return [...Array(maxPage)].map((pageItem, index) => (
        <PageItem key={index} value={index + 1} content={index + 1} />
      ));
    } else if (maxPage > 7) {
      if (currentPage < 5) {
        return (
          <>
            {[...Array(5)].map((pageItem, index) => (
              <PageItem key={index} value={index + 1} content={index + 1} />
            ))}
            <PageItem value={maxPage - 3} content={"..."} />
            <PageItem value={maxPage} content={maxPage} />
          </>
        );
      } else if (currentPage >= 5 && currentPage < maxPage - 3) {
        return (
          <>
            <PageItem value={1} content={1} />
            <PageItem value={3} content={"..."} />
            <PageItem value={currentPage - 1} content={currentPage - 1} />
            <PageItem value={currentPage} content={currentPage} />
            <PageItem value={currentPage + 1} content={currentPage + 1} />
            <PageItem value={maxPage - 3} content={"..."} />
            <PageItem value={maxPage} content={maxPage} />
          </>
        );
      } else if (currentPage >= maxPage - 3) {
        return (
          <>
            <PageItem value={1} content={1} />
            <PageItem value={4} content={"..."} />
            <PageItem value={maxPage - 4} content={maxPage - 4} />
            <PageItem value={maxPage - 3} content={maxPage - 3} />
            <PageItem value={maxPage - 2} content={maxPage - 2} />
            <PageItem value={maxPage - 1} content={maxPage - 1} />
            <PageItem value={maxPage} content={maxPage} />
          </>
        );
      }
    }
  };

  return (
    <>
      {maxPage && (
        <Container>
          {currentPage > 1 && (
            <PaginationButton onClick={() => toPreviousPage()}>
              <StyledArrowLeft />
            </PaginationButton>
          )}
          {getPagination()};
          {currentPage !== maxPage && (
            <PaginationButton onClick={() => toNextPage()}>
              <StyledArrowRight />
            </PaginationButton>
          )}
        </Container>
      )}
    </>
  );
};

export default Pagination;
