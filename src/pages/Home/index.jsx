import React from "react";
import "./style.css";
import Hero from "./Hero";
import LaunchEdition from "./LaunchEdition";
import Blend from "./Blend";
import Footer from "../../layout/Footer";
import Section2 from "./Section2";

const Home = () => {
  return (
    <>
      <Hero />
      <Section2 />
      <LaunchEdition />
      <Blend />
      <Footer />
    </>
  );
};

export default Home;
