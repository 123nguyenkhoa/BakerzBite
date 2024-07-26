import React, { useState } from "react";
import styles from "./TopSelling.module.css"; // Import the CSS module
import { useNavigate } from "react-router-dom";
import applePie from "../Assets/products/Apple Pie.jpg";
import matchaPie from "../Assets/products/Matcha Croissant.jpg";
import pumpkinPie from "../Assets/products/Pumpkin Pie.jpg";
import almondPie from "../Assets/products/Almond Croissant.jpg";
import blueberryPie from "../Assets/products/Blueberry Danish.webp";
import hazePie from "../Assets/products/Hazelnut Tart.jpg";
import chocolateCake from "../Assets/products/Cookies and Cream Cake.jpg";
import vanillaCake from "../Assets/products/Vanilla Bean Cake.jpg";
import redVelvet from "../Assets/products/Red Velvet Cake.webp";
import carrotCake from "../Assets/products/Carrot Cake.jpg";
import cheesecake from "../Assets/products/Salted Caramel Chocolate Cake.jpg";
import spongeCake from "../Assets/products/Raspberry Almond Cake.jpg";
import cupcake1 from "../Assets/products/Lemon Zest Cupcake.jpg";
import cupcake2 from "../Assets/products/Coconut Cream Cupcake.jpg";
import cupcake3 from "../Assets/products/Chocolate Fudge Cupcake.jpg";
import cupcake4 from "../Assets/products/Vanilla Bean Cupcake.jpg";
import cupcake5 from "../Assets/products/Salted Caramel Cupcake.jpg";
import cupcake6 from "../Assets/products/Mint Chocolate Chip Cupcake.jpg";
import cheesecake1 from "../Assets/products/Chocolate Cheesecake.jpg";
import cheesecake2 from "../Assets/products/Mint Chocolate Cheesecake.jpg";
import cheesecake3 from "../Assets/products/Lemon Cheesecake.jpg";
import cheesecake4 from "../Assets/products/Coconut Cheesecake.jpg";
import cheesecake5 from "../Assets/products/Blueberry Cheesecake.webp";
import cheesecake6 from "../Assets/products/Raspberry Cheesecake.webp";
import brownies1 from "../Assets/products/Classic Brownie.webp";
import brownies2 from "../Assets/products/Blondie.jpg";
import brownies3 from "../Assets/products/Peanut Butter Bar.jpg";
import brownies4 from "../Assets/products/Chocolate Chip Cookie Bar.jpg";
import brownies5 from "../Assets/products/Cheesecake Brownie.jpg";
import brownies6 from "../Assets/products/Pumpkin Spice Bar.jpg";
import dessert1 from "../Assets/products/Caramel Flan.jpg";
import dessert2 from "../Assets/products/Banana Bread.jpg";
import dessert3 from "../Assets/products/Strawberry Shortcake-1.webp";
import dessert4 from "../Assets/products/Pumpkin Pie.jpg";
import dessert5 from "../Assets/products/Peach Cobbler.jpg";
import dessert6 from "../Assets/products/Blueberry Muffin-1.jpg";
import drinking1 from "../Assets/products/Matcha Latte.jpg";
import drinking2 from "../Assets/products/Caramel Frappuccino.webp";
import drinking3 from "../Assets/products/Iced Vanilla Latte.webp";
import drinking4 from "../Assets/products/Chai Tea Latte.webp";
import drinking5 from "../Assets/products/Cold Brew.jpg";
import drinking6 from "../Assets/products/Peppermint Mocha.jpg";

const categories = [
  "Pie",
  "Cake",
  "Cupcake",
  "Cheesecake",
  "Brownies",
  "Dessert",
  "Drinking",
];

const products = {
  Pie: [
    { id: 80, name: "Apple Pie", image: applePie },
    { id: 1, name: "Matcha Croissant", image: matchaPie },
    { id: 81, name: "Pumpkin Pie", image: pumpkinPie },
    { id: 2, name: "Almond Croissant", image: almondPie },
    { id: 6, name: "Blueberry Danish", image: blueberryPie },
    { id: 7, name: "Hazelnut Tart", image: hazePie },
  ],
  Cake: [
    { id: 19, name: "Cookies and Cream Cake", image: chocolateCake },
    { id: 20, name: "Vanilla Bean Cake", image: vanillaCake },
    { id: 13, name: "Red Velvet Cake", image: redVelvet },
    { id: 15, name: "Carrot Cake", image: carrotCake },
    { id: 21, name: "Salted Caramel Chocolate Cake", image: cheesecake },
    { id: 24, name: "Raspberry Almond Cake", image: spongeCake },
  ],
  Cupcake: [
    { id: 40, name: "Lemon Zest Cupcake", image: cupcake1 },
    { id: 46, name: "Coconut Cream Cupcake", image: cupcake2 },
    { id: 38, name: "Chocolate Fudge Cupcake", image: cupcake3 },
    { id: 37, name: "Vanilla Bean Cupcake", image: cupcake4 },
    { id: 42, name: "Salted Caramel Cupcake", image: cupcake5 },
    { id: 44, name: "Mint Chocolate Chip Cupcake", image: cupcake6 },
  ],
  Cheesecake: [
    { id: 50, name: "Chocolate Cheesecake", image: cheesecake1 },
    { id: 55, name: "Mint Chocolate Cheesecake", image: cheesecake2 },
    { id: 51, name: "Lemon Cheesecake", image: cheesecake3 },
    { id: 57, name: "Coconut Cheesecake", image: cheesecake4 },
    { id: 56, name: "Blueberry Cheesecake", image: cheesecake5 },
    { id: 52, name: "Raspberry Cheesecake", image: cheesecake6 },
  ],
  Brownies: [
    { id: 59, name: "Classic Brownie", image: brownies1 },
    { id: 61, name: "Blondie", image: brownies2 },
    { id: 62, name: "Peanut Butter Bar", image: brownies3 },
    { id: 65, name: "Chocolate Chip Cookie Bar", image: brownies4 },
    { id: 60, name: "Cheesecake Brownie", image: brownies5 },
    { id: 70, name: "Pumpkin Spice Bar", image: brownies6 },
  ],
  Dessert: [
    { id: 77, name: "Caramel Flan", image: dessert1 },
    { id: 78, name: "Banana Bread", image: dessert2 },
    { id: 76, name: "Strawberry Shortcake", image: dessert3 },
    { id: 81, name: "Pumpkin Pie", image: dessert4 },
    { id: 84, name: "Peach Cobbler", image: dessert5 },
    { id: 75, name: "Blueberry Muffin", image: dessert6 },
  ],
  Drinking: [
    { id: 25, name: "Matcha Latte", image: drinking1 },
    { id: 35, name: "Caramel Frappuccino", image: drinking2 },
    { id: 27, name: "Iced Vanilla Latte", image: drinking3 },
    { id: 28, name: "Chai Tea Latte", image: drinking4 },
    { id: 29, name: "Cold Brew", image: drinking5 },
    { id: 30, name: "Peppermint Mocha", image: drinking6 },
  ],
};

const TopSelling = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className={styles.topSelling}>
      <h1 className={styles.title}>TOP SELLING PRODUCTS</h1>
      <div className={styles.categoryButtons}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.active : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.products}>
        {products[selectedCategory].map((product) => (
          <div
            key={product.id}
            className={styles.product}
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
