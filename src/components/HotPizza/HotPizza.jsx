import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import products from "../../assets/fake-data/products";
import ProductCard from "../UI/product-card/ProductCard";
import "./hotPizza.css";

const HotPizza = () => {
  const [hotPizza, setHotPizza] = useState([]);
  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);
  return (
    <Container>
      <Row>
        <Col lg="12" className="text-center mb-5">
          <h2>Hot Pizza</h2>
        </Col>
        {hotPizza.map((item) => (
          <Col lg="3" md="4" key={item.id}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HotPizza;
