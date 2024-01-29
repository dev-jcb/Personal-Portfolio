import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <nav className="fh5co-nav" role="navigation">
        <div className="container-wrap">
          <div className="top-menu">
            <div className="row">
              <div className="col-xs-2">
                <div id="fh5co-logo">
                  <Link to="/">JCB</Link>
                </div>
              </div>
              <div className="col-xs-10 text-right menu-1">
                <ul>
                  <li>
                    <Link className="active" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/projects">Project</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
