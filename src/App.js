import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

const App = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </div>
  );
};

export default App;
