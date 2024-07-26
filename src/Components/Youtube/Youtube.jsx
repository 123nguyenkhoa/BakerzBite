import React, { useState, useEffect } from "react";
import "./Youtube.css";
import menu from "../Assets/youtube/menu.png";
import logo from "../Assets/youtube/logo.png";
import search from "../Assets/youtube/search.png";
import voice_search from "../Assets/youtube/voice-search.png";
import upload from "../Assets/youtube/upload.png";
import more from "../Assets/youtube/more.png";
import notification from "../Assets/youtube/notification.png";
import home from "../Assets/youtube/home.png";
import explore from "../Assets/youtube/explore.png";
import subscription from "../Assets/youtube/subscriprion.png";
import library from "../Assets/youtube/library.png";
import history from "../Assets/youtube/history.png";
import playlist from "../Assets/youtube/playlist.png";
import message from "../Assets/youtube/messages.png";
import cover from "../Assets/youtube/cover.png";
import logo_1 from "../Assets/logo-1.jpg";
import person_1 from "../Assets/youtube/person-1.jpg";
import person_2 from "../Assets/youtube/person-2.jpg";
import video_3 from "../video/video-3.mp4";
import video_6 from "../video/video-6.mp4";
import video_9 from "../video/video-9.mp4";
import video_10 from "../video/video-10.mp4";
import video_11 from "../video/video-11.mp4";
import video_12 from "../video/video-12.mp4";
import video_13 from "../video/video-13.mp4";
import video_14 from "../video/video-14.mp4";
import video_15 from "../video/video-15.mp4";
import video_16 from "../video/video-16.mp4";
import video_17 from "../video/video-17.mp4";
import video_18 from "../video/video-18.mp4";

