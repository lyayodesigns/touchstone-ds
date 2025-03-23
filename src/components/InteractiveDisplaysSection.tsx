import React from 'react';

const InteractiveDisplaysSection: React.FC = () => {
  return (
    <section className="py-20 w-full bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">🖥️ Interactive Displays</span> That Captivate
            </h2>
            
            <p className="text-lg text-white/80">
              Engage students, athletes, and visitors with cutting-edge touchscreen display technology. Our accessibility-compliant touchscreens and interactive recognition software make every interaction seamless.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/70">
                  Interactive School Displays for lobbies, gyms, or auditoriums.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/70">
                  Touchscreen Athletic HOF Displays with real-time stats updates.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/70">
                  User-Friendly CMS – update content in minutes, no tech skills needed.
                </p>
              </li>
            </ul>
            
            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4">Featured Hardware:</h3>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
                  <span className="text-white/80">Wall-Mounted Sports Recognition Displays (perfect for stadiums)</span>
                </li>
                
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
                  <span className="text-white/80">Classroom Interactive Boards for student awards</span>
                </li>
                
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
                  <span className="text-white/80">Durable, Multi-Touch Kiosks built for high-traffic areas</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <button className="group inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                  Explore Our Hardware + Software Bundles
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Image/Visual */}
          <div className="relative order-1 md:order-2">
            <div className="aspect-square bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl overflow-hidden border border-white/10 shadow-glow-sm flex items-center justify-center">
              {/* Mockup of interactive display */}
              <div className="w-[85%] h-[85%] bg-black/40 rounded-lg border border-white/20 relative overflow-hidden">
                {/* Screen content */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-4">
                  {/* Header */}
                  <div className="h-10 border-b border-white/10 flex items-center justify-between mb-4">
                    <div className="w-32 h-6 bg-white/10 rounded"></div>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 rounded-full bg-white/10"></div>
                      <div className="w-6 h-6 rounded-full bg-white/10"></div>
                      <div className="w-6 h-6 rounded-full bg-white/10"></div>
                    </div>
                  </div>
                  
                  {/* Grid of items */}
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-white/5 rounded p-3 border border-white/10">
                        <div className="w-full h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded mb-2"></div>
                        <div className="w-3/4 h-3 bg-white/20 rounded-full mb-1"></div>
                        <div className="w-1/2 h-3 bg-white/10 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Touch interaction visualization */}
                <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-cyan-400/20 animate-ping-slow"></div>
                <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-cyan-400/40"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 h-8 bg-cyan-400/30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDisplaysSection;
