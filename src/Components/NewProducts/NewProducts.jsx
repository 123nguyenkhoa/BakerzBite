import React, { useState } from "react";
import "./NewProducts.css";
import productImage1 from "../Assets/Mango Cheesecake.jpg";
import productImage2 from "../Assets/Blueberry Muffins.jpg";
import productImage3 from "../Assets/Chocolate Eclairs.webp";
import productImage4 from "../Assets/Vanilla Cupcakes.jpg";
import productImage5 from "../Assets/Matcha Green Tea Cake.jpg";
import productImage6 from "../Assets/Pistachio Cookies.jpg";
import productImage7 from "../Assets/vla.png";
import productImage8 from "../Assets/Malva Pudding.webp";

const NewProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  const products = [
    {
      img: productImage1,
      title: "Mango Cheesecake",
      price: "$18.99",
      description:
        "A delicious 🍰 Mango Cheesecake made with the freshest ingredients.",
    },
    {
      img: productImage2,
      title: "Blueberry Muffins",
      price: "$9.99",
      description:
        "Tasty 🫐 Blueberry Muffins perfect for any time of the day.",
    },
    {
      img: productImage3,
      title: "Chocolate Eclairs",
      price: "$14.99",
      description:
        "Rich and creamy 🍫 Chocolate Eclairs that melt in your mouth.",
    },
    {
      img: productImage4,
      title: "Vanilla Cupcakes",
      price: "$12.99",
      description: "Delightful 🧁 Vanilla Cupcakes with a fluffy texture.",
    },
    {
      img: productImage5,
      title: "Matcha Green Tea Cake",
      price: "$19.99",
      description: "Unique 🍵 Matcha Green Tea Cake with a refreshing taste.",
    },
    {
      img: productImage6,
      title: "Pistachio Cookies",
      price: "$8.99",
      description: "Crispy and nutty 🥜 Pistachio Cookies that you'll love.",
    },
    {
      img: productImage7,
      title: "Vla",
      price: "$6.99",
      description: "Creamy and smooth Vla pudding.",
    },
    {
      img: productImage8,
      title: "Malva Pudding",
      price: "$12.99",
      description: "Sweet and sticky Malva Pudding, a South African favorite.",
    },
  ];

  const itemsPerPage = 4;
  const totalItems = products.length;

  const handleNext = () => {
    if (currentIndex < totalItems - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("product-modal-override")) {
      closeModal();
    }
  };

  const openZoomImage = (img) => {
    setZoomImage(img);
  };

  const closeZoomImage = () => {
    setZoomImage(null);
  };

  return (
    <section className="new-products-section-override">
      <div className="container23-override">
        <h2 className="section-title-override">NEW PRODUCT UP COMING</h2>
        <div className="slider-container-override">
          <button
            className="arrow-button-override left-override"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ◀
          </button>
          <div className="products-viewport-override">
            <div
              className="products-grid-override"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / itemsPerPage
                }%)`,
                transition: "transform 0.8s ease",
                gridTemplateColumns: `repeat(${totalItems}, 1fr)`,
              }}
            >
              {products.map((product, index) => (
                <div className="product-card-override" key={index}>
                  <div className="product-image-container-override">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="product-image-override"
                    />
                    <div
                      className="zoom-icon-override"
                      onClick={() => openZoomImage(product.img)}
                    >
                      🔍
                    </div>
                  </div>
                  <div className="product-info-override">
                    <h4 onClick={() => openModal(product)}>{product.title}</h4>
                    <p>{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="arrow-button-override right-override"
            onClick={handleNext}
            disabled={currentIndex >= totalItems - itemsPerPage}
          >
            ▶
          </button>
        </div>
        {modalIsOpen && selectedProduct && (
          <div className="product-modal-override" onClick={handleOutsideClick}>
            <div className="modal-content-override">
              <h2>{selectedProduct.title}</h2>
              <img
                src={selectedProduct.img}
                alt={selectedProduct.title}
                className="modal-image-override"
              />
              <p>{selectedProduct.description}</p>
              <button
                onClick={closeModal}
                className="close-modal-button-override"
              >
                Close
              </button>
            </div>
          </div>
        )}
        {zoomImage && (
          <div className="zoom-modal-override" onClick={closeZoomImage}>
            <div className="zoom-modal-content-override">
              <img src={zoomImage} alt="Zoomed Product" />
              <button
                onClick={closeZoomImage}
                className="close-zoom-button-override"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewProducts;
