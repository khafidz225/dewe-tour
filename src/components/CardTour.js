import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

const CardTour = ({ Number }) => {
  const Navigate = useNavigate();
  // const data = dataTour();
  console.log("Number" + Number);

  const incomeTrip = JSON.parse(localStorage.getItem("incomeTrip"));

  incomeTrip.map(() => console.log(incomeTrip.Array));

  return (
    <>
      <Container style={{ marginTop: "72px" }} className="">
        <div className="container-tour">
          {incomeTrip.map((data, index) => (
            <Card style={{ width: "350px" }}>
              <Card.Img
                onClick={() => Navigate(`detail/${index + 1}`)}
                variant="top"
                src={require(`../images/japan1.png`)}
              />
              <p
                className="position-absolute text-end p-1 mt-2 rounded-start end-0"
                style={{
                  backgroundColor: "white",
                  width: "62px",
                }}
              >
                {`${data.quota - Number}/${data.quota}`}
              </p>
              <Card.Body>
                <Card.Title className="text-start">{data.title}</Card.Title>
                <div className="d-flex justify-content-between">
                  <NumericFormat
                    className="text-start"
                    style={{
                      border: "none",
                      width: "50%",
                      background: "none",
                      color: "#FFAF00",
                    }}
                    value={data.price}
                    thousandSeparator=","
                    prefix={"IDR. "}
                  />
                  <Card.Text style={{ color: "#878787" }}>
                    {data.country}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CardTour;
