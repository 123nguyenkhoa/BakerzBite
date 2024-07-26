import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";
import { saveOrderToIndexedDB } from "../Utils/indexedDB";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  if (all_product && Array.isArray(all_product)) {
    all_product.forEach((product) => {
      cart[product.id] = 0;
    });
  }
  return cart;
};

const parseJSON = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error("Error parsing JSON:", e);
    return null;
  }
};

const getDefaultWishlist = () => {
  const savedWishlist = localStorage.getItem("wishlist");
  return savedWishlist ? parseJSON(savedWishlist) : [];
};

const getUserData = () => {
  const userData = localStorage.getItem("user");
  return userData
    ? parseJSON(userData)
    : {
        name: "John Doe",
        rewardPoints: 0,
        rewardHistory: [],
      };
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderSummary, setOrderSummary] = useState({});
  const [wishlist, setWishlist] = useState(getDefaultWishlist());
  const [orderHistory, setOrderHistory] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [user, setUser] = useState(getUserData());

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const addToCart = (itemId, quantity = 1) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + quantity,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  const updateCartItem = (itemId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: quantity,
    }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
    setPaymentSuccess(false);
    clearOrderSummary();
  };

  const clearOrderSummary = () => {
    setOrderSummary({});
  };

  const resetTotalAmount = () => {
    setTotalAmount(0);
    clearCart();
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    if (all_product && Array.isArray(all_product)) {
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          const itemInfo = all_product.find(
            (product) => product.id === Number(itemId)
          );
          if (itemInfo) {
            totalAmount += itemInfo.new_price * cartItems[itemId];
          }
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalItems += cartItems[itemId];
      }
    }
    return totalItems;
  };

  const saveOrder = async (order) => {
    try {
      await saveOrderToIndexedDB(order);
      setPaymentSuccess(true);
      updateOrderHistory(order);
      const earnedPoints = getTotalCartAmount();
      updateUserRewardPoints(earnedPoints);
      updateRewardHistory({
        action: "Received points",
        points: earnedPoints,
        date: new Date().toISOString(),
        purpose: "Order purchase",
      });
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  const updateOrderHistory = (order) => {
    setOrderHistory((prevHistory) => [...prevHistory, order]);
  };

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      if (!prev.find((p) => p.id === item.id)) {
        return [...prev, item];
      }
      return prev;
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateUserRewardPoints = (points, purpose = "general") => {
    setUser((prevUser) => ({
      ...prevUser,
      rewardPoints: prevUser.rewardPoints + points,
    }));
    updateRewardHistory({
      action: points > 0 ? "Received points" : "Used points",
      points: Math.abs(points),
      date: new Date().toISOString(),
      purpose: purpose,
    });
  };

  const updateRewardHistory = (entry) => {
    setUser((prevUser) => ({
      ...prevUser,
      rewardHistory: Array.isArray(prevUser.rewardHistory)
        ? [...prevUser.rewardHistory, entry]
        : [entry],
    }));
  };

  const usePoints = (points) => {
    if (user.rewardPoints >= points) {
      updateUserRewardPoints(-points, "Purchase redemption");
    } else {
      console.warn("Not enough points to use.");
    }
  };

  const clearRewardHistory = () => {
    setUser((prevUser) => ({
      ...prevUser,
      rewardHistory: [],
    }));
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
    saveOrder,
    paymentSuccess,
    orderSummary,
    setOrderSummary,
    clearOrderSummary,
    resetTotalAmount,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    updateOrderHistory,
    orderHistory,
    totalAmount,
    user,
    updateUserRewardPoints,
    updateRewardHistory,
    usePoints,
    clearRewardHistory,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
