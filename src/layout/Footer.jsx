import React from "react";
import "./style.css";
// assets
import footerLogo from "../assets/images/footerlogo.png";
import tiktokIcon from "../assets/icons/tiktok.png";
import instagramIcon from "../assets/icons/instagram.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const clickHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="footer">
        <div className="ft_container">
          <div className="ft_1">
            <div className="logo-div">
              <img src={footerLogo} alt="logo" />
              <p>CVR-nr 43103687</p>
            </div>
            <div className="ft_links_wrap">
              <div>
                <Link onClick={clickHandler} to="/about">
                  About
                </Link>
                <Link onClick={clickHandler} to="/contact">
                  Contact
                </Link>
                <Link onClick={clickHandler} to="/privacy">
                  Privacy
                </Link>
              </div>
              <div>
                <Link onClick={clickHandler} to="/terms">
                  Terms of Use
                </Link>
                <Link onClick={clickHandler} to="/shipping">
                  Shipping
                </Link>
                <Link onClick={clickHandler} to="/returns">
                  Returns
                </Link>
              </div>
            </div>
          </div>
          <div className="ft_2">
            <a href="https://tiktok.com/@fasten.studio" target={"blank"}>
              <img src={tiktokIcon} alt="tiktokIcon" />
            </a>
            <a
              href="https://www.instagram.com/fasten.studio/ "
              target={"blank"}
            >
              <img src={instagramIcon} alt="instagramIcon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
