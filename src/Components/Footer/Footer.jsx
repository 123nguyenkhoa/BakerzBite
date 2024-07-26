import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import Translate from "../Translate/Translate";
import footer_logo from "../Assets/logo-1.jpg";
import instagram_icon from "../Assets/instagram_icon.png";
import facebook_icon from "../Assets/facebook.jpg";
import youtube_icon from "../Assets/youtube.jpg";
import tiktok_icon from "../Assets/tiktok-icon.webp";

const Footer = () => {
  const [tickerContent, setTickerContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    function updateTicker(location) {
      const now = new Date();
      const dateTime = now.toLocaleString();
      const content = `Date & Time: ${dateTime}, Location: ${location}`;
      setTickerContent(content);
    }

    function getLocation() {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
          updateTicker("Geolocation is not supported by this browser.");
        }
      } catch (error) {
        console.error("Error getting location:", error);
        updateTicker("Error getting location.");
      }
    }

    function showPosition(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const location = `Latitude: ${latitude}, Longitude: ${longitude}`;
      updateTicker(location);
    }

    function showError(error) {
      let errorMessage;
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          errorMessage = "The request to get user location timed out.";
          break;
        default:
          errorMessage = "An unknown error occurred.";
          break;
      }
      updateTicker(errorMessage);
    }

    getLocation();
    const interval = setInterval(getLocation, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <div className="footer">
      <footer>
        <div className="row-1">
          <div className="cols">
            <img src={footer_logo} className="logo-1" alt="Footer Logo" />
            <p>
              At Bakerz Bite, we bake fresh, delicious treats to bring sweetness
              to your day. Join us for delightful moments in every bite.
            </p>
          </div>
          <div className="cols">
            <h3>
              Office
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>8 Dorothy Lane</p>
            <p>East Brunswick</p>
            <p>New Jersey, USA</p>
            <p className="email-id">bakerzbite@gmail.com</p>
            <p>+1.123.456.7890</p>
          </div>
          <div className="cols">
            <h3>
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <Link
                  className="link"
                  to="/Home"
                  onClick={() => handleLinkClick("/Home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to="/Branch"
                  onClick={() => handleLinkClick("/Branch")}
                >
                  Branch
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to="/VirtualAssistant"
                  onClick={() => handleLinkClick("/VirtualAssistant")}
                >
                  Virtual Assistant
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to="/FAQ"
                  onClick={() => handleLinkClick("/FAQ")}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="cols">
            <h3>
              Newsletter
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <form className="form-1">
              <i className="uil uil-envelope"></i>
              <label htmlFor="newsletter-email">
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Enter Your Email"
                  required
                />
              </label>
              <button type="submit">
                <i className="uil uil-arrow-right"></i>
              </button>
            </form>
            <div className="social-icon">
              <Link to="/Facebook" onClick={() => handleLinkClick("/Facebook")}>
                <img src={facebook_icon} alt="Facebook" />
              </Link>
              <Link to="/Youtube" onClick={() => handleLinkClick("/Youtube")}>
                <img src={youtube_icon} alt="YouTube" />
              </Link>
              <Link to="/Tiktok" onClick={() => handleLinkClick("/Tiktok")}>
                <img src={tiktok_icon} alt="Tiktok" />
              </Link>
              <Link
                to="/Instagram"
                onClick={() => handleLinkClick("/Instagram")}
              >
                <img src={instagram_icon} alt="Instagram" />
              </Link>
              <Translate />
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-copyright">
          <p>Copyright @ 2024- All Right Reserved.</p>
        </div>
      </footer>
      <div id="ticker">
        <span id="ticker-content">{tickerContent}</span>
      </div>
    </div>
  );
};

export default Footer;
