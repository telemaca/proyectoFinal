import React from "react";
import { useParams, useRouteMatch, NavLink } from "react-router-dom";
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
    color: #2196f3;
    font-weight: 700;
  }
  &.selected {
    font-weight: 700;
    padding-bottom: 5px;
    border-bottom: 3px solid;
    letter-spacing: 1px;
  }
`;

const SerieNavLinks = () => {
  const { tvId } = useParams();
  const { url } = useRouteMatch();

  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledNavLink to={`${url}/info`} activeClassName="selected">
            INFO
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink exact to={`${url}/season`} activeClassName="selected">
            SEASONS
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to={`${url}/similar`} activeClassName="selected">
            SIMILAR SERIES
          </StyledNavLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};

export default SerieNavLinks;
