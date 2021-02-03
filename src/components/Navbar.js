import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Hamburger from "hamburger-react";

const NavbarComponent = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar collapseOnSelect expand="sm" bg="light">
      <Navbar.Brand
        style={{ fontFamily: "orbitron", fontStyle: "italic", fontSize: 22 }}
        href="/"
      >
        Meraki By Liz Photography
      </Navbar.Brand>
      <Navbar.Toggle
        style={{ width: "14%", border: "none" }}
        onClick={() => {
          setOpen(!isOpen);
        }}
        aria-controls="responsive-navbar-nav"
      >
        <Hamburger
          label="Show menu"
          color="#4FD1C5"
          //   distance="sm"
          toggled={isOpen}
          toggle={setOpen}
        />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
          <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/portfolio/boudoir">
              Boudoir
            </NavDropdown.Item>
            <NavDropdown.Item href="/portfolio/maternity">
              Maternity
            </NavDropdown.Item>
            <NavDropdown.Item href="/portfolio/couples">
              Couples
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link eventKey={2} href="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
