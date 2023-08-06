import React, { useState } from "react";
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
	Offcanvas,
	OffcanvasHeader,
	OffcanvasBody,
} from "reactstrap";

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="d-flex align-items-center ">
      <Navbar className="container border" expand="md">
        <NavbarBrand className="d-flex align-items-center gap-1" href="#">
          <img
            alt="logoLogo"
            src="./assets/viaje_3.png"
            style={{
              height: 40,
              width: 40,
            }}
          />
          <span>MyTinerary</span>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto gap-2" navbar>
            <NavItem>
              {/* <NavLink href="#">Home</NavLink> */}
              <Button color="" children="Home" />
            </NavItem>
            <NavItem>
              {/* <NavLink href="">Cities</NavLink> */}
              <Button color="" children="Cities" />
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

      <Button
        className="me-auto rounded-circle"
        style={{
          height: 50,
          width: 50,
        }}>
        <i className="bi bi-person-bounding-box"></i>
      </Button>

    </div>
  );
}

export default Example;
