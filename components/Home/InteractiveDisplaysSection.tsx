import React from "react";

const InteractiveDisplaysSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-16 md:py-24 w-full bg-background">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block sm:inline">
            🖥️ Interactive Displays
          </span>
          <span className="text-foreground block sm:inline">{" That Captivate"}</span>
        </h2>
        <p className="text-lg text-foreground/70 text-center max-w-2xl mx-auto mb-6">
          Engage students, athletes, and visitors with cutting-edge touchscreen technology. Our accessibility-compliant displays and interactive recognition software make every interaction seamless and memorable.
        </p>
        {/* Animated partition */}
        <div className="flex justify-center items-center mb-10">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-1 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"
                style={{ 
                  animationDelay: `${i * 200}ms`,
                  opacity: 0.7 + (i * 0.05)
                }}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 order-2 md:order-1">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-cyan-400">
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
                <p className="text-foreground/70">
                  <span className="text-foreground font-medium">
                    Athletic Program Showcase
                  </span> – Honor team success with dynamic rosters, championship highlights, records, player spotlights, and so much more.
                </p>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 text-cyan-400">
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
                <p className="text-foreground/70">
                  <span className="text-foreground font-medium">
                    Touchscreen HOF Displays
                  </span> – Celebrate legends with real-time updates and rich multimedia content.
                </p>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 text-cyan-400">
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
                <p className="text-foreground/70">
                  <span className="text-foreground font-medium">
                    Interactive School Displays
                  </span> – Perfect for locker rooms, lobbies, gyms, and auditoriums, bringing history and achievements to life.
                </p>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 text-cyan-400">
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
                <p className="text-foreground/70">
                  <span className="text-foreground font-medium">
                    Virtual Trophy Case
                  </span> – A modern way to display championships and school pride—without the dust.
                </p>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 text-cyan-400">
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
                <p className="text-foreground/70">
                  <span className="text-foreground font-medium">
                    Digital Record Boards
                  </span> – Keep alumni records up to date automatically, ensuring every milestone is captured.
                </p>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 text-cyan-400">
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
                <p className="text-foreground/70">
                  <span className="text-foreground font-medium">
                    Interactive Yearbooks
                  </span> – Relive school memories with digital pages that feature photos, videos, and student stories.
                </p>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 text-cyan-400">
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
                <p className="text-foreground/70">
                  <span className="text-foreground font-medium">
                    Digital Donor Walls
                  </span> – Celebrate the contributors who make a difference with a dynamic, engaging display.
                </p>
              </li>
            </ul>
          </div>

          {/* Right side - Image/Visual */}
          <div className="relative order-1 md:order-2 flex items-center justify-center">
            {/* Full image display without background card */}
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <img
                src="/TDS Cover - 5.jpg"
                alt="Interactive Display"
                className="w-full h-auto object-contain"
              />
              {/* Touch interaction visualization */}
              <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-cyan-400/20 animate-ping-slow"></div>
              <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-cyan-400/40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDisplaysSection;
