import React, { useEffect, useState, useRef } from "react";

const AlumniRecognitionSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      className="py-12 sm:py-16 md:py-20 w-full bg-gradient-to-b from-background to-background/90 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] max-w-[800px] max-h-[800px] bg-gradient-spotlight opacity-30 -z-10"></div>
      
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-[15%] left-[10%] text-white/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[15%] right-[10%] text-white/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute top-[40%] right-[15%] text-white/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[40%] left-[15%] text-white/10 text-2xl sm:text-3xl">+</div>

      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Alumni Recognition, Made Simple with Touchstone
          </h2>
          
          <h3 
            className={`text-xl sm:text-2xl font-medium text-white/90 mt-4 sm:mt-6 transition-all duration-700 delay-[200ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Why Leading Schools Are Choosing Us:
          </h3>
        </div>
        
        <div 
          className={`max-w-5xl mx-auto mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 delay-[300ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            "Fully customizable",
            "No cost to build or maintain",
            "Stunning visuals backed by Emmy-nominated UI/UX design",
            "Fully-integrated brand guidelines",
            "Limitless layouts, hand-designed in house",
            "Gaming-backed graphics for a dynamic, immersive experience",
            "Seamless over-the-air software updates",
            "Accessible everywhere, on any device",
            "Unlimited 24/7 customer support",
          ].map((feature, index) => (
            <div 
              key={index} 
              className="h-full"
            >
              <div 
                className={`flex items-start space-x-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform h-full ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${300 + (index * 70)}ms` }}
              >
                <span className="text-purple-400 font-bold text-lg mt-0.5 flex-shrink-0">✔️</span>
                <span className="text-white/80 text-sm sm:text-base">{feature}</span>
              </div>
            </div>
          ))}
          
          {/* Center the last feature */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-center">
            <div 
              className={`flex items-start space-x-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform w-full max-w-xs ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${300 + (9 * 70)}ms` }}
            >
              <span className="text-purple-400 font-bold text-lg mt-0.5 flex-shrink-0">✔️</span>
              <span className="text-white/80 text-sm sm:text-base">Robust security</span>
            </div>
          </div>
        </div>
        
        <div 
          className={`text-center mt-8 sm:mt-10 transition-all duration-700 delay-[900ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group inline-flex items-center bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-medium rounded-full px-6 py-2.5 transition-all duration-300">
            Explore All Features
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlumniRecognitionSection;
