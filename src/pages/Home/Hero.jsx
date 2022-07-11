import React from "react";
import { Parallax } from "react-parallax";
import fastenImg from "../../assets/images/fastenImg.svg";
import scrollToComponent from "react-scroll-to-component";
const Hero = () => {
  return (
    <>
      <Parallax strength={800} className="hero">
        <img src={fastenImg} alt="" />
      </Parallax>
    </>
  );
};

export default Hero;
