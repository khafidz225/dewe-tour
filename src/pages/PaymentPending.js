import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import navbarModule from "../navbar.module.css";
import { NumericFormat } from "react-number-format";

const Payment = ({ DataPay }) => {
  const data = DataPay;
  // const incomeTrip = JSON.parse(localStorage.getItem("incomeTrip"));

  return (
    <div style={{ backgorunColor: "#E5E5E5", height: "750px" }}>
      <Navbar navStyle={navbarModule.detailNav} />
      {data.map((data) => {
        console.log("data", data);
        return (
          <Container
            className="border border-0 rounded-1 p-5 mb-5"
            style={{ backgroundColor: "white", marginTop: "66px" }}
          >
            <div className="d-flex justify-content-between">
              <img
                style={{ height: "68px", alignItems: "center" }}
                src={require("../images/Iconblk.png")}
                alt=""
              />
              <div>
                <h1>Booking</h1>
                <p>Saturday, 22 Juy 2020</p>
              </div>
            </div>

            <div className="d-flex justify-content-between ">
              {/* Title && Country */}
              <div className="text-start">
                <h2>{data.Title}</h2>
                <p>{data.Country}</p>
                <p
                  style={{
                    color: "black",
                    width: "120px",
                    background:
                      "linear-gradient(180deg, #FF9900 0%, #FF9900 50%)",
                    opacity: "0.5",
                    bordeRadius: "2px",
                    fontSize: "12px",
                    padding: "5px",
                  }}
                >
                  Waiting Approve
                </p>
              </div>

              {/* Detail Trip */}
              <div
                className="d-grid text-start "
                style={{
                  gridTemplateColumns: "auto auto",
                  columnGap: "50px",
                  rowGap: "25px",
                }}
              >
                <div>
                  <h3 className="fs-4 fw-semibold">Date Trip</h3>
                  <p>26 Agust 2020</p>
                </div>
                <div>
                  <h3 className="fs-4 fw-semibold">Duration</h3>
                  <p>6 Day 4 Night</p>
                </div>
                <div>
                  <h3 className="fs-4 fw-semibold">Accomodation</h3>
                  <p>Hotel 4 Nights</p>
                </div>
                <div>
                  <h3 className="fs-4 fw-semibold">Transporartion</h3>
                  <p>Qatar Airways</p>
                </div>
              </div>

              {/* image payment */}
              <div>
                <img src={require("../images/bon.png")} alt="bon" />
                <p className="fw-6 ">upload payment proof</p>
              </div>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Phone</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>{data.FullName}</td>
                  <td>Male</td>
                  <td>{data.Phone}</td>
                  <th>Qty</th>
                  <th>:</th>
                  <th className="text-end">{data.Qty}</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th>Total</th>
                  <th>:</th>
                  <th className="text-end">
                    <NumericFormat
                      className="text-end text-danger fw-bold"
                      style={{
                        border: "none",
                        background: "none",
                        width: "150px",
                      }}
                      value={data.Price}
                      thousandSeparator=","
                      prefix={"IDR. "}
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </Container>
        );
      })}
      <Footer />
    </div>
  );
};

export default Payment;
