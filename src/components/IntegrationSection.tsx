
import React from 'react';

const IntegrationLogo: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="bg-card hover:bg-white/10 transition-colors rounded-lg px-6 py-4 flex items-center justify-center border border-white/10">
      <span className="text-white/70">{name}</span>
    </div>
  );
};

const IntegrationSection: React.FC = () => {
  return (
    <section className="py-20 w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your <span className="text-purple-400">integration</span>,
            <br />with <span className="font-bold text-white">100+ tools and software</span>
          </h2>
          
          <p className="text-white/70">
            Integrates with Salesforce, HubSpot, and major CRMs. Works with existing sales engagement tools (Outreach, SalesLoft, Gong). No need for system replacements—just plug and play.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12">
          <IntegrationLogo name="Outlook" />
          <IntegrationLogo name="HubSpot" />
          <IntegrationLogo name="One Drive" />
          <IntegrationLogo name="Pipedrive" />
          <IntegrationLogo name="Salesforce" />
          <IntegrationLogo name="Outlook" />
          <IntegrationLogo name="HubSpot" />
          <IntegrationLogo name="One Drive" />
          <IntegrationLogo name="Pipedrive" />
          <IntegrationLogo name="Salesforce" />
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-purple-500 text-white font-medium rounded-full px-8 py-3 text-lg transition-all hover:bg-purple-600 hover-lift">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
