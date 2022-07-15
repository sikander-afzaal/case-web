import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import scrollToComponent from "react-scroll-to-component";
import { ScrollRotate } from "react-scroll-rotate";
// assets
import clear1 from "../../assets/images/clear/1.jpg";
import clear2 from "../../assets/images/clear/2.jpg";
import clear3 from "../../assets/images/clear/3.jpg";
import clear4 from "../../assets/images/clear/4.jpg";
import clear5 from "../../assets/images/clear/5.jpg";
import black1 from "../../assets/images/black/1.jpg";
import black2 from "../../assets/images/black/2.jpg";
import black3 from "../../assets/images/black/3.jpg";
import black4 from "../../assets/images/black/4.jpg";
import black5 from "../../assets/images/black/5.jpg";
import rotate from "../../assets/rotate.png";
import bg from "../../assets/bg.svg";
import { Link } from "react-router-dom";
const LaunchEdition = () => {
  const [clear, setCase] = useState(false);
  const [url, setUrl] = useState("iPhone13ProBlack");
  const [selectValue, setSelectValue] = useState("iPhone 13 Pro");
  const clickHandler = (e) => {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    e.target.classList.add("active");
    let type = "";
    if (e.target.innerText === "Black Case") {
      setCase(false);
      type = "Black";
    } else if (e.target.innerText === "Clear Case") {
      setCase(true);
      type = "Clear";
    }
    setUrl(() => {
      const value = selectValue.split(" ").join("");
      setUrl(value + type);
    });
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
            <img src={clear1} alt="" />
            <img src={black1} alt="" className={`${clear ? "opacity0" : ""}`} />
          </div>
          <div className="img-div">
            <img src={clear2} alt="" />
            <img src={black2} alt="" className={`${clear ? "opacity0" : ""}`} />
          </div>
          <div className="img-div">
            <img src={clear3} alt="" />
            <img src={black3} alt="" className={`${clear ? "opacity0" : ""}`} />
          </div>
          <div className="img-div">
            <img src={clear4} alt="" />
            <img src={black4} alt="" className={`${clear ? "opacity0" : ""}`} />
          </div>
          <div className="img-div">
            <img src={clear5} alt="" />
            <img src={black5} alt="" className={`${clear ? "opacity0" : ""}`} />
          </div>
        </div>
        <div id="mob-img" className="le_left mb">
          <Splide
            options={{
              interval: 2500,
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
                <img src={clear1} alt="" />
                <img
                  src={black2}
                  alt=""
                  className={`${clear ? "opacity0" : ""}`}
                />
              </div>
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <div className="img-div">
                <img src={clear2} alt="" />
                <img
                  src={black2}
                  alt=""
                  className={`${clear ? "opacity0" : ""}`}
                />
              </div>
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <div className="img-div">
                <img src={clear3} alt="" />
                <img
                  src={black3}
                  alt=""
                  className={`${clear ? "opacity0" : ""}`}
                />
              </div>
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <div className="img-div">
                <img src={clear4} alt="" />
                <img
                  src={black4}
                  alt=""
                  className={`${clear ? "opacity0" : ""}`}
                />
              </div>
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <div className="img-div">
                <img src={clear5} alt="" />
                <img
                  src={black5}
                  alt=""
                  className={`${clear ? "opacity0" : ""}`}
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="le_right">
          <img src={bg} className="bg-shine" alt="" />
          <div className="right-cont">
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
                  <select
                    onChange={(e) => {
                      setSelectValue(e.target.value);
                      setUrl(() => {
                        const value = e.target.value.split(" ").join("");
                        const type = clear ? "Clear" : "Black";
                        setUrl(value + type);
                      });
                    }}
                    value={selectValue}
                  >
                    <option value="iPhone 13 Pro">iPhone 13 Pro</option>
                    <option value="iPhone 13 Pro">iPhone 13 Pro</option>
                    <option value="iPhone 13">iPhone 13</option>
                    <option value="iPhone 13 Mini">iPhone 13 Mini</option>
                    <option value="iPhone 12 / 12 Pro">
                      iPhone 12 / 12 Pro
                    </option>
                    <option value="iPhone 12 Pro Max">iPhone 12 Pro Max</option>
                    <option value="iPhone 12 Mini">iPhone 12 Mini</option>
                    <option value="iPhone 11">iPhone 11</option>
                    <option value="iPhone 11 Pro">iPhone 11 Pro</option>
                    <option value="iPhone 11 Pro Max">iPhone 11 Pro Max</option>
                  </select>
                </div>
              </div>

              <Link to={`/${url}`} className="buy_now">
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LaunchEdition;
