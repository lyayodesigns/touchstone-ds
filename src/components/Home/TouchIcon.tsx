import React, { useEffect, useRef } from "react";

const TouchIcon: React.FC = () => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icon = iconRef.current;
    if (!icon) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = icon.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from mouse to center
      const distX = (clientX - centerX) * 0.03;
      const distY = (clientY - centerY) * 0.03;

      // Limit movement
      const maxDist = 10;
      const moveX = Math.max(-maxDist, Math.min(maxDist, distX));
      const moveY = Math.max(-maxDist, Math.min(maxDist, distY));

      // Apply subtle movement to the icon
      icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center pointer-events-none pt-12 pb-16 sm:pt-12 sm:pb-20 my-6 sm:my-4">
      <div
        ref={iconRef}
        className="absolute w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full transition-transform duration-300 ease-out"
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
    </div>
  );
};

export default TouchIcon;
