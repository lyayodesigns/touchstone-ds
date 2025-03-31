import React, { useState, useEffect, useRef } from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  logo?: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote:
      "Touchstone Digital Solutions transformed our athletics hall of fame. The interactive displays have brought our sports history to life in ways we never imagined.",
    author: "Brown University (RI)",
    role: "Athletic Director",
    company: "Westfield High School",
    image: "/testimonial-1.jpg",
    logo: "/clients/SHP.png"
  },
  {
    quote:
      "Our students are incredibly proud of our new digital recognition wall. It's become a focal point of our campus tours and has significantly boosted school spirit.",
    author: "Seton Hall Prep (NJ)",
    role: "Principal",
    company: "Lincoln Academy",
    image: "/testimonial-2.jpg",
    logo: "/clients/brown.png"
  },
  {
    quote:
      "The team at Touchstone was exceptional from start to finish. They understood our vision and delivered a hall of fame solution that exceeded our expectations.",
    author: "Mooresville High School (IN)",
    role: "Alumni Relations",
    company: "Eastwood University",
    image: "/testimonial-3.jpg",
    logo: "/clients/mooresville.png"
  },
];

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  image,
  logo,
}) => {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] bg-card rounded-lg shadow-xl group relative">
      {/* Single border that changes on hover */}
      <div className="absolute inset-0 rounded-lg border border-foreground/10 group-hover:border-purple-500/30 transition-colors duration-300"></div>

      <div className="p-4 sm:p-5 md:p-6 flex flex-col items-center text-center transform transition-all duration-500 ease-in-out group-hover:scale-[1.02] relative z-10">
        {/* Logo or Avatar */}
        {logo ? (
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-3 sm:mb-4 flex items-center justify-center">
            <img src={logo} alt={`${company} logo`} className="max-w-full max-h-full object-contain" />
          </div>
        ) : (
          <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-foreground/10 shadow-md mb-3 sm:mb-4">
            <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center text-foreground text-lg sm:text-xl font-bold">
              {author.charAt(0)}
            </div>
          </div>
        )}

        {/* Name and Role */}
        <h3 className="text-foreground font-bold text-base sm:text-lg">{author}</h3>
        <p className="text-purple-400 text-xs sm:text-sm mb-3 sm:mb-4">
          {role}, {company}
        </p>

        {/* Quote */}
        <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
          {quote}
        </p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const visibleCount = 3; // Number of visible testimonials at once

  // Auto-advance the slider
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, startIndex]);

  const handleNext = () => {
    setStartIndex(
      (prev) => (prev + 1) % (testimonials.length - visibleCount + 1) || 0
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - visibleCount) : prev - 1
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Get visible testimonials
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <section className="py-8 sm:py-16 md:py-24 w-full bg-background relative overflow-hidden">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            What{" "}
            <span className="text-transparent text-gradient-purple-blue">
              Our Clients
            </span>{" "}
            Say
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Hear from schools and organizations that have transformed their recognition displays with Touchstone.
          </p>
        </div>

        <div className="relative px-4 sm:px-6 md:px-8 flex items-center">
          {/* Navigation Arrows - Adjusted for touch targets */}
          <button
            onClick={handlePrev}
            className="flex-shrink-0 -ml-2 sm:-ml-3 z-20 w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur border border-foreground/10 shadow-lg text-foreground hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300 touch-manipulation"
            aria-label="Previous testimonials"
            disabled={startIndex === 0}
          >
            <svg
              className="w-6 h-6 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Testimonial Cards - Improved mobile layout */}
          <div
            ref={sliderRef}
            className="flex-1 flex gap-4 sm:gap-6 items-center justify-center overflow-hidden px-2 sm:px-4 transition-transform duration-500 ease-in-out"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={startIndex + index}
                {...testimonial}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex-shrink-0 -mr-2 sm:-mr-3 z-20 w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur border border-foreground/10 shadow-lg text-foreground hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300 touch-manipulation"
            aria-label="Next testimonials"
            disabled={startIndex >= testimonials.length - visibleCount}
          >
            <svg
              className="w-6 h-6 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
