import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import product1 from "../product1.jpg";
import product2 from "../product2.jpg";
import product3 from "../product3.jpg";

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

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-detail">
            <div className="product-detail-content">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-detail-image"
                />
                <h1 className="product-detail-name">{product.name}</h1>
                <p className="product-detail-description">
                    {product.description}
                </p>
                <p className="product-detail-price">${product.price}</p>
                <button className="add-to-cart" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
