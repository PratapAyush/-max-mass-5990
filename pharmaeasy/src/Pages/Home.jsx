import React from "react";
import BrandsCarousel from "../Components/HomeComponets/BrandsCarousel";
import HomeCarousal from "../Components/HomeComponets/HomeCarousal";
import DealsOfTheDayCarousel from "../Components/HomeComponets/DealsOfTheDayCarousel";
import HomeBanner from "../Components/HomeComponets/HomeBanner";
import HomeCatagoryCards from "../Components/HomeComponets/HomeCatagoryCards";
import HomeDescription from "../Components/HomeComponets/HomeDescription";
import LabTestCarousal from "../Components/HomeComponets/LabTestCarousal";
import OffersCarousels from "../Components/HomeComponets/OffersCarousels";
import PharmEasyPlusBanner from "../Components/HomeComponets/PharmEasyPlusBanner";
import ReviewCarousel from "../Components/HomeComponets/ReviewCarousel";
import StatisticsHome from "../Components/HomeComponets/StatisticsHome";

const Home = () => {
  return (
    <div>
      <HomeCarousal />
      <div
        className="Content"
        style={{
          overflowX: "hidden",
          height: "100%",
          padding: "50px",
          position: "relative",
        }}
      >
        <HomeCatagoryCards />
        <PharmEasyPlusBanner />
        <OffersCarousels />
        <LabTestCarousal />
        <BrandsCarousel />
        <DealsOfTheDayCarousel />
        <StatisticsHome />
        <ReviewCarousel />
        <HomeBanner />
        <HomeDescription />
      </div>
    </div>
  );
};

export default Home;
