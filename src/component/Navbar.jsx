import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Time from "./Time";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <span className="right">
          <a href="">{<Time/>}</a>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </span>
      </ul>
    </nav>
  );
}
