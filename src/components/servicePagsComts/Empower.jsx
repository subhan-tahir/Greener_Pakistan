import React from 'react'
import watermark from '../assets/about-right-shape.svg'
import leaf from '../assets/leaf.webp'
const Empower = ({ title, additionalTitle, des ,wiredPic1,wiredPic2 , reverse, list}) => {
    return (
        <>
            <div className="w-full">
                <div
                    className={`w-[85%]  flex ${reverse? 'md:flex-row-reverse': 'md:flex-row'}  flex-col justify-center items-center gap-[50px] `}
                    style={{ margin: "10% auto" }}
                >
                    <div className="md:w-[48%] w-full h-[500px] relative">
                        <div className="absolute top-0 z-[3]">
                            <img
                                src={wiredPic1}
                                alt=""
                                className="w-[450px] h-[430px] rounded-[20px] object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 z-[4]">
                            <img
                                src={wiredPic2}
                                alt=""
                                className="w-[300px] h-[230px] object-cover rounded-[20px] border-[8px] border-white"
                            />
                        </div>
                        <div className="absolute right-0 top-[20px] z-[1] bg-cover">
                            <img src={watermark} alt="" className="" />
                        </div>
                    </div>
                    <div className="md:w-[52%] w-full flex flex-col gap-[20px]">

                        <div>
                            <h1 className="text-[--darkGreyColor] text-[37px] font-[700]">
                                {/* Empower your space with our electrifying servicesa{" "}
                                <span className="text-[--primaryColor]"> - igniting efficiency and brilliance! </span> */}
                                {title}
                                <span className="text-[--primaryColor]">{additionalTitle}</span>
                            </h1>
                        </div>
                        <div>
                            <p className="text-[--darkGreyColor] font-[400] leading-[29px] text-[16px]">

                                {des}
                            </p>
                        </div>

                        <div className="flex flex-col gap-[10px] ">
                            {
                                list.map((value, index) =>{
                                    return(
                                    <div className="flex gap-[10px] items-center" key={index}>
                                        <img
                                            src={leaf}
                                            alt=""
                                            className="w-[25px] h-[25px] object-contain"
                                        />
                                        <p className="text-[--blackColor] text-[16px] font-[500]">
                                           {value}
                                        </p>
                                    </div>

                                    )
                                }


                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Empower
