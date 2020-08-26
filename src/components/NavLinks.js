import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { MdMovie as MovieIcon } from "react-icons/md";
import {
  BsDisplay as TvIcon,
  BsHouse as HomeIcon,
  BsSearch as SearchIcon,
} from "react-icons/bs";

const StyledAside = styled.aside`
  width: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding-top: 2vw;
  border-right: 1px solid #fafafa;
  position: fixed;
  height: -webkit-fill-available;
  z-index: 200;

  @media (max-width: 850px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: 3rem;
    position: fixed;
    border: none;
    bottom:0;
  }
`;

const StyledNavLink = styled(NavLink)`
  /* cursor: pointer; */
  svg {
    color: #fafafa;
    font-size: 1.5vw;
    margin-bottom: 3vw;
    @media (max-width: 850px) {
      font-size: 2rem;
      margin-bottom: 0;
    }
  }
  &.selected {
    svg {
      color: #2196f3;
    }
  }
`;

const NavLinks = () => {
  return (
    <StyledAside>
      <IconContext.Provider
        value={{ style: { cursor: "pointer" } }}
      >
        <StyledNavLink exact to="/" activeClassName="selected">
          <HomeIcon />
        </StyledNavLink>
        <StyledNavLink exact to="/movie" activeClassName="selected">
          <MovieIcon />
        </StyledNavLink>
        <StyledNavLink exact to="/tv" activeClassName="selected">
          <TvIcon />
        </StyledNavLink>
        <StyledNavLink to="/discover" activeClassName="selected">
          <SearchIcon />
        </StyledNavLink>
      </IconContext.Provider>
    </StyledAside>
  );
};

export default NavLinks;
