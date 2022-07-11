import React from "react";
import { useParams } from "react-router-dom";
function ProductPage() {
  const param = useParams();
  return <div className="productPage">{param.product}</div>;
}

export default ProductPage;
