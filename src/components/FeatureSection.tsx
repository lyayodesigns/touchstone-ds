import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-32 w-full space-y-24">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-24 text-center space-y-8">
          <div className="bg-glass text-purple-400 font-medium text-sm rounded-full px-8 py-3 inline-block animate-fade-in shadow-glow-sm">
            Transform How You Celebrate Achievement
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight animate-fade-in [animation-delay:200ms]">
            <span className="text-purple-400 inline-flex items-center">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
              </svg>
              Create Your School's
            </span>
            <br />
            <span className="text-white bg-gradient-to-r from-purple-500/20 to-transparent px-4 py-2 rounded-lg">General Digital Hall of Fame</span>
          </h2>
          
          <p className="text-white/80 text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
            Imagine a Digital Wall of Fame that captivates visitors the moment they step into your lobby, showcasing your school's rich history and achievements.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="space-y-32">
          {/* Introduction Cards */}
          <div className="grid md:grid-cols-2 gap-12 animate-slide-in-left">
            <div className="bg-card rounded-2xl p-10 border border-white/10 shadow-glow-sm space-y-8">
              <h3 className="text-2xl font-bold text-purple-400">Our Hall of Fame Display Solutions</h3>
              <div className="space-y-6">
                <p className="text-white/80">
                  Showcase student profiles, alumni milestones, and historic moments on a modern,
                  space-efficient Interactive Digital Trophy Case.
                </p>
                <p className="text-white/80">
                  Replace static bulletin boards with a Dynamic Hall of Fame that updates in real-time.
                </p>
                <p className="text-white/80">
                  Digital Walls of Fame with donor recognition and sponsor logos for universities.
                </p>
                <p className="text-white/80">
                  Customizable Digital Halls of Fame for classrooms, sports teams, or entire campuses.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-10 border border-white/10 shadow-glow-sm flex flex-col justify-between space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-purple-400">Your Legacy Deserves More</h3>
                <p className="text-white/80 text-xl italic mt-4">
                  Your legacy deserves more than a shelf—it deserves a spotlight.
                </p>
              </div>
              <button className="bg-purple-500 text-white font-medium rounded-full px-8 py-3 text-lg transition-all hover:bg-purple-600 hover-lift w-full">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Interactive Displays Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-10 border border-white/10 shadow-glow-sm space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-400">Interactive Displays That Captivate</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-white/80">
                    Interactive School Displays for lobbies, gyms, or auditoriums.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-white/80">
                    Touchscreen Athletic HOF Displays with real-time stats updates.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-white/80">
                    User-Friendly CMS – update content in minutes, no tech skills needed.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-10 border border-white/10 shadow-glow-sm space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-400">Featured Hardware</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-white/80">
                    Wall-Mounted Sports Recognition Displays (perfect for stadiums)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-white/80">
                    Classroom Interactive Boards for student awards
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-white/80">
                    Durable, Multi-Touch Kiosks built for high-traffic areas
                  </p>
                </div>
              </div>
              <button className="bg-purple-500 text-white font-medium rounded-full px-8 py-3 text-lg transition-all hover:bg-purple-600 hover-lift w-full">
                Explore Hardware + Software Bundles
              </button>
            </div>
          </div>
          
          {/* Recognition Features Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-10 border border-white/10 shadow-glow-sm space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.5 5.5V3C15.5 2.17157 14.8284 1.5 14 1.5H10C9.17157 1.5 8.5 2.17157 8.5 3V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 5.5H7C5.89543 5.5 5 6.39543 5 7.5C5 11.6421 8.35786 15 12.5 15H12.5C16.6421 15 20 11.6421 20 7.5C20 6.39543 19.1046 5.5 18 5.5H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-400">School & Student Recognition</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-white/80">
                    User-friendly school recognition displays for academic awards, art shows, or STEM fairs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-white/80">
                    Digital wall of fame with donor recognition to celebrate contributors alongside student stars.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-white/80">
                    Interactive touchscreen displays for elementary school awards—perfect for young learners.
                  </p>
                </div>
              </div>
              <div className="space-y-4 bg-purple-500/10 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-purple-400">Why Schools Love Us:</h4>
                <div className="space-y-3">
                  <p className="text-white/80 flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Elementary-Friendly Interfaces
                  </p>
                  <p className="text-white/80 flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Cloud-Based Hall of Fame Software
                  </p>
                  <p className="text-white/80 flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Secure, FERPA-Compliant Data Storage
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-10 border border-white/10 shadow-glow-sm space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-400">Athletics & Sports Recognition</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-white/80">
                    Build a customizable digital sports Hall of Fame for football programs, swim teams, or basketball leagues.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-white/80">
                    Display real-time stats updates during games with automated athlete stats displays.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-white/80">
                    Honour legends with touchscreen baseball stats display or interactive football achievement walls.
                  </p>
                </div>
              </div>
              <div className="space-y-4 bg-purple-500/10 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-purple-400">Top Features for Sports Teams:</h4>
                <div className="space-y-3">
                  <p className="text-white/80 flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Real-Time Stats Update Displays
                  </p>
                  <p className="text-white/80 flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Multi-Sport Recognition System
                  </p>
                  <p className="text-white/80 flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Stadium Hall of Fame Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Software Section */}
          <div className="bg-card rounded-2xl p-10 border border-white/10 shadow-glow-sm space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-400">Software & Platforms That Actually Get You</h3>
            </div>
            <div className="space-y-6">
              <p className="text-white/80">
                We get it—you're juggling lesson plans, game schedules, and fundraising drives. That's why our digital Hall of Fame software is built for real humans, not IT wizards.
              </p>
              <div className="bg-purple-500/10 p-6 rounded-lg space-y-6">
                <p className="text-white font-medium text-lg">
                  Here's the nitty-gritty:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-1 rounded-lg mt-1">
                        <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-white/80">
                        <span className="font-semibold">Drag, drop, done.</span> Import data from spreadsheets to create polished student or athlete profiles in minutes.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-1 rounded-lg mt-1">
                        <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-white/80">
                        <span className="font-semibold">Go beyond text.</span> Our digital Hall of Fame software with video support lets you add roaring crowds and championship moments.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-1 rounded-lg mt-1">
                        <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-white/80">
                        <span className="font-semibold">Control your data.</span> Export Hall of Fame records for backups, yearbooks, or to share with nostalgic alumni.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-1 rounded-lg mt-1">
                        <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-white/80">
                        <span className="font-semibold">No jargon.</span> Just simple school hall of fame software that everyone can master, regardless of technical skill.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-center text-lg italic">
                Think of it like a digital scrapbook—but one that doesn't collect dust or require glue sticks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
