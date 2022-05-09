import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div>
      <div class="not-found">
        <hgroup>
          <h1>404</h1>
          <h2>oops! page not found</h2>
        </hgroup>
        <Link to="/">back</Link>
      </div>
    </div>
  );
};

export default NotFound;
