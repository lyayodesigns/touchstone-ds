"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const TheSolution = () => {
  const features = [
    {
      title: "Futuristic Features",
      items: [
        "Show scrolling lists of records with impressive transition effects",
        "Present pictures and video of the top record holding performances",
        "Combine real-time updates and live data feeds"
      ],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Easy & Instant Updates",
      items: [
        "Update records anytime, from anywhere",
        "Automatically notify record holders when updates go live",
        "No more binders, PDFs, or printed sheets"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Records on the Go",
      items: [
        "View records on phones, tablets, laptops, or displays",
        "Share your record board via text, email, or social media",
        "Embed your board directly into your school's website or app"
      ],
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Unlimited Record Capacity",
      items: [
        "Catalogue centuries of historical successes without wall space constraints",
        "Display record boards for every category and every sport",
        "Search tens of thousands of entries and centuries of records in seconds"
      ],
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100/60 rounded-full text-sm font-medium text-gray-600 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            The Solution
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Meet Digital Record Boards:<br />The Future of Records Display
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Touchstone Digital Solutions makes it easy to update athletic records and display them beautifully, both in person and online. Schools can use our platform as a central hub for records across every sport. Coaches can update results directly, athletes can see what they need to beat, and alumni can stay connected to their school's legacy.
          </p>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-900">
            What Our digital record boards will contain:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <h4 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                    {feature.title}
                  </h4>
                </div>
                
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} mt-2 flex-shrink-0`}></div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TheSolution;
