import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import navbarModule from "../navbar.module.css";
import Navbars from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AddTrip = () => {
  const [AddTrip, SetAddTrip] = useState();

  const Navigate = useNavigate();

  const takeValueTrip = (e) => {
    SetAddTrip({
      ...AddTrip,
      [e.target.name]: e.target.value,
    });
  };

  const [Test, SetTest] = useState();
  const TestCheck = (e) => {
    SetTest({
      ...Test,
      [e.target.id]: e.target.files,
    });
  };
  console.log(Test);

  const submit = (e) => {
    e.preventDefault();

    let dataTrip = [];
    const data = localStorage.getItem("incomeTrip");
    if (data !== null) {
      dataTrip = JSON.parse(data);
    }
    dataTrip.push(AddTrip);
    localStorage.setItem("incomeTrip", JSON.stringify(dataTrip));

    Navigate("/incometrip");
    console.log(AddTrip);
  };

  return (
    <>
      <Navbars navStyle={navbarModule.detailNav} />
      <Container className="text-start mt-5">
        <h1 className="fs-2 fw-bold mb-3">Add Trip</h1>
        <Form onSubmit={submit} className="fw-bold">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title Trip</Form.Label>
            <Form.Control onChange={takeValueTrip} name="title" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Country</Form.Label>
            <Form.Control onChange={takeValueTrip} name="country" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Accommodation</Form.Label>
            <Form.Control
              onChange={takeValueTrip}
              name="accomodation"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Transportation</Form.Label>
            <Form.Control
              onChange={takeValueTrip}
              name="transportation"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Eat</Form.Label>
            <Form.Control onChange={takeValueTrip} name="eat" type="text" />
          </Form.Group>

          <Form.Label>Duration</Form.Label>
          <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
            <Form.Control
              onChange={takeValueTrip}
              name="durationDay"
              style={{ width: "200px" }}
              type="text"
            />
            <Form.Label className="m-2 me-5">Day</Form.Label>
            <Form.Control
              onChange={takeValueTrip}
              name="durationNight"
              style={{ width: "200px" }}
              type="text"
            />
            <Form.Label className="m-2 me-5">Night</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date Trip</Form.Label>
            <Form.Control
              onChange={takeValueTrip}
              name="dateTrip"
              type="date"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control onChange={takeValueTrip} name="price" type="number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Quota</Form.Label>
            <Form.Control onChange={takeValueTrip} name="quota" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={takeValueTrip}
              name="description"
              as="textarea"
              style={{ height: "100px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control
              onChange={TestCheck}
              id="image"
              style={{ width: "400px" }}
              type="file"
            />
          </Form.Group>

          <div className="text-center mt-5">
            <Button
              style={{
                backgroundColor: "#FFAF00",
                width: "250px",
                border: "none",
              }}
              className="p-2 fw-bold fs-5"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default AddTrip;
