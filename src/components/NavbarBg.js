import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../images/Icon.png";
import Login from "./Login";
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
            <Button
              className="btn-log"
              style={{
                backgroundColor: "#FFAF00",
                marginLeft: "15px",
                border: "none",
              }}
            >
              Register
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarBg;
