import React from "react";
import { Parallax } from "react-parallax";
import arrowDown from "../../assets/arrowDown.svg";
import fastenImg from "../../assets/images/fastenImg.png";
import scrollToComponent from "react-scroll-to-component";
const Hero = () => {
  return (
    <>
      <Parallax strength={800} className="hero">
        <img src={fastenImg} alt="" />
        <img
          onClick={() =>
            scrollToComponent(document.querySelector("#launch"), {
              offset: 0,
              align: "top",
              duration: 250,
              ease: "inExpo",
            })
          }
          src={arrowDown}
          alt=""
          className="arrow-down"
        />
      </Parallax>
    </>
  );
};

export default Hero;