const Youtube = () => {
  const [isSidebarSmall, setSidebarSmall] = useState(false);
  const [isContainerLarge, setContainerLarge] = useState(false);

  const toggleSidebar = () => {
    setSidebarSmall(!isSidebarSmall);
    setContainerLarge(!isContainerLarge);
  };

  useEffect(() => {
    const videoLinks = document.querySelectorAll(".video-link");
    const videoModal = document.getElementById("video-modal");
    const videoIframe = document.getElementById("video-iframe");
    const closeIcon = document.querySelector(".close");

    const openVideoModal = (event) => {
      event.preventDefault();
      const videoSrc = event.currentTarget.getAttribute("data-video-src");
      if (videoIframe) {
        videoIframe.src = videoSrc;
      }
      if (videoModal) {
        videoModal.style.display = "block";
      }
    };

    const closeModal = () => {
      if (videoIframe) {
        videoIframe.src = "";
      }
      if (videoModal) {
        videoModal.style.display = "none";
      }
    };

    const handleClickOutside = (event) => {
      if (event.target === videoModal) {
        closeModal();
      }
    };

    videoLinks.forEach((link) => {
      link.addEventListener("click", openVideoModal);
    });

    if (closeIcon) {
      closeIcon.addEventListener("click", closeModal);
    }
    window.addEventListener("click", handleClickOutside);

    const videoTitles = document.querySelectorAll(".video-title");
    videoTitles.forEach((title) => {
      title.addEventListener("click", (event) => {
        event.preventDefault();
        const videoContainer = title.closest(".video-list");
        const videoLink = videoContainer.querySelector(".video-link");
        const videoSrc = videoLink.getAttribute("data-video-src");
        if (videoIframe) {
          videoIframe.src = videoSrc;
        }
        if (videoModal) {
          videoModal.style.display = "block";
        }
      });
    });

    return () => {
      videoLinks.forEach((link) => {
        link.removeEventListener("click", openVideoModal);
      });
      if (closeIcon) {
        closeIcon.removeEventListener("click", closeModal);
      }
      window.removeEventListener("click", handleClickOutside);
      videoTitles.forEach((title) => {
        title.removeEventListener("click", (event) => {
          event.preventDefault();
          const videoContainer = title.closest(".video-list");
          const videoLink = videoContainer.querySelector(".video-link");
          const videoSrc = videoLink.getAttribute("data-video-src");
          if (videoIframe) {
            videoIframe.src = videoSrc;
          }
          if (videoModal) {
            videoModal.style.display = "block";
          }
        });
      });
    };
  }, []);

  return (
    <div>
      <nav className="flex-div">
        <div className="nav-left flex-div">
          <img src={menu} className="menu" alt="" onClick={toggleSidebar} />
          <img src={logo} className="logo-12" alt="" />
        </div>
        <div className="nav-middle flex-div">
          <div className="search flex-div">
            <input type="text" placeholder="Search" />
            <img src={search} alt="" />
          </div>
          <img src={voice_search} className="mic" alt="" />
        </div>
        <div className="nav-right flex-div">
          <img src={upload} alt="" />
          <img src={more} alt="" />
          <img src={notification} alt="" />
          <img src={logo_1} className="user" alt="" />
        </div>
      </nav>
      <div className={`sidebar-1 ${isSidebarSmall ? "small-sidebar" : ""}`}>
        <div className="shortcut">
          <a href="#0">
            <img src={home} alt="" />
            <p>Home</p>
          </a>
          <a href="#0">
            <img src={explore} alt="" />
            <p>Explore</p>
          </a>
          <a href="#0">
            <img src={subscription} alt="" />
            <p>Subscription</p>
          </a>
          <a href="#0">
            <img src={library} alt="" />
            <p>Library</p>
          </a>
          <a href="#0">
            <img src={history} alt="" />
            <p>History</p>
          </a>
          <a href="#0">
            <img src={playlist} alt="" />
            <p>Playlist</p>
          </a>
          <a href="#0">
            <img src={message} alt="" />
            <p>Messages</p>
          </a>
          <a href="#0">
            <img src={more} alt="" />
            <p>Show-More</p>
          </a>
          <hr />
        </div>
        <div className="subscribed">
          <h3>Subscribed</h3>
          <a href="#0">
            <img src={person_1} alt="" />
            <p>Mart Son</p>
          </a>
          <a href="#0">
            <img src={person_2} alt="" />
            <p>John Doe</p>
          </a>
        </div>
      </div>
      <div
        className={`container-3 ${isContainerLarge ? "large-container" : ""}`}
      >
        <div className="banner">
          <img src={cover} alt="" />
        </div>
        <div className="list-container">
          <div className="video-list">
            <a href="#0" className="video-link" data-video-src={video_3}>
              <video className="thumbnail" controls autoPlay>
                <source src={video_3} type="video/mp4" />
              </video>
            </a>
            <div className="flex-div">
              <div className="video-info">
                <a href="#0" className="video-title">
                  Browine doughnut is the best way to eat a browine
                </a>
                <p>Bakerz Bite</p>
                <p>58 views &bull; 2 weeks ago</p>
              </div>
            </div>
          </div>
          <div className="video-list">
            <a href="#0" className="video-link" data-video-src={video_6}>
              <video className="thumbnail" controls autoPlay>
                <source src={video_6} type="video/mp4" />
              </video>
            </a>
            <div className="flex-div">
              <div className="video-info">
                <a href="#0" className="video-title">
                  Pancake quick and easy recipe | perfect to make with kids |
                  Bakers Bites
                </a>
                <p>Bakerz Bite</p>
                <p>18000 views &bull; 2 months ago</p>
              </div>
            </div>
          </div>
          <div className="video-list">
            <a href="#0" className="video-link" data-video-src={video_9}>
              <video className="thumbnail" controls autoPlay>
                <source src={video_9} type="video/mp4" />
              </video>
            </a>
            <div className="flex-div">
              <div className="video-info">
                <a href="#0" className="video-title">
                  Have You Ever Tried The World's Easiest Rava Laddu Recipe?
                </a>
                <p>Bakerz Bite</p>
                <p>122 views &bull; 2 days ago</p>
              </div>
            </div>
          </div>
          <div className="video-list">
            <a href="#0" className="video-link" data-video-src={video_10}>
              <video className="thumbnail" controls autoPlay>
                <source src={video_10} type="video/mp4" />
              </video>
            </a>
            <div className="flex-div">
              <div className="video-info">
                <a href="#0" className="video-title">
                  Crunchies | South African Oats and Coconut Bar | Bakerz Bites
                </a>
                <p>Bakerz Bite</p>
                <p>4600k views &bull; 1 year ago</p>
              </div>
            </div>
          </div>
          <div className="video-list">
            <a href="#0" className="video-link" data-video-src={video_11}>
              <video className="thumbnail" controls autoPlay>
                <source src={video_11} type="video/mp4" />
              </video>
            </a>
            <div className="flex-div">
              <div className="video-info">
                <a href="#0" className="video-title">
                  Biscoff Lasagne I only 3 ingredients recipe | Bakerz Bites
                </a>
                <p>Bakerz Bite</p>
                <p>132 views &bull; 2 days ago</p>
              </div>
            </div>
          </div>
          <div className="video-list">
            <a href="#0" className="video-link" data-video-src={video_12}>
              <video className="thumbnail" controls autoPlay>
                <source src={video_12} type="video/mp4" />
              </video>
            </a>
            <div className="flex-div">
              <div className="video-info">
                <a href="#0" className="video-title">
                  Do You Want to Make the Perfect Buttercream?
                </a>
                <p>Bakerz Bite</p>
                <p>107 views &bull; 3 weeks ago</p>
              </div>
            </div>
          </div>
          <div className="video-list">
            <a href="#0" className="video-link" data-video-src={video_13}>
              <video className="thumbnail" controls autoPlay>
                <source src={video_13} type="video/mp4" />
              </video>
            </a>
            <div className="flex-div">
              <div className="video-info">
                <a href="#0" className="video-title">
                  Quick Chocolate Cake | Bakerz Bites
                </a>
                <p>Bakerz Bite</p>
                <p>138 views &bull; 2 days ago</p>
              </div>
            </div>
          </div>
          <div className="video-list">
            <a href="#0" className="video-link" data-video-src={video_14}>
              <video className="thumbnail" controls autoPlay>
                <source src={video_14} type="video/mp4" />
              </video>
            </a>
            <div className="flex-div">
              <div className="video-info">
                <a href="#0" className="video-title">
                  Marbled Sponge Cake | Bakerz Bites
                </a>
                <p>Bakerz Bite</p>
                <p>103 views &bull; 2 days ago</p>
              </div>
            </div>
          </div>
          <div className="video-list">
            <a href="#0" className="video-link" data-video-src={video_15}>
              <video className="thumbnail" controls autoPlay>
                <source src={video_15} type="video/mp4" />
              </video>
            </a>
            <div className="flex-div">
              <div className="video-info">
                <a href="#0" className="video-title">
                  The Best Tastings | Fairy Bread Lamington | Bakerz Bites
                </a>
                <p>Bakerz Bite</p>
                <p>9300k views &bull; 2 days ago</p>
              </div>
            </div>
          </div>
          <div className="video-list">
            <a href="#0" className="video-link" data-video-src={video_16}>
              <video className="thumbnail" controls autoPlay>
                <source src={video_16} type="video/mp4" />
              </video>
            </a>
            <div className="flex-div">
              <div className="video-info">
                <a href="#0" className="video-title">
                  ½ cup Chocolate Cake | Super Moist Cake | Bakerz Bites
                </a>
                <p>Bakerz Bite</p>
                <p>349 views &bull; 2 days ago</p>
              </div>
            </div>
          </div>
          <div className="video-list">
            <a href="#0" className="video-link" data-video-src={video_17}>
              <video className="thumbnail" controls autoPlay>
                <source src={video_17} type="video/mp4" />
              </video>
            </a>
            <div className="flex-div">
              <div className="video-info">
                <a href="#0" className="video-title">
                  Peppermint Cake | South African Style | Super Moist | Bakerz
                  Bites | Easy Bakes
                </a>
                <p>Bakerz Bite</p>
                <p>349 views &bull; 2 days ago</p>
              </div>
            </div>
          </div>
          <div className="video-list">
            <a href="#0" className="video-link" data-video-src={video_18}>
              <video className="thumbnail" controls autoPlay>
                <source src={video_18} type="video/mp4" />
              </video>
            </a>
            <div className="flex-div">
              <div className="video-info">
                <a href="#0" className="video-title">
                  Snowball | South Africa Style | Deliciously Easy | Bakerz
                  Bites | Durban Style
                </a>
                <p>Bakerz Bite</p>
                <p>1400k views &bull; 1 year ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="video-modal" className="video-modal">
        <span className="close">&times;</span>
        <iframe
          id="video-iframe"
          className="video-iframe"
          src=""
          frameBorder="0"
          allowFullScreen
          title="Video Modal"
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
