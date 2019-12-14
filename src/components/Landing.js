import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-title">
          <h1 className="heading-1">Developer Connector</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            officiis quia repellendus
          </p>
        </div>
        <div className="header-box">
          <Link to="/register" className="btn-primary">
            Sign up
          </Link>
          <Link to="/login" className="btn-secondary">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Landing;
