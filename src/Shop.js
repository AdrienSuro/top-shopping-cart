import React from "react";
import Cart from "./Cart";
import Item from "./Item";
import "./style.css";

const Shop = () => {
  return (
    <div className="shopComponent">
      <div className="itemsColumn">
        <div className="itemDiv">
          <Item />
        </div>
        <div className="itemDiv">
          <Item />
        </div>
        <div className="itemDiv">
          <Item />
        </div>
      </div>
      <div className="cartColumn">
        <Cart />
      </div>
    </div>
  );
};

export default Shop;
