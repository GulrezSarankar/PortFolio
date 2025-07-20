import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact"; // Import

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </>
  );
}

export default App;
