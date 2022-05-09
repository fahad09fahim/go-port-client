import React from "react";
import { Link } from "react-router-dom";
import ControlItem from "../../../Hook/ControlItem/ControlItem";

const ManageItem = () => {
  const [items, setItems] = ControlItem();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/items/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div className="mx-auto">
      <h4 className="text-center">Manage Items</h4>
      {items.map((item) => (
        <div className="ms-2" key={item._id}>
          <table>
            <tbody>
              <th>
                <span className="text-info me-2">Name:</span>
                {item.name}
              </th>
              <th>
                <span className="text-success ms-2 me-2">Price:</span>
                {item.price}
              </th>
              <th>
                <span className="text-danger ms-2 me-2">Quantity:</span>
                {item.quantity}
              </th>
              <button onClick={() => handleDelete(item._id)} className="ms-2">
                x
              </button>
            </tbody>
          </table>
        </div>
      ))}
      <Link
        className="d-flex justify-content-center text-decoration-none fs-3 mt-2"
        to="/additem"
      >
        Add Item
      </Link>
    </div>
  );
};

export default ManageItem;
