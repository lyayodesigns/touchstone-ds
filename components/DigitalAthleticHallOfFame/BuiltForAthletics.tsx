"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const BuiltForAthletics = () => {
  const features = [
    {
      title: "Inductee profiles that tell the full story",
      description: "Each athletic hall of fame inductee gets a rich, multimedia profile featuring career stats, action photos, induction speeches, video highlights from old broadcasts, press clippings, and personal bios. Visitors can search by name, sport, induction year, or graduation class.",
      gradient: "from-blue-400 to-purple-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Induction class galleries",
      description: "Group inductees by year and let visitors walk through every class chronologically. Perfect for induction night ceremonies: project the class of 2026 directly from the same platform on the big screen.",
      gradient: "from-purple-400 to-pink-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Sport-by-sport organization",
      description: "Football, basketball, wrestling, swimming, track and field, soccer, baseball. Every sport gets its own dedicated section with team rosters, championship history, and standout athletes. Multi-sport athletes appear under each sport they competed in.",
      gradient: "from-pink-400 to-red-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
        </svg>
      )
    },
    {
      title: "Championship & records integration",
      description: "Pulls double duty as a digital trophy case and digital record boards. Conference titles, state championships, individual records, and team accomplishments all live alongside your inductees in one connected experience.",
      gradient: "from-red-400 to-orange-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Hall of fame committee tools",
      description: "Built-in nomination intake, voting workflows, and inductee draft profiles for your committee. No more Google Docs and spreadsheet chaos. Approve, schedule, and publish new inductees in minutes.",
      gradient: "from-orange-400 to-yellow-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
              Built specifically for athletic departments
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Most "hall of fame" software is generic. Ours isn't. Every feature is shaped by what athletic directors, sports information directors, and induction committees actually need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                {feature.title}
              </h3>

              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>

              <div className={`mt-6 h-1 w-full bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BuiltForAthletics;
