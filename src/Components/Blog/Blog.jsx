import React, { useEffect, useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

// Importing images
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

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/data/posts.json");
        if (!response.ok) {
          throw new Error(`Network response was not ok ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
   
    const filterItems = document.querySelectorAll(".filter-item");
    const postBoxes = document.querySelectorAll(".post-box");

    const handleFilterClick = (item) => {
      const value = item.getAttribute("data-filter");

      if (value === "all") {
        postBoxes.forEach((box) => (box.style.display = "block"));
      } else {
        postBoxes.forEach((box) => {
          box.style.display = box.classList.contains(value) ? "block" : "none";
        });
      }
      filterItems.forEach((i) => i.classList.remove("active-filter"));
      item.classList.add("active-filter");
    };

    filterItems.forEach((item) => {
      item.addEventListener("click", () => handleFilterClick(item));
    });

   
    return () => {
      filterItems.forEach((item) => {
        item.removeEventListener("click", () => handleFilterClick(item));
      });
    };
  }, [posts]);

  return (
    <div>
      <section className="home" id="home">
        <div className="home-text container-1">
          <h2 className="home-title">The Bakerz Bite Blog</h2>
          <span className="home-subtitle">Your source of great content</span>
        </div>
      </section>
      <div className="post-filter container-1">
        <span className="filter-item active-filter" data-filter="all">
          All
        </span>
        <span className="filter-item" data-filter="recipe">
          Recipe
        </span>
        <span className="filter-item" data-filter="tips">
          Tips
        </span>
        <span className="filter-item" data-filter="customer">
          Customer Story
        </span>
      </div>
      <div className="post-1 container-1">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`post-box ${post.category.toLowerCase()}`}
          >
            <Link to={`/blog/pagesingle/${post.id}`}>
              <img
                src={images[post.imageClass]}
                className="post-img"
                alt={post.title}
              />
            </Link>
            <h2 className="category">{post.category}</h2>
            <Link to={`/blog/pagesingle/${post.id}`} className="post-title">
              {post.title}
            </Link>
            <span className="post-date">{post.date}</span>
            <p className="post-description">{post.description}</p>
            <div className="profile">
              <img
                src={profiles[post.author.profileClass]}
                alt={post.author.name}
                className="profile-img"
              />
              <span className="profile-name">{post.author.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
