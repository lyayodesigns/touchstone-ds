"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const DigitalHallOfFameSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    // For true scroll-in-view animation, use IntersectionObserver here instead.
  }, []);

  return (
    <section ref={sectionRef} className="pt-12 pb-1 sm:py-8 md:py-12 lg:py-16 w-full bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-10 mx-auto">
        <div className={`flex flex-col items-center text-center space-y-6 sm:space-y-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Heading */}
          <h2 className="text-lg sm:text-3xl md:text-4xl font-bold leading-tight">
            <span className="text-gradient-purple-blue">
              Elevate Your School's Legacy
            </span>{" "}
            with a Digital Hall of Fame
          </h2>

          {/* Image */}
          <div className={`relative w-full max-w-xl lg:max-w-2xl transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <img
              src="/home/carousel/TDS Cover - 1.avif"
              alt="Digital Hall of Fame Display"
              loading="lazy"
              className="w-full rounded-lg sm:rounded-xl object-contain"
            />
          </div>

          {/* Caption */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <p className="text-lg font-medium text-foreground">
              Your school's story deserves more than a plaque—it deserves a spotlight.
            </p>
          </div>

          {/* Horizontal Divider */}
          <div className={`w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent mb-8 transition-all duration-700 delay-350 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}></div>

          {/* Two Column Section */}
          <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl mt-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* Digital Yearbooks Column */}
            <div className="space-y-4 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient-purple-blue">
                <Link href="/digital-yearbooks" className="hover:underline underline-offset-4">
                  Digital Yearbooks
                </Link>
              </h3>
              <p className="text-lg font-medium text-foreground/90">
                Your history on demand, right at your fingertips
              </p>
              <img
                src="/home/school's legacy/Digital Yearbooks.avif"
                alt="Digital Yearbooks"
                loading="lazy"
                className="w-full rounded-lg sm:rounded-xl object-cover"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent"></div>

            {/* Team Rosters Column */}
            <div className="space-y-4 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient-purple-blue">
                Team Rosters
              </h3>
              <p className="text-lg font-medium text-foreground/90">
                Whether it is current or historic, display it with pride
              </p>
              <img
                src="/home/school's legacy/Football Roster.avif"
                alt="Team Rosters"
                loading="lazy"
                className="w-full rounded-lg sm:rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className={`w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent mb-8 transition-all duration-700 delay-350 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}></div>

          {/* Second Two Column Section */}
          <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl mt-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* Digital Record Boards Column */}
            <div className="space-y-4 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient-purple-blue">
                <Link href="/digital-record-boards" className="hover:underline underline-offset-4">
                  Digital Record Boards
                </Link>
              </h3>
              <p className="text-lg font-medium text-foreground/90">
                Tens of thousands of records searchable in seconds
              </p>
              <img
                src="/home/school's legacy/Digital Record Boards.avif"
                alt="Digital Record Boards"
                loading="lazy"
                className="w-full rounded-lg sm:rounded-xl object-cover"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent"></div>

            {/* Interactive Timelines Column */}
            <div className="space-y-4 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient-purple-blue">
                Interactive Timelines
              </h3>
              <p className="text-lg font-medium text-foreground/90">
                Highlight centuries of important moments, big and small
              </p>
              <img
                src="/home/school's legacy/Interactive Timelines.avif"
                alt="Interactive Timelines"
                loading="lazy"
                className="w-full rounded-lg sm:rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalHallOfFameSection;
