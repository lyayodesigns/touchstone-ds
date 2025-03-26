import React, { useEffect, useRef, useState } from "react";

const FeatureCard: React.FC<{
  number: string;
  title: string;
  subtitle: string;
  description: string;
  additionalInfo?: string;
  delay: number;
  isVisible: boolean;
}> = ({ number, title, subtitle, description, additionalInfo, delay, isVisible }) => {
  return (
    <div
      className={`bg-background/5 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 
      hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-blue-500/10 
      hover:border-purple-500/50 hover:shadow-glow-sm hover:scale-[1.02] 
      hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 
      transition-all duration-300 ease-out cursor-pointer 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex gap-4 items-start">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 text-foreground text-sm font-medium group-hover:bg-purple-500/40 group-hover:text-foreground transition-all duration-300">{number}</div>
        <div className="flex-1">
          <div className="text-foreground text-sm font-medium mb-2">{title}</div>
          <h3 className="text-foreground text-xl font-medium mb-3">{subtitle}</h3>
          <p className="text-foreground/70">
            {description} <span className="text-foreground">{additionalInfo}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const WhySection: React.FC = () => {
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
      className="py-8 sm:py-12 md:py-16 w-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-blue-500/10 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full blur-3xl -z-10"></div>

      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Why{" "}
            <span className="text-transparent text-gradient-purple-blue">
              Touchstone Digital Solutions
            </span>
            ?
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            We're not just another tech company. We're your partners in preserving and celebrating your institution's legacy.
          </p>
        </div>

        <div className="bg-background/30 backdrop-blur-sm border border-foreground/10 rounded-xl p-6 sm:p-8 md:p-10 shadow-glow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <FeatureCard
              number="01"
              title="Affordable:"
              subtitle="Packages for K–12 schools, colleges, and community clubs."
              description="We offer solutions that fit every budget."
              delay={100}
              isVisible={isVisible}
            />

            <FeatureCard
              number="02"
              title="Yours:"
              subtitle="Custom colors, logos, and layouts to match your brand."
              description="Make it truly your own."
              delay={200}
              isVisible={isVisible}
            />

            <FeatureCard
              number="03"
              title="Scalable Solutions:"
              subtitle="Start small with a Team-Focused Achievement Display or go big with a University-Wide Digital Hall of Fame."
              description="Grow with your needs."
              delay={300}
              isVisible={isVisible}
            />

            <FeatureCard
              number="04"
              title="Future-Proof Tech:"
              subtitle="Enjoy automated updates and AI-driven content suggestions."
              description="Stay ahead of the curve."
              delay={400}
              isVisible={isVisible}
            />

            {/* Center the last feature card in the grid */}
            <div className="md:col-span-2 w-full mx-auto">
              <div className="max-w-3xl mx-auto">
                <FeatureCard
                  number="05"
                  title="Unmatched Support:"
                  subtitle="From installation to training, we're with you."
                  description="Our team is always here to help."
                  delay={500}
                  isVisible={isVisible}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
