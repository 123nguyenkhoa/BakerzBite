import React from "react";
import Hero from "../Components/Hero/Hero";
import SliderMain from "../Components/SliderMain/SliderMain";
import Story from "../Components/Story/Story";
import Chef from "../Components/Chef/Chef";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Testimonials from "../Components/Testimonials/Testimonials";
import Choose from "../Components/ChooseUs/Choose";
import NewProducts from "../Components/NewProducts/NewProducts";
import GetNews from "../Components/GetNews/GetNews";
import TopSelling from "../Components/TopSelling/TopSelling";

const Home = () => {
  return (
    <div>
      <SliderMain />
      <Story />
      <NewProducts/>
      <TopSelling/>
      <Chef />
      <Choose />
      <Hero />
      <NewsLetter />
      <Testimonials />
      <GetNews/>
    </div>
  );
};

export default Home;
