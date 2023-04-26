import React from "react";

function Cart(props) {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <table>
          {props.cartItems.map((book) => (
            <tr>
              <td>{book.title}</td>
              <td>
                {book.quantity}x{book.price}€
              </td>
            </tr>
          ))}
        </table>
        <table>
          <tr>
            <td>Total</td>
            <td>{props.cartTotalPrice}€</td>
          </tr>
        </table>
      </div>
      <div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cart;
