import styles from "./ManNav.module.css";
import logo from "../../utils/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function ManNav(props) {
  return (
    // <nav
    //   class="navbar navbar-expand-lg navbar-light bg-light"
    //   className={styles.total}
    // >
    //   <a class="navbar-brand" href="/login">
    //     {" "}
    //     <img className={styles.logo} src={logo} alt="PapelCart" />{" "}
    //   </a>
    //   <button
    //     class="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarText"
    //     aria-controls="navbarText"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse" id="navbarText">
    //     <ul class="ms-auto navbar-nav mr-auto nav-right">
    //       <li class=" nav-item active">
    //         <h4>Manager Page</h4>
    //       </li>
    //       <li class="nav-item" className={styles.right}>
    //         <a class="nav-link" href="#">
    //           <i className="fa-solid fa-user" />
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <Navbar bg="light" expand="lg" className={styles.total}>
      <Container className={styles.full}>
        <Navbar.Brand href="/login">
          <img className={styles.logo} src={logo} alt="PapelCart" />{" "}
        </Navbar.Brand>
        <Navbar.Text>Hello Manager</Navbar.Text>
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

export default ManNav;
