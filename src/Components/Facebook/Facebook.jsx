import React, { useEffect } from "react";
import "./Facebook.css";
import profile_1 from "../Assets/facebook/profile-1.jpg";
import profile_2 from "../Assets/facebook/profile-2.jpg";
import profile_3 from "../Assets/facebook/profile-3.jpg";
import profile_4 from "../Assets/facebook/profile-4.jpg";
import profile_5 from "../Assets/facebook/profile-5.jpg";
import profile_6 from "../Assets/facebook/profile-6.jpg";
import profile_7 from "../Assets/facebook/profile-7.jpg";
import profile_8 from "../Assets/facebook/profile-8.jpg";
import profile_9 from "../Assets/facebook/profile-9.jpg";
import profile_10 from "../Assets/facebook/profile-10.jpg";
import profile_11 from "../Assets/facebook/profile-11.jpg";
import profile_12 from "../Assets/facebook/profile-12.jpg";
import profile_13 from "../Assets/facebook/profile-13.jpg";
import profile_14 from "../Assets/facebook/profile-14.jpg";
import post_1 from "../Assets/facebook/post-1.jpg";
import post_2 from "../Assets/facebook/post-2.jpg";
import post_3 from "../Assets/facebook/post-3.webp";
import post_4 from "../Assets/facebook/post-4.jpg";
import post_5 from "../Assets/facebook/post-5.webp";
import post_6 from "../Assets/facebook/post-6.jpg";
import logo from "../Assets/logo-1.jpg";

