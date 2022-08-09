import React from "react";

import Helmet from "../components/Helmet/Helmet";
import Category from "../components/UI/category/Category";
import Hero from "../components/Hero/Hero";
import Feature from "../components/Feature/Feature";
import Food from "../components/Food/Food";
import Why from "../components/Why/Why";
import HotPizza from "../components/HotPizza/HotPizza";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Hero />
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Feature />
      </section>
      <section>
        <Food />
      </section>
      <section className="why__choose-us">
        <Why />
      </section>
      <section className="pt-0">
        <HotPizza />
      </section>
      <section>
        <Testimonial />
      </section>
    </Helmet>
  );
};

export default Home;
