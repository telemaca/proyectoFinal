import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

import { MoviesProvider } from "../src/contexts/MoviesContext";
import { SeriesProvider } from "../src/contexts/SeriesContext";
import { PaginationProvider } from "./contexts/PaginationContext";
import { SearchProvider } from "./contexts/SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <PaginationProvider>
      <SearchProvider>
        <MoviesProvider>
          <SeriesProvider>
            <App />
          </SeriesProvider>
        </MoviesProvider>
      </SearchProvider>
    </PaginationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
