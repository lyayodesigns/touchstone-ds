"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const HowToCreate = () => {
  const steps = [
    {
      step: "1",
      title: "Discover & Strategize",
      description: "The process begins with a discovery session where we thoroughly delve into your goals, audiences, and brand.",
      icon: "🔍",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      step: "2", 
      title: "Design",
      description: "A custom interface that truly represents your organization's identity will be developed by our creatives.",
      icon: "🎨",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      step: "3",
      title: "Develop & Integrate",
      description: "The technical team executes the building of your wall with our robust digital donor wall software, offering seamless integration with your existing donor database",
      icon: "⚙️",
      gradient: "from-pink-400 to-red-500"
    },
    {
      step: "4",
      title: "Deploy & Launch",
      description: "We install the hardware (large-format screens, touchscreen kiosks) and train your team fully on the use of the content management system.",
      icon: "🚀",
      gradient: "from-red-400 to-orange-500"
    },
    {
      step: "5",
      title: "Support & Evolve",
      description: "We provide support through the years and partner with you to maintain an updated, interesting donor wall.",
      icon: "🤝",
      gradient: "from-orange-400 to-blue-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50/50">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              How to Create a Digital Donor Wall with Touchstone Digital Solutions
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Are you thinking about creating a digital donor wall? Our process is truly collaborative, seamless, barrier-free; from inception through success.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-pink-200 via-red-200 to-orange-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content card */}
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 h-80 flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  {/* Step number circle inside card */}
                  <div className="mx-auto w-14 h-14 mb-4 flex items-center justify-center">
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-lg font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  
                  <h3 className={`text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm flex-grow">
                    {step.description}
                  </p>
                </motion.div>
                
                {/* Mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-purple-200 to-pink-200"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowToCreate;
