"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { GraduationCap, School, Users, Building2, Stethoscope, Trophy } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      title: "Universities and Colleges",
      features: [
        "Showcase athletic achievements and victories",
        "Highlight academic awards and honors",
        "Maintain searchable alumni profiles to support engagement",
        "Attract top recruits with impressive, high-tech facilities"
      ],
      icon: GraduationCap,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "High Schools",
      features: [
        "Recognize student-athlete accomplishments",
        "Preserve school history and traditions",
        "Engage parents and the community through shared updates",
        "Support fundraising with rotating sponsor features"
      ],
      icon: School,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Community Centers and Recreation Facilities",
      features: [
        "Display swimming records and competition results",
        "Celebrate member achievements and milestones",
        "Share class schedules and facility announcements",
        "Highlight community impact and involvement"
      ],
      icon: Users,
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Corporate Offices and Organizations",
      features: [
        "Track and display employee milestones and performance",
        "Celebrate sales goals, anniversaries, and team wins",
        "Promote a culture of recognition and motivation",
        "Use digital boards as inspirational workplace tools"
      ],
      icon: Building2,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Medical and Professional Organizations",
      features: [
        "Archive staff qualifications and certifications",
        "Present institutional performance metrics",
        "Maintain secure, compliant records",
        "Support accreditation and regulatory visibility"
      ],
      icon: Stethoscope,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Club Sports and Associations",
      features: [
        "Highlight athlete stats, wins, and milestones",
        "Share schedules, scores, and updates in real time",
        "Strengthen engagement with players, families, and fans",
        "Organize and preserve records across multiple teams and seasons"
      ],
      icon: Trophy,
      gradient: "from-pink-500 to-blue-500"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Digital Record Boards Across Institutions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use Cases and Industry Applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center mb-6`}>
                <useCase.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className={`text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${useCase.gradient}`}>
                {useCase.title}
              </h3>
              
              <ul className="space-y-3">
                {useCase.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${useCase.gradient} mt-2 flex-shrink-0`}></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UseCases;
