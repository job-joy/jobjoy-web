import React, { StrictMode } from "react";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <StrictMode>
      <Routes />
    </StrictMode>
  );
};
export default App;
