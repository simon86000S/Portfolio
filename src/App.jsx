import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyProject from "./components/MyProject";

const App = () => {
  return (
    <main>
      <Router>
        <Home />
        <MyProject />

        <Routes></Routes>
      </Router>
    </main>
  );
};

export default App;
