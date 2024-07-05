import React, { useState } from "react";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <div
      style={{
        marginLeft: 1150,
      }}
    >
      <button type="button" onClick={props.onShowCart}>
        <span>
          <CartIcon />
        </span>
        <span>Your Cart : </span>
        <span>{numberOfCartItems}</span>
      </button>
    </div>
  );
};

export default CartButton;
