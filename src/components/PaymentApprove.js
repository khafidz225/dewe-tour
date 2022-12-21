import React from "react";
import { Container } from "react-bootstrap";

const PaymentApprove = () => {
  return (
    <div>
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
            <h2>6D/4N Fun Tassie Vacation</h2>
            <p>Australia</p>

            <p
              className="p-2 text-center"
              style={{
                color: "#0BDC5F",
                width: "120px",
                backgroundColor: "#bbffb1",
                opacity: "0.8",
                bordeRadius: "2px",
                fontSize: "12px",
              }}
            >
              Approve
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Khafidz Ganteng</td>
              <td>Male</td>
              <td>089525548561</td>
              <th>Qty :</th>
              <th>1</th>
            </tr>
          </tbody>
        </table>
        <div
          className="d-flex justify-content-end me-0"
          style={{ width: "100%" }}
        >
          <div className="d-flex justicy-content-between me-5">
            <p>Total</p>
            <p>:</p>
          </div>
          <p className="ms-5">IDR. 12,398,000</p>
        </div>
      </Container>
    </div>
  );
};

export default PaymentApprove;
