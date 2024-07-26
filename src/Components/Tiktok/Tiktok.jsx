import React, { useState } from "react";
import styles from "./Tiktok.module.css";
import video1 from "../video/videoplayback.mp4";
import video2 from "../video/videoplayback (1).mp4";
import video3 from "../video/videoplayback (2).mp4";
import video4 from "../video/videoplayback (3).mp4";
import tiktok_person1 from "../Assets/tiktok/tiktok-person-1.jpg";
import tiktok_person2 from "../Assets/tiktok/tiktok-person-2.jpg";
import tiktok_person3 from "../Assets/tiktok/tiktok-person-3.jpg";
import tiktok_person4 from "../Assets/tiktok/tiktok-person-4.jpg";
import tiktok_person5 from "../Assets/tiktok/tiktok-person-5.jpg";
import tiktok_person6 from "../Assets/tiktok/tiktok-person-6.jpg";
import tiktok_person7 from "../Assets/tiktok/tiktok-person-7.webp";
import tiktok_person8 from "../Assets/tiktok/tiktok-person-8.jpg";
import tiktok_logo from "../Assets/logo-1.jpg";

const Tiktok = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSuggestedToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const videos = [video1, video2, video3, video4];
  const suggestedPics = [
    tiktok_person1,
    tiktok_person2,
    tiktok_person3,
    tiktok_person4,
    tiktok_person5,
    tiktok_person6,
    tiktok_person7,
    tiktok_person8,
  ];

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <h1 className={styles.logo}>
            <i className="fa-brands fa-tiktok"></i> Tiktok
          </h1>
          <form className={styles.searchForm}>
            <input
              type="search"
              name="search"
              id="search__field"
              placeholder="Search Accounts"
              className={styles.searchInput}
            />
            <i className={styles.searchIcon}>
              <i className="uil uil-search"></i>
            </i>
          </form>
          <div className={styles.navBtns}>
            <button className={styles.uploadBtn}>Upload</button>
            <button className={styles.loginBtn}>Log In</button>
            <div className={styles.dotsBtn}>
              <i className="uil uil-ellipsis-v"></i>
              <div className={styles.dotsInfo}>
                <a href="#0">
                  <i className="uil uil-font"></i> English
                </a>
                <a href="#0">
                  <i className="uil uil-frown"></i> Feedback
                </a>
                <a href="#0">
                  <i className="uil uil-keyboard"></i> Keyboard Shortcuts
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.menu}>
          <a href="#0" className={styles.menuLink}>
            <i className="uil uil-home"></i> For You
          </a>
          <a href="#0" className={styles.menuLink}>
            <i className="uil uil-user"></i> Following
          </a>
          <a href="#0" className={styles.menuLink}>
            <i className="uil uil-video"></i> LIVE
          </a>
        </div>
        <div className={styles.loginArea}>
          <p>Log in to follow creators, like videos, and view comments.</p>
          <button className={styles.mainLogin}>Log In</button>
        </div>
        <div className={styles.suggested}>
          <h3>Suggested Accounts</h3>
          <div
            className={`${styles.suggestedContainer} ${
              isExpanded ? styles.expanded : ""
            }`}
          >
            {suggestedPics.map((pic, index) => (
              <a href="#0" className={styles.suggestion} key={index}>
                <div
                  className={styles.suggestedPic}
                  style={{ backgroundImage: `url(${pic})` }}
                ></div>
                <div className={styles.suggestedInfo}>
                  <h3>
                    {index === 0 && "Emily"}
                    {index === 1 && "Sarah"}
                    {index === 2 && "Michael"}
                    {index === 3 && "Laura"}
                    {index === 4 && "John"}
                    {index === 5 && "Emma"}
                    {index === 6 && "Ava"}
                    {index === 7 && "Olivia"}
                  </h3>
                  <small>
                    {index === 0 && "Singer"}
                    {index === 1 && "Model"}
                    {index === 2 && "Rapper"}
                    {index === 3 && "Baker"}
                    {index === 4 && "Singer"}
                    {index === 5 && "Model"}
                    {index === 6 && "Model"}
                    {index === 7 && "Actress"}
                  </small>
                </div>
              </a>
            ))}
          </div>
          <button
            className={styles.suggestedBtn}
            onClick={handleSuggestedToggle}
          >
            {isExpanded ? "See less" : "See all"}
          </button>
        </div>
        <div className={styles.discover}>
          <h3>Discover</h3>
          <div className={styles.discoverContainer}>
            {[
              "bakerylife",
              "sweettreats",
              "bakerzlife",
              "BakerzBiteSpecial",
              "BakerzSurprise",
              "dailybread",
              "deliciousbites",
            ].map((item, index) => (
              <a href="#0" className={styles.recommendation} key={index}>
                <i className="uil uil-tag"></i> {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className={styles.feed}>
        {videos.map((video, index) => (
          <div className={styles.post} key={index}>
            <div className={styles.postTop}>
              <div
                className={styles.profilePic}
                style={{ backgroundImage: `url(${tiktok_logo})` }}
              ></div>
              <div className={styles.postInfo}>
                <h2>Bakerz Bite</h2>
                <small>@bakerzbite</small>
                <p>
                  {index === 0 &&
                    "A late iftar party video #iftarparty #BakerzBite #delicious #celebration"}
                  {index === 1 &&
                    "Life is better with a plate full of Gulab Jamun #eidsweets #eid #BakerzBite #eiddessertrecipe"}
                  {index === 2 &&
                    "fathers day #fathersday #fathersdaygifts #dad #happyfathersday #love #family #BakerzBite"}
                  {index === 3 &&
                    "dino Footprint cookie #kidsfrendlyrecipes #shorts #viral #thumbprintcookies #BakerzBite"}
                </p>
              </div>
              <button className={styles.followBtn}>Follow</button>
            </div>
            <div className={styles.postBody}>
              <video width="300" height="500" autoPlay loop muted>
                <source src={video} type="video/mp4" />
              </video>
              <div className={styles.actions}>
                <div className={styles.actionIcon}>
                  <i className="uil uil-heart"></i>
                </div>
                <div className={styles.actionIcon}>
                  <i className="uil uil-comment-dots"></i>
                </div>
                <div className={styles.actionIcon}>
                  <i className="uil uil-share"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiktok;
