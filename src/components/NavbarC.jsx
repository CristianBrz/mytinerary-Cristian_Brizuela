import React, { useState } from "react";
import OffcanvasBtn from "../components/OffcanvasBtn";
import { Link as Anchor, NavLink } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

function NavbarC(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="d-flex align-items-center bg-black bg-opacity-25 bg-blur fixed-top">
      <Navbar className="container" expand="md">
        <NavbarBrand className="d-flex align-items-center gap-1" href="#">
          <img
            alt="logoLogo"
            src="../viaje_3.png"
            style={{
              height: 40,
              width: 40,
            }}
          />
          <span className="fs-3">MyTinerary</span>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto d-flex align-items-center gap-2" navbar>
            {/* <Button
                className="fw-semibold rounded-pill px-4"
                color=""
                children="Home"
                to="/"
                tag={Link}
              /> */}
            <NavLink className="btn rounded-pill px-4 text-white" to="/">
              Home
            </NavLink>
            <NavLink className="btn rounded-pill px-4 text-white" to="/cities">
              Cities
            </NavLink>

            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            <OffcanvasBtn></OffcanvasBtn>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarC;
