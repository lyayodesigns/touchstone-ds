"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import TouchIcon from "./TouchIcon";
import AwardsSlider from "./AwardsSlider";
import { CheckCircle, DollarSign, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";

const titleWords = ["Touchscreen", "Touchstone"];
const carouselImages = [
  { src: "/hero-animation/home-animation-1.jpg", alt: "Touchstone Home Animation 1" },
  { src: "/hero-animation/home-animation-5.jpg", alt: "Touchstone Home Animation 2" },
  { src: "/hero-animation/home-animation-3.jpg", alt: "Touchstone Home Animation 3" },
  { src: "/hero-animation/home-animation-4.jpg", alt: "Touchstone Home Animation 4" },
  { src: "/hero-animation/home-animation-2.jpg", alt: "Touchstone Home Animation 5" },
  { src: "/hero-animation/home-animation-6.jpg", alt: "Touchstone Home Animation 6" },
];

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");
  const monitorFrameRef = useRef<HTMLDivElement>(null);

  // Title animation state
  const [currentTitleWordIndex, setCurrentTitleWordIndex] = useState(0);
  const [isTitleAnimating, setIsTitleAnimating] = useState(true);
  const titleAnimationTimeout = useRef<NodeJS.Timeout | null>(null);

  // Carousel state and data (infinite loop with clones)
  const extendedImages = [
    carouselImages[carouselImages.length - 1],
    ...carouselImages,
    carouselImages[0]
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Start at first real image
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  }, [isTransitioning]);

  const prevImage = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  }, [isTransitioning]);

  useEffect(() => {
    setIsVisible(true);
    setOrientation(window.innerWidth > window.innerHeight ? "landscape" : "portrait");
    const handleResize = () => {
      setOrientation(window.innerWidth > window.innerHeight ? "landscape" : "portrait");
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Title word animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTitleAnimating(false);
      setTimeout(() => {
        setCurrentTitleWordIndex((prev) => (prev + 1) % titleWords.length);
        setIsTitleAnimating(true);
      }, 100);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-advance carousel (infinite loop)
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section 
      className="relative min-h-[80svh] w-full overflow-hidden pt-28 sm:pt-32 md:pt-36 lg:pt-40"
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

      {/* Main content - Two column grid */}
      <div className="container mx-auto z-10 pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6 md:px-8">
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Column - Text Content */}
          <div className={`flex flex-col space-y-6 md:space-y-8 ${
            orientation === "landscape" ? "landscape-mode" : ""
          }`}>
            <div className="flex flex-col justify-center h-full w-full">
              <h1
                className={`text-[2rem] md:text-[2.5rem] font-bold transition-all duration-700 delay-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center md:text-left">
                  <span
                    className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 inline-block transition-all duration-300 ${
                      isTitleAnimating
                        ? "opacity-100 transform-none"
                        : "opacity-0 -translate-y-2"
                    }`}
                  >
                    {titleWords[currentTitleWordIndex]}
                  </span>
                  <span className="ml-2 inline-block">Display Software</span>
                </div>
              </h1>
            </div>

            <p
              className={`text-sm sm:text-base md:text-lg text-foreground/70 text-center md:text-left transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Perfecting interactive hall of fame software—the all-in-one digital hall of fame solution built to elevate your legacy, captivate your audience, and seamlessly integrate with your brand. Designed for those who demand more than just a display, we transform achievements into immersive, unforgettable experiences.
            </p>

            <div 
              className={`flex flex-col space-y-6 md:space-y-8 transition-all duration-700 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Feature cards in a row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-foreground/5 rounded-xl p-5 
                  hover:from-blue-100/80 hover:to-purple-100/80 
                  hover:border-primary/20 hover:shadow-lg hover:scale-[1.02] 
                  hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 
                  transition-all duration-300 ease-out cursor-pointer md:text-center">
                  <div className="flex flex-row md:flex-col items-start md:items-center md:justify-center mb-3">
                    <div className="relative inline-flex mr-4 md:mr-0 mb-0 md:mb-3">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-sm"></div>
                      <div className="relative bg-gradient-to-br from-purple-500 to-blue-600 p-2 rounded-full text-white z-10 transition-all duration-300">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-1 md:flex-none text-left md:text-center">
                      <h3 className="text-foreground font-semibold text-base sm:text-lg">Fully Customizable</h3>
                      <p className="text-foreground/60 text-xs sm:text-sm mt-1 md:mt-2">Tailored to reflect your school's identity.</p>
                    </div>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-foreground/5 rounded-xl p-5 
                  hover:from-blue-100/80 hover:to-purple-100/80 
                  hover:border-primary/20 hover:shadow-lg hover:scale-[1.02] 
                  hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 
                  transition-all duration-300 ease-out cursor-pointer md:text-center">
                  <div className="flex flex-row md:flex-col items-start md:items-center md:justify-center mb-3">
                    <div className="relative inline-flex mr-4 md:mr-0 mb-0 md:mb-3">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-sm"></div>
                      <div className="relative bg-gradient-to-br from-purple-500 to-blue-600 p-2 rounded-full text-white z-10 transition-all duration-300">
                        <DollarSign className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-1 md:flex-none text-left md:text-center">
                      <h3 className="text-foreground font-semibold text-base sm:text-lg">No Cost to Build or Maintain</h3>
                      <p className="text-foreground/60 text-xs sm:text-sm mt-1 md:mt-2">A stress-free solution.</p>
                    </div>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-foreground/5 rounded-xl p-5 
                  hover:from-blue-100/80 hover:to-purple-100/80 
                  hover:border-primary/20 hover:shadow-lg hover:scale-[1.02] 
                  hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 
                  transition-all duration-300 ease-out cursor-pointer md:text-center">
                  <div className="flex flex-row md:flex-col items-start md:items-center md:justify-center mb-3">
                    <div className="relative inline-flex mr-4 md:mr-0 mb-0 md:mb-3">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-sm"></div>
                      <div className="relative bg-gradient-to-br from-purple-500 to-blue-600 p-2 rounded-full text-white z-10 transition-all duration-300">
                        <Sparkles className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-1 md:flex-none text-left md:text-center">
                      <h3 className="text-foreground font-semibold text-base sm:text-lg">Stunning Visuals</h3>
                      <p className="text-foreground/60 text-xs sm:text-sm mt-1 md:mt-2">Emmy-nominated UI/UX graphic design.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image/Display */}
          <div 
            className={`relative flex justify-center items-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div 
              className="relative w-full max-w-xl lg:max-w-2xl mx-auto transform scale-110 md:scale-125 lg:scale-110" 
              style={{ perspective: '1000px' }}
              onMouseEnter={() => {
                if (monitorFrameRef.current) {
                  monitorFrameRef.current.style.transform = 'rotateY(0deg)';
                }
              }}
              onMouseLeave={() => {
                if (monitorFrameRef.current) {
                  monitorFrameRef.current.style.transform = 'rotateY(-12deg)';
                }
              }}
            >
              {/* Decorative glow effect */}
              <div className="absolute -inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-xl blur-xl opacity-70 pointer-events-none"></div>
              
              {/* Monitor frame with 3D rotation */}
              <div 
                ref={monitorFrameRef}
                className="relative pointer-events-none touch-none" 
                style={{ 
                  transform: 'rotateY(-12deg)',
                  transition: 'transform 700ms ease-out'
                }}
              >
                {/* Monitor bezel */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 pt-3 rounded-xl border border-gray-700 shadow-2xl overflow-hidden pointer-events-none touch-none">
                  {/* Screen content with carousel */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-md overflow-hidden pointer-events-none touch-none">
                    {/* Image Carousel */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden select-none pointer-events-none touch-none">
                      <div
                        className={`flex h-full transition-transform ${isTransitioning ? 'duration-1000 ease-in-out' : 'duration-0'}`}
                        style={{
                          width: `${extendedImages.length * 100}%`,
                          transform: `translateX(-${currentImageIndex * (100 / extendedImages.length)}%)`
                        }}
                        onTransitionEnd={() => {
                          // If we moved to the clone, jump instantly to the real one
                          if (currentImageIndex === 0) {
                            setIsTransitioning(false);
                            setCurrentImageIndex(extendedImages.length - 2); // last real image
                          } else if (currentImageIndex === extendedImages.length - 1) {
                            setIsTransitioning(false);
                            setCurrentImageIndex(1); // first real image
                          } else {
                            setIsTransitioning(false);
                          }
                        }}
                      >
                        {extendedImages.map((image, index) => (
                          <div
                            key={index}
                            className="flex-shrink-0 w-full h-full pointer-events-none touch-none"
                            style={{ width: `${100 / extendedImages.length}%` }}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover rounded-md select-none pointer-events-none touch-none"
                            />
                          </div>
                        ))}
                      </div>
                      {/* Carousel navigation arrows */}
                      <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 rounded-full p-2 shadow transition-all"
                        style={{ pointerEvents: 'auto' }}
                        onClick={() => prevImage()}
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-6 w-6 text-gray-700" />
                      </button>
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 rounded-full p-2 shadow transition-all"
                        style={{ pointerEvents: 'auto' }}
                        onClick={() => nextImage()}
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-6 w-6 text-gray-700" />
                      </button>
                    </div>
                    
                    {/* Screen reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 mix-blend-overlay pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 mix-blend-overlay pointer-events-none"></div>
                  </div>
                  
                  {/* Monitor stand */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-md pointer-events-none"></div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-gradient-to-b from-gray-800 to-gray-900 rounded-md pointer-events-none"></div>
                </div>
                
                {/* Subtle shadow under the monitor */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-xl rounded-full pointer-events-none"></div>
                
                {/* Reflection effect on the side */}
                <div className="absolute top-0 bottom-0 left-0 w-[10%] bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* TouchIcon in a separate row */}
      <div className="flex justify-center items-center w-full">
        <TouchIcon />
      </div>

      {/* Awards Slider - responsive positioning */}
      <div
        className={`w-full mt-8 sm:mt-8 md:mt-2 transition-all duration-700 delay-900 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <AwardsSlider />
      </div>
    </section>
  );
};

export default HeroSection;
