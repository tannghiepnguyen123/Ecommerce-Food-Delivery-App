import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import { useAuth } from "../../contexts/AuthContext";
import { Fragment } from "react";

const nav__link = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const { currentUser, signout } = useAuth();
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });
    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="" />
            <h5>Tasty Treat</h5>
          </div>
          {/* Menu  */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__link.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={({ isActive }) => (isActive ? "active__menu" : "")}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* NAV RIGHT ICONS  */}
          {currentUser ? (
            <div className="nav__right d-flex align-items-center gap-4">
              <span className="cart__icon" onClick={toggleCart}>
                <i className="ri-shopping-basket-line"></i>
                <span className="cart__badge">{totalQuantity}</span>
              </span>
              <span className="user">
                <div className="d-flex align-items-center">
                  <i className="ri-user-line"></i>
                  <span
                    style={{ cursor: "pointer" }}
                    className="ms-3"
                    onClick={() => {
                      signout()
                        .then(() => {
                          navigate("/");
                        })
                        .catch((error) => {});
                    }}
                  >
                    Sign out
                  </span>
                </div>
              </span>
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          ) : (
            <Link className="login" to={"/login"}>
              Login
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
