import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const truncateDescription = (description, wordLimit) => {
  if (!description) return "";
  const words = description.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : description;
};

const calculateDiscountPercentage = (oldPrice, newPrice) => {
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
};

const Item = ({ id, name, image, new_price, old_price, description }) => {
  return (
    <div className="item-1">
      {old_price && (
        <div className="discount-badge">
          {calculateDiscountPercentage(old_price, new_price)}% OFF
        </div>
      )}
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div className="item-info">
        <h3>
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
        <p>{truncateDescription(description, 10)}</p>
        <div className="price-container">
          <p>${new_price}</p>
          {old_price && <span className="old-price">${old_price}</span>}
        </div>
      </div>
    </div>
  );
};

export default Item;
