import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyProject from "./components/MyProject";
import Skills from "./components/Skills";
import Caroussel from "./components/Caroussel_vitrine";
import Caroussel_Back from "./components/Caroussel_Back";
import Presentation from "./components/Presentation";
const App = () => {
  return (
    <main>
      <Router>
        <Home />
       <Presentation/>
        <MyProject />
        <Routes>
        <Route path='/Caroussel' element={<Caroussel/>}></Route>
        <Route path='/Caroussel_Back' element={<Caroussel_Back/>}></Route>
        </Routes>
       
        <Skills/>

       
      </Router>
    </main>
  );
};

export default App;
