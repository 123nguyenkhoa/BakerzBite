import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import "./MyCake.css";

const MyCake = () => {
  const { wishlist, removeFromWishlist } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleRemoveFromWishlist = (id) => {
    removeFromWishlist(id);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="my-favorite-cake">
      <h1>My Favorite Cakes</h1>
      <div className="cake-list">
        {wishlist.length > 0 ? (
          wishlist.map((cake) => (
            <div key={cake.id} className="cake-item">
              <img
                src={cake.image}
                alt={cake.name}
                className="cake-image"
                onClick={() => handleProductClick(cake.id)}
              />
              <div className="cake-info">
                <h2
                  className="cake-name"
                  onClick={() => handleProductClick(cake.id)}
                >
                  {cake.name}
                </h2>
                <button onClick={() => handleRemoveFromWishlist(cake.id)}>
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default MyCake;
