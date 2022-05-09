import React from "react";
import { Link, useParams } from "react-router-dom";
import UseItemDetail from "../../../../Hook/UseItemDetail/UseItemDetail";
import "./ItemDetails.css";
const ItemDetails = () => {
  const { itemId } = useParams();
  const [item] = UseItemDetail(itemId);
  return (
    <div>
      <div className="item-detail">
        <img src={item.img} alt="" />
        <h4 className="mt-0">{item.name}</h4>
        <h5>Price:{item.price}</h5>
        <p className="description">
          <small>{item.description}</small>
        </p>
        <p>Supplier Name: {item.supplier}</p>
        <p>Quantity: {item.quantity}</p>
        <button>Delivered</button>
      </div>
      <Link
        className="d-flex justify-content-center text-decoration-none fs-3"
        to="/manageitem"
      >
        Manage ALL
      </Link>
    </div>
  );
};

export default ItemDetails;
