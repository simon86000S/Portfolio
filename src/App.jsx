import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main >
      
      <Router>
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
     

        </Routes>
      

      </Router>
    </main>
  );
};

export default App;
