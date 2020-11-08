import React from "react";
import { Link } from "react-router-dom";


function NavTabs() {
  return (
    <div className="container-nav">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/about"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            About
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Blog"
            className={window.location.pathname === "/Blog" ? "nav-link active" : "nav-link"}
          >
            Portfolio
        </Link>
        </li>
        <li className="nav-item">
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
