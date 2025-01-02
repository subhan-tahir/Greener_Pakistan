import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import ceoManager from '../assets/ceoManager.webp'
const GeoMessage = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.5 }); // Trigger animation once
  const [counts, setCounts] = useState([0, 0, 0]); // State for counters

  const clientDetails = [
    { clientRecord: 140, title: "Clients" },
    { clientRecord: 700, title: "Successive Prize" },
    { clientRecord: 800, title: "Conservation of Energy" },
  ];

  const animateCounter = (finalValue, duration, index) => {
    let start = 0;
    const increment = finalValue / (duration / 16.67); // Approx. 60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        start = finalValue;
        clearInterval(interval);
      }
      setCounts((prev) => {
        const newCounts = [...prev];
        newCounts[index] = Math.round(start);
        return newCounts;
      });
    }, 16.67); // 60fps
  };

  useEffect(() => {
    if (isInView) {
      clientDetails.forEach((detail, index) => {
        animateCounter(detail.clientRecord, 2000, index); // Trigger counters when in view
      });
    }
  }, [isInView]);

  return (
    <div className="w-full">
      <style>
        {`
        @media screen and (max-width: 1200px) {
          .hide {
            display: none;
          }
        }
        `}
      </style>

      <div className="flex md:flex-row flex-col-reverse gap-10 justify-center py-20 px-10">
        {/* CEO Message Section */}
        <div className="flex flex-col gap-5 md:w-1/2 w-full">
          <h1 className="text-gray-800 text-3xl font-bold">CEO's Message</h1>
          <p className="text-gray-700 text-sm leading-6">
            As the CEO of Greener, it fills me with immense pride to play a part
            in fostering a sustainable environment and offering eco-friendly
            solutions to our community.
          </p>
          <p className="text-gray-700 text-sm leading-6">
            Our mission extends far beyond mere sales – we're committed to
            raising awareness about the importance of innovation and reducing
            carbon footprints. Our customers aren't just clients; they're valued
            members of our extended family, and their satisfaction is our top
            priority.
          </p>
          <p className="text-gray-700 text-sm leading-6">
            Together, we have the power to make a real difference. Let's embrace
            sustainability and go Greener, together.
          </p>
        </div>

        {/* Image Section */}
        <div className="sm:w-1/3 w-full">
          <img src={ceoManager} alt="CEO" className="w-full" />
        </div>

        {/* Animated Counters Section */}
        <div
          className="flex flex-col gap-12 justify-center w-1/3 hide"
          ref={containerRef}
        >
          {clientDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[--secondaryColor] text-4xl font-bold">
                {counts[index]}+{" "}
                <span className="text-[--primaryColor]">{detail.title}</span>
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeoMessage;
