import React, { useEffect, useState, useRef } from "react";

const AthleticAchievementsContactSection: React.FC = () => {
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
      className="py-12 sm:py-16 md:py-20 w-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-blue-500/10 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-500/5 to-transparent -z-10"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
      
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-[20%] left-[10%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[20%] right-[10%] text-foreground/10 text-2xl sm:text-3xl">+</div>

      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div 
          className={`max-w-4xl mx-auto bg-gradient-to-br from-purple-500/20 via-indigo-500/15 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 sm:p-10 md:p-12 border border-foreground/10 shadow-glow-sm transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <div 
              className={`text-5xl mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              🚀
            </div>
            
            <h2 
              className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Let us help you bring your school's athletic achievements to life with 
              <span className="text-transparent bg-clip-text text-gradient-purple-blue to-blue-400 ml-2">
                cutting-edge digital technology
              </span>
            </h2>
            
            <div 
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <button className="group relative inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-foreground font-medium rounded-full px-8 py-4 text-lg transition-all duration-300 shadow-glow-md overflow-hidden">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute right-0 w-12 h-full flex items-center justify-center transition-all duration-300 group-hover:bg-foreground/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            </div>
            
            {/* Animated decorative elements */}
            <div className="w-full max-w-xs mx-auto mt-10 flex justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className={`w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-700 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{ 
                    transitionDelay: `${700 + (i * 100)}ms`,
                    animation: isVisible ? `pulse 2s infinite ${i * 0.3}s` : "none"
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleticAchievementsContactSection;
