"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Searchable yearbooks are priceless.",
      text: "For years, we wanted to digitize our yearbooks to make them accessible to alumni, faculty, and students. The days of flipping through physical books to find one person are over. Each file is fully searchable by keyword, making it effortless to find specific names or photos. That feature alone is priceless.",
      name: "Matthew Rizzotti",
      title: "Alumni Development Officer",
      organization: "Archbishop Molloy High School – Briarwood, NY",
      logo: "/Yearbook Scanning/Logos/molloyhs2.png"
    },
    {
      quote: "High-resolution scans. Careful handling. Exceptional results.",
      text: "They scanned 80+ yearbooks and 300+ magazines, carefully picked up and returned every publication, and delivered perfect digital files for our website. Our constituents — especially those who lost their originals — are thrilled. We highly recommend digitizing your printed archives.",
      name: "Gregg Matalas",
      title: "Director of Marketing / Development",
      organization: "U.S. Merchant Marine Academy Alumni Association – Kings Point, NY",
      logo: "/Yearbook Scanning/Logos/usmmaalumni.png"
    },
    {
      quote: "Non-destructive scanning helped us preserve 60+ yearbooks.",
      text: "Their non-destructive yearbook scanning process allowed us to preserve our physical copies while making searchable digital versions available to alumni. The images are high quality and can even be used for social media and reunion materials. Responsive, cost-effective, and professional.",
      name: "Robert Lukevich",
      title: "",
      organization: "Bishop Blanchet High School – Seattle, WA",
      logo: "/Yearbook Scanning/Logos/bishopblanchet-1.png"
    },
    {
      quote: "From the 1920s to today — beautifully digitized.",
      text: "We digitized our entire collection spanning from the 1920s to present. There's no way we could have achieved this level of quality, speed, and affordability in-house. Alumni are thrilled to search and rediscover themselves. We couldn't recommend them more highly.",
      name: "Barbara Isacson",
      title: "",
      organization: "Bloomfield College",
      logo: "/Yearbook Scanning/Logos/bloomfield-1.png",
      logoClass: "w-28 h-16"
    },
    {
      quote: "Used daily across multiple departments.",
      text: "There isn't a day that goes by that we don't use our digital yearbooks. We verify alumni records, pull photos for reunions, highlight legacy families, and preserve history in case of damage or loss. This is an invaluable service. Every school should be scanning their yearbooks.",
      name: "Nancy E. Foulks",
      title: "Director of Alumni Relations",
      organization: "Union Catholic Regional High School",
      logo: "/Yearbook Scanning/Logos/unioncatholic.png"
    },
    {
      quote: "Professional. Careful. Highly recommended.",
      text: "Our yearbooks dated back to 1882 and many were deteriorating. They scanned every publication and returned them in the same condition. The high-quality digital files now help us engage alumni and preserve our school's rich history.",
      name: "Marc Spivak",
      title: "Director of Technology",
      organization: "The Wardlaw-Hartridge School – NJ",
      logo: "/Yearbook Scanning/Logos/whschool-svg.png",
      logoClass: "w-28 h-16"
    },
    {
      quote: "Over 100 books scanned with exceptional service.",
      text: "We scanned over 100 yearbooks and chose Yearbook Scanning Service for their pricing, nonprofit discount, and impressive scanning of inner page edges. The service was excellent, and we will continue using them for future volumes.",
      name: "Michael B. Hofmeister",
      title: "President",
      organization: "Franklin High School Alumni Association – MD",
      logo: "/Yearbook Scanning/Logos/franklinalumni1.png"
    },
    {
      quote: "A huge decision — and absolutely worth it.",
      text: "Scanning 60 years of yearbooks has benefited far more departments than we expected — alumni relations, admissions, institutional advancement, guidance, and development. The professional, non-destructive scanning process made all the difference.",
      name: "David Seidel",
      title: "",
      organization: "Bishop McGuinness Catholic High School – NC",
      logo: "/Yearbook Scanning/Logos/bmhs.png"
    }
  ];

  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setOffset((prev) => prev - 1);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setOffset((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (offset <= -testimonials.length) {
      setOffset(0);
    } else if (offset >= testimonials.length) {
      setOffset(0);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,158,0.03),transparent_50%)]" />
      
      <Container className="relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Testimonials
            </span>
          </h2>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: isMobile
                  ? `translateX(calc(${offset * 100}% + ${offset * 1.5}rem))`
                  : `translateX(calc(${offset * (100 / 2)}% + ${offset * 1.5}rem))`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-0.75rem)]"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col min-h-[380px]">
                    <div className="flex-grow">
                      <svg className="w-10 h-10 text-blue-500/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                        {testimonial.quote}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-sm">
                        {testimonial.text}
                      </p>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 mt-auto flex items-center gap-4">
                      <div className={`flex-shrink-0 relative ${testimonial.logoClass || 'w-20 h-14'}`}>
                        <Image
                          src={testimonial.logo}
                          alt={`${testimonial.organization} — yearbook scanning customer logo`}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                        {testimonial.title && (
                          <p className="text-xs text-foreground/60">{testimonial.title}</p>
                        )}
                        <p className="text-xs text-foreground/60">{testimonial.organization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-white shadow-xl border border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:scale-110 z-10 hidden md:block"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-white shadow-xl border border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:scale-110 z-10 hidden md:block"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div className="flex justify-center gap-2 mt-8 md:hidden">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
