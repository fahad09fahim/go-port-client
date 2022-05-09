import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./Items.css";
const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="text-center mt-3 text-success">Items</h1>
      <div>
        <div className="row">
          <div className="items-container">
            {items.slice(0, 6).map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
