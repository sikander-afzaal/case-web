import React from "react";
import left from "../../assets/left.png";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="contact page">
      <div className="c_container">
      <div className="left-section">
        <Link to={"/"}>
          <img src={left} alt="" />
        </Link>
      </div>
      <div className="right-section">
        <h2>Contact</h2>{" "}
        <p>
          Fasten <br /> hi@fasten.com
        </p>
      </div>
      </div>
    </div>
  );
}

export default Contact;
