import React, { useState, useEffect,useRef } from "react";
import { motion, useInView } from "framer-motion";
import counterData from "./script";

const Counter = () => {
  const animateCounter = (finalValue, duration, setCount) => {
    let start = 0;
    const increment = finalValue / (duration / 16.67); // Approx. 60fps
    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        start = finalValue;
        clearInterval(counterInterval);
      }
      setCount(Math.round(start));
    }, 20); 
  };

  return (
    <div className="bg-[--secondaryColor] w-full">
      <div className="flex flex-wrap justify-center items-center gap-[30px] px-[6%] py-[5%]">
        {counterData.map((value, index) => {
          const [count, setCount] = useState(0);
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, threshold: 0.5 });

          useEffect(() => {
            if (isInView) {
              animateCounter(value.finalValue, 4000, setCount); // Trigger only when in view
            }
          }, [isInView, value.finalValue]);

          return (
            <motion.div
              key={index}
              className="flex gap-[20px] w-[270px]"
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="p-[15px] rounded-[8px] bg-[--primaryColor] justify-center items-center">
                {value.svg}
              </div>
              <div>
                <h1 className="text-white text-[34px] font-[700]">
                  {`${+count}+`}
                </h1>
                <p className="text-[--primaryColor] font-[400] text-[16px]">
                  {value.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;

