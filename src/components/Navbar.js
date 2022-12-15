import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../images/Icon.png";
import Login from "./Login";
import "../index.css";

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
    </>
  );
}

export default Navbars;
