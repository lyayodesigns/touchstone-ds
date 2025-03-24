import React from "react";
import SchoolRecognitionSection from "./SchoolRecognitionSection";
import AthleticsRecognitionSection from "./AthleticsRecognitionSection";
import SoftwarePlatformsSection from "./SoftwarePlatformsSection";

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 w-full bg-card">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto max-w-[95vw] md:max-w-[90vw]">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 text-center space-y-4 sm:space-y-6 md:space-y-8">
          <div className="inline-flex items-center justify-center">
            <span className="bg-purple-500/20 text-purple-400 font-medium text-sm rounded-full px-6 py-2 inline-block shadow-glow-sm">
              Transform Your Recognition Programs
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-purple-400">Create Your School's</span>
            <br />
            <span className="bg-gradient-to-r from-purple-500/10 to-transparent px-4 py-1 rounded-lg inline-block mt-2">
              Digital Hall of Fame
            </span>
          </h2>

          <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Imagine a Digital Wall of Fame that captivates visitors the moment
            they step into your lobby, showcasing your school's rich history and
            achievements.
          </p>
        </div>

        {/* Features Grid - Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* Left Column */}
          <div className="space-y-8 lg:col-span-1">
            <div className="bg-card rounded-xl p-8 border border-white/10 shadow-glow-sm h-full">
              <div className="space-y-6 flex flex-col h-full">
                <div className="inline-flex p-3 bg-purple-500/20 rounded-lg">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-400">
                  Hall of Fame Solutions
                </h3>
                <div className="space-y-4 flex-grow">
                  <p className="text-white/80">
                    Showcase student profiles, alumni milestones, and historic
                    moments on modern, space-efficient Interactive Digital
                    Trophy Cases.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-white/80">
                        Dynamic real-time updates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-white/80">
                        Donor recognition integration
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-white/80">
                        Customizable for any space
                      </span>
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
                  <svg
                    className="w-6 h-6 text-purple-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 21H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-400">
                  Interactive Displays
                </h3>
                <div className="space-y-4 flex-grow">
                  <p className="text-white/80">
                    Captivate your audience with touchscreen displays that bring
                    achievements to life.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-1 rounded-lg mt-1 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-purple-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white/80">
                        Interactive School Displays for lobbies and common areas
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-1 rounded-lg mt-1 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-purple-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white/80">
                        Touchscreen Athletic HOF with real-time stats
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-1 rounded-lg mt-1 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-purple-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white/80">
                        User-Friendly CMS – update in minutes
                      </span>
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
                  <svg
                    className="w-6 h-6 text-purple-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 8L21 12M21 12L17 16M21 12H3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-400">
                  Featured Hardware
                </h3>
                <div className="space-y-4 flex-grow">
                  <p className="text-white/80">
                    Premium hardware solutions designed for high-traffic areas
                    and daily use.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-white/80">
                        Wall-Mounted Sports Recognition Displays
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-white/80">
                        Classroom Interactive Boards
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-white/80">
                        Multi-Touch Kiosks for high-traffic areas
                      </span>
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
        <div className="space-y-8 sm:space-y-12 md:space-y-16 mb-10 sm:mb-16 md:mb-20">
          {/* School & Student Recognition - Content Left, Image Right */}
          <SchoolRecognitionSection />

          {/* Athletics & Sports Recognition - Image Left, Content Right */}
          <AthleticsRecognitionSection />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
