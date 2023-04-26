import React, { useState, useEffect } from "react";
import "./style.css";

function Item(props) {
  const [numberOfItems, setNumberOfItems] = useState(1);

  return (
    <div class="book">
      <img className="bookImg" src={props.picture}></img>
      <h2 className="bookTitle">{props.title}</h2>
      <p className="bookPrice">{props.price}€</p>
      <p className="bookDescription">{props.description}</p>
      <input value={numberOfItems} className="numberOfItems"></input>
      <button
        className="minusItem"
        onClick={() => setNumberOfItems(numberOfItems - 1)}
      >
        -
      </button>
      <button
        className="plusItem"
        onClick={() => setNumberOfItems(numberOfItems + 1)}
      >
        +
      </button>
      <button className="addToCart">Add to cart</button>
    </div>
  );
}

export default Item;
