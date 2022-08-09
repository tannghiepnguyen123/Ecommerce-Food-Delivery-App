import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import "../style/cart-page.css";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
              <div className="mt-4">
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal">
                    {totalAmount.toLocaleString()}
                  </span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addToCart__btn me-3">
                    <Link to={"/foods"}>Continue shopping</Link>
                  </button>
                  <button className="addToCart__btn">
                    <Link to={"/checkout"}>Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td className="cart__img-box">
        <img src={item.image01} alt="" />
      </td>
      <td>{item.title}</td>
      <td>${item.price.toLocaleString()}</td>
      <td>{item.quantity.toLocaleString()}</td>
      <td className="text-danger cart__item-del">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
