"use client";

import React, { useState, useEffect } from "react";
import { Star, Award, CheckCircle } from 'lucide-react';

const touchstoneVsGipperHeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    setIsVisible(true);
    // Generate particles on client side only to avoid hydration mismatch
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section className="relative min-h-[80svh] w-full overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Hero Content - Left/Right Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-4 md:space-y-6">
            {/* Main Headline */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}>
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-md border border-white/20 mb-4">
                <Award className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-medium text-gray-700">Recognition done right</span>
              </div>
              
              <h1 className="text-[2rem] md:text-[2.5rem] font-bold mb-3 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Touchstone vs Gipper
                </span>
              </h1>
              
              <p className="text-lg md:text-xl font-bold text-blue-600 mb-2">When you win, we win!</p>
            </div>

            {/* Description */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Compare top-rated services, pricing, and support to see why Touchstone is America's most-loved touchscreen platform.
              </p>
            </div>

            {/* Disclaimer */}
            <div className={`transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}>
              <div className="bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Disclaimer:</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Touchstone's editorial team is committed to providing the most transparent and objective comparisons possible. We sourced this information directly from vendor websites, vendor example sites, and trusted third-party reviews.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side - Image */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl hover:scale-[1.03] transition-all duration-500">
                <img
                  src="/touchstonevsgipper.png"
                  alt="Touchstone vs Gipper Comparison"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-2xl font-bold text-sm shadow-lg animate-pulse">
                #1 Choice
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default touchstoneVsGipperHeroSection;
