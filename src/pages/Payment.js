/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import navbarModule from "../navbar.module.css";
import Navbar from "../components/Navbar";
import ModalInfo from "../components/ModalInfo";
import { useParams } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import dateFormat from "dateformat";

const Payment = ({ Number, SetDataPay }) => {
  const dataLog = JSON.parse(localStorage.getItem("Login"));
  // const data = dataTour();
  const params = useParams();

  const incomeTrip = JSON.parse(localStorage.getItem("incomeTrip"));

  const [modalInfoShow, setModalInfoShow] = useState(false);

  let todos = [];

  const addPayment = () => {
    incomeTrip.map(
      (item, index) =>
        index + 1 == params.id &&
        todos.push({
          Title: item.title,
          Country: item.country,
          FullName: dataLog.fullName,
          Phone: dataLog.phone,
          Qty: Number,
          Price: item.price * Number,
        })
    );

    SetDataPay(todos);
  };

  return (
    <div style={{ backgorunColor: "#E5E5E5", height: "800px" }}>
      <Navbar navStyle={navbarModule.detailNav} />

      {incomeTrip.map(
        (item, index) =>
          index + 1 == params.id && (
            <Container
              className="border border-0 rounded-1 p-5"
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
                  <h2>{item.title}</h2>
                  <p>{item.country}</p>

                  <p
                    className="p3"
                    style={{
                      color: "#EC7A7A",
                      width: "120px",
                      background:
                        "linearGradient(180deg, #EC7A7A 0%, #EC7A7A 100%)",
                      opacity: "0.8",
                      bordeRadius: "2px",
                      fontSize: "12px",
                    }}
                  >
                    Waiting payment
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
                    <p>{dateFormat(item.dateTrip, "dd mmmm yyyy")}</p>
                  </div>
                  <div>
                    <h3 className="fs-4 fw-semibold">Duration</h3>
                    <p>
                      {item.durationDay} Day {item.durationNight} Night
                    </p>
                  </div>
                  <div>
                    <h3 className="fs-4 fw-semibold">Accomodation</h3>
                    <p>{item.accomodation}</p>
                  </div>
                  <div>
                    <h3 className="fs-4 fw-semibold">Transporartion</h3>
                    <p>{item.transportation}</p>
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
                    <td>{dataLog.fullName}</td>
                    <td>Male</td>
                    <td>{dataLog.phone}</td>
                    <th>Qty</th>
                    <th>:</th>
                    <th className="text-end">{Number}</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <th>Total</th>
                    <th>:</th>
                    <th className="d-flex justify-content-end">
                      <NumericFormat
                        className="text-end text-danger fw-bold"
                        style={{
                          border: "none",
                          background: "none",
                          width: "150px",
                        }}
                        value={item.price * Number}
                        thousandSeparator=","
                        prefix={"IDR. "}
                      />
                    </th>
                  </tr>
                </tbody>
              </table>
            </Container>
          )
      )}
      <div className="d-flex justify-content-end mt-5">
        <button
          style={{
            width: "213px",
            padding: "12px",
            backgroundColor: "#FFAF00",
            border: "none",
            marginRight: "140px",
          }}
          className="rounded-1"
          onClick={() => {
            return setModalInfoShow(true);
          }}
        >
          Pay
        </button>
        <ModalInfo
          show={modalInfoShow}
          onHide={() => setModalInfoShow(false)}
          addPayment={addPayment}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
