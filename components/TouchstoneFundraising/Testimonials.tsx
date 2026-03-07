"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "$23,000",
      org: "Pelham HS",
      logo: "/touchstone fundraising/Pelham HS Lacrosse.png",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      quote: "$28,000",
      org: "Maine South HS",
      logo: "/touchstone fundraising/Maine South HS Baseball.png",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      quote: "$17,000",
      org: "Augusta University",
      logo: "/touchstone fundraising/Augusta University Softball.png",
      gradient: "from-pink-400 to-blue-500"
    },
    {
      quote: "$19,000",
      org: "St. Thomas More",
      logo: "/touchstone fundraising/1.png",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      quote: "$37,000",
      org: "Bethany Lutheran",
      logo: "/touchstone fundraising/2.png",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      quote: "$31,000",
      org: "Aurora University",
      logo: "/touchstone fundraising/3.png",
      gradient: "from-pink-400 to-blue-500"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
      </div>
      
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
              Trusted by Mission-Driven Organizations Nationwide
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Logo */}
              <div className="mb-6 flex items-center justify-center h-24">
                <img 
                  src={testimonial.logo} 
                  alt={testimonial.org}
                  className={`max-h-full max-w-full object-contain ${index === 2 ? 'scale-150' : ''}`}
                />
              </div>
              
              <p className="text-gray-800 leading-relaxed font-medium text-lg mb-6 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="border-t border-gray-100 pt-4 w-full">
                <p className="text-gray-700 font-semibold">
                  {testimonial.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
