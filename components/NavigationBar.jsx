import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Project</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          {/* <a href="#home" className="active">Home</a>
            <a href="#about" className="active">About</a>
            <a href="#projects" className="active">Project</a>
            <a href="#services" className="active">Services</a>
            <a href="#contact" className="active">Contact</a> */}
        </nav>
      </header>
    </>
  );
}
