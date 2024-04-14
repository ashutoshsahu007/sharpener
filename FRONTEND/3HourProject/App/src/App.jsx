import { useState } from "react";

function App() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState("Table1");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        desc: value2 + "-" + value3 + "-" + value4,
        Table: value4,
        orderID: value1,
      },
    ]);
  };

  function handleDelete(index) {
    index = parseInt(index);
    const newItems = [...items];
    localStorage.removeItem(index);

    newItems.splice(index, 1);
    setItems(newItems);
    console.log(index);
    console.log(typeof index);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Unique Order ID :
        <input
          type="number"
          value={value1}
          onChange={(e) => {
            setValue1(e.target.value);
          }}
        />
        Choose Price :
        <input
          type="number"
          value={value2}
          onChange={(e) => {
            setValue2(e.target.value);
          }}
        />
        Choose Dish :
        <input
          type="text"
          value={value3}
          onChange={(e) => {
            setValue3(e.target.value);
          }}
        />
        Choose a Table :
        <select
          value={value4}
          onChange={(e) => {
            setValue4(e.target.value);
            console.log(value4);
          }}
        >
          <option value="Table1">Table1</option>
          <option value="Table2">Table2</option>
          <option value="Table3">Table3</option>
        </select>
        <button type="submit">Add To Bill</button>
      </form>

      <h1>Orders</h1>
      <div id="div1">
        <h3>Table 1</h3>

        {
          <ul>
            {items.map((item) => {
              if (item.Table === "Table1") {
                {
                  localStorage.setItem(item.orderID, item.desc);
                }
                return (
                  <li key={item.orderID}>
                    {item.desc}

                    <button onClick={handleDelete}>Delete Order</button>
                  </li>
                );
              }
            })}
          </ul>
        }
        <h3>Table 2</h3>
        {
          <ul>
            {items.map((item) => {
              if (item.Table === "Table2") {
                {
                  localStorage.setItem(item.orderID, item.desc);
                }
                return (
                  <li key={item.orderID}>
                    {item.desc}

                    <button onClick={handleDelete}>Delete Order</button>
                  </li>
                );
              }
            })}
          </ul>
        }
        <h3>Table 3</h3>
        {
          <ul>
            {items.map((item) => {
              if (item.Table === "Table3") {
                {
                  localStorage.setItem(item.orderID, item.desc);
                }
                return (
                  <li key={item.orderID}>
                    {item.desc}

                    <button onClick={handleDelete}>Delete Order</button>
                  </li>
                );
              }
            })}
          </ul>
        }
      </div>
    </div>
  );
}
export default App;
