"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const CustomerSuccessStories = () => {
  const testimonials = [
    {
      quote: "We substituted three record boards that were outdated with the digital solution of Touchstone. As early as during the first week, we found lost records (lost 30 years ago). Records are now updated in real time by our coaches and recruits are enthralled with the professional on-stage presentation. It has revolutionized the recruitment process.",
      author: "Athletics Director",
      organization: "Major University",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      quote: "The automatic ranking system helps us to save 5+ hours per week of our staff. We used to print new plaques on a monthly basis and then automated it. Members are fond of the touch-screen interactivity - they are always looking at successes and capturing pictures.",
      author: "Facility Manager",
      organization: "Community Center",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      quote: "When we started using digital record boards in our schools, it brought about a common way in which we put together our achievements. More students are involved, parents enjoy watching their children being known and the system has increased the school spirit so much.",
      author: "Coordinator of Technology",
      organization: "High School District",
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
              Customer Success Stories
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Instant Establishments Already Remaking Records Present
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${testimonial.gradient} mb-6`}></div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${testimonial.gradient}`}>
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonial.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CustomerSuccessStories;
