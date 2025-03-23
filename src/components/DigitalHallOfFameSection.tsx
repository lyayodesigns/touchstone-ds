import React from 'react';

const DigitalHallOfFameSection: React.FC = () => {
  return (
    <section className="py-20 w-full bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl overflow-hidden border border-white/10 shadow-glow-sm">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-30"></div>
              
              {/* Mockup content */}
              <div className="absolute inset-0 flex flex-col p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white">Digital Hall of Fame</h3>
                  <p className="text-sm text-white/70">Touchstone Interactive Display</p>
                </div>
                
                <div className="flex-1 grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-2 flex flex-col items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-purple-500/30 mb-2"></div>
                      <div className="w-full h-2 bg-white/20 rounded-full"></div>
                      <div className="w-2/3 h-2 bg-white/20 rounded-full mt-1"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">✨ Create Your School's</span> Digital Hall of Fame
            </h2>
            
            <p className="text-lg text-white/80">
              Imagine a Digital Wall of Fame that captivates visitors when they enter your lobby. Our Hall of Fame Display solutions let you:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/70">
                  Showcase student profiles, alumni milestones, and historical moments on a modern, space-efficient <span className="text-white font-medium">Interactive Digital Trophy Case</span>.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/70">
                  Replace static bulletin boards with a <span className="text-white font-medium">Dynamic Hall of Fame</span> that updates in real-time.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/70">
                  Digital Walls of Fame with digital donor walls and sponsor logos for universities.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/70">
                  Customizable Digital Halls of Fame for classrooms, sports teams, or entire campuses.
                </p>
              </li>
            </ul>
            
            <p className="text-lg font-medium text-white">
              Your legacy deserves more than a shelf—it deserves a spotlight.
            </p>
            
            <div className="pt-4">
              <button className="bg-white/10 hover:bg-white/20 text-white font-medium rounded-full px-6 py-2 transition-all border border-white/20 hover:border-white/40">
                Explore Digital Hall of Fame
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalHallOfFameSection;
