import React, { useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

const OffCanvasBy = () => {
  return (
    <Offcanvas direction="end" toggle={function noRefCheck() {}}>
      <OffcanvasHeader toggle={function noop() {}}>Offcanvas</OffcanvasHeader>
      <OffcanvasBody>
        <strong>This is the Offcanvas body.</strong>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default OffCanvasBy;
