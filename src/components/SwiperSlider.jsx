import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import sliderbg1 from '../assets/solar.png';
// import sliderbg2 from '../assets/cabilng-pic.webp';
import sliderbg3 from '../assets/building-pic.webp';
const SwiperSlider = () => {
  const [title, setTitle] = useState("Paving the way to a Greener");

  // Define titles for each slide
  const slideTitles = [
    { title: "Paving the way to a Greener" },
    { title: "Greener Power Division" },
    { title: "Moon Light" },
  ];

  return (
    <div className="slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        onSlideChange={(swiper) => {
          const currentTitle = slideTitles[swiper.realIndex]?.title || "";
          setTitle(currentTitle);
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide className="swiper-slider">
          <div
            style={{
              backgroundImage: `url(${sliderbg1})`,
            }}
            className="slide w-full h-screen bg-cover bg-center relative"
          >
            <div className="inner">
              <div className="absolute left-[8%] lg:top-[40%] top-[25%] flex flex-col gap-[25px] sm:w-[60%] w-[90%]">
                <h1
                  className="sm:text-[60px] text-[35px] font-[700] text-[--whiteColor] shadow sm:leading-[70px] leading-10"
                  style={{ textShadow: "5px 5px 15px black" }}
                >
                  {title}
                </h1>
                <p className="text-[1.2rem] leading-[2rem] text-[--whiteColor]">
                  Our commitment to renewable energy paves the way for a greener
                  tomorrow, offering eco-conscious solutions for today’s energy
                  needs.
                </p>
                <div className="relative flex flex-wrap gap-2">
                  <button className="btn-style bg-[--primaryColor] text-[--blackColor] px-10 py-4 rounded-full mr-4">
                    <NavLink to="/service">Our Services</NavLink>
                  </button>
                  <button className="btn-style bg-[--primaryColor] text-[--blackColor] px-10 py-4 rounded-full">
                    <NavLink to="/contact">Contact Now</NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="swiper-slider">
          <div
            style={{
              backgroundImage: `url('https://greener.com.pk/assets/cabling-BHHQdiRU.jpg')`,
            }}
            className="slide w-full h-screen bg-cover bg-center relative"
          >
            <div className="inner">
              <div className="absolute left-[8%] lg:top-[40%] top-[25%] flex flex-col gap-[25px] sm:w-[60%] w-[90%]">
             <div>
               <h1
                  className="sm:text-[60px] text-[35px] font-[700] text-[--whiteColor] shadow sm:leading-[70px] leading-10"
                  style={{ textShadow: "5px 5px 15px black" }}
                >
                  {title}
                </h1>
              </div>  
                <p className="text-[1.2rem] leading-[2rem] text-[--whiteColor]">
                  Our commitment to renewable energy paves the way for a greener
                  tomorrow, offering eco-conscious solutions for today’s energy
                  needs.
                </p>
                <div className="relative flex flex-wrap gap-2">
                  <button className="btn-style bg-[--primaryColor] text-[--blackColor] px-10 py-4 rounded-full mr-4">
                    <NavLink to="/service">Our Services</NavLink>
                  </button>
                  <button className="btn-style bg-[--primaryColor] text-[--blackColor] px-10 py-4 rounded-full">
                    <NavLink to="/contact">Contact Now</NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="swiper-slider">
          <div
            style={{
              backgroundImage: `url(${sliderbg3})`,
            }}
            className="slide w-full h-screen bg-cover bg-center relative"
          >
            <div className="inner">
              <div className="absolute left-[8%] lg:top-[40%] top-[25%] flex flex-col gap-[25px] sm:w-[60%] w-[90%]">
                <h1
                  className="sm:text-[60px] text-[35px] font-[700] text-[--whiteColor] shadow sm:leading-[70px] leading-10"
                  style={{ textShadow: "5px 5px 15px black" }}
                >
                  {title}
                </h1>
                <p className="text-[1.2rem] leading-[2rem] text-[--whiteColor]">
                  Our commitment to renewable energy paves the way for a greener
                  tomorrow, offering eco-conscious solutions for today’s energy
                  needs.
                </p>
                <div className="relative flex flex-wrap gap-2">
                  <button className="btn-style bg-[--primaryColor] text-[--blackColor] px-10 py-4 rounded-full mr-4">
                    <NavLink to="/service">Our Services</NavLink>
                  </button>
                  <button className="btn-style bg-[--primaryColor] text-[--blackColor] px-10 py-4 rounded-full">
                    <NavLink to="/contact">Contact Now</NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
