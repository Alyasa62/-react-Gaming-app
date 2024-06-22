import React from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1 className="navbar-logo">
        <Link to="/">Gaming Store</Link>
      </h1>

      <ul className="NavLinks">
        <li>
          <Link to="/">Store</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
