import React from "react";
import styled from "styled-components";

import usePaginationContext from "../contexts/PaginationContext";

const Button = styled.button`
  margin: 0 1vw;
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 1.2vw;
  width: 2vw;
  font-family: roboto;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    color: #2296f3;
    transition: 0.2s;
  }
  &:focus {
    outline: none;
  }

  &.selected {
    color: #2296f3;
  }
  @media (max-width: 850px) {
    font-size: 3vw;
    width: 6vw;
  }
`;

const PageItem = ({ value, content }) => {
  const { setCurrentPage, currentPage } = usePaginationContext();
  return (
    <Button
      onClick={() => setCurrentPage(value)}
      value={value}
      className={value === currentPage ? "selected" : ""}
    >
      {content}
    </Button>
  );
};

export default PageItem;
