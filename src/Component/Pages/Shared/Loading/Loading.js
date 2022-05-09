import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      <div className="w-100 d-flex align-items-center justify-content-center">
        <Spinner animation="grow" variant="info" />
      </div>
    </div>
  );
};

export default Loading;
