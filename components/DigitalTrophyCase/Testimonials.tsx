"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We were looking for a modern way to honor our student-athletes beyond a line of text in a yearbook. The high school digital trophy case from Touchstone has been a phenomenal success. Parents and alumni love being able to relive these moments.",
      author: "Sarah J.",
      title: "Athletic Director",
      organization: "Midwest High School",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      quote: "When it comes to triathlon, my medals are only half the story. With the digital trophy case Strava sync, I can display my podium finishes alongside GPS data and split times from the race. This is the ideal athlete digital trophy case for the contemporary endurance competitor.",
      author: "Mark R.",
      title: "Amateur Triathlete",
      organization: "",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      quote: "The new interactive digital award case in our corporate lobby has become a true crown jewel as it pushes our sales force into action and awes the visiting clients. We have never made a better cultural investment.",
      author: "David L.",
      title: "CEO",
      organization: "Tech Innovations Inc.",
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
              Testimonials: Stories of Success
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            See how organizations and individuals are transforming their recognition displays with our digital trophy case software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-4xl text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                "
              </div>
              
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.gradient}`}></div>
              
              <div className="relative z-10">
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className={`font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r ${testimonial.gradient}`}>
                    {testimonial.author}
                  </h4>
                  <p className="text-foreground/70 font-medium">
                    {testimonial.title}
                  </p>
                  {testimonial.organization && (
                    <p className="text-foreground/60 text-sm">
                      {testimonial.organization}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
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
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-200/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Join Thousands of Satisfied Users
            </h3>
            <p className="text-foreground/80 mb-6">
              From high schools to professional athletes, from corporations to non-profits, 
              organizations worldwide trust Touchstone to preserve and showcase their most important achievements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#start-trial" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your Success Story
              </a>
              <a 
                href="#case-studies" 
                className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 text-purple-600 font-medium"
              >
                View More Case Studies
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
