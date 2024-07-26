import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import "./Blog.css";
import cd from "../Assets/blog/cd-icon.ico";
import post1 from "../Assets/blog/post-1.webp";
import post2 from "../Assets/blog/post-2.jpg";
import post3 from "../Assets/blog/post-3.jpg";
import post4 from "../Assets/blog/post-4.jpeg";
import post5 from "../Assets/blog/post-5.jpg";
import post6 from "../Assets/blog/post-6.jpg";
import post7 from "../Assets/blog/post-7.webp";
import post8 from "../Assets/blog/post-8.jpg";
import post9 from "../Assets/blog/post-9.webp";
import profile1 from "../Assets/blog/profile-1.png";
import profile2 from "../Assets/blog/profile-2.jpg";
import profile3 from "../Assets/blog/profile-3.jpg";
import profile4 from "../Assets/blog/profile-4.jpg";
import profile5 from "../Assets/blog/profile-5.jpg";
import profile6 from "../Assets/blog/profile-6.jpg";
import profile7 from "../Assets/blog/profile-7.png";

const images = {
  "post-1": post1,
  "post-2": post2,
  "post-3": post3,
  "post-4": post4,
  "post-5": post5,
  "post-6": post6,
  "post-7": post7,
  "post-8": post8,
  "post-9": post9,
};

const profiles = {
  "profile-1": profile1,
  "profile-2": profile2,
  "profile-3": profile3,
  "profile-4": profile4,
  "profile-5": profile5,
  "profile-6": profile6,
  "profile-7": profile7,
};

const audioFiles = {
  1: () => import(`../video/audio-1.mp3`),
  2: () => import(`../video/audio-2.mp3`),
  3: () => import(`../video/audio-3.mp3`),
  4: () => import(`../video/audio-4.mp3`),
  5: () => import(`../video/audio-5.mp3`),
  6: () => import(`../video/audio-6.mp3`),
  7: () => import(`../video/audio-7.mp3`),
  8: () => import(`../video/audio-8.mp3`),
  9: () => import(`../video/audio-9.mp3`),
};

const PageSingle = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const audioRef = useRef(null);
  const cdImageRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showAllComments, setShowAllComments] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("/data/posts.json");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        const foundPost = data.find((p) => p.id === parseInt(id));
        setPost(foundPost);
        setComments(foundPost.comments);

        // Dynamic import audio file based on post ID
        const audioModule = await audioFiles[id]();
        const { default: audioSrc } = audioModule;
        audioRef.current.src = audioSrc;
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    const cdImage = cdImageRef.current;

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          cdImage.classList.add("spin");
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
      cdImage.classList.remove("spin");
    }
  };

  const handleMuteUnmute = () => {
    const audio = audioRef.current;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    const audio = audioRef.current;
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      case "gmail":
        shareUrl = `https://mail.google.com/mail/?view=cm&fs=1&to&su=Check this out&body=${encodeURIComponent(
          url
        )}`;
        break;
      case "instagram":
        shareUrl = `https://www.instagram.com/?url=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, "_blank");
  };

  const handleShowAllComments = () => {
    setShowAllComments(true);
  };

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleSubmitComment = (name, comment) => {
    const newComment = {
      customer: name,
      comment: comment,
      date: new Date().toLocaleDateString(),
    };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-container-1">
      <section className="post-header-1">
        <div className="header-content">
          <Link to="/Blog" className="back-home">
            Back to Home
          </Link>
          <h1 className="header-title">{post.title}</h1>
          <img
            src={images[post.imageClass]}
            alt={post.title}
            className="header-img"
          />
        </div>
      </section>
      <div className="audio-player">
        <div className="audio-details">
          <img src={cd} alt="Audio" ref={cdImageRef} className="audio-image" />
          <div className="audio-info">
            <h2>{post.title}</h2>
            <p>by {post.author.name}</p>
          </div>
        </div>
        <audio ref={audioRef} preload="auto"></audio>
        <div className="controls">
          <button onClick={handlePlayPause} className="control-btn">
            <i className={`uil ${isPlaying ? "uil-pause" : "uil-play"}`}></i>
          </button>
          <button onClick={handleMuteUnmute} className="control-btn">
            <i
              className={`uil ${isMuted ? "uil-volume-mute" : "uil-volume"}`}
            ></i>
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
          <button
            onClick={() => handleShare("twitter")}
            className="control-btn"
          >
            <i className="uil uil-twitter"></i>
          </button>
          <button
            onClick={() => handleShare("linkedin")}
            className="control-btn"
          >
            <i className="uil uil-linkedin"></i>
          </button>
          <button onClick={() => handleShare("gmail")} className="control-btn">
            <i className="uil uil-envelope"></i>
          </button>
          <button
            onClick={() => handleShare("instagram")}
            className="control-btn"
          >
            <i className="uil uil-instagram"></i>
          </button>
          <button
            className="control-btn"
            onClick={() => {
              const link = document.createElement("a");
              link.href = audioRef.current.src;
              link.download = `${post.title}.mp3`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <i class="uil uil-download-alt"></i>
          </button>
        </div>
      </div>
      <div className="post-content-1">
        <p className="post-text">{post.description}</p>
        {post.subheadings.map((subheading, index) => (
          <div key={index}>
            <h2 className="sub-heading">{subheading.title}</h2>
            {subheading.content.map((paragraph, i) => (
              <p key={i} className="post-text">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="author-info">
        <img
          src={profiles[post.author.profileClass]}
          alt={post.author.name}
          className="author-img"
        />
        <div className="author-details">
          <h3>{post.author.name}</h3>
          <p>{post.author.bio}</p>
        </div>
      </div>
      <CommentForm onSubmit={handleSubmitComment} />
      <div className="comments-section">
        <h3>Comments</h3>
        {(showAllComments ? comments : comments.slice(0, 2)).map(
          (comment, index) => (
            <div key={index} className="comments">
              <p>
                <strong>{comment.customer}:</strong> {comment.comment}
              </p>
              <p className="comment-date">{comment.date}</p>
            </div>
          )
        )}
        {!showAllComments && comments.length > 2 && (
          <button onClick={handleShowAllComments} className="show-all-comments">
            See all comments
          </button>
        )}
      </div>
      <div className="like-section">
        <button onClick={handleLike} className="like-button">
          <i className="uil uil-thumbs-up"></i> Like
        </button>
        <p>{likeCount} likes</p>
      </div>
      <div className="share-section">
        <p>If you find this article interesting, please share it!</p>
        <div className="share-icons">
          <button onClick={() => handleShare("twitter")} className="share-btn">
            <i className="uil uil-twitter"></i>
          </button>
          <button onClick={() => handleShare("linkedin")} className="share-btn">
            <i className="uil uil-linkedin"></i>
          </button>
          <button onClick={() => handleShare("gmail")} className="share-btn">
            <i className="uil uil-envelope"></i>
          </button>
          <button
            onClick={() => handleShare("instagram")}
            className="share-btn"
          >
            <i className="uil uil-instagram"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const CommentForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const currentDate = new Date().toLocaleDateString("en-GB", options);
    return currentDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = getCurrentDate();
    onSubmit(name, comment, currentDate);
    setName("");
    setComment("");
  };

  return (
    <div className="comment-form">
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={handleCommentChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PageSingle;
