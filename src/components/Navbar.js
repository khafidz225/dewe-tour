import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/Icon.png";
import Login from "./Login";
import "../index.css";
import Register from "./Register";

function Navbars() {
  return (
    <>
      <Navbar bg="none" style={{ height: "74px" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Login />
            <Register />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
