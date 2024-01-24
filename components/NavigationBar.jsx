import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <>
      <header>
        <Logo />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Project</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
}
