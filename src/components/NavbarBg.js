import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../images/Icon.png";
import Login from "./Login";
import Register from "./Register";
import Container from "react-bootstrap/Container";

const NavbarBg = () => {
  return (
    <div>
      <Navbar className="detailNav" style={{ height: "74px" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Login />
            <Register />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarBg;
