import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

export const AboutMissionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Us on the Journey</h2>
            <p className="text-lg mb-8">
              Unlock the transformative power of digital recognition with Touchstone Digital Solutions. 
              Our commitment to innovation, quality, and fully customized service sets us apart. 
              We'd be honored to help you craft a digital legacy that celebrates your institution's heritage, 
              achievements, and future.
            </p>
            <p className="text-lg mb-8">
              Let's create something remarkable together. Get in touch today to see how we can elevate your school's digital presence.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>
  );
};
