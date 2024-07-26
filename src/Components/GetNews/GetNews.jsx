import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./GetNews.module.css";
import logo from "../Assets/logo-1.jpg";

const GetNews = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi email qua EmailJS
    emailjs
      .send(
        "service_svdvlnq", // ID của dịch vụ EmailJS của bạn
        "template_yt0lbbc", // ID của template EmailJS của bạn
        {
          to_name: "Dear Customer", // Tên người nhận, có thể thay đổi
          from_name: "Bakerz Bite", // Tên của bạn hoặc tên công ty
          email: email, // Địa chỉ email người nhận
          logo_url: logo, // URL logo của bạn
        },
        "Wf6JmQ9dsKtNEX2kW" // User ID của bạn từ EmailJS
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSubmitted(true);
        setError(null);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setError("Failed to send email. Please try again.");
        setSubmitted(false);
      });
  };

  return (
    <section className={styles.getNewsContainer}>
      <h1 className={styles.getNewsTitle}>Sign Up for Our Newsletter</h1>
      {!submitted ? (
        <form className={styles.getNewsForm} onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={styles.getNewsInput}
            required
          />
          <button type="submit" className={styles.getNewsButton}>
            <i className="uil uil-location-arrow"></i>
          </button>
        </form>
      ) : (
        <div className={styles.thankYouMessage}>
          Thank you for signing up! You will receive the latest updates from us.
        </div>
      )}
      {error && <div className={styles.errorMessage}>{error}</div>}
    </section>
  );
};

export default GetNews;
