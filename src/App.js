import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { MoviesSeriesProvider } from "./contexts/MoviesSeriesContext";

import NavLinks from "./components/NavLinks";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import MoviePage from "./pages/MoviePage";
import SeriesPage from "./pages/SeriesPage";
import SeriePage from "./pages/SeriePage";
import SearchPage from "./pages/SearchPage";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: black;
}
`;

const App = () => {
  return (
    <MoviesSeriesProvider>
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
          <Route exact path="/tv/:tvId">
            <SeriePage />
          </Route>
          <Route exact path="/discover">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </MoviesSeriesProvider>
  );
};

export default App;
