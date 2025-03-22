
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
            Why <span className="text-purple-400">Agilepitch</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <FeatureCard 
              number="01"
              title="Sales-Specific AI:"
              subtitle="Michael was built specifically to support the goals of B2B Sales teams."
              description="All functionalities are directed towards ensuring that your sales goals are met."
            />
          </div>
          
          <div>
            <FeatureCard 
              number="02"
              title="Decision Intelligence (DI) AI:"
              subtitle="Michael uses DI to provide smarter, data-backed insights for better"
              description="decision-making."
            />
          </div>
          
          <div>
            <FeatureCard 
              number="03"
              title="Built for your business:"
              subtitle="Customize Agilepitch for your unique business needs."
              description="Our sales automation tool produces results based on your business data."
            />
          </div>
          
          <div>
            <FeatureCard 
              number="04"
              title="Trusted for Growth-Focused:"
              subtitle="Agilepitch is the preferred choice for VC-backed tech companies."
              description="Our customers see valuable improvements in productivity, pipeline accuracy, and conversion rates."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
