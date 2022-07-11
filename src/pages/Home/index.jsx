import React from "react";
import "./style.css";
import Hero from "./Hero";
import LaunchEdition from "./LaunchEdition";
import Blend from "./Blend";
import Footer from "../../layout/Footer";
import Package from "./Package";

const Home = () => {
  return (
    <>
      <Hero />
      <LaunchEdition />
      <Package />
      <Blend />
      <Footer />
    </>
  );
};

export default Home;
