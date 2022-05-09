import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";
const Item = ({ item }) => {
  const { _id, name, price, description, img, quantity, supplier } = item;
  const navigate = useNavigate();
  const navigateToItemDetial = (id) => {
    navigate(`/items/${id}`);
  };
  return (
    <div className="item">
      <img src={img} alt="" />
      <h4 className="mt-0">{name}</h4>
      <h5>Price:{price}</h5>
      <p className="description">
        <small>{description}</small>
      </p>
      <p>Supplier Name: {supplier}</p>
      <p>Quantity: {quantity}</p>
      <button
        onClick={() => navigateToItemDetial(_id)}
        className="btn btn-info"
      >
        Update
      </button>
    </div>
  );
};

export default Item;
