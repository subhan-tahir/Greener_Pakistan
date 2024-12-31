import React from "react";

const AboutGreener = () => {
  return (
    <>
    
      <div className="w-full">
        <div
          className="w-[85%]    flex  flex-col md:flex-row justify-center items-center gap-[50px] "
          style={{ margin: "10% auto" }}
        >
          <div className="md:w-[48%] w-full h-[500px] relative">
            <div className="absolute top-0 z-[3]">
              <img src="/src/assets/solarsun.jpg" alt="" className="w-[450px] h-[430px] rounded-[20px]"/>
            </div>
            <div className="absolute bottom-0 right-0 z-[4]">
              <img src="/src/assets/whiteSolar.jpg" alt="" className="w-[300px] h-[230px] bg-cover bg-center rounded-[20px] border-[8px] border-white"/>
            </div>
            <div className="absolute right-0 top-[20px] z-[1] bg-cover">
              <img src="/src/assets/about-right-shape.svg" alt="" className=""/>
            </div>
          </div>
          <div className="md:w-[52%]  w-full flex flex-col gap-[20px]">
            <div>
              <h1 className="text-[--darkGreyColor] text-[37px] font-[700]">
                About <span className="text-[--primaryColor]"> Greener </span>Pakistan
              </h1>
            </div>
            <div>
              <p className="text-[--darkGreyColor] font-[400] leading-[29px] text-[14px]">
                {" "}
                At Greener Pakistan, we're committed to driving the transition
                towards a cleaner, more sustainable energy future. With our
                innovative solar energy solutions, we empower individuals and
                businesses to harness the abundant power of the sun, reducing
                their carbon footprint and energy costs simultaneously
              </p>
            </div>
            <div>
              <p className="text-[--blackColor] font-[400] leading-[29px] text-[14px]">
                Greener is more than just solar products; it is also an
                investment in a brighter, greener future for generations to
                come.
              </p>
            </div>
            <div className="flex flex-wrap gap-[10px] items-center ">
              <div className="flex gap-[10px] items-center  w-[250px]">
                <img
                  src="/src/assets/leaf.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-contain"
                />
                <p className="text-[--blackColor] text-[14px]">Solar Inverter Setup</p>
              </div>
              <div className="flex gap-[10px] items-center  w-[250px]">
                <img
                  src="/src/assets/leaf.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-contain"
                />
                <p className="text-[--blackColor] text-[14px]">Battery Storage Solutions</p>
              </div>
              <div className="flex gap-[10px] items-center  w-[250px]">
                <img
                  src="/src/assets/leaf.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-contain"
                />
                <p className="text-[--blackColor] text-[14px]">Solar Material Financing</p>
              </div>
              <div className="flex gap-[10px] items-center  w-[250px]">
                <img
                  src="/src/assets/leaf.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-contain"
                />
                <p className="text-[--blackColor] text-[14px]">24 X 7 Call & Chat Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutGreener;
