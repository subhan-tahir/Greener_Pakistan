import React from 'react'
import { ourWorkData } from './script'

const OurWork = () => {
    return (
        <>
            <div className='flex  flex-col gap-[40px]  p-[8%] '>
                <div className="text-[--darkGreyColor] text-[37px] font-[700] text-center">
                    <h1>Our Work Process</h1>
                </div>
                <div className='flex flex-wrap gap-[25px] justify-center'>
                    {
                        ourWorkData.map((value,index)=>
                    <div className='w-[380px] flex flex-col gap-[20px] justify-center items-center' key={index}>

                        <div className='w-[90px] h-[90px] rounded-[20px] bg-[--primaryColor] p-4 flex justify-center relative'>
                            <img src={value.img} alt="" />
                            <div className='absolute top-[-18px] right-[-15px] text-[17px] font-[500] bg-[--primaryColor] border-[3px] border-white py-[5px] px-[14px]  rounded-[40px] '>
                                {value.count}
                            </div>
                        </div>
                        <div className='text-[25px] font-[700] text-[--darkGreyColor]'><h1>{value.title}</h1></div>
                        <div className='text-[16px] leading-[30px] text-center'>
                            <p>{value.des}</p>
                        </div>

                    </div>
                        
                        )
                    }
                 
                </div>
            </div>

        </>
    )
}

export default OurWork
