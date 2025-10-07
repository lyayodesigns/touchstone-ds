"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhyTouchstone = () => {
  const features = [
    {
      title: "Stunning, Customizable Designs",
      description: "Choose from a huge range of contemporary templates to fit your brand or personal style. We also provide specialized design work for completely custom interactive digital trophy cases.",
      icon: "🎨"
    },
    {
      title: "Multimedia Integration",
      description: "Don't just display the trophy; show that winning moment. Embed videos directly from YouTube and Vimeo into your case to tell the complete story.",
      icon: "🎬"
    },
    {
      title: "Interactive and Engaging",
      description: "Turn your display into an interactive digital trophy case. Viewers can click on awards to learn more, watch relevant videos, and follow the journey chronologically.",
      icon: "👆"
    },
    {
      title: "Touchscreen Ready",
      description: "Perfect for physical installations. Our displays work beautifully on kiosks and large format screens, creating an imposing touchscreen digital trophy case for lobbies and facilities.",
      icon: "📱"
    },
    {
      title: "Secure & Permanent",
      description: "Data is securely stored in the cloud with backup copies in various locations. No more worrying about fire, loss, or flood. We guard your legacy.",
      icon: "🔒"
    },
    {
      title: "Beyond Static Image Gallery",
      description: "While others offer simple templates, we provide a robust ecosystem for engagement and preservation that grows with your achievements.",
      icon: "🚀"
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
              Why Touchstone Digital Trophy Case Software?
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Beyond a static image gallery - we provide a robust ecosystem for engagement and preservation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                {feature.title}
              </h3>
              <p className="text-foreground/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              This is where we truly shine
            </h3>
            <p className="text-foreground/80 text-lg">
              While others offer simple templates, we provide a strong ecosystem for engagement and preservation. 
              Our platform creates a living, breathing showcase that tells the complete story of every achievement, 
              making it accessible from anywhere in the world.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyTouchstone;
