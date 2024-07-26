import React, { useEffect } from "react";
import "./Story.css";
import baker from "../Assets/baker.jpg";
import { useNavigate } from "react-router-dom";


const Story = () => {
  const navigate = useNavigate();

  const handleVisitAboutUs = () => {
    navigate("/About us");
  };

  useEffect(() => {
    const text = document.querySelector(".text100 p");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 8.1}deg)">${char}</span>`
      )
      .join("");
  }, []);

  return (
    <div className="abouts">
      <div className="main">
        <img src={baker} alt="Baker" />
        <div className="all-text">
          <h1>ABOUT US</h1>
          <h3>The Heart of Bakerz Bite</h3>
          <p>
            Bakerz Bite began with a passion for baking and a love for sharing
            sweet moments. From our kitchen to yours, we bring you the finest
            baked goods made with care and quality.
          </p>
          <div className="btn" onClick={handleVisitAboutUs}>
            <button type="button">Learn More</button>
          </div>
        </div>
      </div>
      <div className="circle">
        <div className="logo100">
          <div className="text100">
            <p>50+ years of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
