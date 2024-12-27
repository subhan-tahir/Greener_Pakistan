import React from "react";

const HouseWorker = () => {
  return (
    <>
      <div className="w-full">
        <div
          className="w-[85%]  flex md:flex-row-reverse  flex-col justify-center items-center gap-[50px] "
          style={{ margin: "10% auto" }}
        >
          <div className="md:w-[48%] w-full h-[500px] relative">
            <div className="absolute top-0 z-[3]">
              <img
                src="src/assets/house.webp"
                alt=""
                className="w-[450px] h-[430px] rounded-[20px]"
              />
            </div>
            <div className="absolute bottom-0 right-0 z-[4]">
              <img
                src="src/assets/worker.webp"
                alt=""
                className="w-[300px] h-[230px] bg-cover bg-center rounded-[20px] border-[8px] border-white"
              />
            </div>
            <div className="absolute right-0 top-[20px] z-[1] bg-cover">
              <img src="src/assets/about-right-shape.svg" alt="" className="" />
            </div>
          </div>
          <div className="md:w-[52%] w-full flex flex-col gap-[20px]">
            <div>
                <h2 className="text-[--primaryColor] text-[23px] font-[400]">Who are We?</h2>
            </div>
            <div>
              <h1 className="text-[--darkGreyColor] text-[37px] font-[700]">
                Elevate Your Choice for a{" "}
                <span className="text-[--primaryColor]"> Greener </span>
                Tomorrow
              </h1>
            </div>
            <div>
              <p className="text-[--darkGreyColor] font-[400] leading-[29px] text-[14px]">
                {" "}
                We are a private entity in Pakistan that specializes in
                providing greener solar solutions. Our goal is to offer
                eco-friendly solar energy solutions that are not only
                cost-effective but also durable, sustainable, and easy to
                manage.
              </p>
            </div>

            <div className="flex flex-wrap gap-[10px] items-center ">
              <div className="flex gap-[10px] items-center  w-[250px]">
                <img
                  src="src/assets/leaf.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-contain"
                />
                <p className="text-[--blackColor] text-[14px]">
                  After Sales Services
                </p>
              </div>
              <div className="flex gap-[10px] items-center  w-[250px]">
                <img
                  src="src/assets/leaf.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-contain"
                />
                <p className="text-[--blackColor] text-[14px]">Net Metering</p>
              </div>
              <div className="flex gap-[10px] items-center  w-[250px]">
                <img
                  src="src/assets/leaf.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-contain"
                />
                <p className="text-[--blackColor] text-[14px]">
                  Commercial Solar Solutions
                </p>
              </div>
              <div className="flex gap-[10px] items-center  w-[250px]">
                <img
                  src="src/assets/leaf.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-contain"
                />
                <p className="text-[--blackColor] text-[14px]">
                  Experienced Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseWorker;
