import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Components/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
};
export default App;
