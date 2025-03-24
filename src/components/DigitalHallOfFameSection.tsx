import React from "react";

const DigitalHallOfFameSection: React.FC = () => {
  return (
    <section className="py-2 sm:py-12 md:py-16 lg:py-24 w-full bg-gradient-to-b from-background to-background/90">
      <div className="container px-1 sm:px-4 md:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative order-2 md:order-1 mt-2 sm:mt-0">
            <div className="aspect-[4/3] md:aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg sm:rounded-xl overflow-hidden border border-white/10 shadow-glow-sm">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-30"></div>

              {/* Mockup content */}
              <div className="absolute inset-0 flex flex-col p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Digital Hall of Fame
                  </h3>
                  <p className="text-sm text-white/70">
                    Touchstone Interactive Display
                  </p>
                </div>

                <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-lg p-2 flex flex-col items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-purple-500/30 mb-1 sm:mb-2"></div>
                      <div className="w-full h-1.5 sm:h-2 bg-white/20 rounded-full"></div>
                      <div className="w-2/3 h-1.5 sm:h-2 bg-white/20 rounded-full mt-1"></div>
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
          <div className="space-y-3 sm:space-y-6 order-1 md:order-2">
            <h2 className="text-lg sm:text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                ✨ Elevate Your School's Legacy
              </span>{" "}
              with a Digital Hall of Fame
            </h2>

            <p className="text-base sm:text-lg text-white/80">
              Turn your school's rich history and proud achievements into an immersive digital experience. Our state-of-the-art Interactive Hall of Fame brings student success, alumni milestones, and championship moments to life—all in a sleek, modern display.
            </p>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <div className="mr-2 sm:mr-3 mt-1 text-purple-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="sm:w-[18px] sm:h-[18px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-white/70">
                  Showcase records, rosters, and historic highlights with a{" "}
                  <span className="text-white font-medium">
                    dynamic, real-time platform
                  </span>.
                </p>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 text-purple-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/70">
                  Replace outdated bulletin boards and static trophy cases with a{" "}
                  <span className="text-white font-medium">
                    space-saving digital solution
                  </span>.
                </p>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 text-purple-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/70">
                  Recognize donors, sponsors, and outstanding achievements with{" "}
                  <span className="text-white font-medium">
                    customizable branding
                  </span>.
                </p>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 text-purple-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/70">
                  Engage students, faculty, and alumni with an{" "}
                  <span className="text-white font-medium">
                    interactive experience
                  </span>{" "}
                  that preserves your legacy.
                </p>
              </li>
            </ul>

            <p className="text-lg font-medium text-white">
              Your school's story deserves more than a plaque—it deserves a spotlight.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalHallOfFameSection;
