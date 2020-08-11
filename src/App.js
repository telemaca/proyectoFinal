import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { MoviesSeriesProvider } from "./contexts/MoviesSeriesContext"

import NavLinks from "./components/NavLinks";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import SearchPage from "./pages/SearchPage";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: rgb(42, 42, 42);
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
          <Route path="/tv">
            <SeriesPage />
          </Route>
          <Route path="/discover">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </MoviesSeriesProvider>
  );
};

export default App;
