import React from "react";
import { useDispatch } from "react-redux";
import { ListGroupItem } from "reactstrap";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import "./cart-item.css";

const CartItems = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img" />
        <div className="cart__product-info d-flex align-items-center gap-4 justify-content-between w-100">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity.toLocaleString()}x
              <span>${totalPrice.toLocaleString()}</span>
            </p>
            <div className="d-flex align-items-center gap-3 increase__decrease-btn justify-content-center">
              <span className="increase__btn" onClick={incrementItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity.toLocaleString()}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItems;
