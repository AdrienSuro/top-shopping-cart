import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Nav from "./Nav";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
