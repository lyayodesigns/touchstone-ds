import React, { useEffect, useState, useRef } from "react";
import { Palette, School, Lightbulb, Monitor } from "lucide-react";

const CustomPlatformSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 w-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-blue-500/10 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full blur-3xl -z-10"></div>

      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div
          className={`max-w-4xl mx-auto text-center mb-10 sm:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text text-gradient-purple-blue">
              A Fully Custom Platform,
            </span>
            <span className="text-foreground"> Designed Just for You</span>
          </h2>
        </div>

        <div className="bg-background/30 backdrop-blur-sm border border-foreground/10 rounded-xl p-6 sm:p-8 md:p-10 shadow-glow-sm">
          <p
            className={`text-base sm:text-lg text-foreground/80 mb-8 transition-all duration-700 delay-[200ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            At Touchstone Digital Solutions, we don't believe in one-size-fits-all. Your school has a unique story, and your Digital Hall of Fame should reflect that. That's why we start every project with the end in mind, ensuring every detail is tailored to your school's legacy, culture, and vision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: <Palette className="h-6 w-6 sm:h-7 sm:w-7" />,
                title: "Design-First Approach",
                description:
                  "We start with pen to paper, carefully mapping out your Hall of Fame to be as impactful, engaging, and intuitive as possible. From layout to branding, every element is thoughtfully crafted before a single line of code is written.",
                delay: "300ms",
              },
              {
                icon: <School className="h-6 w-6 sm:h-7 sm:w-7" />,
                title: "Built for Your School, Not Just Any School",
                description:
                  "No two institutions are the same—so why should their recognition platforms be? Whether you need a sleek, interactive athletic showcase or a donor wall that commands attention, we build a fully customized experience from the ground up.",
                delay: "400ms",
              },
              {
                icon: <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7" />,
                title: "No Stone Unturned",
                description:
                  "Our process ensures that every record, milestone, and moment is captured flawlessly. We work closely with you to make sure nothing gets left behind—because your school's legacy deserves nothing less.",
                delay: "500ms",
              },
              {
                icon: <Monitor className="h-6 w-6 sm:h-7 sm:w-7" />,
                title: "Seamless Software Meets Stunning Design",
                description:
                  "The difference isn't just in our technology—it's in the details. Our software is powerful, but it's the premium look and feel that makes our platform truly stand out.",
                delay: "600ms",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-background/5 border border-foreground/10 rounded-lg p-5 sm:p-6 hover:bg-background/10 hover:border-purple-500/30 transition-all duration-300 group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: item.delay }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg text-purple-400 transition-all duration-300 group-hover:text-purple-300 group-hover:bg-purple-500/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-base sm:text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-8 sm:mt-10 text-center transition-all duration-700 delay-[700ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-foreground/80 text-base sm:text-lg mb-2">
              From concept to completion, we create a one-of-a-kind Hall of Fame that feels like a natural extension of your school—not just another display.
            </p>
            <p className="text-foreground font-medium text-lg sm:text-xl">
              Let's build something unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPlatformSection;
