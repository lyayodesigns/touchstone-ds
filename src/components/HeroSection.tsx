
import React from 'react';
import GlowingOrb from './GlowingOrb';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-spotlight -z-10"></div>
      
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-40 left-40 text-white/10 text-3xl">+</div>
      <div className="absolute bottom-40 right-40 text-white/10 text-3xl">+</div>
      <div className="absolute top-1/4 right-1/4 text-white/10 text-3xl">+</div>
      
      {/* Main content */}
      <div className="container px-4 md:px-6 z-10 flex flex-col items-center">
        <GlowingOrb />
        
        <div className="max-w-4xl mx-auto text-center mt-8 space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter animate-fade-in">
            Supercharge Your Sales Team with
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter animate-fade-in [animation-delay:300ms]">
            <span className="text-purple-400">Agilepitch's </span>
            <span className="text-blue-400">AI Sales Co-Pilot</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto animate-fade-in [animation-delay:600ms]">
            Agilepitch's all-in-one sales intelligence tool helps your sales team focus on generating revenue without
            focusing on repetitive, time-consuming tasks.
          </p>
          
          <div className="animate-fade-in [animation-delay:900ms]">
            <button className="bg-purple-500 text-white font-medium rounded-full px-8 py-3 text-lg transition-all hover:bg-purple-600 hover-lift">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
