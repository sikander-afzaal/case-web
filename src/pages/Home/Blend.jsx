import React from "react";
// assets
import cloud from "../../assets/images/cloud.png";
import sharp from "../../assets/images/sharpe.png";
import dollar from "../../assets/images/dollar.png";
import title1 from "../../assets/title1.svg";
import title2 from "../../assets/title2.svg";
import title3 from "../../assets/title3.svg";
import bg from "../../assets/bg.svg";
const Blend = () => {
  const faqData = [
    {
      title: title1,
      text: `We offset all the emissions caused by manufacturing, logistics, and digital operations through Carbon Capture. Thanks to this technology, CO2 is absorbed directly from the atmosphere, providing a much quicker compensation compared to tree planting.`,
      className: "cloud_img",
      img: cloud,
    },
    {
      title: title2,
      text: `We prioritized materials with eco-friendly characteristics such as recycled polyester for the strap and biodegradable TPU for the cases (the clear case  also features PC). For the packaging we only used simple and recyclable paper, without any plastic.`,
      className: "sharp_img",
      img: sharp,
    },
    {
      title: title3,
      text: `Tired of your Fasten Case? Let somebody else give it some love and save resources. We are working on a marketplace where it will be easy for you to find a buyer among our visitors. Coming soon!`,
      className: "dollar_img",
      img: dollar,
    },
  ];
  return (
    <>
      <div className="blend">
        <img className="blend-bg" src={bg} alt="" />
        <div className="b_container">
          {faqData.map((d, i) => {
            return (
              <div key={i} className="blend_content">
                <div className="active_faq">
                  <img className="title" src={d.title} />
                  <p>{d.text}</p>
                </div>
                <div className="blend_imgs">
                  <img className={d.className} src={d.img} alt="..." />{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blend;
