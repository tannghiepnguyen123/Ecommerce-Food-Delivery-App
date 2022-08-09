import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import whyImg from "../../assets/images/location.png";
import "./why.css";

const Why = () => {
  return (
    <Container>
      <Row>
        <Col lg="6" md="6">
          <img src={whyImg} alt="why-tasty-treat" className="w-100" />
        </Col>
        <Col lg="6" md="6">
          <div className="why__tasty-treat">
            <h2 className="tasty__treat-title mb-4">
              Why <span>Tasty Treat?</span>
            </h2>
            <p className="tasty__treat-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              provident soluta similique fugit ab labore voluptatem ad, saepe
              iusto eum ut molestias corporis inventore ipsum, dolor repellat
              cum ducimus. Rem.
            </p>

            <ListGroup className="mt-4">
              <ListGroupItem className="border-0 ps-0">
                <p className="choose__us-title d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Fresh and tasty foods
                </p>
                <p className="choose__us-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, ad?
                </p>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0">
                <p className="choose__us-title d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Quality support
                </p>
                <p className="choose__us-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  voluptatibus.
                </p>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0">
                <p className="choose__us-title d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Order from any
                  location
                </p>
                <p className="choose__us-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  voluptatibus.
                </p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Why;
