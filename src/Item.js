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
        onClick={() => {
          if (numberOfItems === 1) {
            return;
          } else setNumberOfItems(numberOfItems - 1);
        }}
      >
        -
      </button>
      <button
        className="plusItem"
        onClick={() => setNumberOfItems(numberOfItems + 1)}
      >
        +
      </button>
      <button
        className="addToCart"
        onClick={() => {
          const currentItems = [...props.cartItems];
          let isIndex = currentItems.findIndex((a) => a.title === props.title);
          console.log(isIndex);
          if (isIndex != -1) {
            currentItems[isIndex].quantity += numberOfItems;
          } else {
            currentItems.push({
              title: props.title,
              quantity: numberOfItems,
              price: props.price,
            });
          }
          props.setCartItems(currentItems);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Item;
