import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

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
    <Router>
      <GlobalStyle />
      <NavLinks />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/series">
          <SeriesPage />
        </Route>
        <Route path="/discover">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
