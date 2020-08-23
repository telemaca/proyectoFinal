import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import NavLinks from "./components/NavLinks";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import MoviePage from "./pages/MoviePage";
import SeriesPage from "./pages/SeriesPage";
import SeriePage from "./pages/SeriePage";
import CategoriesPage from "./pages/CategoriesPage";
import SearchPage from "./pages/SearchPage";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: black;
}
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavLinks />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movie">
          <MoviesPage />
        </Route>
        <Route path="/:media/category/:categoryId">
          <CategoriesPage />
        </Route>
        <Route path="/movie/:movieId">
          <MoviePage />
        </Route>
        <Route exact path="/tv">
          <SeriesPage />
        </Route>
        <Route path="/tv/:tvId">
          <SeriePage />
        </Route>
        <Route exact path="/discover">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
