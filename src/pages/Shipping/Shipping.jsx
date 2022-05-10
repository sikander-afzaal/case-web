import React from "react";
import left from "../../assets/left.png";
import { Link } from "react-router-dom";
function Shipping() {
  return (
    <div className="shipping page">
      <div className="c_container">
        <div className="left-section">
          <Link to={"/"}>
            <img src={left} alt="" />
          </Link>
        </div>
        <div className="right-section">
          <h2>Shipping</h2>{" "}
          <div className="bottom-right">
            <p>
              This Shipping & Delivery Policy is part of our Terms of Use
              ("Terms") and should be therefore read alongside our main Terms:
              fasten.studio/terms. Please carefully review our Shipping &
              Delivery Policy when purchasing our products. This policy will
              apply to any order you place with us.
            </p>
            <h1>WHAT ARE MY SHIPPING & DELIVERY OPTIONS?</h1>
            <p>
              {" "}
              We offer various shipping options. In some cases a third-party
              supplier may be managing our inventory and will be responsible for
              shipping your products.
            </p>
            <h1>Shipping Fees</h1>
            <p>
              We offer shipping at the following rates:
              <br /> Shipping Method Shipping <br />
              Fee Express 50
            </p>
            <p>
              All times and dates given for delivery of the products are given
              in good faith but are estimates only.
            </p>
            <p>
              For EU and UK consumers: This does not affect your statutory
              rights. Unless specifically noted, estimated delivery times
              reflect the earliest available delivery, and deliveries will be
              made within 30 days after the day we accept your order. For more
              information please refer to our Terms.
            </p>
            <h1>DO YOU DELIVER INTERNATIONALLY?</h1>
            <p> We do not offer international shipping.</p>
            <h1>WHAT HAPPENS IF MY ORDER IS DELAYED?</h1>
            <p>
              {" "}
              If delivery is delayed for any reason we will let you know as soon
              as possible and will advise you of a revised estimated date for
              delivery. For EU and UK consumers: This does not affect your
              statutory rights. For more information please refer to our Terms.
            </p>
            <h1>QUESTIONS ABOUT RETURNS?</h1>
            <p>
              If you have questions about returns, please review our Return
              Policy: fasten.studio/returns.
            </p>
            <h1>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h1>
            <p>
              If you have any further questions or comments, you may contact us
              by: Email: hi@fasten.studio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
