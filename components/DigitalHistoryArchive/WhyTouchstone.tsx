"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { GraduationCap, Sparkles, HandHeart, Palette, Users, HeadphonesIcon } from 'lucide-react';

const WhyTouchstone = () => {
  const reasons = [
    {
      title: "Proven Expertise",
      description: "Touchstone Digital Solutions has helped hundreds of institutions preserve and share their most valuable assets, from Ivy League universities to small high schools. We bring experience across universities, museums, nonprofits, corporations, and professional sports organizations. Our team provides the hands-on support that clients value and trust.",
      Icon: GraduationCap,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Industry Innovators",
      description: "We stay at the forefront of software, hardware, and service. When you partner with Touchstone, you gain access to best in class solutions at exceptional value. From PDF viewers and AI advancements to the latest touchscreen technology, Touchstone delivers.",
      Icon: Sparkles,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "White Glove Service",
      description: "Whether we are transferring data, building your custom wall, or delivering hardware to your school, Touchstone takes the work off your plate so you can focus on what matters most, leading the next generation. We make it simple to go digital and celebrate your history.",
      Icon: HandHeart,
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Beautifully Designed Interface",
      description: "Our platform is trusted by many of America's leading institutions. Designed by our Emmy nominated team, it is recognized for its visual appeal and its seamless alignment with each school's brand guidelines. The result is an engaging, intuitive experience that reflects your institution's identity while remaining easy to navigate.",
      Icon: Palette,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Family Owned and Operated",
      description: "When you partner with Touchstone, you become part of a family that puts you first. If a question or issue arises, you can email, call, text, or FaceTime a trusted member of our team who knows you and your institution. Come join the Touchstone family and let's build something meaningful together.",
      Icon: Users,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "24 7 Customer Support",
      description: "Day or night, you can call, text, email, or FaceTime us, or we will even come in person. Our team will move mountains to meet your needs, hit your deadlines, and resolve any issues quickly and effectively. Ain't mountain high, ain't valley low.",
      Icon: HeadphonesIcon,
      gradient: "from-pink-500 to-blue-500"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Touchstone Digital Solutions: Heritage Digitalization and Archive Management Leaders
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reason to Partner with Touchstone Digital Solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${reason.gradient} flex items-center justify-center mb-6`}>
                <reason.Icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${reason.gradient}`}>
                {reason.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyTouchstone;
