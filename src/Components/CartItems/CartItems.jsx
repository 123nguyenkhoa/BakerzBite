import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo-1.jpg";

const CartItems = () => {
  const navigate = useNavigate();
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    updateCartItem,
    user,
    updateUserRewardPoints,
  } = useContext(ShopContext);
  const [discountCoupon, setDiscountCoupon] = useState("");
  const [showDiscountCoupon, setShowDiscountCoupon] = useState(false);
  const [showHighDiscountCoupon, setShowHighDiscountCoupon] = useState(false);
  const [enteredCoupon, setEnteredCoupon] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [rewardPointsUsed, setRewardPointsUsed] = useState(0);
  const [totalAmountAfterRewards, setTotalAmountAfterRewards] = useState(0);
  const [rewardPointsEarned, setRewardPointsEarned] = useState(0);

  const products = useMemo(() => all_product || [], [all_product]);

  const calculateTotalForProduct = useCallback(
    (productId) => {
      const product = products.find((item) => item.id === productId);
      if (product) {
        const quantity = cartItems[productId] || 0;
        return product.new_price * quantity;
      }
      return 0;
    },
    [products, cartItems]
  );

  const calculateOverallTotal = useCallback(() => {
    return products.reduce((total, product) => {
      if (cartItems[product.id] > 0) {
        return total + calculateTotalForProduct(product.id);
      }
      return total;
    }, 0);
  }, [products, cartItems, calculateTotalForProduct]);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, quantity) => {
    updateCartItem(productId, quantity);
  };

  useEffect(() => {
    const overallTotal = calculateOverallTotal();
    if (overallTotal >= 50) {
      setShowHighDiscountCoupon(true);
      setDiscountCoupon(generateRandomCoupon());
    } else {
      setShowHighDiscountCoupon(false);
      if (overallTotal >= 20) {
        setShowDiscountCoupon(true);
        setDiscountCoupon(generateRandomCoupon());
      } else {
        setShowDiscountCoupon(false);
      }
    }
  }, [cartItems, calculateOverallTotal]);

  useEffect(() => {
    const totalAfterRewards = Math.max(
      calculateOverallTotal() - discountAmount - rewardPointsUsed / 100,
      0
    );
    setTotalAmountAfterRewards(totalAfterRewards);
    setRewardPointsEarned(Math.floor(totalAfterRewards));
  }, [rewardPointsUsed, discountAmount, calculateOverallTotal]);

  const generateRandomCoupon = () => {
    const coupons = [
      "DISCOUNT1",
      "DISCOUNT2",
      "DISCOUNT3",
      "DISCOUNT4",
      "DISCOUNT5",
      "DISCOUNT6",
      "DISCOUNT7",
      "DISCOUNT8",
      "DISCOUNT9",
      "DISCOUNT10",
      "DISCOUNT11",
      "DISCOUNT12",
      "DISCOUNT13",
      "DISCOUNT14",
      "DISCOUNT15",
      "DISCOUNT16",
      "DISCOUNT17",
      "DISCOUNT18",
      "DISCOUNT19",
      "DISCOUNT20",
    ];
    const randomIndex = Math.floor(Math.random() * coupons.length);
    return coupons[randomIndex];
  };

  const handleCopyCoupon = (coupon) => {
    navigator.clipboard.writeText(coupon);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const closeFrame = () => {
    setShowDiscountCoupon(false);
    setShowHighDiscountCoupon(false);
  };

  const handleCouponSubmit = () => {
    const overallTotal = calculateOverallTotal();
    if (enteredCoupon === discountCoupon) {
      if (overallTotal >= 50) {
        setDiscountAmount(overallTotal * 0.2);
        setCouponMessage("20% discount applied!");
      } else if (overallTotal >= 20) {
        setDiscountAmount(overallTotal * 0.15);
        setCouponMessage("15% discount applied!");
      } else {
        setDiscountAmount(0);
        setCouponMessage(
          "Invalid coupon or does not meet the minimum purchase amount."
        );
      }
    } else {
      setDiscountAmount(0);
      setCouponMessage(
        "Invalid coupon or does not meet the minimum purchase amount."
      );
    }
  };

  const handleUseRewardPoints = (points) => {
    if (points < 0) {
      setRewardPointsUsed(0);
    } else if (points > user.rewardPoints) {
      setRewardPointsUsed(user.rewardPoints);
    } else {
      setRewardPointsUsed(points);
    }
  };

  const handleProceedToCheckout = () => {
    if (rewardPointsUsed > 0) {
      updateUserRewardPoints(-rewardPointsUsed, "checkout discount");
    }
    navigate("/Payment", {
      state: {
        selectedProducts: products,
        overallTotal: calculateOverallTotal(),
        discountAmount: discountAmount,
        rewardPointsUsed: rewardPointsUsed,
        rewardPointsEarned: rewardPointsEarned,
      },
    });
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={product.image}
                  alt=""
                  className="cartitems-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <div className="cartitems-quantity">
                  <input
                    type="number"
                    value={cartItems[product.id]}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(product.id, Number(e.target.value))
                    }
                  />
                </div>
                <p>${calculateTotalForProduct(product.id)}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => handleRemoveFromCart(product.id)}
                  alt="Remove icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            {discountAmount > 0 && (
              <div className="cartitems-total-item">
                <p>Discount</p>
                <p>-${discountAmount.toFixed(2)}</p>
              </div>
            )}
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total Points Earned</p>
              <p>{rewardPointsEarned} points</p>
            </div>
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${totalAmountAfterRewards.toFixed(2)}</h3>
            </div>
          </div>
          <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promo-reward-container">
          <div className="cartitems-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="cartitems-promobox">
              <input
                type="text"
                placeholder="promo code"
                value={enteredCoupon}
                onChange={(e) => setEnteredCoupon(e.target.value)}
              />
              <button onClick={handleCouponSubmit}>Submit</button>
            </div>
            {couponMessage && <p>{couponMessage}</p>}
          </div>
          <div className="cartitems-reward-points">
            <h3>Use Reward Points</h3>
            <p>You have {user.rewardPoints} points available.</p>
            <input
              type="number"
              value={rewardPointsUsed}
              onChange={(e) => handleUseRewardPoints(Number(e.target.value))}
              min="0"
            />
            <p>Value: ${(rewardPointsUsed / 100).toFixed(2)}</p>
          </div>
        </div>
        {(showDiscountCoupon || showHighDiscountCoupon) && (
          <div className="frame-overlay">
            <div className="frame-content">
              <button className="frame-close" onClick={closeFrame}>
                ✖
              </button>
              {showDiscountCoupon && (
                <div className="coupon-card">
                  <img src={logo} className="logos" alt="Coupon Logo" />
                  <h3>Enjoy a 15% discount on any purchase of $20 or more!</h3>
                  <div className="coupon-row">
                    <span id="cpnCode">{discountCoupon}</span>
                    <button
                      id="cpnBtn"
                      onClick={() => handleCopyCoupon(discountCoupon)}
                    >
                      {copied ? "COPIED" : "COPY CODE"}
                    </button>
                  </div>
                  <p>Valid Till: 31 July, 2024</p>
                  <div className="circle1"></div>
                  <div className="circle2"></div>
                </div>
              )}
              {showHighDiscountCoupon && (
                <div className="coupon-card">
                  <img src={logo} className="logos" alt="Voucher Logo" />
                  <h3>Enjoy a 20% discount on any purchase of $50 or more!</h3>
                  <div className="coupon-row">
                    <span id="cpnCode">{discountCoupon}</span>
                    <button
                      id="cpnBtn"
                      onClick={() => handleCopyCoupon(discountCoupon)}
                    >
                      {copied ? "COPIED" : "COPY CODE"}
                    </button>
                  </div>
                  <p>Valid Till: 31 August, 2024</p>
                  <div className="circle1"></div>
                  <div className="circle2"></div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
