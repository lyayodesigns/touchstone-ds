import React, { useState, useEffect, useRef } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Touchstone Digital Solutions transformed our athletics hall of fame. The interactive displays have brought our sports history to life in ways we never imagined.",
    author: "Michael Johnson",
    role: "Athletic Director",
    company: "Westfield High School",
    image: "/testimonial-1.jpg"
  },
  {
    quote: "Our students are incredibly proud of our new digital recognition wall. It's become a focal point of our campus tours and has significantly boosted school spirit.",
    author: "Sarah Thompson",
    role: "Principal",
    company: "Lincoln Academy",
    image: "/testimonial-2.jpg"
  },
  {
    quote: "The team at Touchstone was exceptional from start to finish. They understood our vision and delivered a hall of fame solution that exceeded our expectations.",
    author: "Robert Chen",
    role: "Alumni Relations",
    company: "Eastwood University",
    image: "/testimonial-3.jpg"
  },
  {
    quote: "Our community loves the new interactive hall of fame. It's not just a display, it's a storytelling platform that honors our history and inspires future generations.",
    author: "Jennifer Martinez",
    role: "Community Director",
    company: "Oakridge Foundation",
    image: "/testimonial-4.jpg"
  }
];

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  image,
}) => {
  return (
    <div className="flex-shrink-0 w-full md:w-[350px] bg-card rounded-lg shadow-xl group relative">
      {/* Single border that changes on hover */}
      <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-purple-500/30 transition-colors duration-300"></div>
      
      <div className="p-6 flex flex-col items-center text-center transform transition-all duration-300 group-hover:scale-[1.02] relative z-10">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 shadow-md mb-4">
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
            {author.charAt(0)}
          </div>
        </div>
        
        {/* Name and Role */}
        <h3 className="text-white font-bold text-lg">{author}</h3>
        <p className="text-purple-400 text-sm mb-4">{role}, {company}</p>
        
        {/* Quote */}
        <p className="text-white/80 text-sm leading-relaxed">{quote}</p>
        
        {/* Social Icons */}
        <div className="flex space-x-3 mt-4">
          <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
          <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
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
    setStartIndex((prev) => 
      (prev + 1) % (testimonials.length - visibleCount + 1) || 0
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
    <section className="py-16 w-full bg-card overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid opacity-30 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-spotlight -z-10"></div>
      
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-40 left-40 text-white/10 text-3xl">+</div>
      <div className="absolute bottom-40 right-40 text-white/10 text-3xl">+</div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white relative inline-block">
            TESTIMONIAL
            <div className="absolute left-0 -bottom-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-600"></div>
            <div className="absolute right-0 -bottom-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-600"></div>
          </h2>
        </div>

        <div className="relative">
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-card border border-white/10 shadow-lg text-white hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
            aria-label="Previous testimonials"
            disabled={startIndex === 0}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          
          {/* Testimonial Slider */}
          <div 
            ref={sliderRef}
            className="flex space-x-6 justify-center overflow-hidden px-10"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={startIndex + index}
                {...testimonial}
              />
            ))}
          </div>
          
          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-card border border-white/10 shadow-lg text-white hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
            aria-label="Next testimonials"
            disabled={startIndex >= testimonials.length - visibleCount}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.max(1, testimonials.length - visibleCount + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setStartIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === startIndex 
                    ? 'bg-purple-500 w-4' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
