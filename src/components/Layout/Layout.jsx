import React from "react";
import { useSelector } from "react-redux";
import Routers from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Carts from "../UI/cart/Carts";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <header>
        <Header />
      </header>
      {showCart && <Carts />}
      <div>
        <Routers />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
