import React from 'react'
import { customerData } from './script'

const Customer = () => {
    return (
        <>
            <div className='flex  flex-col gap-[40px]  p-[8%] bg-[--lightBackgroundColor]'>

                <div className="text-[--darkGreyColor] text-[37px] font-[700] text-center">
                    <h1>Providing Solar Energy Solutions</h1>
                </div>

                <div className='flex flex-col gap-[20px] '>
                    {
                        customerData.map((value,index)=>
                    <div className=' border bg-white text-[--darkGreyColor] font-[400] text-[17px] p-[20px] rounded-lg transition-all ease-in-out duration-500 cursor-pointer hover:scale-[1.05] hover:rotate-[1deg] shadow-lg'>
                        <p>{value}</p>
                    </div>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Customer
