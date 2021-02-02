import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light">
      <Navbar.Brand
        style={{ fontFamily: "orbitron", fontStyle: "italic", fontSize: 22 }}
        href="/"
      >
        Meraki By Liz Photography
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
          <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/portfolio/weddings">
              Weddings
            </NavDropdown.Item>
            <NavDropdown.Item href="/portfolio/birthdays">
              Birthdays
            </NavDropdown.Item>
            <NavDropdown.Item href="/portfolio/engagements">
              Engagements
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
