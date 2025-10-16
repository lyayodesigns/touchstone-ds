"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhoIsItFor = () => {
  const getBenefitsGradient = (gradient) => {
    if (gradient === "from-blue-400 to-purple-500") return "from-blue-50 to-purple-50";
    if (gradient === "from-purple-400 to-pink-500") return "from-purple-50 to-pink-50";
    if (gradient === "from-pink-400 to-blue-500") return "from-pink-50 to-blue-50";
    return gradient;
  };

  const audiences = [
    {
      title: "Schools & Universities",
      subtitle: "The Ultimate High School Digital Trophy Case",
      description: "Stop letting your school's history fade in a locked cabinet. Create a permanent digital trophy case display for your:",
      features: [
        "Athletic Departments: Honor championship teams, MVP athletes, and hall-of-fame coaches",
        "Academics: Showcase National Merit Scholars, science fair winners, and debate champions",
        "Arts & Clubs: Celebrate achievements of your band, theater troupe, and robotics club"
      ],
      benefits: "Boost school spirit, attract new students, and provide alumni with a lifelong connection to their achievements.",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      title: "Athletes & Teams",
      subtitle: "Your Personal Athlete Digital Trophy Case",
      description: "From youth leagues to the pros, every athlete should have a place to showcase their journey. Our platform acts as an online athlete trophy case.",
      features: [
        "Amateur Athletes: Build a compelling portfolio for college recruiters. Highlight your development over seasons",
        "Professional Athletes: Build an audience by honoring the legacy and milestones of your career",
        "Teams: Establish a shared space for season highlights, building camaraderie and winning culture"
      ],
      benefits: "Create a professional showcase that tells your complete athletic story.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Corporations & Organizations",
      subtitle: "Foster a Culture of Recognition",
      description: "Foster a culture of appreciation and recognition within your company.",
      features: [
        "Employee of the Month/Year: Bring your recognition program into the modern age",
        "Sales Leaderboards: Create a dynamic and motivational digital trophy case display for top performers",
        "Project Milestones: Celebrate successful launches of major company initiatives"
      ],
      benefits: "Increase employee engagement and create a lasting culture of excellence.",
      gradient: "from-pink-400 to-blue-500"
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
              Who Is a Digital Trophy Case Designed For?
            </span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${audience.gradient} flex items-center justify-center mr-4 flex-shrink-0`}>
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${audience.gradient} flex items-center gap-2`}>
                      {audience.title}
                      {audience.title === "Schools & Universities" && (
                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                        </svg>
                      )}
                    </h3>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground/80 mb-4">
                    {audience.subtitle}
                  </h4>
                  <p className="text-foreground/70 mb-6">
                    {audience.description}
                  </p>
                </div>
                
                <div>
                  <div className="space-y-4 mb-6">
                    {audience.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${audience.gradient} flex items-center justify-center mt-0.5 flex-shrink-0`}>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-foreground/80 text-sm">
                          <span className="font-semibold">{feature.split(':')[0]}:</span>
                          {feature.split(':')[1]}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`bg-gradient-to-r ${getBenefitsGradient(audience.gradient)} p-4 rounded-lg`}>
                    <p className="text-sm font-medium text-foreground/80">
                      <span className="font-bold">Benefits:</span> {audience.benefits}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhoIsItFor;
