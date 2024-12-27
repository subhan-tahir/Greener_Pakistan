import React from 'react'
import { aboutcardsData } from './script'


const AboutCards = () => {
  return (
    <>
     <div className="flex  flex-col gap-[40px] bg-[--lightBackgroundColor] p-[8%]">
      <div className="text-[--darkGreyColor] text-[37px] font-[700] text-center">
        <h1>Providing Solar Energy Solutions</h1>
      </div>
      <div className="flex flex-wrap gap-[20px] justify-center items-center">
       {aboutcardsData.map((value, index) => (
          <div
            className="w-[320px] h-[430px] bg-cover bg-center rounded-[25px] cursor-pointer relative overflow-hidden
         transition-transform duration-500 ease-in-out group"
            style={{ backgroundImage: `url(${value.cardBgImg})` }}
            key={index}
          >
            {/* White background that moves away on hover */}
            <div
              className="bg-white w-full h-full  rounded-[25px] border-gray-950 absolute 
       top-0 right-0 z-[70] transition-transform duration-500 ease-in-out transform group-hover:translate-x-full group-hover:-translate-y-full"
            ></div>

            {/* Content */}
            <div className="w-full flex flex-col gap-[20px] justify-center items-center h-full p-2 z-[100] absolute top-0 left-0 group-hover:!text-[white]">
              <div>
                <img
                  src={value.cardlogo}
                  alt="Consultation Logo"
                  className="w-[70px] h-[70px] object-contain"
                />
              </div>
              <div>
                <h1 className=" font-bold text-[20px]">{value.title}</h1>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default AboutCards