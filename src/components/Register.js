/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleCloseReg = () => setShow(false);
  const handleShowReg = () => setShow(true);

  const Navigate = useNavigate();

  const [Register, setRegister] = useState([]);
  const updateDatas = (e) => {
    setRegister({
      ...Register,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();

    let dataReg = [];
    const data = localStorage.getItem("dataReg");
    if (data !== null) {
      dataReg = JSON.parse(data);
    }
    dataReg.push(Register);
    localStorage.setItem("dataReg", JSON.stringify(dataReg));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully Create an account",
      showConfirmButton: false,
      timer: 5000,
    });
    setInterval(() => {
      Navigate(0);
    }, 2000);
    console.log(Register);
  };

  return (
    <div>
      <Button
        onClick={handleShowReg}
        className="btn-log"
        style={{
          backgroundColor: "#FFAF00",
          marginLeft: "15px",
          border: "none",
        }}
      >
        Register
      </Button>
      <Modal show={show} onHide={handleCloseReg}>
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
        <Modal.Title
          style={{ marginTop: "-50px" }}
          className="text-center fw-bold"
        >
          Register
        </Modal.Title>
        <Modal.Body>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold mt-3">Full Name</Form.Label>
              <Form.Control
                name="fullName"
                onChange={updateDatas}
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold mt-3">Email</Form.Label>
              <Form.Control
                name="email"
                onChange={updateDatas}
                type="email"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="fw-bold mt-3">Password</Form.Label>
              <Form.Control
                name="password"
                onChange={updateDatas}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold mt-3">Phone</Form.Label>
              <Form.Control
                name="phone"
                onChange={updateDatas}
                type="number"
                autoFocus
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-bold mt-3">Address</Form.Label>
              <Form.Control
                name="address"
                onChange={updateDatas}
                as="textarea"
                style={{ height: "50px" }}
              />
            </Form.Group>
            <Button
              className="mt-4 m-auto"
              style={{
                backgroundColor: "#FFAF00",
                border: "none",
                width: "100%",
              }}
              type="submit"
              variant="primary"
            >
              Register
            </Button>
          </Form>
        </Modal.Body>
        <p className="text-center p-1 mt-1" style={{ color: "#B1B1B1" }}>
          You have an account?
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

export default Register;
