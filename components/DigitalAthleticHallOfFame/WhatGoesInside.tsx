"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhatGoesInside = () => {
  const items = [
    { title: "Inductees", description: "Unlimited, with photos, video, stats, and bios.", gradient: "from-blue-400 to-purple-500" },
    { title: "Induction classes", description: "Organized by year, browsable as cohorts.", gradient: "from-purple-400 to-pink-500" },
    { title: "Championship teams", description: "Full rosters, season recaps, game highlights.", gradient: "from-pink-400 to-red-500" },
    { title: "Individual records", description: "Auto-ranking school and program records.", gradient: "from-red-400 to-orange-500" },
    { title: "Coaches & contributors", description: "Head coaches, longtime staff, and program builders.", gradient: "from-orange-400 to-yellow-500" },
    { title: "Sport histories", description: "Origin stories, milestone seasons, retired numbers.", gradient: "from-yellow-400 to-green-500" },
    { title: "Letters & memorabilia", description: "Scanned newspaper clippings, programs, jerseys.", gradient: "from-green-400 to-blue-500" },
    { title: "Induction ceremony archive", description: "Speeches, photos, and videos from every banquet.", gradient: "from-blue-400 to-purple-500" }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
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
              What goes inside your digital athletic hall of fame
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Everything that tells the full story of your program, under one roof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} mb-4`}></div>
              <h3 className={`text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                {item.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatGoesInside;
