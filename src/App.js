import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { MoviesSeriesProvider } from "./contexts/MoviesSeriesContext";


import NavLinks from "./components/NavLinks";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import MoviePage from "./pages/MoviePage";
import SeriesPage from "./pages/SeriesPage";
import CategoriesPage from "./pages/CategoriesPage"
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
        <MoviesSeriesProvider>
          
        <GlobalStyle />
        <NavLinks />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/:media/category/:categoryId">
          <CategoriesPage />
        </Route>
          <Route path="/:media/:movieId">
            <MoviePage />           
          </Route>         
          <Route exact path="/tv">
            <SeriesPage />
          </Route>
         
          <Route exact path="/discover">
            <SearchPage />
          </Route>
        </Switch>
       
        </MoviesSeriesProvider>
      </Router>
    
  );
};

export default App;
