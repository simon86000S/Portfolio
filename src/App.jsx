import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyProject from "./components/MyProject";
import Skills from "./components/Skills";
const App = () => {
  return (
    <main>
      <Router>
        <Home />
        <MyProject />
        <Skills/>

        <Routes></Routes>
      </Router>
    </main>
  );
};

export default App;
