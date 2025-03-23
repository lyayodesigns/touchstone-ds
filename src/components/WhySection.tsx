import React, { useEffect, useRef } from 'react';

const FeatureCard: React.FC<{
  number: string;
  title: string;
  subtitle: string;
  description: string;
  additionalInfo?: string;
  delay: number;
}> = ({ number, title, subtitle, description, additionalInfo, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-slide-in-bottom', 'opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="border-t border-white/10 py-8 opacity-0 translate-y-8 transition-all duration-500 ease-out active:scale-[0.98] md:hover:scale-[1.02] md:hover:shadow-lg md:hover:shadow-purple-500/10"
    >
      <div className="flex gap-8">
        <div className="text-white/50 text-sm">{number}</div>
        <div className="flex-1">
          <div className="text-white/50 text-sm mb-2">{title}</div>
          <h3 className="text-xl font-medium mb-3">{subtitle}</h3>
          <p className="text-white/70">
            {description} <span className="text-white">{additionalInfo}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const WhySection: React.FC = () => {
  return (
    <section className="py-20 w-full bg-background relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16 animate-slide-in-top">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="text-purple-400">Touchstone Digital Solutions</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <FeatureCard 
              number="01"
              title="Affordable:"
              subtitle="Packages for K–12 schools, colleges, and community clubs."
              description="We offer solutions that fit every budget."
              delay={100}
            />
          </div>
          
          <div>
            <FeatureCard 
              number="02"
              title="Yours:"
              subtitle="Custom colors, logos, and layouts to match your brand."
              description="Make it truly your own."
              delay={200}
            />
          </div>
          
          <div>
            <FeatureCard 
              number="03"
              title="Scalable Solutions:"
              subtitle="Start small with a Classroom Achievement Display or go big with a University-Wide Digital Hall of Fame."
              description="Grow with your needs."
              delay={300}
            />
          </div>
          
          <div>
            <FeatureCard 
              number="04"
              title="Future-Proof Tech:"
              subtitle="Enjoy automated updates and AI-driven content suggestions."
              description="Stay ahead of the curve."
              delay={400}
            />
          </div>
          
          {/* Center the last feature card in the grid */}
          <div className="md:col-span-2 w-full mx-auto">
            <div className="max-w-3xl mx-auto">
              <FeatureCard 
                number="05"
                title="Unmatched Support:"
                subtitle="From installation to training, we're with you."
                description="Our team is always here to help."
                delay={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
