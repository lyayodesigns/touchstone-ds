import React, { useState, useEffect } from "react";

const CallToActionSection: React.FC = () => {
  const words = ["imagine", "design", "transform", "inspire"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(true);
      }, 100);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      className="py-8 sm:py-12 md:py-16 lg:py-20 w-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-blue-500/10 relative overflow-hidden"
      id="cta"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full blur-3xl -z-10"></div>

      {/* Plus symbols as decorative elements */}
      <div className="absolute top-[10%] left-[5%] text-foreground/10 text-2xl sm:text-3xl">
        +
      </div>
      <div className="absolute bottom-[10%] right-[5%] text-foreground/10 text-2xl sm:text-3xl">
        +
      </div>
      <div className="absolute top-[40%] right-[10%] text-foreground/10 text-2xl sm:text-3xl">
        +
      </div>

      <div className="container px-3 sm:px-4 md:px-6 mx-auto relative">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            We{" "}{" "}{" "}
            <div
              className="inline-block"
              style={{ width: "150px", textAlign: "left" }}
            >
              <span
                className={`text-transparent text-gradient-purple-blue inline-block transition-all duration-100 ${
                  isAnimating
                    ? "opacity-100 transform-none"
                    : "opacity-0 -translate-y-2"
                }`}
              >
                {words[currentWordIndex]}
              </span>
            </div>
            <br className="hidden sm:block" />
            your legacy into{" "}
            <span className="font-bold text-foreground">digital excellence</span>
          </h2>

          <p className="text-foreground/70 text-base sm:text-lg mt-4 sm:mt-6">
            👉 Book Your Free Demo and see how a Touchscreen Interactive
            Athletic Awards display can transform your campus.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <button 
            onClick={() => window.open('https://calendly.com/touchstone-ds/custom-guided-tour?atm_source=website&month=2025-03', '_blank')}
            className="bg-gradient-to-r from-purple-400 to-blue-500 text-foreground font-medium rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg transition-all hover:shadow-glow hover:scale-105 active:scale-95 touch-manipulation"
          >
            Book Your Free Demo
          </button>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-foreground/70 text-sm sm:text-base md:text-lg font-medium">
            Touchstone Digital Solutions:{" "}
            <span className="italic">
              Honoring the past. Inspiring the future.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
