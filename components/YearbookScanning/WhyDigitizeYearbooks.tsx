"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhyDigitizeYearbooks = () => {
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
              Why Digitize Old Yearbooks Now?
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
              Vintage high school and university yearbooks are still in high demand for genealogy, local history, reunions, and simple nostalgia, but most school libraries only hold one printed copy per year. That creates risks from wear and tear, vandalism, and loss. These problems disappear once your yearbooks are available as electronic copies.
            </p>
            <p className="text-foreground/80 mb-6">
              Digitizing your collection turns heavy, fragile books into a fast, convenient digital yearbook archive that alumni, staff, students, and researchers can browse from any device. People asking "how to look up yearbook photos," "can you see high school yearbooks online," or "how do I find old elementary school yearbook pictures?" can finally get clear answers from an official, searchable source instead of scattered, incomplete websites. Once scanned, you can also create interactive <a href="/digital-yearbooks/" className="text-blue-600 hover:text-purple-600 underline font-medium transition-colors">digital yearbooks</a> for ongoing years.
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
                  <h4 className="font-semibold text-foreground">Protect Irreplaceable History</h4>
                  <p className="text-foreground/70">Eliminate risks from wear, vandalism, and loss by creating permanent digital copies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Universal Access</h4>
                  <p className="text-foreground/70">Alumni, staff, students, and researchers can browse from any device, anywhere in the world</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Searchable Archives</h4>
                  <p className="text-foreground/70">OCR technology lets users search by name, team, or keyword instead of flipping through pages</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Official Source of Truth</h4>
                  <p className="text-foreground/70">Provide a branded, reliable answer when people search for your school's yearbooks online</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhyDigitizeYearbooks;
