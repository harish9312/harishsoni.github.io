import React from "react";
import "./App.scss";
import { NavBar } from "./NavBar";
import { 
  Home } from "./components/Home";
import { AboutMe } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Resume } from "./components/Resume";

declare const Particles: any;

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="pages">
        <Home />
        <AboutMe />
        <Projects />
        <Skills />
        <Education />
        <Resume />
      </div>
      <div className="footer">
        Designed &amp; Developed By <br /> <span role="img">👨🏻‍💻</span> Harish
        Soni &copy; 2021
      </div>
    </div>
  );
}

export default App;
