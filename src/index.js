import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

import { MoviesProvider } from "../src/contexts/MoviesContext";
import { SeriesProvider } from "../src/contexts/SeriesContext";
import { PaginationProvider } from "./contexts/PaginationContext";
<<<<<<< HEAD
import { LanguageProvider } from "./contexts/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <PaginationProvider>
=======
import { SearchProvider } from "./contexts/SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <PaginationProvider>
      <SearchProvider>
>>>>>>> 1e28517... rebase
        <MoviesProvider>
          <SeriesProvider>
            <App />
          </SeriesProvider>
        </MoviesProvider>
<<<<<<< HEAD
      </PaginationProvider>
    </LanguageProvider>
=======
      </SearchProvider>
    </PaginationProvider>
>>>>>>> 1e28517... rebase
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
