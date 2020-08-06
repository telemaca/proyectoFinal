import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import NavLinks from "./components/NavLinks";

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
      <Route path="/"></Route>
    </Router>
  );
};

export default App;
