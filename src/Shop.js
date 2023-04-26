import React, { useState } from "react";
import Cart from "./Cart";
import Item from "./Item";
import "./style.css";

const Shop = () => {
  const books = [
    {
      title: "The Law",
      description: `"The Law" is a book written by Frédéric Bastiat in 1850 that advocates
  for the principles of individual liberty, free markets, and limited
  government intervention in the economy. In the book, Bastiat argues that
  government's role should be restricted to protecting individual rights
  and property, and that any intervention beyond this would lead to
  inefficiencies and harm. He also advocates for free trade and opposes
  protectionist policies that distort market forces. "The Law" is
  considered a classic of economic and political thought, and its ideas
  continue to be influential to this day.`,
      price: 5.9,
      picture: "./img/thelaw.jpeg",
    },
    {
      title: "Economic Sophisms",
      description: `"Economic Sophisms" is a collection of essays by French economist Frederic Bastiat, originally published in the mid-19th century. In these essays, Bastiat uses witty and entertaining arguments to debunk various economic fallacies of his time, such as protectionism, socialism, and government intervention in the economy. He emphasizes the importance of free trade, individual liberty, and the non-intervention of the state in economic affairs. The book remains relevant today, as many of the economic fallacies that Bastiat criticizes continue to be perpetuated.`,
      price: 7.9,
      picture: "./img/economicsophisms.jpg",
    },
    {
      title: "Man and Statesman",
      description: `"The Man and the Statesman" is a biographical sketch of French economist and statesman Frederic Bastiat, written by his friend and colleague Gustave de Molinari. The book highlights Bastiat's life, his ideas, and his impact on French political and economic thought. It also includes a selection of his most important essays and speeches, which focus on the principles of free trade, individual liberty, and limited government. The book is a tribute to Bastiat's legacy as a champion of economic freedom and a defender of individual rights.`,
      price: 6.9,
      picture: "./img/manandstatesman.jpeg",
    },
  ];

  const [cartItems, setCartItems] = useState("0");

  return (
    <div className="shopComponent">
      <div className="itemsColumn">
        {books.map((book) => (
          <div className="itemDiv">
            <Item
              title={book.title}
              description={book.description}
              price={book.price}
              picture={book.picture}
            />
          </div>
        ))}
      </div>
      <div className="cartColumn">
        <Cart />
      </div>
    </div>
  );
};

export default Shop;
