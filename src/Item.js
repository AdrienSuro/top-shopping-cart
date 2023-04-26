import React from "react";
import "./style.css";

function Item(props) {
  return (
    <div class="book">
      <img className="bookImg" src={require("./img/thelaw.jpeg")}></img>
      <h2 className="bookTitle">{props.title}</h2>
      <p className="bookPrice">{props.price}€</p>
      <p className="bookDescription">{props.description}</p>
      <input placeholder="1" className="numberOfItems"></input>
      <button className="minusItem">-</button>
      <button className="plusItem">+</button>
      <button className="addToCart">Add to cart</button>
    </div>
  );
}

export default Item;
