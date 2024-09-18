import React from "react";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import SkatingClass from "../components/SkatingClass";
import SkatingV from "../components/SkatingV";
import SkatingShop from "../components/SkatingShop";

const Home = () => {
  return (
    <>
      <SkatingClass />
      <About />
      <SkatingV />
      <SkatingShop />
      <Testimonial />
    </>
  );
};

export default Home;
