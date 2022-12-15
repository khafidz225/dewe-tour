import React from "react";
import { dataTour } from "../dataTour";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardTour = () => {
  const Navigate = useNavigate();
  const data = dataTour();

  console.log(data);
  return (
    <>
      <Container style={{ marginTop: "72px" }}>
        <h1 style={{ marginBottom: "60px" }}>Group Tour</h1>
        <div className="container-tour">
          {data.map((data) => (
            <Card style={{ width: "350px" }}>
              <Card.Img
                onClick={() => Navigate(`detail/${data.id}`)}
                variant="top"
                src={require(`../images/${data.image}`)}
              />
              <p
                className="position-absolute text-end p-1 mt-2 rounded-start end-0"
                style={{
                  backgroundColor: "white",
                  width: "62px",
                }}
              >
                {`${data.id}/15`}
              </p>
              <Card.Body>
                <Card.Title className="text-start">{data.title}</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text style={{ color: "#FFAF00" }}>
                    {data.price}
                  </Card.Text>
                  <Card.Text>{data.country}</Card.Text>
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
