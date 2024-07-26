import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import pies from "../Assets/cookies.webp";
import cakes from "../Assets/cakes.webp";
import cupcakes from "../Assets/cupcakes.webp";
import cheesecakes from "../Assets/cheesecake.webp";
import brownies from "../Assets/brownies.webp";
import dessertsImage from "../Assets/dessert.webp";
import merchandiseImage from "../Assets/merchandise.jpg";
import drinking from "../Assets/drinking.jpg"; 
import allDesserts from "../Assets/all_product";

const getRandomDesserts = (category, count) => {
  const filteredDesserts = allDesserts.filter(
    (dessert) => dessert.category === category
  );
  const shuffled = filteredDesserts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const truncateDescription = (description, wordLimit) => {
  const words = description.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : description;
};

const calculateDiscountPercentage = (oldPrice, newPrice) => {
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
};

const Menu = () => {
  const [randomDesserts, setRandomDesserts] = useState({});
  const piesRef = useRef(null);
  const cupcakesRef = useRef(null);
  const cakesRef = useRef(null);
  const cheesecakesRef = useRef(null);
  const browniesRef = useRef(null);
  const dessertsRef = useRef(null);
  const merchandiseRef = useRef(null);
  const drinkingRef = useRef(null); // Thêm reference cho drinking

  useEffect(() => {
    const categories = [
      { name: "pies", count: 2 },
      { name: "cupcake", count: 5 },
      { name: "cake", count: 5 },
      { name: "cheesecake", count: 5 },
      { name: "brownies", count: 3 },
      { name: "desserts", count: 5 },
      { name: "merchandise", count: 5 },
      { name: "drinking", count: 5 }, // Thêm danh mục drinking
    ];
    const newRandomDesserts = {};
    categories.forEach((category) => {
      newRandomDesserts[category.name] = getRandomDesserts(
        category.name,
        category.count
      );
    });
    setRandomDesserts(newRandomDesserts);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("hidden");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".section-header");
    sections.forEach((section) => {
      section.classList.add("hidden");
      observer.observe(section);
    });

    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach((card) => {
      card.classList.add("hidden");
      observer.observe(card);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      productCards.forEach((card) => observer.unobserve(card));
    };
  }, [randomDesserts]);

  return (
    <div>
      <div className="category-container">
        <a href="#pies" className="category-item">
          <div
            className="image-container"
            style={{ backgroundColor: "#dce5f2" }}
          >
            <img src={pies} alt="Pies" />
          </div>
          <div className="description-1">
            <p>Pie</p>
          </div>
        </a>
        <a href="#cupcake" className="category-item">
          <div
            className="image-container"
            style={{ backgroundColor: "#f0d9e7" }}
          >
            <img src={cupcakes} alt="Cupcakes" />
          </div>
          <div className="description-1">
            <p>Cupcake</p>
          </div>
        </a>
        <a href="#cake" className="category-item">
          <div
            className="image-container"
            style={{ backgroundColor: "#f7f0d9" }}
          >
            <img src={cakes} alt="Cakes" />
          </div>
          <div className="description-1">
            <p>Cake</p>
          </div>
        </a>
        <a href="#cheesecake" className="category-item">
          <div
            className="image-container"
            style={{ backgroundColor: "#e7e9f7" }}
          >
            <img src={cheesecakes} alt="Cheesecakes" />
          </div>
          <div className="description-1">
            <p>Cheesecakes</p>
          </div>
        </a>
        <a href="#brownies" className="category-item">
          <div
            className="image-container"
            style={{ backgroundColor: "#e2edc5" }}
          >
            <img src={brownies} alt="Brownies & Bars" />
          </div>
          <div className="description-1">
            <p>Brownies & Bars</p>
          </div>
        </a>
        <a href="#desserts" className="category-item">
          <div
            className="image-container"
            style={{ backgroundColor: "#f8f8e8" }}
          >
            <img src={dessertsImage} alt="Desserts" />
          </div>
          <div className="description-1">
            <p>Desserts</p>
          </div>
        </a>
        <a href="#merchandise" className="category-item">
          <div
            className="image-container"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            <img src={merchandiseImage} alt="Merchandise" />
          </div>
          <div className="description-1">
            <p>Merchandise</p>
          </div>
        </a>
        <a href="#drinking" className="category-item">
          <div
            className="image-container"
            style={{ backgroundColor: "#e0f7fa" }}
          >
            <img src={drinking} alt="Drinking" />
          </div>
          <div className="description-1">
            <p>Drinking</p>
          </div>
        </a>
      </div>

      {Object.keys(randomDesserts).map((category) => {
        const ref =
          category === "pies"
            ? piesRef
            : category === "cupcake"
            ? cupcakesRef
            : category === "cake"
            ? cakesRef
            : category === "cheesecake"
            ? cheesecakesRef
            : category === "brownies"
            ? browniesRef
            : category === "desserts"
            ? dessertsRef
            : category === "merchandise"
            ? merchandiseRef
            : drinkingRef; // Thêm reference cho drinking

        return (
          <div
            key={category}
            id={category}
            className="section-header"
            ref={ref}
          >
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <Link to={`/${category}`} className="view-more">
              VIEW MORE
            </Link>
            <div className="product-list">
              {randomDesserts[category].map((dessert) => (
                <div className="product-card" key={dessert.id}>
                  <div className="discount-badge">
                    {calculateDiscountPercentage(
                      dessert.old_price,
                      dessert.new_price
                    )}
                    % OFF
                  </div>
                  <Link to={`/product/${dessert.id}`}>
                    <img src={dessert.image} alt={dessert.name} />
                  </Link>
                  <div className="product-info">
                    <h3>
                      <Link to={`/product/${dessert.id}`}>{dessert.name}</Link>
                    </h3>
                    <p>{truncateDescription(dessert.description, 10)}</p>
                    <span> ${dessert.new_price}</span>
                    <span className="old-price"> ${dessert.old_price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
