import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Employees from "../pages/Employees";
import Counter from "../pages/Counter";

function BaseRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/employees">
          <Employees />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
      </Switch>
    </Router>
  );
}

export default BaseRouter;
