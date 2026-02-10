import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Aboutme from "./Components/Aboutme";
import Contact from "./Components/Contact";
import Footer from "./Navbar/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <Aboutme />
        </div>
        <div id="project">
          <Project />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
