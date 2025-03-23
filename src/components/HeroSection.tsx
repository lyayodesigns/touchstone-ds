import React, { useEffect, useState } from 'react';
import TouchIcon from './TouchIcon';
import AwardsSlider from './AwardsSlider';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
  );

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30 -z-10"></div>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vmin] h-[90vmin] max-w-[900px] max-h-[900px] bg-gradient-spotlight -z-10 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
      
      {/* Border lines - only in upper portion */}
      <div className="absolute top-0 left-12 w-[1px] h-48 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
      <div className="absolute top-12 left-0 h-[1px] w-48 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      
      <div className="absolute top-0 right-12 w-[1px] h-48 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
      <div className="absolute top-12 right-0 h-[1px] w-48 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      
      {/* Plus symbols as decorative elements - responsive positioning */}
      <div className="absolute top-[10%] left-[10%] md:top-40 md:left-40 text-white/10 text-3xl">+</div>
      <div className="absolute bottom-[10%] right-[10%] md:bottom-40 md:right-40 text-white/10 text-3xl">+</div>
      <div className="absolute top-1/4 right-1/4 text-white/10 text-3xl">+</div>
      
      {/* Main content */}
      <div className={`container px-4 md:px-6 z-10 flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mt-8 md:mt-12">
          <TouchIcon />
        </div>
        
        <div className={`max-w-4xl mx-auto text-center mt-2 md:mt-4 space-y-4 md:space-y-6 ${orientation === 'landscape' ? 'landscape-mode' : ''}`}>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tighter transition-all duration-700 delay-[100ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Welcome to Touchstone Digital Solutions
          </h1>
          <h2 className={`text-xl sm:text-2xl font-bold leading-tight tracking-tighter transition-all duration-700 delay-[300ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Dynamic. Interactive. Unforgettable.
          </h2>
          
          <p className={`text-base sm:text-lg text-white/70 max-w-3xl mx-auto transition-all duration-700 delay-[500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Tired of dusty trophies and forgotten plaques? It's time to bring your school's history, student brilliance, and athletic triumphs into the 21st century. At Touchstone Digital Solutions, we build interactive digital Halls of Fame, touchscreen recognition systems, and cloud-based platforms that turn everyday achievements into unforgettable stories.
          </p>
          
          <div className={`transition-all duration-700 delay-[700ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="bg-purple-500 text-white font-medium rounded-full px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg transition-all duration-300 hover:bg-purple-600 hover:shadow-glow-sm active:scale-95 touch-manipulation">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Awards Slider - responsive positioning */}
      <div className={`w-full mt-8 md:mt-16 transition-all duration-700 delay-[900ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <AwardsSlider />
      </div>
    </section>
  );
};

export default HeroSection;
