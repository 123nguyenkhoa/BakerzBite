import React, { useEffect, useRef } from "react";
import "./Banner.css";

const Banner = ({ selectedCategory, data }) => {
  const slideRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    if (nextRef.current && prevRef.current && slideRef.current) {
      const next = nextRef.current;
      const prev = prevRef.current;
      const slide = slideRef.current;

      const handleNextClick = () => {
        const items = slide.querySelectorAll(".item-custom");
        slide.appendChild(items[0]);
      };

      const handlePrevClick = () => {
        const items = slide.querySelectorAll(".item-custom");
        slide.prepend(items[items.length - 1]);
      };

      next.addEventListener("click", handleNextClick);
      prev.addEventListener("click", handlePrevClick);

      // Cleanup event listeners on component unmount
      return () => {
        next.removeEventListener("click", handleNextClick);
        prev.removeEventListener("click", handlePrevClick);
      };
    }
  }, []);

  const product = data.products[selectedCategory];

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-custom">
      <div ref={slideRef} className="slide-custom">
        {product.images.map((image, index) => (
          <div
            key={index}
            className="item-custom"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="content-custom">
              <div className="name-custom">{selectedCategory}</div>
              <div className="des-custom">{product.sentences[index]}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="button-custom">
        <button ref={prevRef} className="prev-custom">
          <i className="uil uil-arrow-circle-left"></i>
        </button>
        <button ref={nextRef} className="next-custom">
          <i className="uil uil-arrow-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Banner;
