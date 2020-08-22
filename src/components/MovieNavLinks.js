import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

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

const MovieNavLinks = () => {
 
  const { movieId } = useParams();
    
  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledNavLink
            
            to={`/movie/${movieId}/info`}
            activeClassName="selected"
          >
            INFO
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink
            
            to={`/movie/${movieId}/cast`}
            activeClassName="selected"
          >
            CAST
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink
            
            to={`/movie/${movieId}/similar`}
            activeClassName="selected"
          >
            SIMILAR MOVIES
          </StyledNavLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};

export default MovieNavLinks;