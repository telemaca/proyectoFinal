import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import useSearchContext from "./contexts/SearchContext" 

import NavLinks from "./components/NavLinks";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import MoviePage from "./pages/MoviePage";
import SeriesPage from "./pages/SeriesPage";
import SeriePage from "./pages/SeriePage";
import PersonPage from "./pages/PersonPage";
import CategoriesPage from "./pages/CategoriesPage";
import SearchPage from "./pages/SearchPage";
import DiscoverPage from "./pages/DiscoverPage";
import ErrorPage from "./pages/ErrorPage";
<<<<<<< HEAD
=======
import SearchBar from "./components/SearchBar"
>>>>>>> e6afa4e... rebase

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: black;
}
`;

const App = () => {
  const {searchBarVisible} = useSearchContext()
  return (
    <Router>
      <GlobalStyle />
      <NavLinks />
      {searchBarVisible &&
       <SearchBar/>}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie" component={MoviesPage} />
        <Route path="/movie/:movieId" component={MoviePage} />
        <Route exact path="/tv" component={SeriesPage} />
        <Route path="/tv/:tvId" component={SeriePage} />
        <Route exact path="/person/:personId" component={PersonPage} />
        <Route path="/category/:categoryId/:media" component={CategoriesPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/discover" component={DiscoverPage} />
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;