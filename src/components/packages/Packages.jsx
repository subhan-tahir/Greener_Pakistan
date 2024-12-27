import React from "react";
import packagesData from "./script";



const Packages = () => {
  return (
    <div className="flex flex-col gap-[40px] bg-[--lightBackgroundColor] p-[8%]">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-[28px] text-[--primaryColor]">Our Packages</h2>
        <h1 className="text-[--darkGreyColor] text-[37px] font-[700] text-center">Go Smart Go Solar</h1>
      </div>

      <div className="flex flex-wrap gap-[20px] justify-center items-center">
        {packagesData.map((pkg, index) => (
          <div
            key={index}
            className="w-[350px] h-[566px] bg-white rounded-[25px] cursor-pointer flex flex-col gap-[25px] hover:scale-[1.04] transition-all ease-in-out duration-500"
            style={{ boxShadow: "0px 0px 27px #d6d5d5" }}
          >
            <div className="text-[--secondaryColor] font-[600] text-[28px] text-center pt-5">
              <h1>{pkg.heading}</h1>
            </div>
            <div className="bg-[--primaryColor] text-white font-[400] text-[27px] p-[10px] text-center">
              <h2>{pkg.quantity}</h2>
            </div>
            {/* Items Section */}
            <div className="flex flex-col gap-[5px] p-6">
              {pkg.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-[10px]">
                  <div>
                    <img src={item.icon} alt={item.detail} className="w-[25px]" />
                  </div>
                  <div className="text-[--darkGreyColor] text-[14px] font-[400]">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
