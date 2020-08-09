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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding-top: 2vw;
  border-right: 1px solid #fafafa;
`;

const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  svg {
    color: #fafafa;
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
        value={{
          style: { fontSize: "1.5vw", marginBottom: "3vw" },
        }}
      >
        <StyledNavLink exact to="/" activeClassName="selected">
          <HomeIcon />
        </StyledNavLink>
        <StyledNavLink to="/movies" activeClassName="selected">
          <MovieIcon />
        </StyledNavLink>
        <StyledNavLink to="/series" activeClassName="selected">
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
