import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 0 1vw;
  color: #fff;
  background-color: black;
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
`;

const PageItem = ({ value, setCurrentPage, page, content }) => {
  return (
    <Button
      onClick={() => setCurrentPage(value)}
      value={value}
      page={page}
      className={value === page ? "selected" : ""}
    >
      {content}
    </Button>
  );
};

export default PageItem;
