import React from "react";

const CustomizedCards = () => {

let cardsData = [
  {
    cardBgImg: '/src/assets/cardPic.jpg',
    cardlogo: '/src/assets/cardlogo1.webp',
    title: "Consultation",
    description: ` Our experienced solar experts will conduct a thorough assessment
              of your home and energy needs to determine the optimal solar
              solution for you.`,
  },
  {
    cardBgImg: "/src/assets/cardPic1.jpg",
    cardlogo: "/src/assets/cardLogo4.webp",
    title: "Custom Design",
    description: `We design each solar power system from scratch, taking into account
     factors such as roof orientation, shading, energy consumption patterns, and aesthetic preferences.`,
  },
  {
    cardBgImg: "/src/assets/cardPic2.jpg",
    cardlogo: "/src/assets/cardLogo2.webp",
    title: "Professional Installation",
    description: `Our team of certified technicians will install your solar panels with precision and care, ensuring 
    seamless integration with your home and maximum energy production. `,
  },
  {
    cardBgImg: "/src/assets/cardPic2.jpg",
    cardlogo: "/src/assets/cardLogo1.webp",
    title: "Ongoing Support",
    description: `We provide comprehensive support and maintenance services to keep your solar system running smoothly for years to come, 
    including monitoring performance, and conducting inspections.`,
  },
];

  return (
    <div className="flex  flex-col gap-[40px] bg-[--lightBackgroundColor] p-[8%]">
      <div className="text-[--darkGreyColor] text-[37px] font-[700] text-center">
        <h1>Our Customized Approach</h1>
      </div>
      <div className="text-[--darkGreyColor] text-center font-[400] leading-[29px] text-[16px]">
        <p>
          At Greener Pakistan, we take a personalized approach to residential
          solar solutions:
        </p>
      </div>{" "}
      <div className="flex flex-wrap gap-[20px] justify-center items-center">
        {cardsData.map((value, index) => (
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
            <div className="flex flex-col gap-[20px] justify-center items-center h-full p-2 z-[100] absolute top-0 left-0 group-hover:!text-[white]">
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
              <div>
                <p className=" font-medium leading-[29px] text-[14px] text-center">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomizedCards;
