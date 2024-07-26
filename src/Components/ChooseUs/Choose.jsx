import React from "react";
import "./Choose.css";
import centralImage from "../Assets/choose-us.jpg"; 
import chooseImage1 from "../Assets/cake-icon.png";
import chooseImage2 from "../Assets/flower-icon.png";
import chooseImage3 from "../Assets/truck-icon.png";
import chooseImage4 from "../Assets/credit-icon.png";

const Choose = () => {
  return (
    <section className="choose-us-section">
      <div className="container">
        <h2 className="section-title">WHY CHOOSE US</h2>
        <div className="choose-us-content">
          <div className="choose-us-row">
            <div className="choose-us-item">
              <img
                src={chooseImage1}
                alt="Quality Products"
                className="choose-us-image"
              />
              <h4>Quality Products</h4>
              <p>
                We guarantee the quality of all the cakes we provide as they are
                baked using the freshest ingredients.
              </p>
            </div>
            <div className="choose-us-item">
              <img
                src={chooseImage2}
                alt="Catering Service"
                className="choose-us-image"
              />
              <h4>Catering Service</h4>
              <p>
                Our bakery also provides an outstanding catering service for
                events and special occasions.
              </p>
            </div>
          </div>
          <div className="choose-central-image-container">
            <img
              src={centralImage}
              alt="Central Image"
              className="choose-central-image"
            />
          </div>
          <div className="choose-us-row">
            <div className="choose-us-item">
              <img
                src={chooseImage3}
                alt="Free Delivery"
                className="choose-us-image"
              />
              <h4>Free Delivery</h4>
              <p>
                All orders submitted by our US clients are delivered for free
                throughout the United States.
              </p>
            </div>
            <div className="choose-us-item">
              <img
                src={chooseImage4}
                alt="Online Payment"
                className="choose-us-image"
              />
              <h4>Online Payment</h4>
              <p>
                We accept all kinds of online payments including Visa,
                MasterCard, American Express credit cards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
