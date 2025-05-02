import React from "react";

const DigitalHallOfFameSection: React.FC = () => {
  return (
    <section className="pt-12 pb-1 sm:py-8 md:py-12 lg:py-16 w-full bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative order-2 md:order-1 mt-2 sm:mt-0">
            <img
              src="/TDS Cover - 1.jpg"
              alt="Digital Hall of Fame Display"
              className="w-[85%] mx-auto rounded-lg sm:rounded-xl object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-lg font-medium text-foreground">
                Your school's story deserves more than a plaque—it deserves a spotlight.
              </p>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-3 sm:space-y-6 order-1 md:order-2">
            <h2 className="text-lg sm:text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-gradient-purple-blue">
                ✨ Elevate Your School's Legacy
              </span>{" "}
              with a Digital Hall of Fame
            </h2>

            <p className="text-base sm:text-lg text-foreground/80">
              Turn your school's rich history and proud achievements into an
              immersive digital experience. Our state-of-the-art Interactive
              Hall of Fame brings student success, alumni milestones, and
              championship moments to life—all in a sleek, modern display.
            </p>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <div className="mr-2 sm:mr-3 mt-1 text-primary">
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
                <span className="text-foreground/90">
                  Showcase records, rosters, and historic highlights with a{" "}
                  <span className="text-foreground font-medium">
                    dynamic, real-time platform
                  </span>
                  .
                </span>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 text-primary">
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
                  Replace outdated bulletin boards and static trophy cases with
                  a{" "}
                  <span className="text-foreground font-medium">
                    space-saving digital solution
                  </span>
                  .
                </p>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 text-primary">
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
                  Recognize donors, sponsors, and outstanding achievements with{" "}
                  <span className="text-foreground font-medium">
                    customizable branding
                  </span>
                  .
                </p>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 text-primary">
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
                  Engage students, faculty, and alumni with an{" "}
                  <span className="text-foreground font-medium">
                    interactive experience
                  </span>{" "}
                  that preserves your legacy.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalHallOfFameSection;
