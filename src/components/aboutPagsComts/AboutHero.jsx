import React from 'react'
import heroBg from '/src/assets/solar.png';
const AboutHero = ({title}) => {
  return (
    <>
     <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className="bg-cover w-full h-[60vh] z-[-4] bg-center" 
      >
        <div className=" flex justify-center items-center h-full  w-[100%]">
          <div className='mt-28'>
           <h1 className="text-[60px] text-center font-[700] text-[--whiteColor] shadow" style={{textShadow:'5px 5px 15px black'}}>{title}</h1>
          </div>

        </div>
      </div>
    
    
    </>
  )
}

export default AboutHero