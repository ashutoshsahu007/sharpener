import React, { useState } from "react";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Header = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [items, setItems] = useState([]);

  const Clicked = () => {
    setItems([
      ...items,
      {
        candyName: value1,
        description: value2,
        price: value3,
      },
    ]);
    setValue1("");
    setValue2("");
    setValue3("");
  };

  const cartCtx = useContext(CartContext);

  const addToCartHandler1 = (item, index) => {
    cartCtx.addItem({
      id: index,
      name: item.candyName,
      amount: 1,
      price: +item.price,
    });
  };

  const addToCartHandler2 = (item, index) => {
    cartCtx.addItem({
      id: index,
      name: item.candyName,
      amount: 2,
      price: +item.price,
    });
  };

  const addToCartHandler3 = (item, index) => {
    cartCtx.addItem({
      id: index,
      name: item.candyName,
      amount: 3,
      price: +item.price,
    });
  };

  return (
    <div
      style={{
        marginLeft: 200,
        marginTop: 120,
      }}
    >
      <span>
        CandyName :
        <input
          type="text"
          value={value1}
          onChange={(event) => {
            setValue1(event.target.value);
          }}
        />
      </span>
      <span>
        Description :
        <input
          type="text"
          value={value2}
          onChange={(event) => {
            setValue2(event.target.value);
          }}
        />
      </span>
      <span>
        Price :
        <input
          type="number"
          value={value3}
          onChange={(event) => {
            setValue3(event.target.value);
          }}
        />
      </span>
      <span>
        <button type="button" onClick={Clicked}>
          Add
        </button>
      </span>

      <ul>
        {items.map((item, index) => {
          return (
            <div>
              <li key={index}>
                <h4>
                  {item.candyName} {item.description} {item.price}
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    addToCartHandler1(item, index);
                  }}
                >
                  Buy 1
                </button>
                <button
                  type="button"
                  onClick={() => {
                    addToCartHandler2(item, index);
                  }}
                >
                  Buy 2
                </button>
                <button
                  type="button"
                  onClick={() => {
                    addToCartHandler3(item, index);
                  }}
                >
                  Buy 3
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
