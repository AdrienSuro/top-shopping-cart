import React from "react";
import "./style.css";

function Item() {
  return (
    <div class="book">
      <img className="bookImg" src={require("./img/thelaw.jpeg")}></img>
      <h2 className="bookTitle">Test title</h2>
      <p className="bookDescription">
        "The Law" is a book written by Frédéric Bastiat in 1850 that advocates
        for the principles of individual liberty, free markets, and limited
        government intervention in the economy. In the book, Bastiat argues that
        government's role should be restricted to protecting individual rights
        and property, and that any intervention beyond this would lead to
        inefficiencies and harm. He also advocates for free trade and opposes
        protectionist policies that distort market forces. "The Law" is
        considered a classic of economic and political thought, and its ideas
        continue to be influential to this day.
      </p>
      <input className="numberOfItems"></input>
      <button className="minusItem">-</button>
      <button className="plusItem">+</button>
      <button className="addToCart">Add to cart</button>
    </div>
  );
}

export default Item;
