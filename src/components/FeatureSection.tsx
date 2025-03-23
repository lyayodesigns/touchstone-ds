import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-24 w-full bg-card">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-20 text-center space-y-6">
          <div className="inline-flex items-center justify-center">
            <span className="bg-purple-500/20 text-purple-400 font-medium text-sm rounded-full px-6 py-2 inline-block shadow-glow-sm">
              Transform Your Recognition Programs
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-purple-400">Create Your School's</span>
            <br />
            <span className="bg-gradient-to-r from-purple-500/10 to-transparent px-4 py-1 rounded-lg inline-block mt-2">
              Digital Hall of Fame
            </span>
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Imagine a Digital Wall of Fame that captivates visitors the moment they step into your lobby, 
            showcasing your school's rich history and achievements.
          </p>
        </div>
        
        {/* Features Grid - Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Left Column */}
          <div className="space-y-8 lg:col-span-1">
            <div className="bg-card rounded-xl p-8 border border-white/10 shadow-glow-sm h-full">
              <div className="space-y-6 flex flex-col h-full">
                <div className="inline-flex p-3 bg-purple-500/20 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-400">Hall of Fame Solutions</h3>
                <div className="space-y-4 flex-grow">
                  <p className="text-white/80">
                    Showcase student profiles, alumni milestones, and historic moments on modern, 
                    space-efficient Interactive Digital Trophy Cases.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-white/80">Dynamic real-time updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-white/80">Donor recognition integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-white/80">Customizable for any space</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 mt-auto">
                  <button className="bg-purple-500 text-white font-medium rounded-full px-6 py-2 text-sm transition-all hover:bg-purple-600 hover:shadow-glow-sm w-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center Column - Featured Content */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-8 border border-white/10 shadow-glow-md h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
              <div className="relative z-10 space-y-6 flex flex-col h-full">
                <div className="inline-flex p-3 bg-purple-500/20 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-400">Interactive Displays</h3>
                <div className="space-y-4 flex-grow">
                  <p className="text-white/80">
                    Captivate your audience with touchscreen displays that bring achievements to life.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-1 rounded-lg mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-white/80">Interactive School Displays for lobbies and common areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-1 rounded-lg mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-white/80">Touchscreen Athletic HOF with real-time stats</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-1 rounded-lg mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-white/80">User-Friendly CMS – update in minutes</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 mt-auto">
                  <button className="bg-purple-500 text-white font-medium rounded-full px-6 py-2 text-sm transition-all hover:bg-purple-600 hover:shadow-glow-sm w-full">
                    View Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8 lg:col-span-1">
            <div className="bg-card rounded-xl p-8 border border-white/10 shadow-glow-sm h-full">
              <div className="space-y-6 flex flex-col h-full">
                <div className="inline-flex p-3 bg-purple-500/20 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-400">Featured Hardware</h3>
                <div className="space-y-4 flex-grow">
                  <p className="text-white/80">
                    Premium hardware solutions designed for high-traffic areas and daily use.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-white/80">Wall-Mounted Sports Recognition Displays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-white/80">Classroom Interactive Boards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-white/80">Multi-Touch Kiosks for high-traffic areas</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 mt-auto">
                  <button className="bg-purple-500 text-white font-medium rounded-full px-6 py-2 text-sm transition-all hover:bg-purple-600 hover:shadow-glow-sm w-full">
                    Explore Hardware
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recognition Solutions - Alternating Layout */}
        <div className="space-y-16 mb-20">
          {/* School & Student Recognition - Content Left, Image Right */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.5 5.5V3C15.5 2.17157 14.8284 1.5 14 1.5H10C9.17157 1.5 8.5 2.17157 8.5 3V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 5.5H7C5.89543 5.5 5 6.39543 5 7.5C5 11.6421 8.35786 15 12.5 15H12.5C16.6421 15 20 11.6421 20 7.5C20 6.39543 19.1046 5.5 18 5.5H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-400">School & Student Recognition</h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/80">
                  Celebrate academic excellence and artistic achievements with customizable displays.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="text-purple-400 mt-1 flex-shrink-0">•</div>
                    <p className="text-white/80">
                      User-friendly displays for academic awards, art shows, and STEM fairs
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-purple-400 mt-1 flex-shrink-0">•</div>
                    <p className="text-white/80">
                      Digital wall of fame with integrated donor recognition
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-purple-400 mt-1 flex-shrink-0">•</div>
                    <p className="text-white/80">
                      Interactive touchscreen displays for elementary school awards
                    </p>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-500/10 p-5 rounded-lg space-y-3">
                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider">Why Schools Love Us:</h4>
                <div className="grid grid-cols-1 gap-2">
                  <p className="text-white/80 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Elementary-Friendly Interfaces
                  </p>
                  <p className="text-white/80 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Cloud-Based Hall of Fame Software
                  </p>
                  <p className="text-white/80 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    FERPA-Compliant Data Storage
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="bg-card rounded-xl p-6 border border-white/10 shadow-glow-sm h-full">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="School Recognition Display" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Athletics & Sports Recognition - Image Left, Content Right */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            {/* Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-400">Athletics & Sports Recognition</h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/80">
                  Showcase athletic achievements and team legacies with dynamic displays.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="text-purple-400 mt-1 flex-shrink-0">•</div>
                    <p className="text-white/80">
                      Customizable digital sports Hall of Fame for all athletic programs
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-purple-400 mt-1 flex-shrink-0">•</div>
                    <p className="text-white/80">
                      Real-time stats updates during games with automated displays
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-purple-400 mt-1 flex-shrink-0">•</div>
                    <p className="text-white/80">
                      Interactive achievement walls for all sports programs
                    </p>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-500/10 p-5 rounded-lg space-y-3">
                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider">Top Features for Sports Teams:</h4>
                <div className="grid grid-cols-1 gap-2">
                  <p className="text-white/80 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Real-Time Stats Update Displays
                  </p>
                  <p className="text-white/80 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Multi-Sport Recognition System
                  </p>
                  <p className="text-white/80 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Stadium Hall of Fame Technology
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="bg-card rounded-xl p-6 border border-white/10 shadow-glow-sm h-full">
                <img 
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Sports Recognition Display" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Software Platform - Full Width */}
        <div className="bg-gradient-to-r from-purple-900/20 to-black/40 rounded-xl p-8 border border-white/10 shadow-glow-md">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-400">Software & Platforms That Actually Get You</h3>
            </div>
            <p className="text-white/80 max-w-3xl">
              We get it—you're juggling lesson plans, game schedules, and fundraising drives. That's why our digital 
              Hall of Fame software is built for real humans, not IT wizards.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="bg-purple-500/10 p-5 rounded-lg space-y-3">
                <div className="flex items-center gap-2">
                  <div className="bg-purple-500/20 p-1 rounded-lg">
                    <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-purple-400">Drag, Drop, Done</h4>
                </div>
                <p className="text-white/80 text-sm">
                  Import data from spreadsheets to create polished profiles in minutes.
                </p>
              </div>
              <div className="bg-purple-500/10 p-5 rounded-lg space-y-3">
                <div className="flex items-center gap-2">
                  <div className="bg-purple-500/20 p-1 rounded-lg">
                    <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-purple-400">Beyond Text</h4>
                </div>
                <p className="text-white/80 text-sm">
                  Add videos of roaring crowds and championship moments.
                </p>
              </div>
              <div className="bg-purple-500/10 p-5 rounded-lg space-y-3">
                <div className="flex items-center gap-2">
                  <div className="bg-purple-500/20 p-1 rounded-lg">
                    <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-purple-400">Control Your Data</h4>
                </div>
                <p className="text-white/80 text-sm">
                  Export records for backups, yearbooks, or to share with alumni.
                </p>
              </div>
              <div className="bg-purple-500/10 p-5 rounded-lg space-y-3">
                <div className="flex items-center gap-2">
                  <div className="bg-purple-500/20 p-1 rounded-lg">
                    <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-purple-400">No Jargon</h4>
                </div>
                <p className="text-white/80 text-sm">
                  Simple software that everyone can master, regardless of technical skill.
                </p>
              </div>
            </div>
            <div className="flex justify-center pt-6">
              <button className="bg-purple-500 text-white font-medium rounded-full px-8 py-3 text-lg transition-all hover:bg-purple-600 hover:shadow-glow-sm">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
