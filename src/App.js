import "./App.css";
import Home from "./components/Home/Home";
import React, { useEffect } from "react";
import "animate.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import gif from "./dist/img/tenor.gif";

const App = () => {
  return (
    <Router>
      <span class="header-strip top-strip"></span>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
