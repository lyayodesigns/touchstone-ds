import React from 'react';

const FeatureCard: React.FC<{
  number: string;
  title: string;
  subtitle: string;
  description: string;
  additionalInfo?: string;
}> = ({ number, title, subtitle, description, additionalInfo }) => {
  return (
    <div className="border-t border-white/10 py-8 animate-fade-in">
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
    <section className="py-20 w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="text-purple-400">Touchstone Digital Solutions</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <FeatureCard 
              number="01"
              title="Affordable:"
              subtitle="Packages for K–12 schools, colleges, and community clubs."
              description="We offer solutions that fit every budget."
            />
          </div>
          
          <div>
            <FeatureCard 
              number="02"
              title="Yours:"
              subtitle="Custom colors, logos, and layouts to match your brand."
              description="Make it truly your own."
            />
          </div>
          
          <div>
            <FeatureCard 
              number="03"
              title="Scalable Solutions:"
              subtitle="Start small with a Classroom Achievement Display or go big with a University-Wide Digital Hall of Fame."
              description="Grow with your needs."
            />
          </div>
          
          <div>
            <FeatureCard 
              number="04"
              title="Future-Proof Tech:"
              subtitle="Enjoy automated updates and AI-driven content suggestions."
              description="Stay ahead of the curve."
            />
          </div>
          
          <div>
            <FeatureCard 
              number="05"
              title="Unmatched Support:"
              subtitle="From installation to training, we're with you."
              description="Our team is always here to help."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
