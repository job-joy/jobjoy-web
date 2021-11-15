import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainFeeds from "./Components/MainFeeds";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainFeeds />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
