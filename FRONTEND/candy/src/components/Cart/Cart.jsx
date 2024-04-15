import React from "react";
import CartIcon from "./CartIcon";

const Cart = () => {
  return (
    <div
      style={{
        marginLeft: 1150,
      }}
    >
      <button type="button">
        <span>
          <CartIcon />
        </span>
        <span>Your Cart : </span>
        <span>100</span>
      </button>
    </div>
  );
};

export default Cart;
