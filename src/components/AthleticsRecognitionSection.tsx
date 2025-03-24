import React from "react";

const AthleticsRecognitionSection: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16 w-full">
      <div className="container px-3 sm:px-4 md:px-6 mx-auto max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw]">
        <div className="flex flex-col md:flex-row-reverse gap-4 sm:gap-6 md:gap-8 items-center">
          {/* Content */}
          <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-purple-500/20 p-1.5 sm:p-2 rounded-lg">
                <svg
                  className="w-5 h-5 text-purple-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-400">
                🏅 Athletics & Sports Recognition That Wows Crowds
              </h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-white/80">
                For athletic directors and coaches, our Sports Hall of fame
                software is a game-changer:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1 flex-shrink-0">•</div>
                  <p className="text-white/80">
                    Build a customizable digital sports Hall of Fame for
                    football programs, swim teams, or basketball leagues.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1 flex-shrink-0">•</div>
                  <p className="text-white/80">
                    Display real-time stats updates during games with automated
                    athlete stats displays.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1 flex-shrink-0">•</div>
                  <p className="text-white/80">
                    Honour legends with touchscreen baseball stats display or
                    interactive football achievement walls—complete with sponsor
                    logos.
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-purple-500/10 p-3 sm:p-4 md:p-5 rounded-lg space-y-2 sm:space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-purple-400 uppercase tracking-wider">
                Top Features for Sports Teams:
              </h4>
              <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                <p className="text-white/80 text-sm flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-purple-400 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  🔥 Real-Time Stats Update Displays
                </p>
                <p className="text-white/80 text-sm flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-purple-400 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  🔥 Multi-Sport Recognition System (football, swimming,
                  basketball, and more)
                </p>
                <p className="text-white/80 text-sm flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-purple-400 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  🔥 Stadium Hall of Fame Technology to energize fans
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="bg-card rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 shadow-glow-sm h-full">
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Sports Recognition Display"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleticsRecognitionSection;
