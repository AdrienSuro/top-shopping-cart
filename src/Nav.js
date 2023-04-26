import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./normalize.css";

function Nav() {
  return (
    <nav>
      <h1>Bastiat Fanshop</h1>
      <ul class="links">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
