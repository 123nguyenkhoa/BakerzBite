import React, { useState, useEffect } from "react";
import "./Hero.css";
import triangle from "../Assets/triangle.png";
import closeIcon from "../Assets/error.png";

const Hero = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const countDownDate = new Date("July 31, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="container100">
        <div className="content100">
          <h1>
            July <span>Promotions</span> <hr /> at Bakerz Bite!
          </h1>
          <p>
            Hurry in and enjoy our exclusive deals before the July promotion{" "}
            <br />
            ends at Bakerz Bite! Don't miss out on our special discounts!
          </p>
          <div className="launch-time">
            <div>
              <p id="days">{time.days}</p>
              <span>Days</span>
            </div>
            <div>
              <p id="hours">{time.hours}</p>
              <span>Hours</span>
            </div>
            <div>
              <p id="minutes">{time.minutes}</p>
              <span>Minutes</span>
            </div>
            <div>
              <p id="seconds">{time.seconds}</p>
              <span>Seconds</span>
            </div>
          </div>
          <button type="button" onClick={openModal}>
            Search Detail <img src={triangle} alt="" />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              <img src={closeIcon} alt="Close" />
            </button>
            <iframe
              srcDoc={`
                <html>
                  <head>
                    <style>
                      body { font-family: poppins; padding: 20px; }
                      h2 { color: #333; font-size:30px}
                      h3{color:#333; font-size:25px}
                      p { color: #555; font-size:18px }
                    </style>
                  </head>
                  <body>
                    <h2>🎉 July Promotions at Bakerz Bite! 🎉</h2>
                    <p>At Bakerz Bite, we're celebrating the month of July with a special promotion that will sweeten your summer! 🍰 To show our appreciation for your continued support, we've crafted exclusive deals and delightful surprises just for you.</p>
                    <h3>🎁 Exclusive Discounts:</h3>
                    <p>For the entire month of July, enjoy a <strong>15% discount</strong> on any purchase of $20 or more. This offer includes all our delicious cakes, pastries, and beverages. Whether you're craving a creamy pastry, a fresh-baked loaf, or a refreshing iced coffee, this is the perfect time to treat yourself and your loved ones. 🥐☕</p>
                    <h3>🎟️ Special Vouchers:</h3>
                    <p>Every purchase of $30 or more will come with a <strong>$5 voucher</strong> for your next visit. This voucher can be used on any product in our bakery, allowing you to enjoy our sweet treats again and again. 🍪</p>
                    <h3>🎁 Gifts and Surprises:</h3>
                    <p>As a token of our gratitude, customers who spend $50 or more will receive a complimentary gift box filled with a selection of our best-selling cookies. 🍪 It's our way of saying thank you for being a valued part of the Bakerz Bite family.</p>
                    <h3>🙏 Customer Appreciation:</h3>
                    <p>We deeply appreciate your loyalty and support. Our team at Bakerz Bite is dedicated to bringing you the highest quality baked goods and the best customer service. Your satisfaction is our top priority, and we hope our July promotions add a little extra joy to your summer. 🌞</p>
                    <p>Don't miss out on these fantastic deals! Visit us today and make the most of our July promotions. We look forward to serving you and making your visit to Bakerz Bite a memorable one. 🥳</p>
                  </body>
                </html>
              `}
              title="Promotion Details"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
