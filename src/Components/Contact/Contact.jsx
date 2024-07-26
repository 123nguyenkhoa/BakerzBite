import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import location from "../Assets/location-logo.png";
import email from "../Assets/email-logo.jpg";
import phone from "../Assets/phone-logo.jpg";

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Bakerz Bite Team",
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_03ec3ll",
        "template_rdecugj",
        templateParams,
        "OWk_BPbwm7gEBNojl"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="contactUs">
      <div className="title">
        <h2>Get in Touch</h2>
      </div>
      <div className="box">
        <div className="contact form1">
          <h3>Send a Message</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="formBox">
              <div className="row50">
                <div className="inputBox">
                  <span>First Name</span>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="inputBox">
                  <span>Last Name</span>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Your Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row50">
                <div className="inputBox">
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="inputBox">
                  <span>Mobile Number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row100">
                <div className="inputBox">
                  <span>Message</span>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows="5"
                    cols="30"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="row100">
                <div className="inputBox">
                  <input type="submit" value="Send" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="contact info">
          <h3>Contact Info</h3>
          <div className="infoBox">
            <div>
              <img src={location} alt="Location" />
              <p>8 Dorothy Lane, East Brunswick, New Jersey, USA.</p>
            </div>
            <div>
              <img src={email} alt="Email" />
              <a href="mailto:bakerzbite@gmail.com">bakerzbite@gmail.com</a>
            </div>
            <div>
              <img src={phone} alt="Phone" />
              <a href="tel:+1.123.456.7890">+1.123.456.7890</a>
            </div>
          </div>
        </div>
        <div className="contact map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.8881257938524!2d-74.44645284049851!3d40.444661912432395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b7a331159367%3A0x2fa80cc896f93b4f!2sBakerz%20Bite!5e0!3m2!1svi!2s!4v1719649030071!5m2!1svi!2s"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location of Bakerz Bite on Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
