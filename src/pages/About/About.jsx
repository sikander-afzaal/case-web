import React from "react";
import "./style.css";
import left from "../../assets/left.png";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about page">
      <div className="c_container">
        <div className="left-section">
          <Link to={"/"}>
            <img src={left} alt="" />
          </Link>
        </div>
        <div className="right-section">
          <h2>About</h2>{" "}
          <p>
            Fasten is a Copenhagen-based company that is changing the way we
            experience our phones. We blend function and style into an unique
            combination that completely changes the interaction between humans
            and technology,
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
