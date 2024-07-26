import React from "react";
import "./About.css";
import founder from "../Assets/baker.jpg";
import image1 from "../Assets/bakery-1.jpeg";
import image2 from "../Assets/bakery-2.jpeg";
import image3 from "../Assets/bakery-3.jpg";
import image4 from "../Assets/mission-1.jpg";
import image5 from "../Assets/mission-2.jpeg";
import image6 from "../Assets/commiment.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleVisitContactUs = () => {
    navigate("/Contact Us");
  };

  return (
    <div className="about">
      <section className="our-story">
        <h1>Our Story</h1>
        <div className="content">
          <img src={founder} alt="Founder" />
          <div className="text">
            <p>
              Bakerz Bite began in a small kitchen with a big dream. Our
              founder, passionate about baking, wanted to create a bakery that
              brought joy through delicious, quality treats.
            </p>
            <p>
              Starting with family recipes and lots of experimentation, our
              founder's creations gained popularity among friends and family.
              Their support helped turn a hobby into a small business venture.
            </p>
            <p>
              Securing a quaint storefront, we opened the first Bakerz Bite
              bakery. The community's response was overwhelming, and the aroma
              of freshly baked goods quickly became a neighborhood favorite.
            </p>
            <p>
              As we grew, talented bakers and staff joined our team. Together,
              we expanded our menu and introduced new flavors, staying true to
              our roots. Today, Bakerz Bite is a testament to hard work,
              creativity, and the power of dreams.
            </p>
          </div>
        </div>
      </section>
      <div className="additional-images">
        <img src={image1} alt="Bakery 1" />
        <img src={image2} alt="Bakery 2" />
        <img src={image3} alt="Bakery 3" />
      </div>
      <section className="our-mission">
        <h1>Our Mission</h1>
        <div className="container">
          <div className="content">
            <p>
              At Bakerz Bite, our mission is to bring joy to every customer
              through our delicious, high-quality baked goods. We believe that
              every bite should be an experience, filled with the love and care
              we put into our baking.
            </p>
            <p>
              Quality is at the heart of everything we do. We are committed to
              using only the best ingredients, sourced locally and organically
              whenever possible. Our bakers are dedicated to their craft,
              ensuring that each product is made to the highest standards.
            </p>
            <p>
              Innovation drives us forward. While we cherish traditional baking
              techniques, we are always exploring new flavors and methods to
              delight our customers. Our mission includes pushing the boundaries
              of creativity in baking.
            </p>
            <p>
              Community is central to our mission. We strive to create a
              welcoming and inclusive environment where everyone feels at home.
              Giving back to our community through local events and charitable
              activities is also a key part of who we are.
            </p>
            <p>
              Sustainability is a core value at Bakerz Bite. We are dedicated to
              environmentally friendly practices, from our sourcing choices to
              our packaging. Our mission is to minimize our ecological footprint
              while maximizing the positive impact on our community and
              customers.
            </p>
          </div>
          <div className="images">
            <img className="img-1" src={image4} alt="Mission 1" />
            <img className="img-2" src={image5} alt="Mission 2" />
          </div>
        </div>
      </section>
      <section className="our-commitment">
        <h1>Our Commitment</h1>
        <div className="container">
          <div>
            <img src={image6} alt="Commitment" />
          </div>
          <div className="content">
            <p>
              At Bakerz Bite, we are committed to delivering the highest quality
              baked goods. This means using only the finest, locally sourced,
              and organic ingredients. Our bakers put their heart and soul into
              every item, ensuring that each product meets our rigorous
              standards of excellence.
            </p>
            <p>
              We are also deeply committed to our community and the environment.
              We strive to create a welcoming space where everyone feels at
              home, and we actively participate in local events and support
              charitable causes.
            </p>
          </div>
        </div>
      </section>
      <section className="learn-more">
        <h2>Want to Learn More?</h2>
        <button className="contact-button" onClick={handleVisitContactUs}>
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
