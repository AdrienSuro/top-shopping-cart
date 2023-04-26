import React from "react";

function Cart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <table>
          <tr>
            <td>La loi</td>
            <td>15,90€</td>
          </tr>
          <tr>
            <td>Sophismes économiques</td>
            <td>7,90€</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>23,80€</td>
          </tr>
        </table>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cart;
