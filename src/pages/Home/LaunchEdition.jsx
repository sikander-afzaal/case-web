import React, { useEffect, useState } from "react";
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
const LaunchEdition = () => {
  const [clear, setCase] = useState(false);
  const [url, setUrl] = useState("");
  const [selectValue, setSelectValue] = useState("Iphone 13 Pro");
  const links = [
    {
      type: "Black",
      model: "Iphone 13 Pro",
      link: "https://fasten-studio.myshopify.com/cart/43112850358499:1",
    },
    {
      type: "Black",
      model: "Iphone 13 Pro Max",
      link: "https://fasten-studio.myshopify.com/cart/43112850424035:1",
    },
    {
      type: "Black",
      model: "Iphone 13",
      link: "https://fasten-studio.myshopify.com/cart/43112850489571:1",
    },
    {
      type: "Black",
      model: "Iphone 13 Mini",
      link: "https://fasten-studio.myshopify.com/cart/43112850555107:1",
    },
    {
      type: "Black",
      model: "Iphone 12 / 12 Pro",
      link: "https://fasten-studio.myshopify.com/cart/43112850620643:1",
    },
    {
      type: "Black",
      model: "Iphone 12 Pro Max",
      link: "https://fasten-studio.myshopify.com/cart/43112850686179:1",
    },
    {
      type: "Black",
      model: "Iphone 12 Mini",
      link: "https://fasten-studio.myshopify.com/cart/43112850751715:1",
    },
    {
      type: "Black",
      model: "Iphone 11",
      link: "https://fasten-studio.myshopify.com/cart/43112850817251:1",
    },
    {
      type: "Black",
      model: "Iphone 11 Pro",
      link: "https://fasten-studio.myshopify.com/cart/43112850882787:1",
    },
    {
      type: "Black",
      model: "Iphone 11 Pro Max",
      link: "https://fasten-studio.myshopify.com/cart/43112850948323:1",
    },
    {
      type: "Clear",
      model: "Iphone 13 Pro",
      link: "https://fasten-studio.myshopify.com/cart/43112850391267:1",
    },
    {
      type: "Clear",
      model: "Iphone 13 Pro Max",
      link: "https://fasten-studio.myshopify.com/cart/43112850456803:1",
    },
    {
      type: "Clear",
      model: "Iphone 13",
      link: "https://fasten-studio.myshopify.com/cart/43112850522339:1",
    },
    {
      type: "Clear",
      model: "Iphone 13 Mini",
      link: "https://fasten-studio.myshopify.com/cart/43112850587875:1",
    },
    {
      type: "Clear",
      model: "Iphone 12 / 12 Pro",
      link: "https://fasten-studio.myshopify.com/cart/43112850653411:1",
    },
    {
      type: "Clear",
      model: "Iphone 12 Pro Max",
      link: "https://fasten-studio.myshopify.com/cart/43112850718947:1",
    },
    {
      type: "Clear",
      model: "Iphone 12 Mini",
      link: "https://fasten-studio.myshopify.com/cart/43112850718947:1",
    },
    {
      type: "Clear",
      model: "Iphone 11",
      link: "https://fasten-studio.myshopify.com/cart/43112850850019:1",
    },
    {
      type: "Clear",
      model: "Iphone 11 Pro",
      link: "https://fasten-studio.myshopify.com/cart/43112850915555:1",
    },
    {
      type: "Clear",
      model: "Iphone 11 Pro Max",
      link: "https://fasten-studio.myshopify.com/cart/43112850981091:1",
    },
  ];
  useEffect(() => {
    links.forEach((elem) => {
      if (selectValue === elem.model) {
        if (clear && elem.type === "Clear") {
          setUrl(elem.link);
        } else if (!clear && elem.type === "Black") {
          setUrl(elem.link);
        }
      }
    });
  }, [clear, selectValue]);

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
              type: "loop",
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
                  src={black1}
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
                <span>280 DKK</span>
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
                    }}
                    value={selectValue}
                  >
                    <option value="Iphone 13 Pro">Iphone 13 Pro</option>
                    <option value="Iphone 13 Pro">Iphone 13 Pro</option>
                    <option value="Iphone 13">Iphone 13</option>
                    <option value="Iphone 13 Mini">Iphone 13 Mini</option>
                    <option value="Iphone 12 / 12 Pro">
                      Iphone 12 / 12 Pro
                    </option>
                    <option value="Iphone 12 Pro Max">Iphone 12 Pro Max</option>
                    <option value="Iphone 12 Mini">Iphone 12 Mini</option>
                    <option value="Iphone 11">Iphone 11</option>
                    <option value="Iphone 11 Pro">Iphone 11 Pro</option>
                    <option value="Iphone 11 Pro Max">Iphone 11 Pro Max</option>
                  </select>
                </div>
              </div>

              <a target={"blank"} href={`${url}`} className="buy_now">
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LaunchEdition;
