import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <i className="fas fa-code"></i>
          <Link className="logo-text" to="/">
            <p> Askandrani</p>
          </Link>
        </div>

        <ul className="nav-list">
          <li>
            <Link to="/login" className="nav-list-item">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-list-item">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
