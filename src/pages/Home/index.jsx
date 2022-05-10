import React from "react";
import "./style.css";
import Hero from "./Hero";
import LaunchEdition from "./LaunchEdition";
import Blend from "./Blend";
import Footer from "../../layout/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <LaunchEdition />
      <Blend />
      <Footer />
    </>
  );
};

export default Home;
