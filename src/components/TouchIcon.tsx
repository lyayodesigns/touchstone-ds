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
    <div className="relative w-full flex items-center justify-center pointer-events-none pt-12 pb-20 my-4">
      <div
        ref={iconRef}
        className="absolute w-[200px] h-[200px] rounded-full transition-transform duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 174, 239, 0.15) 0%, rgba(0, 174, 239, 0) 70%)",
          boxShadow: "0 0 60px 30px rgba(0, 174, 239, 0.2)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Main circle container */}
          <div className="relative w-[90px] h-[90px] flex items-center justify-center">
            {/* Dark circle background */}
            <div className="absolute w-full h-full rounded-full bg-black"></div>

            {/* Cyan border */}
            <div className="absolute w-full h-full rounded-full border border-cyan-400"></div>

            {/* Touch icon image */}
            <div className="relative w-[60%] h-[60%] flex items-center justify-center">
              <div className="relative w-[60%] h-[60%] flex items-center justify-center">
                <img
                  src="/icons8-touch-100.png"
                  alt="Touch Icon"
                  className="w-full h-full object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(79%) sepia(71%) saturate(4948%) hue-rotate(155deg) brightness(99%) contrast(101%)",
                  }}
                />
              </div>
            </div>

            {/* Ripple effects - smaller size */}
            <div className="absolute w-[130%] h-[130%] rounded-full border border-cyan-400/50 animate-ripple"></div>
            <div className="absolute w-[130%] h-[130%] rounded-full border border-cyan-400/30 animate-ripple-delayed"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouchIcon;
