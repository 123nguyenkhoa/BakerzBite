import React from "react";
import "./NotFound.css";
import donut from "../Assets/404-error.avif";

const NotFound = () => {
  return (
    <div className="error1">
      <div className="error-content">
        <img src={donut} alt="Error Image" className="donut" />
        <h2>
          I have a bad news <br /> for you
        </h2>
        <p>
          The page you are looking <br /> for might be removed or is <br />{" "}
          temporarily unavailable
        </p>
        <button className="backto">Back to homepage</button>
      </div>
    </div>
  );
};

export default NotFound;
