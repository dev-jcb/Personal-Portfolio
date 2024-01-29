import React from "react";
import { Route, Routes } from "react-router-dom";
import Services from "./src/services";
import Home from "./components/Home";
import Contact from "./src/contact";
import Projects from "./src/projects";
import About from "./src/about";
import NavigationBar from "./components/NavigationBar";
import Navigate from "./src/navigate";

const MainRouter = () => {
  return (
    <div>
    <Navigate/>
        <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
