"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhatIsDigitalTrophyCase = () => {
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              What is a Digital Trophy Case?
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground/80 mb-6 text-lg">
              A Digital Trophy Case is far more than a simple photo gallery. It offers a scalable, cloud-based solution to showcase personal and team-level accomplishments. Think of it as a living, breathing hall-of-fame that develops with you.
            </p>
            <p className="text-foreground/80 mb-6">
              The digital trophy case software provides a robust, cloud-based platform for schools, colleges, and athletic programs across the United States, Canada, and the UK to celebrate achievements. Whether you're creating a high school digital trophy case for standout student-athletes or building an athlete digital trophy wall to honor a professional's legacy, this interactive recognition display turns accomplishments into a lasting visual story.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Show Trophies</h4>
                  <p className="text-foreground/70">Upload quality pictures of trophies, medals, belts, and plaques</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Tell the Full Story</h4>
                  <p className="text-foreground/70">Photos of the event, highlights, press clippings, memorable moments</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Showcase Stats</h4>
                  <p className="text-foreground/70">Performance data, records, season summaries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Worldwide Access</h4>
                  <p className="text-foreground/70">Share a special link to allow family, friends, scouts, and fans to celebrate from anywhere</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhatIsDigitalTrophyCase;
