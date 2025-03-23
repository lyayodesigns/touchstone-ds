import React from 'react';

const SchoolRecognitionSection: React.FC = () => {
  return (
    <section className="py-16 w-full bg-background">
      <div className="container px-4 md:px-6 mx-auto">
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
              <h3 className="text-xl font-bold text-purple-400">🏆 School & Student Recognition Made Unforgettable</h3>
            </div>
            <div className="space-y-4">
              <p className="text-white/80">
                Boost morale and pride with a modern student recognition system that's as unique as your students:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1 flex-shrink-0">•</div>
                  <p className="text-white/80">
                    User-friendly school recognition displays for academic awards, art shows, or STEM fairs.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1 flex-shrink-0">•</div>
                  <p className="text-white/80">
                    Digital wall of fame with donor recognition to celebrate contributors alongside student stars.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1 flex-shrink-0">•</div>
                  <p className="text-white/80">
                    Interactive touchscreen displays for elementary school awards—perfect for young learners to explore with a tap.
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
                  Secure, FERPA-Compliant Data Storage
                </p>
              </div>
            </div>
            <p className="text-white/80 italic">
              No achievement is too small. Let us help you shout it from the (digital) rooftops.
            </p>
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
      </div>
    </section>
  );
};

export default SchoolRecognitionSection;
