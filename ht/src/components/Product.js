import React from "react";
import ProductCard from "./ProductCard";
import product1 from "../assets/image/product1.jpg";
import product2 from "../assets/image/product2.jpg";
import product3 from "../assets/image/product3.jpg";

const products = [
    {
        id: 1,
        image: product1,
        name: "Chocolate Cake",
        description: "Delicious chocolate cake",
        price: 10,
    },
    {
        id: 2,
        image: product2,
        name: "Vanilla Cake",
        description: "Tasty vanilla cake",
        price: 12,
    },
    {
        id: 3,
        image: product3,
        name: "Strawberry Cake",
        description: "Fresh strawberry cake",
        price: 14,
    },
];

const Product = () => {
    return (
        <div className="product-page">
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        id={product.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Product;
