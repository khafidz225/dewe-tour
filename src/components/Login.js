/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} variant="outline-light" className="btn-log">
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <div
          style={{ width: "100%" }}
          className="d-flex justify-content-between"
        >
          <img
            src={require("../images/palm.png")}
            alt="palm"
            style={{ width: "135px" }}
          />
          <img src={require("../images/hibiscus.png")} alt="" />
        </div>
        <Modal.Title style={{ marginTop: "-50px" }} className="text-center">
          Login
        </Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold mt-3">Email</Form.Label>
              <Form.Control type="email" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="fw-bold mt-3">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Button
          className="mt-4 m-auto"
          style={{ backgroundColor: "#FFAF00", border: "none", width: "90%" }}
          variant="primary"
          onClick={handleClose}
        >
          Login
        </Button>
        <p className="text-center p-1 mt-1" style={{ color: "#B1B1B1" }}>
          Don't have an account? ?{" "}
          <a
            className="text-decoration-none"
            style={{ color: "#B1B1B1" }}
            href="#"
          >
            Klik Here
          </a>
        </p>
      </Modal>
    </div>
  );
};

export default Login;
