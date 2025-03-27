import React from "react";

const AwardItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center mx-2 sm:mx-4 md:mx-6 w-[200px] sm:w-[250px] md:w-[300px] py-4">
      <div className="h-[80px] sm:h-[90px] md:h-[100px] w-full px-6 py-3 border-2 border-foreground/20 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:border-foreground/40 hover:bg-background/5 flex items-center justify-center overflow-visible">
        <h3 className="text-foreground/90 text-sm sm:text-base md:text-lg font-medium text-center line-clamp-2">
          {text}
        </h3>
      </div>
    </div>
  );
};

const AwardsSlider: React.FC = () => {
  const displayTexts = [
    "Academic Awards",
    "Graduation Honors",
    "Team History",
    "Olympians",
    "Professional Athletes",
    "Hall of Fame",
    "Digital Trophy Case",
    "Interactive Displays",
    "Digital Donor Wall",
    "Yearbooks",
  ];

  return (
    <div className="w-full py-4 overflow-hidden backdrop-blur-sm">
      <div className="w-full overflow-hidden">
        <div
          className="flex animate-marquee-slow whitespace-nowrap will-change-transform backface-visibility-hidden -webkit-backface-visibility-hidden transform-gpu group"
          style={{ touchAction: "pan-y pinch-zoom" }}
        >
          <style>{`
            .animate-marquee-slow {
              animation: marquee 30s linear infinite;
            }
            @keyframes marquee {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-33.333%);
              }
            }
            .group:hover .animate-marquee-slow {
              animation-play-state: paused;
            }
            @media (hover: none) {
              .group:hover .animate-marquee-slow {
                animation-play-state: running;
              }
            }
          `}</style>
          {/* First set */}
          {displayTexts.map((text, index) => (
            <AwardItem key={`text-1-${index}`} text={text} />
          ))}

          {/* Second set (duplicate) */}
          {displayTexts.map((text, index) => (
            <AwardItem key={`text-2-${index}`} text={text} />
          ))}

          {/* Third set (duplicate) */}
          {displayTexts.map((text, index) => (
            <AwardItem key={`text-3-${index}`} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsSlider;
