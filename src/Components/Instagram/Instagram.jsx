import React from "react";
import styles from "./Instagram.module.css";
import instaLogo from "../Assets/instagram/Instagram_icon.png.webp";
import logo from "../Assets/logo-1.jpg";
import verify from "../Assets/instagram/verify.png";
import avar1 from "../Assets/instagram/avar-1.avif";
import avar2 from "../Assets/instagram/avar-2.avif";
import avar3 from "../Assets/instagram/avar-3.avif";
import avar4 from "../Assets/instagram/avar-4.avif";
import avar5 from "../Assets/instagram/avar-5.avif";
import avar6 from "../Assets/instagram/avar-6.avif";
import avar7 from "../Assets/instagram/avar-7.avif";
import avar8 from "../Assets/instagram/avar-8.avif";
import avar9 from "../Assets/instagram/avar-9.avif";
import post1 from "../Assets/instagram/post-1.jpg";
import post2 from "../Assets/instagram/post-2.jpg";
import post3 from "../Assets/instagram/post-2.webp";
import post4 from "../Assets/instagram/post-3.jpg";
import post5 from "../Assets/instagram/post-4.jpg";
import post6 from "../Assets/instagram/post-5.jpg";
import post7 from "../Assets/instagram/post-6.jpg";
import post8 from "../Assets/instagram/post-7.jpg";
import post9 from "../Assets/instagram/post-9.jpg";
import post10 from "../Assets/instagram/post-10.jpg";
import post11 from "../Assets/instagram/post-11.jpg";
import post12 from "../Assets/instagram/post-12.webp";
import post13 from "../Assets/instagram/post-13.jpg";
import post14 from "../Assets/instagram/post-14.jpeg";
import post15 from "../Assets/instagram/post-15.jpg";

