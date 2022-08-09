import React from "react";
import { Container, Row, Col } from "reactstrap";
import TestimonialSlider from "../UI/slider/TestimonialSlider";
import networkImg from "../../assets/images/network.png";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="tesitimonial">
            <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
            <h2 className="testimonial__title mb-4">
              What our <span>customers</span> are saying
            </h2>
            <p className="testimonial__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              similique cupiditate accusantium quidem voluptas! Obcaecati
              officia architecto ab quasi dicta placeat voluptatibus tempore,
              saepe amet enim aperiam nihil optio iste!
            </p>
            <TestimonialSlider />
          </div>
        </Col>
        <Col lg="6" md="6">
          <img src={networkImg} alt="testimonial-img" className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
