import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import person_1 from "../Assets/person-1.jpg";
import person_2 from "../Assets/person-2.jpg";
import person_3 from "../Assets/person-3.jpg";
import defaultAvatar from "../Assets/banner-2.jpg";
import allProducts from "../Assets/all_product";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, addToWishlist } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBuyNow = () => {
    addToCart(product.id, quantity);
    navigate("/payment", {
      state: {
        selectedProducts: [
          {
            id: product.id,
            name: product.name,
            image: product.image,
            new_price: product.new_price,
            quantity: quantity,
          },
        ],
        overallTotal: product.new_price * quantity,
        discountAmount: 0,
        rewardPointsUsed: 0,
      },
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const imgs = document.querySelectorAll(".img-select a");
    const imgBtns = [...imgs];

    imgBtns.forEach((imgItem) => {
      imgItem.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveImageIndex(parseInt(imgItem.dataset.id));
      });
    });

    const slideImage = () => {
      const displayWidth = document.querySelector(
        ".img-showcase img:first-child"
      ).clientWidth;
      document.querySelector(".img-showcase").style.transform = `translateX(${
        -activeImageIndex * displayWidth
      }px)`;
    };

    window.addEventListener("resize", slideImage);
    slideImage();

    return () => {
      imgBtns.forEach((imgItem) => {
        imgItem.removeEventListener("click", () => {});
      });
      window.removeEventListener("resize", slideImage);
    };
  }, [activeImageIndex]);

  const [selectedProduct, setSelectedProduct] = useState(product);
  const [reviews, setReviews] = useState(product.reviews || []);

  useEffect(() => {
    setSelectedProduct(product);
    setReviews(product.reviews || []);
  }, [product]);

  const [activeTab, setActiveTab] = useState("product-description");

  useEffect(() => {
    const trigger = document.querySelectorAll(".tabbed-trigger");
    const content = document.querySelectorAll(".tabbed > div");

    trigger.forEach((btn) => {
      btn.addEventListener("click", function () {
        const dataTarget = this.dataset.id;
        const body = document.querySelector(`#${dataTarget}`);

        trigger.forEach((b) => b.classList.remove("active"));
        content.forEach((c) => c.classList.remove("active"));

        this.classList.add("active");
        body.classList.add("active");

        setActiveTab(dataTarget);
      });
    });

    return () => {
      trigger.forEach((btn) => {
        btn.removeEventListener("click", () => {});
      });
    };
  }, []);

  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (target) => {
    setActivePopup(target);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product.id);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      customer: name,
      rating: rating,
      comment: reviewText,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      avatar: avatar || defaultAvatar,
    };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    setName("");
    setEmail("");
    setRating(5);
    setReviewText("");
    setAvatar(null);
    closePopup();
  };

  const reviewAvatars = [person_1, person_2, person_3];

  const productUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;

  useEffect(() => {
    const fb = document.querySelector(".facebook");
    fb.href = `https://www.facebook.com/share.php?u=${productUrl}`;

    const twitter = document.querySelector(".twitter");
    twitter.href = `http://twitter.com/share?&url=${productUrl}&text=${product.name}&hashtags=javascript,programming`;

    const linkedIn = document.querySelector(".linkedin");
    linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${productUrl}`;

    const reddit = document.querySelector(".reddit");
    reddit.href = `http://www.reddit.com/submit?url=${productUrl}&title=${product.name}`;

    const whatsapp = document.querySelector(".whatsapp");
    whatsapp.href = `https://api.whatsapp.com/send?text=${product.name}: ${productUrl}`;

    const telegram = document.querySelector(".telegram");
    telegram.href = `https://telegram.me/share/url?url=${productUrl}&text=${product.name}`;
  }, [productUrl, product.name]);

  const handleCompare = (event) => {
    event.preventDefault();

    const similarProducts = allProducts
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 2);

    console.log("Similar Products:", similarProducts);

    navigate("/comparison", {
      state: {
        currentProduct: product,
        comparedProducts: similarProducts,
      },
    });
  };

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const sizes = ["S", "M", "L", "XL"];

  return (
    <div>
      <div className="section">
        <div className="containers">
          <div className="wrap">
            <div className="product dotgrid">
              <div className="wrappers">
                <div className="product-imgs">
                  <div className="img-display">
                    <div className="img-showcase" style={{ display: "flex" }}>
                      {product.images.map((img, index) => (
                        <img key={index} src={img} alt={product.name} />
                      ))}
                    </div>
                  </div>
                  <div className="img-select">
                    {product.images.map((img, index) => (
                      <div key={index} className="img-item">
                        <a href="#0" data-id={index}>
                          <img src={img} alt={product.name} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="summary">
                  <div className="entry">
                    <h1 className="title">{product.name}</h1>
                    <div className="product-group">
                      <div className="product-price">
                        <span className="current">${product.new_price}</span>
                        <div className="wrap">
                          <span className="before">${product.old_price}</span>
                        </div>
                      </div>
                      <div className="product-rating">
                        <span>
                          <i className="uil uil-star"></i>
                          <span>4.8</span>
                        </span>
                        <a href="#0">3 Reviews</a>
                      </div>
                    </div>
                    <div className="product-size">
                      <span> Size: </span>
                      <div className="wrap">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            className={selectedSize === size ? "active" : ""}
                            onClick={() => handleSizeClick(size)}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="product-stock">
                      <div className="wrap">
                        <strong>201</strong>
                        <span className="grey-color">in stock</span>
                        <i className="uil uil-check-circle"></i>
                      </div>
                    </div>
                    <div className="product-action">
                      <div className="qty">
                        <button className="decrease" onClick={handleDecrease}>
                          -
                        </button>
                        <input type="text" value={quantity} readOnly />
                        <button className="increase" onClick={handleIncrease}>
                          +
                        </button>
                      </div>
                      <div className="addcart button">
                        <button
                          type="submit"
                          className="primary-btn"
                          onClick={handleAddToCart}
                        >
                          Add to cart
                        </button>
                      </div>
                      <div className="buynow button">
                        <button
                          onClick={handleBuyNow}
                          className="secondary-btn"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                    <div className="product-control list-inline">
                      <ul>
                        <li>
                          <a href="#0" onClick={handleAddToWishlist}>
                            <i className="uil uil-check-circle"></i>
                            <span>Add to wishlist</span>
                          </a>
                        </li>
                        <li>
                          <a href="#0" onClick={handleCompare}>
                            <i className="uil uil-exchange-alt"></i>
                            <span>Compare</span>
                          </a>
                        </li>
                        <li>
                          <a href="#0" onClick={() => openPopup("data-share")}>
                            <i className="uil uil-share"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#0"
                            onClick={() => openPopup("data-question")}
                          >
                            <i className="uil uil-question-circle"></i>
                            <span>Ask question</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="shipping">
                      <ul>
                        <li>
                          <i className="uil uil-gift"></i>
                          <span>Free shipping and return</span>
                          <span className="grey-color">on order over 100$</span>
                        </li>
                        <li>
                          <i className="uil uil-truck"></i>
                          <span>Estimate delivery</span>
                          <span className="grey-color"> 01-07 July, 2024</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product detail">
              <div className="wrappers tabbed">
                <nav className="list-inline">
                  <ul className="wrappers">
                    <li
                      className={
                        activeTab === "product-description" ? "active" : ""
                      }
                    >
                      <a
                        href="#0"
                        className="tabbed-trigger"
                        data-id="product-description"
                      >
                        <span>Description</span>
                      </a>
                    </li>
                    <li
                      className={activeTab === "product-custom" ? "active" : ""}
                    >
                      <a
                        href="#0"
                        className="tabbed-trigger"
                        data-id="product-custom"
                      >
                        <span>Ingredient</span>
                      </a>
                    </li>
                    <li
                      className={activeTab === "product-review" ? "active" : ""}
                    >
                      <a
                        href="#0"
                        className="tabbed-trigger"
                        data-id="product-review"
                      >
                        <span>Reviews</span>
                        <span className="item-floating">3</span>
                      </a>
                    </li>
                    <li
                      className={
                        activeTab === "product-shipping" ? "active" : ""
                      }
                    >
                      <a
                        href="#0"
                        className="tabbed-trigger"
                        data-id="product-shipping"
                      >
                        <span>Shipping</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <div
                  id="product-description"
                  className={`product-about description ${
                    activeTab === "product-description" ? "active" : ""
                  }`}
                >
                  <div className="text-block">
                    <div className="grey-color">
                      <p>{selectedProduct.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  id="product-custom"
                  className={`product-about custom ${
                    activeTab === "product-custom" ? "active" : ""
                  }`}
                >
                  <div className="text-block">
                    <div className="grey-color">
                      <p>{selectedProduct.ingredients}</p>
                    </div>
                  </div>
                </div>
                <div
                  id="product-review"
                  className={`product-about review ${
                    activeTab === "product-review" ? "active" : ""
                  }`}
                >
                  <div className="wrappers">
                    <h3>Rating & Reviews</h3>
                    <div className="head-review">
                      <div className="sum-rating">
                        <strong>4.8</strong>
                        <span>{reviews.length} reviews</span>
                      </div>
                      <div className="button">
                        <a
                          href="#0"
                          className="primary-btn"
                          onClick={() => openPopup("data-review")}
                        >
                          Write a review
                        </a>
                      </div>
                    </div>
                    <div className="body-review">
                      {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                          <div className="profile" key={index}>
                            <div className="thumb-name">
                              <div className="image">
                                <img
                                  src={
                                    review.avatar || reviewAvatars[index % 3]
                                  }
                                  alt={`${review.customer}'s avatar`}
                                  className="review-avatar"
                                />
                              </div>
                              <div className="grouping">
                                <div className="name">{review.customer}</div>
                                <div className="rating">
                                  {[...Array(review.rating || 5)].map(
                                    (_, i) => (
                                      <i key={i} className="uil uil-star"></i>
                                    )
                                  )}
                                </div>
                                <div className="date grey-color">
                                  {review.date || "Jun 30, 2024"}
                                </div>
                              </div>
                            </div>
                            <div className="comment">
                              <p className="grey-color">{review.comment}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No reviews yet.</p>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  id="product-shipping"
                  className={`product-about shipping ${
                    activeTab === "product-shipping" ? "active" : ""
                  }`}
                >
                  <div className="grey-color">
                    <p>{selectedProduct.shipping}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`overlay ${activePopup ? "active" : ""}`}
        onClick={closePopup}
        data-overlay
      ></div>
      <div
        id="data-share"
        className={`data-popup d-share ${
          activePopup === "data-share" ? "active" : ""
        }`}
      >
        <div className="wrap">
          <div className="data-content" id="data-content-1">
            <a href="#0" className="close-trigger" onClick={closePopup}>
              <i className="uil uil-times"></i>
            </a>
            <div className="form">
              <label>Copy link</label>
              <p>{productUrl}</p>
              <span>
                <i className="ri-file-copy-line"></i>
              </span>
            </div>
            <div className="media-share list-inline">
              <label>Share</label>
              <ul>
                <li>
                  <a
                    href={`https://www.facebook.com/sharer.php?u=${productUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                  >
                    <i className="uil uil-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to&su=Check this out&body=${productUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gmail"
                  >
                    <i className="uil uil-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://api.whatsapp.com/send?text=${productUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp"
                  >
                    <i className="uil uil-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.instagram.com/?url=${productUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <i className="uil uil-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${productUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter"
                  >
                    <i className="uil uil-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${productUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <i className="uil uil-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`http://www.reddit.com/submit?url=${productUrl}&title=${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reddit"
                  >
                    <i className="uil uil-reddit-alien-alt"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://telegram.me/share/url?url=${productUrl}&text=${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="telegram"
                  >
                    <i className="uil uil-telegram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="data-question"
        className={`data-popup d-question ${
          activePopup === "data-question" ? "active" : ""
        }`}
      >
        <div className="wrap">
          <div className="data-content">
            <a href="#0" className="close-trigger" onClick={closePopup}>
              <i className="uil uil-times"></i>
            </a>
            <h3>The question</h3>
            <form action="">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="text" placeholder="Email" />
              </div>
              <div>
                <textarea
                  placeholder="Your question is..."
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="button">
                <button type="submit" className="secondary-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        id="data-review"
        className={`data-popup d-review ${
          activePopup === "data-review" ? "active" : ""
        }`}
      >
        <div className="wrap">
          <div className="data-content">
            <a href="#0" className="close-trigger" onClick={closePopup}>
              <i className="uil uil-times"></i>
            </a>
            <h3>Write a Review</h3>
            <form onSubmit={handleSubmit}>
              <div className="dotgrid">
                <div className="wrappers">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="rating">
                <span>Your rating</span>
                <div className="stars">
                  {[5, 4, 3, 2, 1].map((star, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`star${star}`}
                        name="rating"
                        value={star}
                        onChange={() => handleRatingChange(star)}
                      />
                      <label htmlFor={`star${star}`}>
                        {" "}
                        <i className="uil uil-star"></i>
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Your review is..."
                  cols="30"
                  rows="5"
                  value={reviewText}
                  onChange={handleReviewChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="avatar">Upload Your Avatar (optional)</label>
                <input
                  type="file"
                  id="avatar"
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
              </div>
              <div className="button">
                <button type="submit" className="secondary-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
