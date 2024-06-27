import React, { useState } from "react";

const Header = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [items, setItems] = useState([]);

  const Clicked = (event) => {
    setItems([
      ...items,
      {
        candyName: value1,
        description: value2,
        price: value3,
      },
    ]);
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
        {items.map((item) => {
          return (
            <div>
              <li key={Math.random}>
                <h4>
                  {item.candyName} {item.description} {item.price}
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    console.log("Hello Sahu");
                  }}
                >
                  Buy 1
                </button>
                <button
                  type="button"
                  onClick={() => {
                    console.log("Hello Ashutosh");
                  }}
                >
                  Buy 2
                </button>
                <button
                  type="button"
                  onClick={() => {
                    console.log("Hello Duniya");
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
