import React from 'react';
import GlowingOrb from './GlowingOrb';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-spotlight -z-10"></div>
      
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-40 left-40 text-white/10 text-3xl">+</div>
      <div className="absolute bottom-40 right-40 text-white/10 text-3xl">+</div>
      <div className="absolute top-1/4 right-1/4 text-white/10 text-3xl">+</div>
      
      {/* Main content */}
      <div className="container px-4 md:px-6 z-10 flex flex-col items-center">
        <GlowingOrb />
        
        <div className="max-w-4xl mx-auto text-center mt-8 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter animate-fade-in">
            Welcome to Touchstone Digital Solutions
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter animate-fade-in [animation-delay:300ms]">
            Dynamic. Interactive. Unforgettable.
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto animate-fade-in [animation-delay:600ms]">
            Transform How You Celebrate Achievement
          </p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto animate-fade-in [animation-delay:600ms]">
            Tired of dusty trophies and forgotten plaques? It's time to bring your school's history, student brilliance, and athletic triumphs into the 21st century. At Touchstone Digital Solutions, we build interactive digital Halls of Fame, touchscreen recognition systems, and cloud-based platforms that turn everyday achievements into unforgettable stories.
          </p>
          
          <div className="animate-fade-in [animation-delay:900ms]">
            <button className="bg-purple-500 text-white font-medium rounded-full px-8 py-3 text-lg transition-all hover:bg-purple-600 hover-lift">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
