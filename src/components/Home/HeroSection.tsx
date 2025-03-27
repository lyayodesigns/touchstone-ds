import React, { useEffect, useState } from "react";
import TouchIcon from "./TouchIcon";
import AwardsSlider from "./AwardsSlider";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  );

  useEffect(() => {
    setIsVisible(true);

    const handleResize = () => {
      setOrientation(
        window.innerWidth > window.innerHeight ? "landscape" : "portrait"
      );
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <section 
      className="relative min-h-[80svh] w-full flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-32"
      style={{
        backgroundImage: "url('/hero-bg-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Border lines - only in upper portion */}
      <div className="absolute top-16 left-8 sm:left-12 w-[1px] h-32 sm:h-48 bg-gradient-to-b from-transparent via-foreground/40 to-transparent"></div>
      <div className="absolute top-24 sm:top-28 left-0 h-[1px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-foreground/40 to-transparent"></div>

      <div className="absolute top-16 right-8 sm:right-12 w-[1px] h-32 sm:h-48 bg-gradient-to-b from-transparent via-foreground/40 to-transparent"></div>
      <div className="absolute top-24 sm:top-28 right-0 h-[1px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-foreground/40 to-transparent"></div>

      {/* Plus symbols as decorative elements - responsive positioning */}
      <div className="absolute top-[10%] left-[10%] md:top-40 md:left-40 text-foreground/10 text-2xl sm:text-3xl">
        +
      </div>
      <div className="absolute bottom-[10%] right-[10%] md:bottom-40 md:right-40 text-foreground/10 text-2xl sm:text-3xl">
        +
      </div>
      <div className="absolute top-1/4 right-1/4 text-foreground/10 text-2xl sm:text-3xl">
        +
      </div>

      {/* Main content */}
      <div
        className={`container px-3 sm:px-6 md:px-8 z-10 flex flex-col items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mt-6 sm:mt-8 md:mt-12">
          <TouchIcon />
        </div>

        <div
          className={`max-w-4xl mx-auto text-center mt-4 sm:mt-6 space-y-4 sm:space-y-6 md:space-y-8 ${
            orientation === "landscape" ? "landscape-mode" : ""
          }`}
        >
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-foreground transition-all duration-700 delay-[100ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Welcome to Touchstone Digital Solutions
          </h1>
          <h2
            className={`text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-tighter text-foreground transition-all duration-700 delay-[300ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Dynamic. Interactive. Unforgettable.
          </h2>

          <p
            className={`text-sm sm:text-base md:text-lg text-foreground/70 max-w-3xl mx-auto transition-all duration-700 delay-[500ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            The premier touchscreen recognition software— the all-in-one solution built to elevate your legacy, captivate your audience, and seamlessly integrate with your brand. Designed for those who demand more than just a display, we transform achievements into immersive, unforgettable experiences.
          </p>

          <div 
            className={`flex flex-col items-center sm:items-end sm:flex-row sm:justify-end gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 w-full px-4 sm:pr-4 md:pr-8 transition-all duration-700 delay-[600ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-background/30 backdrop-blur-sm border border-foreground/10 rounded-xl p-5 w-full sm:w-[30%] flex items-start space-x-3 
              hover:bg-gradient-to-br hover:from-primary/20 hover:to-secondary/10 
              hover:border-primary/50 hover:shadow-glow-sm hover:scale-[1.02] 
              hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 
              transition-all duration-300 ease-out cursor-pointer">
              <span className="text-primary text-xl group-hover:text-primary/80">✅</span>
              <div>
                <h3 className="text-foreground font-medium text-sm sm:text-base">Fully Customizable</h3>
                <p className="text-foreground/60 text-xs sm:text-sm mt-1">Tailored to reflect your school's identity.</p>
              </div>
            </div>
            
            <div className="bg-background/30 backdrop-blur-sm border border-foreground/10 rounded-xl p-5 w-full sm:w-[30%] flex items-start space-x-3 
              hover:bg-gradient-to-br hover:from-primary/20 hover:to-secondary/10 
              hover:border-primary/50 hover:shadow-glow-sm hover:scale-[1.02] 
              hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 
              transition-all duration-300 ease-out cursor-pointer">
              <span className="text-primary text-xl group-hover:text-primary/80">💰</span>
              <div>
                <h3 className="text-foreground font-medium text-sm sm:text-base">No Cost to Build or Maintain</h3>
                <p className="text-foreground/60 text-xs sm:text-sm mt-1">A stress-free solution.</p>
              </div>
            </div>
            
            <div className="bg-background/30 backdrop-blur-sm border border-foreground/10 rounded-xl p-5 w-full sm:w-[30%] flex items-start space-x-3 
              hover:bg-gradient-to-br hover:from-primary/20 hover:to-secondary/10 
              hover:border-primary/50 hover:shadow-glow-sm hover:scale-[1.02] 
              hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 
              transition-all duration-300 ease-out cursor-pointer">
              <span className="text-primary text-xl group-hover:text-primary/80">🌟</span>
              <div>
                <h3 className="text-foreground font-medium text-sm sm:text-base">Stunning Visuals</h3>
                <p className="text-foreground/60 text-xs sm:text-sm mt-1">Emmy-nominated UI/UX graphic design.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Awards Slider - responsive positioning */}
      <div
        className={`w-full mt-6 sm:mt-8 md:mt-16 transition-all duration-700 delay-[900ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <AwardsSlider />
      </div>
    </section>
  );
};

export default HeroSection;
