import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="Arrow Icon" /> BAKERY
      <img src={arrow_icon} alt="Arrow Icon" />
      {product.category} <img src={arrow_icon} alt="Arrow Icon" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