const Facebook = () => {
  useEffect(() => {
    const themeButton = document.getElementById("theme");
    const themeModal = document.querySelector(".customize-theme");
    const colorPalette = document.querySelectorAll(".choose-color span");
    const fontSizes = document.querySelectorAll(".font-size span");
    const root = document.documentElement;

    const openThemeModal = () => {
      themeModal.style.display = "grid";
    };

    const closeThemeModal = (e) => {
      if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
      }
    };

    if (themeButton) {
      themeButton.addEventListener("click", openThemeModal);
    }

    if (themeModal) {
      themeModal.addEventListener("click", closeThemeModal);
    }

    const removeSizeSelector = () => {
      fontSizes.forEach((size) => {
        size.classList.remove("active");
      });
    };

    fontSizes.forEach((size) => {
      size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.add("active");
        if (size.classList.contains("font-size-1")) {
          fontSize = "10px";
          root.style.setProperty("--sticky-top-left", "5.4rem");
          root.style.setProperty("--sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
          fontSize = "13px";
          root.style.setProperty("--sticky-top-left", "5.4rem");
          root.style.setProperty("--sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
          fontSize = "16px";
          root.style.setProperty("--sticky-top-left", "-2rem");
          root.style.setProperty("--sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
          fontSize = "19px";
          root.style.setProperty("--sticky-top-left", "-5rem");
          root.style.setProperty("--sticky-top-right", "-25rem");
        } else if (size.classList.contains("font-size-5")) {
          fontSize = "22px";
          root.style.setProperty("--sticky-top-left", "-12rem");
          root.style.setProperty("--sticky-top-right", "-35rem");
        }

        document.querySelector("html").style.fontSize = fontSize;
      });
    });

    const changeActiveColorClass = () => {
      colorPalette.forEach((color) => {
        color.classList.remove("active");
      });
    };

    colorPalette.forEach((color) => {
      color.addEventListener("click", () => {
        let primaryHue;
        if (color.classList.contains("color-1")) {
          primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
          primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
          primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
          primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
          primaryHue = 202;
        }

        changeActiveColorClass();
        color.classList.add("active");

        root.style.setProperty("--primary-color-hue", primaryHue);
        root.style.setProperty(
          "--color-primary",
          `hsl(${primaryHue}, 75%, 60%)`
        );
      });
    });

    return () => {
      if (themeButton) {
        themeButton.removeEventListener("click", openThemeModal);
      }
      if (themeModal) {
        themeModal.removeEventListener("click", closeThemeModal);
      }
      fontSizes.forEach((size) => {
        size.removeEventListener("click", openThemeModal);
      });
      colorPalette.forEach((color) => {
        color.removeEventListener("click", openThemeModal);
      });
    };
  }, []);

  return (
    <div className="facebook">
      <nav className="facebook-nav1">
        <div className="container">
          <h2 className="log">Bakerz Face</h2>
          <div className="search-bar">
            <i className="uil uil-search"></i>
            <input
              type="search"
              placeholder="Search for creators, inspirations and projects"
              id="create-post"
            />
          </div>
          <div className="create">
            <label className="btn btn-primary" htmlFor="create-post">
              Create
            </label>
            <div className="profile-photo">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="left">
            <a href="#0" className="profile">
              <div className="profile-photo">
                <img src={logo} alt="" />
              </div>
              <div className="handle">
                <h4>Bakerz Bite</h4>
                <p className="text-muted"></p>
              </div>
            </a>
            <div className="sidebar">
              <a href="#0" className="menu-item active">
                <span>
                  <i className="uil uil-home"></i>
                </span>
                <h3>Home</h3>
              </a>
              <a href="#0" className="menu-item">
                <span>
                  <i className="uil uil-compass"></i>
                </span>
                <h3>Explore</h3>
              </a>
              <a href="#0" className="menu-item" id="notifications">
                <span>
                  <i className="uil uil-bell">
                    <small className="notification-count">9+</small>
                  </i>
                </span>
                <h3>Notifications</h3>
                <div className="notifications-popup">
                  <div>
                    <div className="profile-photo">
                      <img src={profile_1} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Keke Benjamin</b> accepted your friend request
                      <small className="text-muted">2 days ago</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src={profile_3} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>John Doe</b> comment on your post
                      <small className="text-muted">1 hour ago</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src={profile_4} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Mary Oppong</b> and <b>282 others</b> liked your post
                      <small className="text-muted">4 minutes ago</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src={profile_5} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Doris Y.Latatey</b> commented on a post you are tagged
                      in
                      <small className="text-muted">2 days ago</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src={profile_6} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Donald Trump</b> commented on a post you are tagged in
                      <small className="text-muted">1 hour ago</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src={profile_7} alt="" />
                    </div>
                    <div className="notification-body">
                      <b>Jane Doe</b> commented on your post
                      <small className="text-muted">1 hour ago</small>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#0" className="menu-item" id="messages-notifications">
                <span>
                  <i className="uil uil-envelope-alt">
                    <small className="notification-count">6</small>
                  </i>
                </span>
                <h3>Message</h3>
              </a>
              <a href="#0" className="menu-item">
                <span>
                  <i className="uil uil-bookmark"></i>
                </span>
                <h3>Bookmarks</h3>
              </a>
              <a href="#0" className="menu-item">
                <span>
                  <i className="uil uil-chart-line"></i>
                </span>
                <h3>Analytics</h3>
              </a>
              <a href="#0" className="menu-item" id="theme">
                <span>
                  <i className="uil uil-palette"></i>
                </span>
                <h3>Theme</h3>
              </a>
              <a href="#0" className="menu-item">
                <span>
                  <i className="uil uil-setting"></i>
                </span>
                <h3>Settings</h3>
              </a>
            </div>
            <label htmlFor="create-post" className="btn btn-primary">
              Create Post
            </label>
          </div>

          <div className="middle">
            <div className="stories">
              <div className="story">
                <div className="profile-photo">
                  <img src={profile_8} alt="" />
                </div>
                <p className="name">Lissana</p>
              </div>
              <div className="story">
                <div className="profile-photo">
                  <img src={profile_9} alt="" />
                </div>
                <p className="name">Lilla James</p>
              </div>
              <div className="story">
                <div className="profile-photo">
                  <img src={profile_10} alt="" />
                </div>
                <p className="name">Jenny</p>
              </div>
              <div className="story">
                <div className="profile-photo">
                  <img src={profile_11} alt="" />
                </div>
                <p className="name">Daniel Bale</p>
              </div>
              <div className="story">
                <div className="profile-photo">
                  <img src={profile_12} alt="" />
                </div>
                <p className="name">Jane Doe</p>
              </div>
              <div className="story">
                <div className="profile-photo">
                  <img src={profile_13} alt="" />
                </div>
                <p className="name">Tina White</p>
              </div>
            </div>
            <form className="create-post">
              <div className="profile-photo">
                <img src={logo} alt="" />
              </div>
              <input
                type="text"
                placeholder="What's new, Bakerz Bite?"
                id="create-post"
              />
              <input type="submit" value="Post" className="btn btn-primary" />
            </form>

            <div className="post">
              <div className="post-header">
                <img src={logo} alt="User 1" />
                <div>
                  <div className="name">Bakerz Bite</div>
                  <div className="time-location">
                    Posted 10:00 AM · New York, NY
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p>
                  Exciting news! Our new collection is now available in stores
                  and online. Check it out!
                </p>
                <img src={post_1} alt="New Collection" />
              </div>
              <div className="post-footer">
                <div>
                  <span>
                    <i className="uil uil-thumbs-up icon"></i> Like
                  </span>
                  <span>
                    <i className="uil uil-comment-alt-message icon"></i> Comment
                  </span>
                  <span>
                    <i className="uil uil-share-alt icon"></i> Share
                  </span>
                </div>
                <div>25 Likes</div>
              </div>
              <div className="likes">
                <img src={profile_1} alt="" />
                <img src={profile_2} alt="" />
                <img src={profile_3} alt="" />
              </div>
            </div>

            <div className="post">
              <div className="post-header">
                <img src={logo} alt="Bakerz Bite" />
                <div>
                  <div className="name">Bakerz Bite</div>
                  <div className="time-location">
                    Posted 9:00 AM · 123 Main St, New York, NY
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p>
                  🎉 We are thrilled to announce the grand opening of a new
                  Bakerz Bite store in New York! 🎉
                </p>
                <p>
                  To celebrate, we are offering a special promotion: Buy 1 Get 1
                  Free on all pastries during the first week! 🍰
                </p>
                <p>📅 Date: July 1st - July 7th</p>
                <p>📍 Location: 123 Main St, New York, NY</p>
                <p>
                  Come and experience the delightful flavors at Bakerz Bite! 💖
                </p>
                <img src={post_2} alt="Promotion" />
              </div>
              <div className="post-footer">
                <div>
                  <span>
                    <i className="uil uil-thumbs-up icon"></i> Like
                  </span>
                  <span>
                    <i className="uil uil-comment-alt-message icon"></i> Comment
                  </span>
                  <span>
                    <i className="uil uil-share-alt icon"></i> Share
                  </span>
                </div>
                <div>10 Likes</div>
              </div>
              <div className="likes">
                <img src={profile_1} alt="" />
                <img src={profile_2} alt="" />
                <img src={profile_3} alt="" />
              </div>
            </div>

            <div className="post">
              <div className="post-header">
                <img src={logo} alt="User 3" />
                <div>
                  <div className="name">Bakerz Bite</div>
                  <div className="time-location">
                    Posted 5:00 PM · Chicago, IL
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p>
                  Join us for a cooking workshop next week! Learn new recipes
                  and techniques.
                </p>
                <img src={post_3} alt="Cooking Workshop" />
              </div>
              <div className="post-footer">
                <div>
                  <span>
                    <i className="uil uil-thumbs-up icon"></i> Like
                  </span>
                  <span>
                    <i className="uil uil-comment-alt-message icon"></i> Comment
                  </span>
                  <span>
                    <i className="uil uil-share-alt icon"></i> Share
                  </span>
                </div>
                <div>20 Likes</div>
              </div>
              <div className="likes">
                <img src={profile_1} alt="" />
                <img src={profile_2} alt="" />
              </div>
            </div>

            <div className="post">
              <div className="post-header">
                <img src={logo} alt="User 4" />
                <div>
                  <div className="name">Bakerz Bite</div>
                  <div className="time-location">
                    Posted 8:00 PM · Miami, FL
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p>
                  Excited to announce our new branch opening in downtown Miami
                  next month!
                </p>
                <img src={post_4} alt="New Branch" />
              </div>
              <div className="post-footer">
                <div>
                  <span>
                    <i className="uil uil-thumbs-up icon"></i> Like
                  </span>
                  <span>
                    <i className="uil uil-comment-alt-message icon"></i> Comment
                  </span>
                  <span>
                    <i className="uil uil-share-alt icon"></i> Share
                  </span>
                </div>
                <div>30 Likes</div>
              </div>
              <div className="likes">
                <img src={profile_1} alt="" />
                <img src={profile_2} alt="" />
                <img src={profile_3} alt="" />
              </div>
            </div>

            <div className="post">
              <div className="post-header">
                <img src={logo} alt="User 5" />
                <div>
                  <div className="name">Bakerz Bite</div>
                  <div className="time-location">
                    Posted 11:00 AM · San Francisco, CA
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p>
                  Introducing our summer collection! Dive into the latest trends
                  with our new arrivals.
                </p>
                <img src={post_5} alt="Summer Collection" />
              </div>
              <div className="post-footer">
                <div>
                  <span>
                    <i className="uil uil-thumbs-up icon"></i> Like
                  </span>
                  <span>
                    <i className="uil uil-comment-alt-message icon"></i> Comment
                  </span>
                  <span>
                    <i className="uil uil-share-alt icon"></i> Share
                  </span>
                </div>
                <div>18 Likes</div>
              </div>
              <div className="likes">
                <img src={profile_1} alt="" />
                <img src={profile_2} alt="" />
                <img src={profile_3} alt="" />
              </div>
            </div>

            <div className="post">
              <div className="post-header">
                <img src={logo} alt="User 6" />
                <div>
                  <div className="name">Bakerz Bite</div>
                  <div className="time-location">
                    Posted 3:00 PM · Seattle, WA
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p>
                  Don't miss out on our flash sale this weekend! Enjoy up to 50%
                  off on selected items.
                </p>
                <img src={post_6} alt="Flash Sale" />
              </div>
              <div className="post-footer">
                <div>
                  <span>
                    <i className="uil uil-thumbs-up icon"></i> Like
                  </span>
                  <span>
                    <i className="uil uil-comment-alt-message icon"></i> Comment
                  </span>
                  <span>
                    <i className="uil uil-share-alt icon"></i> Share
                  </span>
                </div>
                <div>22 Likes</div>
              </div>
              <div className="likes">
                <img src={profile_4} alt="" />
                <img src={profile_5} alt="" />
                <img src={profile_6} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="messages">
              <div className="heading">
                <h4>Messages</h4>
                <i className="uil uil-edit"></i>
              </div>
              <div className="search-bar">
                <i className="uil uil-search"></i>
                <input
                  type="search"
                  placeholder="Search message"
                  id="message-search"
                />
              </div>
              <div className="category">
                <h6 className="active">Primary</h6>
                <h6>General</h6>
                <h6 className="message-requests">Requests(7)</h6>
              </div>
              <div className="message">
                <div className="profile-photo">
                  <img src={profile_1} alt="" />
                </div>
                <div className="message-body">
                  <h5>Edem Quist</h5>
                  <p className="text-muted">Delicious cookies</p>
                </div>
              </div>
              <div className="message">
                <div className="profile-photo">
                  <img src={profile_2} alt="" />
                </div>
                <div className="message-body">
                  <h5>Franca Delia</h5>
                  <p className="text-muted">Received cakes, Thanks</p>
                </div>
              </div>
              <div className="message">
                <div className="profile-photo">
                  <img src={profile_3} alt="" />
                  <div className="active"></div>
                </div>
                <div className="message-body">
                  <h5>Jane Doe</h5>
                  <p className="text-muted">Ok</p>
                </div>
              </div>
              <div className="message">
                <div className="profile-photo">
                  <img src={profile_5} alt="" />
                </div>
                <div className="message-body">
                  <h5>Daniella Jacson</h5>
                  <p className="text-muted">2 news messages</p>
                </div>
              </div>
              <div className="message">
                <div className="profile-photo">
                  <img src={profile_6} alt="" />
                  <div className="active"></div>
                </div>
                <div className="message-body">
                  <h5>Juliet Makarey</h5>
                  <p className="text-muted">Yummy</p>
                </div>
              </div>
              <div className="message">
                <div className="profile-photo">
                  <img src={profile_7} alt="" />
                </div>
                <div className="message-body">
                  <h5>Chantel Msiza</h5>
                  <p className="text-muted">
                    Can't waiting the new collections
                  </p>
                </div>
              </div>
            </div>
            <div className="friend-requests">
              <h4>Requests</h4>
              <div className="request">
                <div className="info">
                  <img src={profile_13} alt="" />
                  <div>
                    <h5>Hajia Bintu</h5>
                    <p className="text-muted">8 mutual friends</p>
                  </div>
                </div>
                <div className="action">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn-1">Decline</button>
                </div>
              </div>
              <div className="request">
                <div className="info">
                  <img src={profile_14} alt="" />
                  <div>
                    <h5>Jackline Mensah</h5>
                    <p className="text-muted">2 mutual friends</p>
                  </div>
                </div>
                <div className="action">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn-1">Decline</button>
                </div>
              </div>
              <div className="request">
                <div className="info">
                  <img src={profile_4} alt="" />
                  <div>
                    <h5>Jenifer Lawrence</h5>
                    <p className="text-muted">19 mutual friends</p>
                  </div>
                </div>
                <div className="action">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn-1">Decline</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="customize-theme">
        <div className="card">
          <div className="font-size">
            <h4>Font size</h4>
            <div>
              <h6>Aa</h6>
              <div className="choose-size">
                <span className="font-size-1"></span>
                <span className="font-size-2 active"></span>
                <span className="font-size-3"></span>
                <span className="font-size-4"></span>
                <span className="font-size-5"></span>
              </div>
              <h3>Aa</h3>
            </div>
          </div>
          <div className="color">
            <h4>Color</h4>
            <div className="choose-color">
              <span className="color-1 active"></span>
              <span className="color-2"></span>
              <span className="color-3"></span>
              <span className="color-4"></span>
              <span className="color-5"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facebook;
