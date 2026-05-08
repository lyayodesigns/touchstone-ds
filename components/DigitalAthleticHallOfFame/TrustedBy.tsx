"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const testimonials = [
  {
    quote: "Touchstone took our athletic history, including boxes of old programs, dusty plaques, and decades of clippings, and turned it into a living, interactive experience our alumni actually visit and explore.",
    author: "Seton Hall Prep",
    location: "NJ",
    role: "Athletic Director",
    logo: "/clients/SHP.avif",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    quote: "When recruits visit our facilities, they don't just see trophies; they experience the history of our program in a dynamic, interactive way. It makes an impact that a traditional display never could.",
    author: "Brown University",
    location: "RI",
    role: "Associate Director of Athletics",
    logo: "/clients/brown.avif",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    quote: "This is more than just a display; it's a storytelling tool. Our students don't just see names and pictures; they see the legacy they're part of and the greatness they can aspire to.",
    author: "Mooresville High School",
    location: "IN",
    role: "Athletic Director",
    logo: "/clients/mooresville.avif",
    gradient: "from-pink-400 to-red-500"
  }
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-gray-50/50">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Trusted by 150 of the nation's best athletic programs
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`h-1 w-12 bg-gradient-to-r ${t.gradient} rounded-full mb-6`}></div>
              <svg className="w-8 h-8 text-purple-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-foreground/80 leading-relaxed mb-6 flex-grow">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <img src={t.logo} alt={`${t.author} logo`} loading="lazy" className="max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{t.author}</h3>
                  <p className="text-foreground/60 text-sm">{t.role} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustedBy;
