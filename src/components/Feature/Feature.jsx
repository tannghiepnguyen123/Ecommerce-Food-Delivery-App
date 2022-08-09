import React from "react";
import { Container, Row, Col } from "reactstrap";
import featureImg01 from "../../assets/images/service-01.png";
import featureImg02 from "../../assets/images/service-02.png";
import featureImg03 from "../../assets/images/service-03.png";
import "./feature.css";

const Feature = () => {
  const featureData = [
    {
      title: "Quick Delivery",
      imgUrl: featureImg01,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, sunt.",
    },
    {
      title: "Super Dine In",
      imgUrl: featureImg02,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, sunt.",
    },
    {
      title: "Easy Pick Up",
      imgUrl: featureImg03,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, sunt.",
    },
  ];
  return (
    <Container>
      <Row>
        <Col lg="12" className="text-center">
          <h5 className="feature__subtitle mb-4">What we serve</h5>
          <h2 className="feature__title">Just sit back at home</h2>
          <h2 className="feature__title">
            we will <span>take care</span>
          </h2>
          <p className="mb-1 mt-4 feature__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
            voluptatum expedita? Iure sit vitae ullam!
          </p>
          <p className="feature__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
            quibusdam.
          </p>
        </Col>
        {featureData.map((item, index) => (
          <Col lg="4" md="6" sm="6" key={index} className="mt-5">
            <div className="feature__item text-center px-5 py-3">
              <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3" />
              <h5 className="fw-bold mb-3">{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Feature;