const Instagram = () => {
  return (
    <>
      <div className={styles.instagramSidebar}>
        <a href="#0" className={styles.instagramLogo}>
          <img src={instaLogo} alt="Instagram Logo" />
          <h1>Instagram</h1>
        </a>
        <div className={styles.instagramProfile}>
          <div className={styles.instagramProfileImg}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.instagramName}>
            <h1>Bakerz Bite</h1>
            <img src={verify} alt="Verified" />
          </div>
          <span>bakerzbite.com</span>
        </div>
        <div className={styles.instagramAbout}>
          <div className={styles.instagramBox}>
            <h3>89</h3>
            <span>Posts</span>
          </div>
          <div className={styles.instagramBox}>
            <h3>123M</h3>
            <span>Followers</span>
          </div>
          <div className={styles.instagramBox}>
            <h3>14</h3>
            <span>Following</span>
          </div>
        </div>
        <div className={styles.instagramMenu}>
          <a href="#0" className={styles.instagramActive}>
            <span className={styles.instagramIcon}>
              <i className="uil uil-grip-horizontal-line"></i>
            </span>
            Feed
          </a>
          <a href="#0">
            <span className={styles.instagramIcon}>
              <i className="uil uil-compass"></i>
            </span>
            Explore
          </a>
          <a href="#0">
            <span className={styles.instagramIcon}>
              <i className="uil uil-dice-four"></i>
            </span>
            Notifications
          </a>
          <a href="#0">
            <span className={styles.instagramIcon}>
              <i className="uil uil-envelope"></i>
            </span>
            Messages
          </a>
          <a href="#0">
            <span className={styles.instagramIcon}>
              <i className="uil uil-message"></i>
            </span>
            Direct
          </a>
          <a href="#0">
            <span className={styles.instagramIcon}>
              <i className="uil uil-chart-growth"></i>
            </span>
            Stats
          </a>
          <a href="#0">
            <span className={styles.instagramIcon}>
              <i className="uil uil-setting"></i>
            </span>
            Settings
          </a>
          <a href="#0">
            <span className={styles.instagramIcon}>
              <i className="uil uil-signout"></i>
            </span>
            Logout
          </a>
        </div>
      </div>

      <div className={styles.instagramMainHome}>
        <div className={styles.instagramHeader}>
          <div className={styles.instagramSearch}>
            <i className="uil uil-search"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div className={styles.instagramHeaderContent}>
            <i className="uil uil-bell"></i>
            <i className="uil uil-envelope"></i>
            <a href="#0" className={styles.instagramBtn}>
              <i className="uil uil-plus-circle"></i>
              <div className={styles.instagramBtnText}>Add Photo</div>
            </a>
          </div>
        </div>
        <div className={styles.instagramStoriesTitle}>
          <h1>Stories</h1>
          <a href="#0" className={styles.instagramBtn}>
            <i className="uil uil-play-circle"></i>
            <div className={styles.instagramText}>Watch all</div>
          </a>
        </div>
        <div className={styles.instagramStories}>
          <div
            className={`${styles.instagramStoriesImg} ${styles.instagramColor}`}
          >
            <img src={avar1} alt="Avatar 1" />
            <div className={styles.instagramAdd}>+</div>
          </div>
          <div className={styles.instagramStoriesImg}>
            <img src={avar2} alt="Avatar 2" />
          </div>
          <div className={styles.instagramStoriesImg}>
            <img src={avar3} alt="Avatar 3" />
          </div>
          <div className={styles.instagramStoriesImg}>
            <img src={avar4} alt="Avatar 4" />
          </div>
          <div className={styles.instagramStoriesImg}>
            <img src={avar5} alt="Avatar 5" />
          </div>
          <div className={styles.instagramStoriesImg}>
            <img src={avar6} alt="Avatar 6" />
          </div>
          <div className={styles.instagramStoriesImg}>
            <img src={avar7} alt="Avatar 7" />
          </div>
          <div className={styles.instagramStoriesImg}>
            <img src={avar8} alt="Avatar 8" />
          </div>
          <div className={styles.instagramStoriesImg}>
            <img src={avar9} alt="Avatar 9" />
          </div>
        </div>
        <div className={styles.instagramFeed}>
          <h1>Feed</h1>
          <div className={styles.instagramFeedText}>
            <h2>Latest</h2>
            <span>Popular</span>
          </div>
        </div>
        <div className={styles.instagramMainPosts}>
          <div className={styles.instagramPostBox}>
            <img src={post1} alt="Post 1" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
          <div className={styles.instagramPostBox}>
            <img src={post2} alt="Post 2" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
          <div className={styles.instagramPostBox}>
            <img src={post3} alt="Post 3" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instagramMainPosts}>
          <div className={styles.instagramPostBox}>
            <img src={post4} alt="Post 4" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
          <div className={styles.instagramPostBox}>
            <img src={post5} alt="Post 5" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
          <div className={styles.instagramPostBox}>
            <img src={post6} alt="Post 6" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instagramMainPosts}>
          <div className={styles.instagramPostBox}>
            <img src={post7} alt="Post 7" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
          <div className={styles.instagramPostBox}>
            <img src={post8} alt="Post 8" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
          <div className={styles.instagramPostBox}>
            <img src={post9} alt="Post 9" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instagramMainPosts}>
          <div className={styles.instagramPostBox}>
            <img src={post10} alt="Post 10" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
          <div className={styles.instagramPostBox}>
            <img src={post11} alt="Post 11" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
          <div className={styles.instagramPostBox}>
            <img src={post12} alt="Post 12" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instagramMainPosts}>
          {" "}
          <div className={styles.instagramPostBox}>
            <img src={post13} alt="Post 13" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
          <div className={styles.instagramPostBox}>
            <img src={post14} alt="Post 14" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
          <div className={styles.instagramPostBox}>
            <img src={post15} alt="Post 15" />
            <div className={styles.instagramPostInfo}>
              <div className={styles.instagramPostProfile}>
                <div className={styles.instagramPostImg}>
                  <img src={logo} alt="" />
                </div>
                <h3>Bakerz Bite</h3>
              </div>
              <div className={styles.instagramLikes}>
                <i className="uil uil-heart"></i>
                <span>74.8k</span>
                <i className="uil uil-comment"></i>
                <span>1.9k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instagram;
