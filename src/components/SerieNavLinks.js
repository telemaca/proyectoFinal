import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import useMoviesSeriesContext from "../contexts/MoviesSeriesContext";

const StyledNav = styled.nav`
  width: 100%;
  background-color: black;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  width: 50%;
  margin: auto;
  padding: 1.5vw 0;
`;

const StyledListItem = styled.li`
  font-size: 1.3vw;
  font-family: "Roboto";
`;

const StyledNavLink = styled(NavLink)`
  color: #fafafa;
  text-decoration: none;

  &:hover {
    color: lightblue;
  }

  &.selected {
    color: grey;
  }
`;

const SerieNavLinks = () => {
  const { selectedId } = useMoviesSeriesContext();

  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledNavLink
            exact
            to={`/tv/${selectedId}/info`}
            activeClassName="selected"
          >
            INFO
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink
            exact
            to={`/tv/${selectedId}/cast`}
            activeClassName="selected"
          >
            CAST
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink
            exact
            to={`/tv/${selectedId}/similar`}
            activeClassName="selected"
          >
            SIMILAR SERIES
          </StyledNavLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};

export default SerieNavLinks;
