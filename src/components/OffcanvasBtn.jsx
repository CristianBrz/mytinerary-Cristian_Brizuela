import React, { useState } from "react";
import { Button } from "reactstrap";

const OffcanvasBtn = () => {
  return (
    <>
      <Button
        className="me-auto rounded-circle"
        onClick={function noRefCheck() {}}
				
        style={{
          height: 50,
          width: 50,
        }}>
        <i className="bi bi-person-bounding-box"></i>
      </Button>
    </>
  );
};

export default OffcanvasBtn;
