import React from "react";
import Link from "next/link";

// SSR/SSG compatible: No useEffect, useRef, or browser-only APIs. No client directive needed.

const TouchIcon: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-4">
      <Link 
        href="/contact" 
        className="flex flex-col items-center cursor-pointer transition-transform duration-300 ease-out active:scale-95"
        aria-label="Contact Us"
      >
        <div
          className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full -mb-6"
          style={{
            background:
              "radial-gradient(circle, rgba(108, 166, 254, 0.15) 0%, rgba(108, 166, 254, 0) 70%)",
            boxShadow: "0 0 40px 20px rgba(108, 166, 254, 0.2) sm:0 0 60px 30px rgba(108, 166, 254, 0.2)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main circle container */}
            <div className="relative w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] flex items-center justify-center">
              {/* Background circle */}
              <div className="absolute w-full h-full rounded-full bg-[#6CA6FE]"></div>
              {/* Border */}
              <div className="absolute w-full h-full rounded-full border border-[#6CA6FE]"></div>
              {/* Touch icon image */}
              <div className="relative w-[60%] h-[60%] flex items-center justify-center">
                <div className="relative w-[60%] h-[60%] flex items-center justify-center">
                  <img
                    src="/icons8-touch-100.png"
                    alt="Touch Icon"
                    className="w-full h-full object-contain"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                    }}
                  />
                </div>
              </div>
              {/* Ripple effects - smaller size */}
              <div className="absolute w-[130%] h-[130%] rounded-full border border-[#6CA6FE]/50 animate-ripple"></div>
              <div className="absolute w-[130%] h-[130%] rounded-full border border-[#6CA6FE]/30 animate-ripple-delayed"></div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none w-full">
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-full px-5 py-2 text-base sm:text-lg transition-all shadow-sm text-center mx-auto">
            Touch to Start Designing
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TouchIcon;
