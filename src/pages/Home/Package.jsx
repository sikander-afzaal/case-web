import React from "react";
import img1 from "../../assets/packagingDesk.png";
import img2 from "../../assets/packagingMob.png";
function Package() {
  return (
    <div className="pack">
      <img src={img1} className="desk-pack" alt="" />
      <img src={img2} className="mob-pack" alt="" />
    </div>
  );
}

export default Package;
