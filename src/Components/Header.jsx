import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl me-8">Auth Master</a>
        <Link className="me-10" to="/">Home</Link>
        <Link className="me-8" to="/login">Login</Link>
        <Link className="me-8" to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Header;
