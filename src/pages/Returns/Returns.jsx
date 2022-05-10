import React from "react";
import left from "../../assets/left.png";
import { Link } from "react-router-dom";

function Returns() {
  return (
    <div className="page">
      <div className="c_container">
        <div className="left-section">
          <Link to={"/"}>
            <img src={left} alt="" />
          </Link>
        </div>
        <div className="right-section">
          <h2>Returns</h2>{" "}
          <div className="bottom-right">
            <p>
              Thank you for your purchase. We hope you are happy with your
              purchase. However, if you are not completely satisfied with your
              purchase for any reason, you may return it to us for a full refund
              only. Please see below for more information on our return Policy.
            </p>
            <h1>RETURNS</h1>
            <p>
              All returns must be postmarked within fourteen (14) days of the
              purchase date. All returned items must be in new and unused
              condition, with all original tags and labels Attached.
            </p>
            <h1>RETURN PROCESS</h1>
            <p>
              {" "}
              To return an item, please email customer service at
              hi@fasten.studio to obtain a Return Merchandise Authorization
              (RMA) number. After receiving a RMA number, place the item
              securely in its original packaging, and mail your return to the
              following address: <br /> Fasten <br /> Attn: Returns <br /> RMA #{" "}
              <br /> Amagerbrogade 69, 5 <br />
              Copenhagen, 2300 <br /> Denmark <br /> Please note, you will be
              responsible for all return shipping charges. We strongly recommend
              that you use a trackable method to mail your return.
            </p>
            <h1>REFUNDS</h1>
            <p>
              After receiving your return and inspecting the condition of your
              item, we will process your return. Please allow at least fourteen
              (14) days from the receipt of your item to process your return.
              Refunds may take 1-2 billing cycles to appear on your credit card
              statement, depending on your credit card company. We will notify
              you by email when your return has been processed.
            </p>
            <h1>EXCEPTIONS</h1>
            <p>
              {" "}
              For defective or damaged products, please contact us at the
              contact details below to arrange a refund or exchange.
            </p>
            <h1>QUESTIONS</h1>
            <p>
              If you have any questions concerning our return policy, please
              contact us at: hi@fasten.studio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Returns;
