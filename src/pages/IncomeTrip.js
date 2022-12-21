import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardTour from "../components/CardTour";
import Footer from "../components/Footer";
import Navbars from "../components/Navbar";
import navbarModule from "../navbar.module.css";

const IncomeTrip = () => {
  return (
    <div>
      <Navbars navStyle={navbarModule.detailNav} />
      <Container>
        <div
          style={{ marginTop: "100px", marginBottom: "-20px" }}
          className="d-flex justify-content-between"
        >
          <h1>Income trip</h1>
          <Link to={"/addtrip"}>
            <button
              style={{
                width: "150px",
                backgroundColor: "#FFAF00",
                border: "none",
              }}
              className="p-2 text-white fw-bold rounded-2"
            >
              Add Trip
            </button>
          </Link>
        </div>
        <CardTour />
      </Container>

      <Footer />
    </div>
  );
};

export default IncomeTrip;
