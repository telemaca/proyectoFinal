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
import TrailerPage from "./pages/TrailerPage";
import ErrorPage from "./pages/ErrorPage";
import DiscoverPage from "./pages/DiscoverPage";

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
        <Route path="/movie/:movieId">
          <MoviePage />
        </Route>
        <Route exact path="/tv">
          <SeriesPage />
        </Route>
        <Route path="/tv/:tvId">
          <SeriePage />
        </Route>
        <Route path="/:media/category/:categoryId">
          <CategoriesPage />
        </Route>
        <Route path="/video/:media/:id">
          <TrailerPage />
        </Route>
        <Route exact path="/discover">
          <DiscoverPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
