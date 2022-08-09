import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import foodCategoryImg01 from "../../assets/images/hamburger.png";
import foodCategoryImg02 from "../../assets/images/pizza.png";
import foodCategoryImg03 from "../../assets/images/bread.png";
import products from "../../assets/fake-data/products";
import ProductCard from "../UI/product-card/ProductCard";
import "./food.css";

const Food = () => {
  const [category, setCategory] = useState("ALL");
  const [product, setProduct] = useState(products);
  useEffect(() => {
    if (category === "ALL") {
      setProduct(products);
    } else if (category === "BURGER") {
      setProduct(products.filter((item) => item.category === "Burger"));
    } else if (category === "PIZZA") {
      setProduct(products.filter((item) => item.category === "Pizza"));
    } else {
      setProduct(products.filter((item) => item.category === "Bread"));
    }
  }, [category]);
  return (
    <Container>
      <Row>
        <Col lg="12" className="text-center">
          <h2>Popular Foods</h2>
        </Col>
        <Col lg="12">
          <div className="food__category d-flex align-items-center justify-content-center gap-4">
            <button
              className={`all__btn ${
                category === "ALL" ? "foodBtnActive" : ""
              }`}
              onClick={() => {
                setCategory("ALL");
              }}
            >
              All
            </button>
            <button
              className={`d-flex align-items-center gap-2 ${
                category === "BURGER" ? "foodBtnActive" : ""
              }`}
              onClick={() => {
                setCategory("BURGER");
              }}
            >
              <img src={foodCategoryImg01} alt="" />
              Burger
            </button>
            <button
              className={`d-flex align-items-center gap-2 ${
                category === "PIZZA" ? "foodBtnActive" : ""
              }`}
              onClick={() => {
                setCategory("PIZZA");
              }}
            >
              <img src={foodCategoryImg02} alt="" />
              Pizza
            </button>
            <button
              className={`d-flex align-items-center gap-2 ${
                category === "BREAD" ? "foodBtnActive" : ""
              }`}
              onClick={() => {
                setCategory("BREAD");
              }}
            >
              <img src={foodCategoryImg03} alt="" />
              Bread
            </button>
          </div>
        </Col>
        {product.map((item) => (
          <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Food;
