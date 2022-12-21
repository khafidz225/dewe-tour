/* eslint-disable eqeqeq */
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/Icon.png";
import Login from "./Login";
import "../index.css";

import NavDropdown from "react-bootstrap/NavDropdown";
import Register from "./Register";
import { Link, useNavigate } from "react-router-dom";

function Navbars({ navStyle }) {
  const dataLog = JSON.parse(localStorage.getItem("Login"));
  console.log(dataLog);

  const navigate = useNavigate();

  const remove = () => {
    localStorage.removeItem("Login");
    navigate(0);
  };

  return (
    <>
      <Navbar bg="none" style={{ height: "74px" }} className={navStyle}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to={"/"}>
              <img src={logo} className="d-inline-block align-top" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          {dataLog !== null ? (
            <div>
              <div className="d-flex">
                <p className="text-white me-3 mt-2 fw-bold">
                  Selamat Datang{" "}
                  <span className="text-warning">{dataLog.fullName}</span>
                </p>
                <img src={require("../images/userNav.png")} alt="" />
                <NavDropdown
                  style={{
                    color: "white",
                    fontSize: "20px",
                    margin: "10px",
                  }}
                  id="navbarScrollingDropdown"
                  align="end"
                >
                  {dataLog.role == "admin" ? (
                    <NavDropdown.Item>
                      <Link
                        to={"/incometrip"}
                        className="text-decoration-none text-dark"
                      >
                        <div className="d-flex justify-content-between">
                          <img src={require("../images/dropTrip.png")} alt="" />
                          <p>Trip</p>
                        </div>
                      </Link>
                    </NavDropdown.Item>
                  ) : (
                    <div>
                      <NavDropdown.Item href="#action3">
                        <Link
                          to="/profile"
                          className="text-decoration-none text-dark"
                        >
                          <div className="d-flex justify-content-between">
                            <img
                              src={require("../images/dropUser.png")}
                              alt=""
                            />
                            Profile
                          </div>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        <Link
                          to="/paymentpending"
                          className="text-decoration-none text-dark"
                        >
                          <div className="d-flex justify-content-between">
                            <img
                              src={require("../images/dropBil.png")}
                              alt=""
                            />
                            Pay
                          </div>
                        </Link>
                      </NavDropdown.Item>
                    </div>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={remove} href="#action5">
                    <Link to="/" className="text-decoration-none text-dark">
                      <div className="d-flex justify-content-between">
                        <img src={require("../images/dropLogout.png")} alt="" />
                        Logout
                      </div>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              {/* <button onClick={remove}>Button</button> */}
            </div>
          ) : (
            <Navbar.Collapse className="justify-content-end">
              <Login />
              <Register />
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
