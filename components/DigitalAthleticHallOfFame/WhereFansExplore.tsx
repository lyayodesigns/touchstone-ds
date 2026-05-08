"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhereFansExplore = () => {
  const places = [
    {
      title: "In the lobby",
      description: "A 65\" or 75\" touchscreen invites walk-up exploration.",
      gradient: "from-blue-400 to-purple-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h6m0 0l-3-3m3 3l-3 3M3 12V7a2 2 0 012-2h12a2 2 0 012 2v3" />
        </svg>
      )
    },
    {
      title: "In the gymnasium",
      description: "Visible from the bleachers during home games.",
      gradient: "from-purple-400 to-pink-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "On the website",
      description: "Every inductee profile has its own shareable URL.",
      gradient: "from-pink-400 to-red-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 015.656 0l1.415 1.415a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656m-3.172-3.172a4 4 0 00-5.656 0l-1.415 1.415a4 4 0 000 5.656l3 3a4 4 0 005.656-5.656" />
        </svg>
      )
    },
    {
      title: "On phones",
      description: "Alumni scan a QR code and continue browsing on the bus ride home.",
      gradient: "from-red-400 to-orange-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "At induction night",
      description: "The same platform powers your ceremony slideshow.",
      gradient: "from-orange-400 to-yellow-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l-2 0m18 0l-2 0M5 5l-1.5-1.5M19 19l1.5 1.5M5 19l-1.5 1.5M19 5l1.5-1.5M12 19v2m0-18v2M12 6a6 6 0 100 12 6 6 0 000-12z" />
        </svg>
      )
    }
  ];

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
              Designed for the way fans actually explore
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Your athletic hall of fame doesn't just sit on a wall. It travels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {places.map((place, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`mx-auto w-12 h-12 rounded-xl bg-gradient-to-r ${place.gradient} flex items-center justify-center text-white mb-4`}>
                {place.icon}
              </div>
              <h3 className={`text-base font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${place.gradient}`}>
                {place.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {place.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/80 text-lg font-medium">
            One platform. One source of truth. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-bold">Every screen, every device, every visitor.</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhereFansExplore;
