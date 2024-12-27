import React from "react";

const AutoSlider = () => {
  return (
    <>
      {/* Keyframes for slide-left animation */}
      <style>{`
        @keyframes slide-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        /* Pause the animation on hover */
        .group:hover .slider-content {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full overflow-hidden">
        <div className="py-6 group">
          <div
            className="text-[30px] font-[700] text-[--primaryColor] whitespace-nowrap flex slider-content"
            style={{
              animation: "slide-left 20s linear infinite",
            }}
          >
            {/* Duplicated text for seamless looping */}
            <span className="flex-shrink-0">
              HEAL THE WORLD || EFFICIENCY &amp; POWER || GENERATE YOUR OWN POWER || REAP THE RETURNS || GREENER PAKISTAN ||
            </span>
            <span className="flex-shrink-0 ml-8">
              HEAL THE WORLD || EFFICIENCY &amp; POWER || GENERATE YOUR OWN POWER || REAP THE RETURNS || GREENER PAKISTAN ||
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoSlider;
