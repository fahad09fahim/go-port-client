import React from "react";
import { Anchor } from "react-bootstrap";

const TrustedShop = () => {
  return (
    <div>
      <h3 className="text-center">List of Trusted Shop</h3>
      <hr />
      <ul>
        <li>Amazon : https://www.amazon.com</li>
        <li>Alibaba : https://www.alibaba.com</li>
        <li>Star Tech : https://www.startech.com.bd</li>
        <li>Best Buy : https://www.bestbuy.com/</li>
        <li>Rayns : https://www.ryanscomputers.com/</li>
      </ul>
      <hr />
      <h3 className="text-info text-center">
        Please Visit those link to buy Laptop 💻
      </h3>
    </div>
  );
};

export default TrustedShop;
