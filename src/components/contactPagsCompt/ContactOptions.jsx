import React from "react";
import contactCardOptionsData from "./contact";
const ContactOptions = () => {
  return (
    <>
      <div className="flex  flex-col gap-[40px]  p-[8%]">
        <div className="text-[--darkGreyColor] text-[37px] font-[700] text-center">
          <h1>Happy to Answer All Your Questions</h1>
        </div>
        {/*cards */}
        <div className="flex flex-wrap gap-[20px] justify-center items-center">
          {/*card */}
          {
            contactCardOptionsData.map((value,index)=>
             <div className="w-[300px] h-[375px] relative overflow-hidden rounded-[30px] cursor-pointer group"
            key={index}
             >
            {/*cardBgImg */}
            <div
              className="bg-cover bg-no-repeat w-[300px] h-[375px]   rounded-[30px] bg-center
             group-hover:scale-[1.5] transition-all ease-in-out duration-500 absolute top-0
              "
              style={{ backgroundImage: `url(${value.bgImg})` }}
            ></div>
            {/*Card content */}
            <div className="flex flex-col justify-between absolute top-0  h-full p-[20px] w-full">
              <div className="w-[70px] h-[70px] bg-[--primaryColor] rounded-[15px] flex justify-center items-center ml-auto">
               {value.svg}
              </div>
              <div className="flex flex-col gap-[10px] bg-white rounded-[30px] p-[20px] w-full h-[180px]">
                <div><h1 className="text-[--darkGreyColor] text-[25px] font-bold">{value.head}</h1></div>
                <div><p className="">
                  
                    
                      <span className={`flex gap-2 ${value.head === "Follow Us::" ? "text-[--primaryColor] text-2xl" : ""}`}>{value.para}</span>
                    
                    
                  
                  
                  </p></div>
              </div>
            </div>
            
          </div>
            
            )
          }
         
          {/*card end*/}
          
        </div>
        {/*cards end */}
      </div>
    </>
  );
};

export default ContactOptions;
