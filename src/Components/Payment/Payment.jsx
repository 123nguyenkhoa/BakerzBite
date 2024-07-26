import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Payment.css";
import { ShopContext } from "../../Context/ShopContext";
import { saveOrderToIndexedDB } from "../../Utils/indexedDB";
import QRCodePayment from "./QRCodePayment";

const Payment = () => {
  const {
    cartItems,
    all_product,
    clearCart,
    updateUserRewardPoints,
    updateRewardHistory,
    user,
  } = useContext(ShopContext);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isSaveInfoChecked, setIsSaveInfoChecked] = useState(false);
  const [isBillingChecked, setIsBillingChecked] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showDiscount, setShowDiscount] = useState(true);
  const [isQRCodeVisible, setIsQRCodeVisible] = useState(false);
  const [showRewardPointsEarned, setShowRewardPointsEarned] = useState(true);

  const location = useLocation();
  const { overallTotal, discountAmount, rewardPointsUsed } = location.state || {
    selectedProducts: [],
    overallTotal: 0,
    discountAmount: 0,
    rewardPointsUsed: 0,
  };

  const rewardPointsEarned = Math.floor(
    overallTotal - discountAmount - rewardPointsUsed / 100
  );

  useEffect(() => {
    setTotalAmount(overallTotal - discountAmount - rewardPointsUsed / 100);
  }, [overallTotal, discountAmount, rewardPointsUsed]);

  const handleFooterLinkClick = (policy) => {
    setSelectedPolicy(policy);
  };

  const handleClosePopup = () => {
    setSelectedPolicy(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayNow();
  };

  const handlePayNow = async () => {
    const order = {
      products: Object.keys(cartItems)
        .map((itemId) => {
          const product = all_product.find((p) => p.id === Number(itemId));
          if (cartItems[itemId] > 0 && product) {
            return {
              image: product.image,
              name: product.name,
              quantity: cartItems[itemId],
              price: product.new_price,
            };
          }
          return null;
        })
        .filter((product) => product !== null),
      status: "Succeed",
      dateTime: new Date().toISOString(),
    };

    await saveOrderToIndexedDB(order);
    updateUserRewardPoints(rewardPointsEarned);
    updateRewardHistory({
      action: "earn",
      points: rewardPointsEarned,
      date: new Date().toISOString(),
    });
    setShowSuccessMessage(true);
    clearCart();
    setTotalAmount(0);
    setShowDiscount(false);
    setShowRewardPointsEarned(false);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const handleQRCodeSuccess = async () => {
    try {
      const order = {
        products: Object.keys(cartItems)
          .map((itemId) => {
            const product = all_product.find((p) => p.id === Number(itemId));
            if (cartItems[itemId] > 0 && product) {
              return {
                image: product.image,
                name: product.name,
                quantity: cartItems[itemId],
                price: product.new_price,
              };
            }
            return null;
          })
          .filter((product) => product !== null),
        status: "Succeed",
        dateTime: new Date().toISOString(),
      };

      await saveOrderToIndexedDB(order);
      updateUserRewardPoints(rewardPointsEarned);
      updateRewardHistory({
        action: "earn",
        points: rewardPointsEarned,
        date: new Date().toISOString(),
      });
      setShowSuccessMessage(true);
      clearCart();
      setTotalAmount(0);
      setShowDiscount(false);
      setShowRewardPointsEarned(false);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    } catch (error) {
      console.error("Error handling QR code success:", error);
    }
  };

  const getTotalAfterDiscount = () => {
    return totalAmount.toFixed(2);
  };

  const handleQRCodePayment = () => {
    setIsQRCodeVisible(true);
  };

  const handleCloseQRCodeModal = () => {
    setIsQRCodeVisible(false);
  };

  return (
    <div className="payment-container">
      <div className="payment-content">
        <div className="left-section">
          <form className="payment-form" onSubmit={handleSubmit}>
            {/* Contact */}
            <div className="contact">
              <h3>Contact</h3>
              <input type="email" placeholder="Email" required />
              <label>
                <input
                  type="checkbox"
                  checked={isEmailChecked}
                  onChange={() => setIsEmailChecked(!isEmailChecked)}
                />
                Email me with news and offers
              </label>
            </div>
            {/* Delivery */}
            <div className="delivery">
              <h3>Delivery</h3>
              <select required>
                <option value="" disabled defaultValue>
                  Country/Region
                </option>
                <option value="usa">USA</option>
                <option value="vietnam">Vietnam</option>
              </select>
              <div className="row">
                <input type="text" placeholder="First name" required />
                <input type="text" placeholder="Last name" required />
              </div>
              <input type="text" placeholder="Company (optional)" />
              <input type="text" placeholder="Address" required />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
              />
              <div className="row">
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="State" required />
                <input type="text" placeholder="ZIP code" required />
              </div>
              <input type="text" placeholder="Phone" required />
              <label>
                <input
                  type="checkbox"
                  checked={isSaveInfoChecked}
                  onChange={() => setIsSaveInfoChecked(!isSaveInfoChecked)}
                />
                Save this information for next time
              </label>
            </div>
            <div className="payment">
              <h3>Payment</h3>
              <input
                className="credit"
                type="text"
                placeholder="Credit card number"
                required
              />
              <div className="row">
                <input
                  type="text"
                  placeholder="Expiration date (MM / YY)"
                  required
                />
                <input type="text" placeholder="Security code" required />
              </div>
              <input type="text" placeholder="Name on card" required />
              <label>
                <input
                  type="checkbox"
                  checked={isBillingChecked}
                  onChange={() => setIsBillingChecked(!isBillingChecked)}
                />
                Use shipping address as billing address
              </label>
              <div className="billing-address">
                <h3>Billing address</h3>
                <select required>
                  <option value="" disabled defaultValue>
                    Country/Region
                  </option>
                  <option value="usa">USA</option>
                  <option value="vietnam">Vietnam</option>
                </select>
                <div className="row">
                  <input type="text" placeholder="First name" required />
                  <input type="text" placeholder="Last name" required />
                </div>
                <input type="text" placeholder="Company (optional)" />
                <input type="text" placeholder="Address" required />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                />
                <div className="row">
                  <input type="text" placeholder="City" required />
                  <input type="text" placeholder="Postal code" required />
                </div>
                <input type="text" placeholder="Phone (optional)" />
              </div>
            </div>
            <button type="submit" className="pay-now-button">
              Pay now
            </button>
            <button
              type="button"
              className="pay-by-qr-button"
              onClick={handleQRCodePayment}
            >
              Pay by QR Code
            </button>

            {isQRCodeVisible && (
              <QRCodePayment
                handleQRCodeSuccess={handleQRCodeSuccess}
                handleCloseQRCodeModal={handleCloseQRCodeModal}
              />
            )}
            <button type="reset" className="reset-button">
              Reset
            </button>
          </form>
          <div className="footers-links">
            <a href="#0" onClick={() => handleFooterLinkClick("refund")}>
              Refund policy
            </a>
            <a href="#0" onClick={() => handleFooterLinkClick("shipping")}>
              Shipping policy
            </a>
            <a href="#0" onClick={() => handleFooterLinkClick("privacy")}>
              Privacy policy
            </a>
            <a href="#0" onClick={() => handleFooterLinkClick("terms")}>
              Terms of service
            </a>
            <a href="#0" onClick={() => handleFooterLinkClick("subscription")}>
              Subscription policy
            </a>
          </div>
        </div>
        <div className="right-section">
          <div className="order-summary">
            <h2>Order Summary</h2>
            {Object.keys(cartItems).length > 0 ? (
              <>
                {Object.keys(cartItems).map((itemId) => {
                  const itemInfo = all_product.find(
                    (product) => product.id === Number(itemId)
                  );
                  if (cartItems[itemId] > 0 && itemInfo) {
                    return (
                      <div key={itemId} className="product-details">
                        <img
                          src={itemInfo.image}
                          alt={itemInfo.name}
                          className="product-image"
                        />
                        <div className="product-info">
                          <h3>{itemInfo.name}</h3>
                          <p>Price: ${itemInfo.new_price.toFixed(2)}</p>
                          <p>Quantity: {cartItems[itemId]}</p>
                          <p>
                            Total: $
                            {(itemInfo.new_price * cartItems[itemId]).toFixed(
                              2
                            )}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
                <div className="order-total">
                  {showDiscount && discountAmount > 0 && (
                    <p>Discount Applied: -${discountAmount.toFixed(2)}</p>
                  )}
                  {showRewardPointsEarned && (
                    <p>Reward Points Earned: {rewardPointsEarned} points</p>
                  )}
                  <h3>
                    Total Amount: $
                    {showSuccessMessage ? 0 : getTotalAfterDiscount()}
                  </h3>
                </div>
              </>
            ) : (
              <p>No products selected.</p>
            )}
          </div>
        </div>
      </div>

      {selectedPolicy && (
        <div className="popup-container">
          <div className="popup-content-1">
            <div className="popup-header">
              <h2>
                {selectedPolicy === "refund"
                  ? "Bakerz Bite Refund Policy"
                  : selectedPolicy === "shipping"
                  ? "Bakerz Bite Shipping Policy"
                  : selectedPolicy === "privacy"
                  ? "Bakerz Bite Privacy Policy"
                  : selectedPolicy === "terms"
                  ? "Bakerz Bite Terms of Service"
                  : selectedPolicy === "subscription"
                  ? "Bakerz Bite Subscription Policy"
                  : ""}
              </h2>
              <span className="close-icon" onClick={handleClosePopup}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="3"
                    stroke="#000"
                    fill="none"
                    d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 1 0-1.41 1.41L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                  />
                </svg>
              </span>
            </div>
            {selectedPolicy === "refund" && (
              <div>
                <p>
                  Thank you for shopping at Bakerz Bite. We hope you are
                  delighted with your purchase. However, if you are not entirely
                  satisfied with your purchase, we're here to help.
                </p>
                <h3>Returns</h3>
                <p>
                  You have 30 calendar days to return an item from the date you
                  received it.
                </p>
                <h3>Conditions</h3>
                <p>
                  To be eligible for a return, your item must be unused and in
                  the same condition that you received it.
                </p>
                <p>Your item must be in the original packaging.</p>
                <p>Your item needs to have the receipt or proof of purchase.</p>
                <h3>Refunds</h3>
                <p>
                  Once we receive your item, we will inspect it and notify you
                  that we have received your returned item. We will immediately
                  notify you on the status of your refund after inspecting the
                  item.
                </p>
                <p>
                  If your return is approved, we will initiate a refund to your
                  original method of payment.
                </p>
                <h3>Shipping</h3>
                <p>
                  You will be responsible for paying for your own shipping costs
                  for returning your item. Shipping costs are non-refundable.
                </p>
                <h3>Contact Us</h3>
                <p>
                  If you have any questions on how to return your item to us,
                  contact us.
                </p>
              </div>
            )}

            {selectedPolicy === "shipping" && (
              <div>
                <p>
                  Thank you for choosing Bakerz Bite! We aim to ensure that your
                  orders are delivered smoothly and on time. Please read our
                  shipping policy details below:
                </p>
                <h3>Order Processing Time</h3>
                <p>
                  Orders are typically processed and shipped within 1-3 business
                  days, excluding weekends and holidays.
                </p>
                <h3>Shipping Methods</h3>
                <p>
                  We offer standard shipping via [Carrier Name] for domestic
                  orders.
                </p>
                <p>
                  Expedited shipping options are available at an additional
                  cost.
                </p>
                <h3>Shipping Rates</h3>
                <p>
                  Shipping costs are calculated at checkout based on the weight
                  of your order and your location.
                </p>
                <p>
                  Free shipping may be offered on orders over a certain amount,
                  as specified during promotional periods.
                </p>
                <h3>Delivery Time</h3>
                <p>
                  Standard shipping typically takes 3-7 business days for
                  delivery, depending on your location.
                </p>
                <p>
                  Expedited shipping options are available for faster delivery
                  times.
                </p>
                <h3>International Shipping</h3>
                <p>
                  At this time, we do/do not offer international shipping.
                  Please contact us for more information.
                </p>
                <h3>Tracking Orders</h3>
                <p>
                  Once your order has been shipped, you will receive a tracking
                  number via email to track your package's progress.
                </p>
                <h3>Shipping Restrictions</h3>
                <p>We currently ship only within USA.</p>
                <h3>Contact Us</h3>
                <p>
                  If you have any questions regarding shipping or need
                  assistance with your order, please contact our customer
                  service team at bakerzbite@gmail.com or 1.123.4567.890.
                </p>
              </div>
            )}

            {selectedPolicy === "privacy" && (
              <div>
                <p>
                  Protecting your private information is our priority at Bakerz
                  Bite. This Privacy Policy outlines how we collect, use,
                  communicate, disclose, and safeguard your information.
                </p>
                <h3>Information We Collect</h3>
                <p>
                  Personal Identification Information: We may collect personally
                  identifiable information, such as your name, email address,
                  phone number, and shipping address, when you place an order or
                  contact us for support.
                </p>
                <p>
                  Payment Information: We do not store credit card details nor
                  do we share customer details with any third parties.
                </p>
                <h3>How We Use Your Information</h3>
                <p>
                  We use the information we collect to process orders and
                  provide customer service.
                </p>
                <p>To send you updates about your order or account.</p>
                <p>
                  To communicate with you about promotions, surveys, and other
                  news.
                </p>
                <h3>Sharing Your Information</h3>
                <p>
                  We do not sell, trade, or otherwise transfer to outside
                  parties your personally identifiable information. This does
                  not include trusted third parties who assist us in operating
                  our website, conducting our business, or servicing you, so
                  long as those parties agree to keep this information
                  confidential.
                </p>
                <h3>Security of Your Information</h3>
                <p>
                  We implement a variety of security measures to maintain the
                  safety of your personal information when you place an order or
                  enter, submit, or access your personal information.
                </p>
                <h3>Your Consent</h3>
                <p>
                  By using our site, you consent to our website's privacy
                  policy.
                </p>
                <h3>Changes to Our Privacy Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time in order
                  to reflect changes to our practices or for other operational,
                  legal, or regulatory reasons.
                </p>
                <h3>Contact Us</h3>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact us at
                  bakerzbite@gmail.com or 1.123.4567.890.
                </p>
              </div>
            )}

            {selectedPolicy === "terms" && (
              <div>
                <p>
                  Welcome to Bakerz Bite! These Terms of Service outline the
                  rules and regulations for the use of our website and services.
                </p>
                <h3>Agreement to Terms</h3>
                <p>
                  By accessing this website, you agree to be bound by these
                  Terms of Service, all applicable laws, and regulations. If you
                  do not agree with any of these terms, you are prohibited from
                  using or accessing this site.
                </p>
                <h3>Use License</h3>
                <p>
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on Bakerz Bite's website
                  for personal, non-commercial transitory viewing only. This is
                  the grant of a license, not a transfer of title.
                </p>
                <h3>Disclaimer</h3>
                <p>
                  The materials on Bakerz Bite's website are provided on an 'as
                  is' basis. Bakerz Bite makes no warranties, expressed or
                  implied, and hereby disclaims and negates all other warranties
                  including, without limitation, implied warranties or
                  conditions of merchantability, fitness for a particular
                  purpose, or non-infringement of intellectual property or other
                  violation of rights.
                </p>
                <h3>Limitations</h3>
                <p>
                  In no event shall Bakerz Bite or its suppliers be liable for
                  any damages (including, without limitation, damages for loss
                  of data or profit, or due to business interruption) arising
                  out of the use or inability to use the materials on Bakerz
                  Bite's website, even if Bakerz Bite or a Bakerz Bite
                  authorized representative has been notified orally or in
                  writing of the possibility of such damage.
                </p>
                <h3>Revisions and Errata</h3>
                <p>
                  The materials appearing on Bakerz Bite's website could include
                  technical, typographical, or photographic errors. Bakerz Bite
                  does not warrant that any of the materials on its website are
                  accurate, complete, or current.
                </p>
                <h3>Links</h3>
                <p>
                  Bakerz Bite has not reviewed all of the sites linked to its
                  website and is not responsible for the contents of any such
                  linked site. The inclusion of any link does not imply
                  endorsement by Bakerz Bite of the site. Use of any such linked
                  website is at the user's own risk.
                </p>
                <h3>Modifications</h3>
                <p>
                  Bakerz Bite may revise these terms of service for its website
                  at any time without notice. By using this website you are
                  agreeing to be bound by the then current version of these
                  Terms of Service.
                </p>
                <h3>Governing Law</h3>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of [Your Country], and you
                  irrevocably submit to the exclusive jurisdiction of the courts
                  in that State or location.
                </p>
                <h3>Contact Us</h3>
                <p>
                  If you have any questions about these Terms of Service, please
                  contact us at bakerzbite@gmail.com or 1.123.4567.890.
                </p>
              </div>
            )}

            {selectedPolicy === "subscription" && (
              <div>
                <p>
                  Thank you for subscribing to Bakerz Bite! This Subscription
                  Policy outlines the terms and conditions for subscribing to
                  our services.
                </p>
                <h3>Subscription Plans</h3>
                <p>
                  Each subscription plan details the frequency, duration, and
                  content of deliveries or services provided.
                </p>
                <h3>Subscription Fees</h3>
                <p>
                  Subscription fees are clearly stated at the time of purchase.
                </p>
                <p>
                  Prices are subject to change with notice provided to
                  subscribers.
                </p>
                <h3>Billing and Payment</h3>
                <p>
                  Payment is due at the beginning of each billing cycle unless
                  otherwise specified.
                </p>
                <p>
                  Payments are processed securely through [payment processor],
                  and we do not store credit card details.
                </p>
                <h3>Subscription Modifications and Cancellations</h3>
                <p>
                  Subscribers can modify or cancel their subscription at any
                  time by logging into their account on our website or
                  contacting customer support.
                </p>
                <p>
                  Modifications to subscription plans may affect the billing
                  cycle and delivery schedule.
                </p>
                <h3>Refunds</h3>
                <p>
                  Subscription fees are non-refundable once billed.
                  Cancellations are effective at the end of the current billing
                  cycle.
                </p>
                <h3>Communication</h3>
                <p>
                  Subscribers will receive communications regarding their
                  subscription status, billing updates, and any changes to terms
                  and conditions via email or through their account on our
                  website.
                </p>
                <h3>Contact Us</h3>
                <p>
                  If you have any questions about our Subscription Policy or
                  need assistance with your subscription, please contact us at
                  bakerzbite@gmail.com or 1.123.4567.890.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      {showSuccessMessage && (
        <div className="success-message">
          <p>Order placed successfully!</p>
          <div className="loader">
            <div className="truckWrapper">
              <div className="truckBody">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 198 93"
                  className="trucksvg"
                >
                  <path
                    strokeWidth="3"
                    stroke="#282828"
                    fill="#F83D3D"
                    d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
                  ></path>
                  <path
                    strokeWidth="3"
                    stroke="#282828"
                    fill="#7D7C7C"
                    d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"
                  ></path>
                  <path
                    strokeWidth="3"
                    stroke="#282828"
                    fill="#7D7C7C"
                    d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"
                  ></path>
                  <path
                    strokeWidth="2"
                    stroke="#282828"
                    fill="#282828"
                    d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"
                  ></path>
                  <rect
                    strokeWidth="2"
                    stroke="#282828"
                    fill="#FFFCAB"
                    rx="1"
                    height="7"
                    width="5"
                    y="63"
                    x="187"
                  ></rect>
                  <rect
                    strokeWidth="2"
                    stroke="#282828"
                    fill="#282828"
                    rx="1"
                    height="11"
                    width="4"
                    y="81"
                    x="193"
                  ></rect>
                  <rect
                    strokeWidth="3"
                    stroke="#282828"
                    fill="#DFDFDF"
                    rx="2.5"
                    height="90"
                    width="121"
                    y="1.5"
                    x="6.5"
                  ></rect>
                  <rect
                    strokeWidth="2"
                    stroke="#282828"
                    fill="#DFDFDF"
                    rx="2"
                    height="4"
                    width="6"
                    y="84"
                    x="1"
                  ></rect>
                </svg>
              </div>
              <div className="truckTires">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  className="tiresvg"
                >
                  <circle
                    strokeWidth="3"
                    stroke="#282828"
                    fill="#282828"
                    r="13.5"
                    cy="15"
                    cx="15"
                  ></circle>
                  <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  className="tiresvg"
                >
                  <circle
                    strokeWidth="3"
                    stroke="#282828"
                    fill="#282828"
                    r="13.5"
                    cy="15"
                    cx="15"
                  ></circle>
                  <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
                </svg>
              </div>
              <div className="road"></div>
              <svg
                xmlSpace="preserve"
                viewBox="0 0 453.459 453.459"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                id="Capa_1"
                version="1.1"
                fill="#000000"
                className="lampPost"
              >
                <path
                  d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993
  c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514
  c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16, 252.882, 0
  c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914
  h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75
  v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795
  V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0, 252.882, 0
  z M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017
  h78.747C231.693,100.736,232.77,106.162,232.77,111.694z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
