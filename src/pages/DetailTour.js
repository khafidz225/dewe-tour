/* eslint-disable eqeqeq */
import { React, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { NumericFormat } from "react-number-format";
import australia2 from "../images/australia2.png";
import australia3 from "../images/australia3.png";
import australia4 from "../images/australia4.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import navbarModule from "../navbar.module.css";
import "../index.css";
import ModalDetail from "../components/ModalDetail";
import dateFormat from "dateformat";

const DetailTour = ({ Number, SetNumber }) => {
  const [modalShow, setModalShow] = useState(false);
  const dataLog = JSON.parse(localStorage.getItem("Login"));
  // const data = dataTour();
  const params = useParams();

  const incomeTrip = JSON.parse(localStorage.getItem("incomeTrip"));
  // const dataTest = incomeTrip.filter((item, index) => index + 1 == params.id);
  // console.log("dataTest" + JSON.stringify(dataTest));

  function Add() {
    SetNumber(Number + 1);
  }
  function Less() {
    if (Number > 0) {
      SetNumber(Number - 1);
    }
  }

  useEffect(() => {}, []);

  // const Add = () => SetNumber(Number + 1)
  // const Less = () => {
  //   if(Number > 0){
  //     SetNumber(Number - 1)
  //   }
  // }

  return (
    <>
      <Navbar navStyle={navbarModule.detailNav} />
      {incomeTrip.map(
        (item, index) =>
          index + 1 == params.id && (
            <Container className="mt-5">
              <h1 className="text-start">{item.title}</h1>
              <p className="text-start">{item.country}</p>
              {/* Image */}
              <div className="container">
                <div className="rows" style={{ backgroundSize: "cover" }}>
                  <img
                    src={require(`../images/japan1.png`)}
                    alt="australia"
                    style={{
                      width: "100%",
                      height: "360px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="rows d-flex justify-content-between mt-4">
                  <img
                    style={{ width: "400px" }}
                    src={australia2}
                    alt="detailimg"
                  />
                  <img
                    style={{ width: "400px" }}
                    src={australia3}
                    alt="detailimg"
                  />
                  <img
                    style={{ width: "400px" }}
                    src={australia4}
                    alt="detailimg"
                  />
                </div>
              </div>

              <h3 className="text-start mt-5 mb-4">Informasi Trip</h3>
              <div className="d-flex justify-content-between text-start mb-5">
                {/* InFormasi Trip */}
                <div>
                  <h5>Accommodation</h5>
                  <div className="d-flex">
                    <img src={require("../images/hotel.png")} alt="" />
                    <h4 className="ms-2">{item.accomodation}</h4>
                  </div>
                </div>
                <div>
                  <h5>Transportation</h5>
                  <div className="d-flex">
                    <img src={require("../images/plane.png")} alt="" />
                    <h4 className="ms-2">{item.transportation}</h4>
                  </div>
                </div>
                <div>
                  <h5>Eat</h5>
                  <div className="d-flex">
                    <img src={require("../images/meal.png")} alt="" />
                    <h4 className="ms-2">{item.eat}</h4>
                  </div>
                </div>
                <div>
                  <h5>Duration</h5>
                  <div className="d-flex">
                    <img src={require("../images/time.png")} alt="" />
                    <h4 className="ms-2">
                      {item.durationDay} Day {item.durationNight} Night
                    </h4>
                  </div>
                </div>
                <div>
                  <h5>Date Trip</h5>
                  <div className="d-flex">
                    <img
                      className="ms-2"
                      src={require("../images/calender.png")}
                      alt=""
                    />
                    <h4>{dateFormat(item.dateTrip, "dd mmmm yyyy")}</h4>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-start">Description</h3>
                <p className="text-start">{item.description}</p>
              </div>
              <div className="d-flex justify-content-between border-bottom border-dark mt-5">
                <p className="fs-3 fw-bold">
                  <span style={{ color: "#FFAF00" }}>
                    <NumericFormat
                      className="text-start fw-bold"
                      style={{
                        border: "none",
                        width: "250px",
                        background: "none",
                        color: "#FFAF00",
                      }}
                      value={item.price}
                      thousandSeparator=","
                      prefix={"IDR. "}
                    />
                  </span>{" "}
                  / Person
                </p>
                <div className="d-flex">
                  <button className="border-0 bg-transparent" onClick={Less}>
                    <img src={require("../images/Minus.png")} alt="Minus" />
                  </button>
                  <p className="ms-3 me-3 text-bold fs-4 p-1">{Number}</p>
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => Add()}
                  >
                    <img src={require("../images/Plus.png")} alt="Plus" />
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-2 fs-3 fw-bold border-bottom border-dark">
                <p>Total :</p>
                <NumericFormat
                  className="text-end"
                  style={{ border: "none", background: "none" }}
                  value={item.price * Number}
                  thousandSeparator=","
                  prefix={"IDR. "}
                />
              </div>
              <div className="d-flex justify-content-end">
                {dataLog !== null ? (
                  <Link to={`/payment/${index + 1}`}>
                    <button
                      className="btn mt-5 mb-5"
                      style={{
                        backgroundColor: "#FFAF00",
                        color: "white",
                        width: "213px",
                      }}
                    >
                      Book Now
                    </button>
                  </Link>
                ) : (
                  <div>
                    <button
                      className="btn mt-5 mb-5"
                      style={{
                        backgroundColor: "#FFAF00",
                        color: "white",
                        width: "213px",
                      }}
                      onClick={() => {
                        setModalShow(true);
                      }}
                    >
                      Book Now
                    </button>
                    <ModalDetail
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                )}
              </div>
            </Container>
          )
      )}
      <Footer />
    </>
  );
};

export default DetailTour;
