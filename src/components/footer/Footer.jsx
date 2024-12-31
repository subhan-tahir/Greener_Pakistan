import React from "react";
import row1 from "./script";


const Footer = () => {
  return (
    <>
      <div className="bg-[--secondaryColor]">
        <div className="py-[2%] px-[3%] flex flex-col gap-[30px]">
          <div className="flex flex-wrap gap-[30px] justify-center items-center border-b border-black py-[30px]">
            {
              row1.map((value,index)=>{
                return(
                   <div className="flex items-center gap-[20px] flex-1" key={index}>
              <div className="bg-white p-[20px] rounded-[20px] hover:scale-[1.05] transition-all ease-in-out duration-300 cursor-pointer">
                {value.svg}
              </div>
              <div className="text-white text-[22px] font-[600]">
                <p>{value.title}</p>
                <p className="font-[400] text-[18px]">{value.email}</p>
              </div>
            </div>
                )
              })
            }
         </div>

         
          <div className="flex flex-wrap gap-[20px] px-[20px] py-[30px] ">
            <div className="flex flex-col gap-[25px]  w-[300px]">
              <img
                src="src/assets/logo1.png"
                alt=""
                className="w-[180px] filter"
              />
              <div className="text-[17px] text-[white]">
                Greener is more than just a solar company, we're your partners
                in embracing sustainable energy solutions.
              </div>
            </div>
            <div className="flex flex-col gap-[25px]  w-[270px]">
              <div>
                <h1 className="text-white text-[20px] font-[700]">
                  Quick Links
                </h1>
              </div>
              <div>
                <ul className="list-inside list-disc">
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Home
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    About Us
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Services
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Energy Load Calculator
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Products
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Contact Us
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-[25px]  w-[320px]">
              <div>
                <h1 className="text-white text-[20px] font-[700]">Services</h1>
              </div>
              <div>
                <ul className="list-inside list-disc">
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Residential Solar System
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Commercial Solar System
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Industrial Solar System
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Energy Load Calculator
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Solar Maintainance & Support
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Underground Cabling Maintainance
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-[25px] flex-1 w-[300px]">
              <div>
                <h1 className="text-white text-[20px] font-[700]">
                  Useful Links
                </h1>
              </div>
              <div>
                <ul className="list-inside list-disc">
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Privacy Policy
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Term & Conditions
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Warranty
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Support
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Products
                  </li>
                  <li className="text-white text-[17px] mt-2 cursor-pointer">
                    Damage Policy
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-[20px] text-center text-[20px]">
            <p>Copyright © 2024 Greener Pakistan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
