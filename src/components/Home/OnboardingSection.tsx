import React, { useEffect, useState, useRef } from "react";

const OnboardingSection: React.FC = () => {
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
      className="py-12 sm:py-16 md:py-20 w-full bg-gradient-to-b from-background/90 to-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 text-gradient-purple-blue rounded-full blur-3xl -z-10"></div>
      
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-[20%] right-[15%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[20%] left-[15%] text-foreground/10 text-2xl sm:text-3xl">+</div>

      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left side - Onboarding Process */}
          <div 
            className={`w-full lg:w-1/2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
              <span className="text-transparent bg-clip-text text-gradient-purple-blue">Onboarding</span> made simple
            </h2>
            
            <div className="space-y-6">
              {[
                { step: "01", title: "Schedule a demo", delay: 100 },
                { step: "02", title: "Personalized design session", delay: 200 },
                { step: "03", title: "Go live & inspire", delay: 300 }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400 font-bold">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg sm:text-xl font-medium text-foreground">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div 
              className={`mt-8 transition-all duration-700 delay-[400ms] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button onClick={() => window.location.href = `${window.location.origin}/contact/`} className="group inline-flex items-center bg-gradient-to-r from-purple-500/80 to-blue-500/80 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-full px-6 py-3 transition-all duration-300 shadow-glow-sm">
                Schedule a Free Demo
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
          
          {/* Right side - We Handle It All */}
          <div 
            className={`w-full lg:w-1/2 transition-all duration-700 delay-[200ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-background/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-foreground/10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
                We Handle It All
              </h2>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                <span className="text-transparent text-gradient-purple-blue">Affordable Pricing For Any Budget</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Custom software development",
                  "Premium hardware packages",
                  "Complete brand integration",
                  "Customized wall wraps",
                  "Content creation & design",
                  "Data migration & setup",
                  "Ongoing support & updates"
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-3 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + (index * 100)}ms` }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br text-gradient-purple-blue flex items-center justify-center mt-0.5">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-foreground"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div 
                className={`mt-8 transition-all duration-700 delay-[1000ms] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <button onClick={() => window.location.href = `${window.location.origin}/features/`} className="group inline-flex items-center text-foreground hover:text-foreground/80 font-medium transition-colors">
                  Explore Our Software + Hardware Bundles
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;
