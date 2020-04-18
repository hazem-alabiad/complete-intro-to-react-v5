import { Link, Router } from "@reach/router";
import React from "react";
import { render } from "react-dom";
import Details from "./Details";
import { SearchParams } from "./SearchParams";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
