import React, { useState } from "react";
import OffcanvasBtn from "../components/OffcanvasBtn";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
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
            src="./assets/viaje_3.png"
            style={{
              height: 40,
              width: 40,
            }}
          />
          <span className="fs-3">MyTinerary</span>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto gap-2" navbar>
            <NavItem>
              {/* <NavLink href="#">Home</NavLink> */}
              <Button
                className="fw-semibold rounded-pill px-4"
                color=""
                children="Home"
              />
            </NavItem>
            <NavItem>
              {/* <NavLink href="">Cities</NavLink> */}
              <Button
                className="fw-semibold rounded-pill px-4"
                color=""
                children="Cities"
              />
            </NavItem>
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
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>

      <OffcanvasBtn></OffcanvasBtn>
    </div>
  );
}

export default NavbarC;
