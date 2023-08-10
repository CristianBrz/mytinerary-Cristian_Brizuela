// import React, { useState } from "react";
// import { Button } from "reactstrap";

// const OffcanvasBtn = () => {
//   return (
//     <>
//       <Button
//         className="me-auto rounded-circle"
//         onClick={function noRefCheck() {}}

//         style={{
//           height: 50,
//           width: 50,
//         }}>
//         <i className="bi bi-person-bounding-box"></i>
//       </Button>
//     </>
//   );
// };

// export default OffcanvasBtn;

import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

function OffcanvasBtn({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle className="rounded-circle">
          <i className="bi bi-person-bounding-box"></i>
        </DropdownToggle>
        <DropdownMenu {...args}>
          {/* <DropdownItem header>Header</DropdownItem> */}
          <DropdownItem>Login</DropdownItem>
          <DropdownItem>Register</DropdownItem>
          {/* <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

OffcanvasBtn.propTypes = {
  direction: PropTypes.string,
};

export default OffcanvasBtn;
