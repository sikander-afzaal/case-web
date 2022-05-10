import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { ScrollRotate } from "react-scroll-rotate";
import scrollToComponent from "react-scroll-to-component";
// assets
import A from "../../assets/images/A.jpeg";
import B from "../../assets/images/B.jpeg";
import C from "../../assets/images/C.jpeg";
import D from "../../assets/images/D.jpeg";
import E from "../../assets/images/E.jpeg";
import F from "../../assets/images/F.jpeg";
import rotate from "../../assets/rotate.png";
const LaunchEdition = () => {
  const [clear, setCase] = useState(false);
  const clickHandler = (e) => {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    e.target.classList.add("active");
    if (e.target.innerText === "Black Case") {
      setCase(false);
    } else if (e.target.innerText === "Clear Case") {
      setCase(true);
    }
    scrollToComponent(document.querySelector("#mob-img"), {
      offset: 0,
      align: "top",
      duration: 250,
      ease: "inExpo",
    });
  };
  return (
    <>
      <section id="launch" className="launch_edition">
        <div className="le_left desk">
          <div className="img-div">
            <img src={D} alt="" />
            <img src={A} alt="" className={`${clear ? "opacity0" : ""}`} />
          </div>
          <div className="img-div">
            <img src={E} alt="" />
            <img src={B} alt="" className={`${clear ? "opacity0" : ""}`} />
          </div>
          <div className="img-div">
            <img src={F} alt="" />
            <img src={C} alt="" className={`${clear ? "opacity0" : ""}`} />
          </div>
        </div>
        <div id="mob-img" className="le_left mb">
          <Splide
            options={{
              interval: 2500,
              // autoplay: true,
              gap: "0px",
              rewind: true,
              loop: false,
              perPage: 1,
              height: "auto",
              width: "100%",
              arrows: false,
              focus: "center",
              pagination: true,
              drag: true,
              perMove: 1,
              flickMaxPages: 1,
              flickPower: 500,
            }}
          >
            <SplideSlide className="swiper-lazy">
              <div className="img-div">
                <img src={D} alt="" />
                <img src={A} alt="" className={`${clear ? "opacity0" : ""}`} />
              </div>
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <div className="img-div">
                <img src={E} alt="" />
                <img src={B} alt="" className={`${clear ? "opacity0" : ""}`} />
              </div>
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <div className="img-div">
                <img src={F} alt="" />
                <img src={C} alt="" className={`${clear ? "opacity0" : ""}`} />
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="le_right">
          <h2>LAUNCH EDITION</h2>
          <h1>
            <span className="stroke">FASTEN</span> Strap+Case
          </h1>
          <div className="dkk_wrap">
            <div className="dkk_div">
              <span>350 DKK</span>
            </div>
            <ScrollRotate method={"perc"} loops={1} from={0} to={360}>
              <img src={rotate} alt="" className="rotate" />
            </ScrollRotate>
          </div>
          <p className="desc">
            <span>FASTEN YOUR PHONE</span>

            <span>
              {" "}
              Our strapped case lets you embrace freedom and safety. Keep your
              hands free and your screen safe, by wearing a fashion piece that
              enables playfulness and experimentation. An invitation to
              radically change the way you experience your phone, for the
              better.
            </span>

            <span> Shipped from Copenhagen, few pieces available.</span>
          </p>
          <div className="col-cont">
            <div className="row-div">
              <div className="btn_wrap">
                <button onClick={clickHandler} className="active">
                  Black Case
                </button>
                <button onClick={clickHandler}>Clear Case</button>
              </div>
              <div className="select_wrap">
                <select>
                  <option value="">iPhone 13 Pro</option>
                  <option value="">iPhone 13 Pro Max</option>
                  <option value="">iPhone 13</option>
                  <option value="">iPhone 13 Mini</option>
                  <option value="">iPhone 12 / 12 Pro</option>
                  <option value="">iPhone 12 Pro Max</option>
                  <option value="">iPhone 12 Mini</option>
                  <option value="">iPhone 11</option>
                  <option value="">iPhone 11 Pro</option>
                  <option value="">iPhone 11 Pro Max</option>
                </select>
              </div>
            </div>

            <button className="buy_now">BUY NOW</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LaunchEdition;
