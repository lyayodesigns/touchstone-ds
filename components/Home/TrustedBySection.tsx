'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TrustedBySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(100);
  const sectionRef = useRef<HTMLElement>(null);

  // All client logos combined
  const allLogos = [
    { src: '/trusted-by/brown.avif', alt: 'Brown University', name: 'Brown' },
    { src: '/trusted-by/UNH.avif', alt: 'University of New Hampshire', name: 'UNH' },
    { src: '/trusted-by/csub.avif', alt: 'California State University Bakersfield', name: 'CSUB' },
    { src: '/trusted-by/Seton Hall Prep.avif', alt: 'Seton Hall Preparatory', name: 'Seton Hall Prep' },
    { src: '/trusted-by/BG.avif', alt: 'BG High School', name: 'BG' },
    { src: '/trusted-by/whitefield.avif', alt: 'Whitefield School', name: 'Whitefield' },
    { src: '/clients/mooresville.png', alt: 'Mooresville High School', name: 'Mooresville' },
    { src: '/trusted-by/Bremen.avif', alt: 'Bremen High School', name: 'Bremen' },
    { src: '/trusted-by/Laconia.avif', alt: 'Laconia High School', name: 'Laconia' },
    { src: '/trusted-by/New Bedford.avif', alt: 'New Bedford High School', name: 'New Bedford' },
    { src: '/trusted-by/Loudoun Valley.avif', alt: 'Loudoun Valley High School', name: 'Loudoun Valley' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 106) {
          return 100;
        }
        return prev + 1;
      });
    }, 2000); // Increment every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 w-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-blue-500/10 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10 -z-10"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/10 to-transparent rounded-br-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 sm:mb-6 text-gradient-purple-blue">
            Trusted by <span className="inline-block min-w-[3ch] text-center transition-all duration-300">{counter}</span> of the Nation's Best
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto mb-6">
            With Emmy-nominated design and a hands-on approach, we help institutions tell their stories with impact found nowhere else.
          </p>
          <p className="text-base sm:text-lg text-foreground/90 max-w-3xl mx-auto font-medium">
            Proud to partner with leading universities and high schools, including:
          </p>
        </div>

        {/* Logo Carousel */}
        <div className={`relative transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="overflow-hidden relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container */}
            <div className="flex animate-scroll-logos">
              {/* First set of logos */}
              {allLogos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex-shrink-0 px-8 py-4"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={110}
                    height={80}
                    className="w-24 h-20 md:w-28 md:h-24 object-contain filter brightness-90 hover:brightness-100 transition-all duration-300 hover:scale-105"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {allLogos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex-shrink-0 px-8 py-4"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={110}
                    height={80}
                    className="w-24 h-20 md:w-28 md:h-24 object-contain filter brightness-90 hover:brightness-100 transition-all duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing text */}
        <div className={`text-center mt-8 sm:mt-10 md:mt-12 transition-all duration-700 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-base sm:text-lg text-foreground/80 font-medium">
            …and many more nationwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
