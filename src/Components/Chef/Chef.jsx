import React, { useEffect, useRef, useState } from "react";
import "./Chef.css";
import chef_1 from "../Assets/chef-1.jpg";
import chef_2 from "../Assets/chef-2.webp";
import chef_3 from "../Assets/chef-3.jpg";
import chef_4 from "../Assets/chef-4.webp";
import chef_5 from "../Assets/chef-5.webp";

const Chef = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const carouselRef = useRef(null);
  const listHTMLRef = useRef(null);
  const seeMoreButtonsRef = useRef([]);
  const backButtonRef = useRef(null);
  const [activeDetail, setActiveDetail] = useState(null);

  useEffect(() => {
    const nextButton = nextButtonRef.current;
    const prevButton = prevButtonRef.current;
    const carousel = carouselRef.current;
    const listHTML = listHTMLRef.current;
    const seeMoreButtons = seeMoreButtonsRef.current;
    const backButton = backButtonRef.current;

    let unAcceppClick;

    const showSlider = (type) => {
      nextButton.style.pointerEvents = "none";
      prevButton.style.pointerEvents = "none";

      carousel.classList.remove("next", "prev");
      let items = listHTML.querySelectorAll(".item");
      if (type === "next") {
        listHTML.appendChild(items[0]);
        carousel.classList.add("next");
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add("prev");
      }
      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = "auto";
        prevButton.style.pointerEvents = "auto";
      }, 2000);
    };

    const handleSeeMoreClick = (index) => {
      setActiveDetail(index);
      carousel.classList.add("showDetail");
    };

    const handleBackButtonClick = () => {
      setActiveDetail(null);
      carousel.classList.remove("showDetail");
    };

    nextButton.onclick = () => showSlider("next");
    prevButton.onclick = () => showSlider("prev");

    seeMoreButtons.forEach((button, index) => {
      button.onclick = () => handleSeeMoreClick(index);
    });

    backButton.onclick = handleBackButtonClick;

    return () => {
      clearTimeout(unAcceppClick);
    };
  }, []);

  const chefs = [
    {
      name: "John Smith",
      topic: "Pastry Chef",
      description:
        "With over 10 years of experience in crafting a variety of pastries, from cookies and cakes, John brings creativity and passion to every sweet creation.",
      detail:
        "Pastry making is an art, and I always put my heart into each creation to ensure our customers' complete satisfaction.",
      image: chef_1,
    },
    {
      name: "Emily Johnson",
      topic: "Bread Baker",
      description:
        "Emily has over 8 years of experience in baking fresh bread, specializing in white, whole grain, and specialty breads, ensuring every loaf is flavorful.",
      detail:
        "Baking bread is a craft, and I take pride in every loaf that comes out of our oven, aiming to deliver the best taste and texture.",
      image: chef_2,
    },
    {
      name: "Michael Brown",
      topic: "Cake Decorator",
      description:
        "Michael has been decorating cakes for over 7 years, transforming simple cakes into stunning works of art for birthdays, weddings, and special occasions.",
      detail:
        "Cake decorating is my passion, and I love bringing joy to our customers with beautifully designed cakes for their special moments.",
      image: chef_3,
    },
    {
      name: "Daniel Lee",
      topic: "Fruit Pastry Chef",
      description:
        "Daniel has 7 years of experience in making fruit-based pastries, from fruit tarts and muffins to pies, always using the freshest ingredients.",
      detail:
        "Using fresh fruit in pastries adds a natural sweetness, and I love creating desserts that are both healthy and delicious.",
      image: chef_4,
    },
    {
      name: "Laura Taylor",
      topic: "Handcrafted Beverage Specialist",
      description:
        "Laura has over 5 years of experience in creating a wide range of handcrafted beverages, including artisanal coffees, teas, and specialty drinks.",
      detail:
        "Crafting beverages is about finding the perfect harmony of flavors, and I love experimenting to bring our customers refreshing and unforgettable drinks.",
      image: chef_5,
    },
  ];

  return (
    <div>
      <div className="carousel" ref={carouselRef}>
        <h1>OUR BAKERS</h1>
        <div className="list" ref={listHTMLRef}>
          {chefs.map((chef, index) => (
            <div className="item" key={index}>
              <img src={chef.image} alt={chef.name} />
              <div className="introduce">
                <div className="title">{chef.name}</div>
                <div className="topic">{chef.topic}</div>
                <div className="des">{chef.description}</div>
                <button
                  className="seeMore"
                  ref={(el) => (seeMoreButtonsRef.current[index] = el)}
                >
                  SEE MORE &#8599;
                </button>
              </div>
              {activeDetail === index && (
                <div className="detail">
                  <div className="des">{chef.detail}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev" ref={prevButtonRef}>
            &#8592;
          </button>
          <button id="next" ref={nextButtonRef}>
            &#8594;
          </button>
          <button id="back" ref={backButtonRef}>
            SEE ALL &#8599;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chef;
