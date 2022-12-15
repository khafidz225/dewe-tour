/* eslint-disable eqeqeq */
import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import { NumericFormat } from "react-number-format";
import australia2 from "../images/australia2.png";
import australia3 from "../images/australia3.png";
import australia4 from "../images/australia4.png";
import InfoTrip from "../components/InfoTrip";
import NavbarBg from "../components/NavbarBg";
import { dataTour } from "../dataTour";
import { useParams } from "react-router-dom";
import "../index.css";

const DetailTour = () => {
  const data = dataTour();
  const params = useParams();

  console.log(useParams(data.id));

  const [Number, SetNumber] = useState(0);

  return (
    <>
      <NavbarBg />
      {data.map(
        (item) =>
          item.id == params.id && (
            <Container>
              <h1 className="text-start">{item.title}</h1>
              <p className="text-start">{item.country}</p>
              {/* Image */}
              <div className="container">
                <div className="rows" style={{ backgroundSize: "cover" }}>
                  <img
                    src={require(`../images/${item.image}`)}
                    alt="australia"
                    style={{
                      width: "100%",
                      height: "360px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="rows d-flex justify-content-between mt-4">
                  <img src={australia2} alt="detailimg" />
                  <img src={australia3} alt="detailimg" />
                  <img src={australia4} alt="detailimg" />
                </div>
              </div>

              <h3 className="text-start mt-5 mb-4">Informasi Trip</h3>
              <div className="d-flex justify-content-between text-start mb-5">
                <InfoTrip />
              </div>
              <div className="mt-5">
                <h3 className="text-start">Description</h3>
                <p className="text-start">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="d-flex justify-content-between border-bottom border-dark mt-5">
                <p className="fs-3 fw-bold">
                  <span style={{ color: "#FFAF00" }}>IDR. 12,398,000</span> /
                  Person
                </p>
                <div className="d-flex">
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => SetNumber(Number - 1)}
                  >
                    <img src={require("../images/Minus.png")} alt="Minus" />
                  </button>
                  <p className="ms-3 me-3 text-bold fs-4 p-1">{Number}</p>
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => SetNumber(Number + 1)}
                  >
                    <img src={require("../images/Plus.png")} alt="Plus" />
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-2 fs-3 fw-bold border-bottom border-dark">
                <p>Total :</p>
                <NumericFormat
                  value="20020220"
                  allowLeadingZeros
                  thousandSeparator=","
                  prefix={"IDR. "}
                />
                <p>{`IDR. ${12398000 * Number}`}</p>
              </div>
              <button>Book Now</button>
            </Container>
          )
      )}
    </>
  );
};

export default DetailTour;
