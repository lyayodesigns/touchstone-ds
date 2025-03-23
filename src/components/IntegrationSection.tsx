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
    <section className="py-20 w-full" id="integrations">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Replace <span className="text-purple-400">"Remember When"</span>
            <br />with <span className="font-bold text-white">"Look What We Did"</span>?
          </h2>
          
          <p className="text-white/70 text-lg mt-6">
            👉 Book Your Free Demo and see how a Touchscreen Interactive Athletic Awards display can transform your campus.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-purple-500 text-white font-medium rounded-full px-8 py-3 text-lg transition-all hover:bg-purple-600 hover-lift">
            Book Your Free Demo
          </button>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white/70 text-lg font-medium">
            Touchstone Digital Solutions: <span className="italic">Honoring the past. Inspiring the future.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
