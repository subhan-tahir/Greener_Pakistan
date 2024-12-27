import React from "react";
import Header from "../Navbar/Header";
import AboutGreener from "../AboutGreener";
import CustomizedCards from "../Custimzedcards/CustomizedCards";
import HouseWorker from "../HouseWorker";
import Counter from "../counterGreener/Counter";
import Packages from "../packages/Packages";
import GeoMessage from "../GeoMessage";
import AutoSlider from "../AutoSlider";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Header />
      <AboutGreener />
      <CustomizedCards />
      <HouseWorker />
      <Counter />
      <Packages />
      <GeoMessage />
      <AutoSlider />
      <Footer />
    </>
  );
};

export default Home;
