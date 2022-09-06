import styles from "./Navbar.module.css";
import logo from "../../utils/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="danger" expand="lg" className={styles.total}>
      <Container className={styles.full}>
        <Navbar.Brand href="/login">
          <img className={styles.logo} src={logo} alt="PapelCart" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Sign Up</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
