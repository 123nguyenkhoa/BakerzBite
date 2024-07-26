import React, { useEffect, useRef, useState } from "react";
import "./RelatedProducts.css";
import all_product from "../Assets/all_product";
import { Link } from "react-router-dom";

const RelatedProducts = ({ category, currentProductId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const productBoxRef = useRef(null);
  const isDragging = useRef(false);
  const startPosition = useRef(0);
  const currentTranslate = useRef(0);

  useEffect(() => {
    const filteredProducts = all_product.filter(
      (product) =>
        product.category === category && product.id !== currentProductId
    );
    setRelatedProducts(filteredProducts);
  }, [category, currentProductId]);

  const calculateDiscountPercentage = (oldPrice, newPrice) => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  const handleMouseDown = (e) => {
    if (productBoxRef.current) {
      isDragging.current = true;
      startPosition.current = e.pageX - productBoxRef.current.offsetLeft;
      currentTranslate.current = productBoxRef.current.scrollLeft;
      productBoxRef.current.style.cursor = "grabbing";
      productBoxRef.current.style.scrollBehavior = "auto";
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging.current && productBoxRef.current) {
      const x = e.pageX - productBoxRef.current.offsetLeft;
      const walk = x - startPosition.current;
      productBoxRef.current.scrollLeft = currentTranslate.current - walk;
    }
  };

  const handleMouseUp = () => {
    if (isDragging.current && productBoxRef.current) {
      isDragging.current = false;
      productBoxRef.current.style.cursor = "grab";
      productBoxRef.current.style.scrollBehavior = "smooth";
    }
  };

  useEffect(() => {
    const productBox = productBoxRef.current;
    if (productBox) {
      productBox.addEventListener("mousedown", handleMouseDown);
      productBox.addEventListener("mousemove", handleMouseMove);
      productBox.addEventListener("mouseup", handleMouseUp);
      productBox.addEventListener("mouseleave", handleMouseUp);
    }

    return () => {
      if (productBox) {
        productBox.removeEventListener("mousedown", handleMouseDown);
        productBox.removeEventListener("mousemove", handleMouseMove);
        productBox.removeEventListener("mouseup", handleMouseUp);
        productBox.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, []);

  const handleNext = () => {
    if (productBoxRef.current) {
      productBoxRef.current.scrollLeft += 250;
    }
  };

  const handlePrev = () => {
    if (productBoxRef.current) {
      productBoxRef.current.scrollLeft -= 250;
    }
  };

  return (
    <section className="p-slider">
      <h3 className="product-slider-heading">RELATED PRODUCTS</h3>
      <button className="slider-btn prev-btn" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="slider-btn next-btn" onClick={handleNext}>
        &#8250;
      </button>
      <div className="product-box" ref={productBoxRef}>
        {relatedProducts.map((product) => (
          <div className="product-box-item" key={product.id}>
            {product.old_price && (
              <span className="p-discount">
                -
                {calculateDiscountPercentage(
                  product.old_price,
                  product.new_price
                )}
                % OFF
              </span>
            )}
            <div className="p-img-container">
              <div className="p-img">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    className="p-img-front"
                    alt={product.name}
                  />
                  {product.images.length > 1 && (
                    <img
                      src={product.images[1]}
                      alt={product.name}
                      className="p-img-back"
                    />
                  )}
                </Link>
              </div>
            </div>
            <div className="p-box-text">
              <Link to={`/product/${product.id}`} className="product-title">
                {product.name}
              </Link>
              <div className="price-buy">
                <span className="p-price">${product.new_price}</span>
                {product.old_price && (
                  <span className="old-price">${product.old_price}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
