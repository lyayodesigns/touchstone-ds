'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TrustedBySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // College client logos
  const collegeLogos = [
    { src: '/colleges clients/Penn.png', alt: 'University of Pennsylvania', name: 'Penn' },
    { src: '/colleges clients/UNH.png', alt: 'University of New Hampshire', name: 'UNH' },
    { src: '/colleges clients/brown.png', alt: 'Brown University', name: 'Brown' },
    { src: '/colleges clients/csub.png', alt: 'California State University Bakersfield', name: 'CSUB' },
  ];

  // High school client logos
  const highSchoolLogos = [
    { src: '/high school clients/SHP.png', alt: 'Sacred Heart Preparatory', name: 'SHP' },
    { src: '/high school clients/bishop.png', alt: 'Bishop High School', name: 'Bishop' },
    { src: '/high school clients/mooresville.png', alt: 'Mooresville High School', name: 'Mooresville' },
    { src: '/high school clients/whitefield.png', alt: 'Whitefield Academy', name: 'Whitefield' },
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
            Trusted by the Nation's Best
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto mb-6">
            With Emmy-nominated design and a hands-on approach, we help institutions tell their stories with impact found nowhere else.
          </p>
          <p className="text-base sm:text-lg text-foreground/90 max-w-3xl mx-auto font-medium">
            Proud to partner with leading universities and high schools, including:
          </p>
        </div>

        {/* Colleges Logo Grid */}
        <div className={`mb-12 sm:mb-16 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 items-center justify-items-center flex-1">
              {collegeLogos.map((logo, index) => (
                <Image
                  key={`college-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={110}
                  height={80}
                  className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 object-contain filter brightness-90 hover:brightness-100 transition-all duration-300 hover:scale-105"
                />
              ))}
            </div>
          </div>
        </div>

        {/* High Schools Logo Grid */}
        <div className={`mt-12 sm:mt-10 md:mt-0 transition-all duration-700 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 items-center justify-items-center flex-1">
              {highSchoolLogos.map((logo, index) => (
                <Image
                  key={`highschool-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={110}
                  height={80}
                  className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 object-contain filter brightness-90 hover:brightness-100 transition-all duration-300 hover:scale-105"
                />
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
