import React from "react";
import "./Item.css";
const Item = ({ item }) => {
  const { name, price, description, img } = item;
  return (
    <div className="item">
      <img src={img} alt="" />
      <h4 className="mt-0">{name}</h4>
      <h5>Price:{price}</h5>
      <p className="description">
        <small>{description}</small>
      </p>
    </div>
  );
};

export default Item;
