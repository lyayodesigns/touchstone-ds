"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Sparkles, Clock, Archive, Shield, Film, TrendingUp } from 'lucide-react';

const KeyFeaturesBenefits = () => {
  const benefits = [
    {
      title: "Modern Design That Engages",
      description: "Create lasting impressions during tours, recruiting, and open houses. Digital boards showcase innovation and professionalism that resonate with students, families, and stakeholders. Most importantly, makes alumni proud!",
      icon: Sparkles,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Time and Cost Savings",
      points: [
        "Save hundreds of staff hours annually with no manual updates or installations",
        "Cut printing and material costs — no vinyl, magnets, or nameplates needed",
        "Automate record entry and organization to streamline workflows",
        "Use one system for records, announcements, event schedules, and sponsor messages"
      ],
      icon: Clock,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Preservation of History",
      description: "Electronic record boards will ensure that your institution does not become a forgotten thing. In comparison to the physical boards in which the previous records are lost, our electronic records management system will have a complete and searchable record of all accomplishments. Decades later, graduates will be able to review their data.",
      icon: Archive,
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Compliance and Security",
      description: "Our system includes enterprise-grade security features:",
      points: [
        "Role-based access aligned with compliance standards",
        "Encrypted storage that meets FERPA and PII requirements",
        "Detailed audit logs for all access and updates",
        "Ongoing security updates to keep your data protected"
      ],
      icon: Shield,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Multimedia Integration",
      description: "Go beyond text-only records with rich visual content:",
      points: [
        "Add athlete photos and team logos",
        "Display video highlights of record performances",
        "Integrate live social media feeds",
        "Link to external systems and databases seamlessly"
      ],
      icon: Film,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Scalability and Flexibility",
      description: "Whether you're managing one facility or many, our system grows with you. Easily add locations, users, or displays without extra hassle.",
      icon: TrendingUp,
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
              Why Touchstone Digital Solutions is Special
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Major Characteristics and Advantages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${benefit.gradient}`}>
                {benefit.title}
              </h3>
              
              {benefit.description && (
                <p className="text-gray-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>
              )}
              
              {benefit.points && (
                <ul className="space-y-3">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${benefit.gradient} mt-2 flex-shrink-0`}></div>
                      <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyFeaturesBenefits;
