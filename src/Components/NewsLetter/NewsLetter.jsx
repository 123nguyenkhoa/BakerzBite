import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewsLetter.css";
import post_1 from "../Assets/blog/post-1.webp";
import post_2 from "../Assets/blog/post-2.jpg";
import post_3 from "../Assets/blog/post-3.jpg";
import profile_1 from "../Assets/blog/profile-1.png";
import profile_2 from "../Assets/blog/profile-2.jpg";
import profile_3 from "../Assets/blog/profile-3.jpg";

const posts = [
  {
    id: 1,
    title: "The Ultimate Chocolate Cake Recipe",
    image: post_1,
    category: "Recipe",
    date: "June 5, 2024",
    description:
      "Welcome to our baking blog! Today, we're sharing the ultimate chocolate cake recipe that's perfect for any occasion.",
    author: {
      name: "Emily Baker",
      profileImage: profile_1,
    },
  },
  {
    id: 2,
    title: "Five Tips for Perfectly Moist Cakes Every Time",
    image: post_2,
    category: "Tips",
    date: "June 12, 2024",
    description:
      "Baking a perfectly moist cake can sometimes feel like a challenge, but with the right techniques, you can achieve bakery-quality results at home.",
    author: {
      name: "John Pastry",
      profileImage: profile_2,
    },
  },
  {
    id: 3,
    title: "A Birthday Surprise with Our Signature Cupcakes",
    image: post_3,
    category: "Customer Story",
    date: "June 20, 2024",
    description:
      "At our bakery, we love hearing from our customers and how our baked goods bring joy to their special moments.",
    author: {
      name: "Sarah Sweet",
      profileImage: profile_3,
    },
  },
];

const NewsLetter = () => {
  const navigate = useNavigate();

  const handleVisitBlog = () => {
    navigate("/Blog");
  };

  const handlePostClick = (id) => {
    navigate(`/pagesingle/${id}`);
  };

  return (
    <div>
      <h1 className="blog-title">OUR BLOG</h1>
      <div className="post-container-2">
        {posts.map((post) => (
          <div className="post-box" key={post.id}>
            <img
              src={post.image}
              className="post-img"
              alt={post.title}
              onClick={() => handlePostClick(post.id)}
              style={{ cursor: "pointer" }}
            />

            <h2 className="category">{post.category}</h2>
            <a
              href="#"
              className="post-title"
              onClick={() => handlePostClick(post.id)}
              style={{ cursor: "pointer" }}
            >
              {post.title}
            </a>
            <span className="post-date">{post.date}</span>
            <p className="post-description">{post.description}</p>
            <div className="profile">
              <img
                src={post.author.profileImage}
                className="profile-img"
                alt={post.author.name}
              />
              <span className=".profile-name">{post.author.name}</span>
            </div>
          </div>
        ))}
        <button className="btn" onClick={handleVisitBlog}>
          Visit Our Blog
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
