import React, { useState, useRef, useEffect } from "react";
import "./SliderMain.css";
import slider_1 from "../Assets/slide-2.jpg";
import slider_2 from "../Assets/slide-1.jpg";
import slider_3 from "../Assets/slide-3.jpg";
import slider_4 from "../Assets/slide-4.jpg";
import ArrowLeft from "../Assets/left-arrow.svg";
import ArrowRight from "../Assets/right-arrow.svg";

const SliderMain = () => {
  const sliderRef = useRef(null);
  const sliderListRef = useRef(null);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const sliderList = sliderListRef.current;
    const thumbnail = thumbnailRef.current;
    const thumbnailItems = thumbnail.querySelectorAll(".item");

    thumbnail.appendChild(thumbnailItems[0]);

    const moveSlider = (direction) => {
      const sliderItems = sliderList.querySelectorAll(".item");
      const thumbnailItems = thumbnail.querySelectorAll(".item");

      if (direction === "next") {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add("next");
      } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add("prev");
      }

      slider.addEventListener(
        "animationend",
        function () {
          if (direction === "next") {
            slider.classList.remove("next");
          } else {
            slider.classList.remove("prev");
          }
        },
        { once: true }
      );
    };

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    nextBtn.onclick = () => moveSlider("next");
    prevBtn.onclick = () => moveSlider("prev");

    // Cleanup function
    return () => {
      nextBtn.onclick = null;
      prevBtn.onclick = null;
    };
  }, []);

  return (
    <div>
      <div className="slider" ref={sliderRef}>
        <div className="list" ref={sliderListRef}>
          <div className="item">
            <img src={slider_1} alt="" />

            <div className="content">
              <div className="title">Welcome to </div>
              <div className="type"> BAKERZ BITE!</div>
              <div className="description">
                Discover the finest selection of cakes, pastries, and desserts.
                Indulge in our delightful flavors crafted with love and passion.
              </div>
            </div>
          </div>

          <div className="item">
            <img src={slider_2} alt="" />

            <div className="content">
              <div className="title">Freshly Baked </div>
              <div className="type">DELIGHTS</div>
              <div className="description">
                Our bakers prepare fresh, delicious treats daily. Savor the
                taste of quality ingredients in every bite at Bakerz Bite.
              </div>
            </div>
          </div>

          <div className="item">
            <img src={slider_3} alt="" />

            <div className="content">
              <div className="title"> Sweet Treats</div>
              <div className="type">AWAITS YOU</div>
              <div className="description">
                From classic cakes to innovative desserts, we have something for
                everyone. Visit us and satisfy your sweet tooth today.
              </div>
            </div>
          </div>

          <div className="item">
            <img src={slider_4} alt="" />

            <div className="content">
              <div className="title">Experience</div>
              <div className="type">DESSERT PERFECTION</div>
              <div className="description">
                At Bakerz Bite, we take pride in our unique recipes and
                exceptional service. Join us for a delightful dessert
                experience.
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail-1" ref={thumbnailRef}>
          <div className="item">
            <img src={slider_1} alt="" />
          </div>
          <div className="item">
            <img src={slider_2} alt="" />
          </div>
          <div className="item">
            <img src={slider_3} alt="" />
          </div>
          <div className="item">
            <img src={slider_4} alt="" />
          </div>
        </div>

        <div className="nextPrevArrows">
          <button className="prev">
            <img src={ArrowLeft} alt="Previous" />
          </button>
          <button className="next">
            <img src={ArrowRight} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderMain;
