import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Components/Main";
import Login from "./Components/Login";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Main} />
      </Switch>
    </Router>
  );
};

export default Routes;
