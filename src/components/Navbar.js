import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">
          Blog Post
        </Link>
        <ul className="right">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage-post">Create New Post</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
