"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

// SSR/SSG compatible: No useEffect, useRef, or browser globals. All framer-motion usage is SSR safe.

export const WhatMakeUsDifferent = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with subtle gradient similar to AlumniRecognitionSection */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-blue-500/10"></div>
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] max-w-[800px] max-h-[800px] bg-gradient-spotlight opacity-30 -z-10"></div>
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-[15%] left-[10%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[15%] right-[10%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute top-[40%] right-[15%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[40%] left-[15%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Creative section header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block relative"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2 relative z-10">
                The Touchstone Difference
              </h2>
              <motion.div 
                className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -z-10"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.div>
            <motion.p
              className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              The unique qualities that set our digital recognition solutions apart
            </motion.p>
          </motion.div>
          {/* Interactive timeline/feature showcase */}
          <div className="relative">
            {/* Central line */}
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5 }}
            />
            {/* Feature items */}
            <div className="space-y-16 md:space-y-24 relative">
              {/* Item 1 & 2 - Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Item 1 */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-foreground/10 md:mr-8 h-full hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-blue-500/0 hover:border-blue-500/20 transition-all duration-300">
                    <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-8 w-8 text-blue-600" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </motion.svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Family-Owned</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Touchstone isn't just a company—it's a family. As a family-owned business, we pour our hearts into every project, 
                        ensuring each school gets the personal attention and dedication it deserves.
                      </p>
                    </div>
                  </div>
                  {/* Connector to timeline (desktop only) */}
                  <div className="absolute right-0 top-1/2 hidden md:block">
                    <div className="w-8 h-1 bg-blue-500"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-blue-500 shadow-md"></div>
                  </div>
                </motion.div>
                {/* Item 2 */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-foreground/10 md:ml-8 h-full hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-purple-500/0 hover:border-purple-500/20 transition-all duration-300">
                    <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-8 w-8 text-purple-600" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </motion.svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Team-Focused</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        As former Division 1 athletes, we know what it takes to be on a winning team. That's why we've carefully built 
                        a team of designers, developers, and visionaries committed to delivering unparalleled digital experiences.
                      </p>
                    </div>
                  </div>
                  {/* Connector to timeline (desktop only) */}
                  <div className="absolute left-0 top-1/2 hidden md:block">
                    <div className="w-8 h-1 bg-purple-500"></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-purple-500 shadow-md"></div>
                  </div>
                </motion.div>
              </div>
              {/* Item 3 & 4 - Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Item 3 */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-foreground/10 md:mr-8 h-full hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-blue-500/0 hover:border-blue-500/20 transition-all duration-300">
                    <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-8 w-8 text-blue-600" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </motion.svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Zero Sales Quotas</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Just genuine partnerships. We don't chase numbers—we chase excellence. Our team isn't driven by sales quotas 
                        but by a passion for crafting truly customized recognition experiences that exceed your expectations.
                      </p>
                    </div>
                  </div>
                  {/* Connector to timeline (desktop only) */}
                  <div className="absolute right-0 top-1/2 hidden md:block">
                    <div className="w-8 h-1 bg-blue-500"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-blue-500 shadow-md"></div>
                  </div>
                </motion.div>
                {/* Item 4 */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-foreground/10 md:ml-8 h-full hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-purple-500/0 hover:border-purple-500/20 transition-all duration-300">
                    <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-8 w-8 text-purple-600" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                          </motion.svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">100% Custom</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Every project is fully tailored to your needs, built on a foundation of flexible back-end templates 
                        to ensure a seamless yet one-of-a-kind experience.
                      </p>
                    </div>
                  </div>
                  {/* Connector to timeline (desktop only) */}
                  <div className="absolute left-0 top-1/2 hidden md:block">
                    <div className="w-8 h-1 bg-purple-500"></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-purple-500 shadow-md"></div>
                  </div>
                </motion.div>
              </div>
              {/* Item 5 & 6 - Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Item 5 */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-foreground/10 md:mr-8 h-full hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-blue-500/0 hover:border-blue-500/20 transition-all duration-300">
                    <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-8 w-8 text-blue-600" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </motion.svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Built by Gaming Experts</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        You read that right. To create truly remarkable displays, you have to work with the best. That's why we've 
                        brought in top UI/UX designers from the video game industry to craft stunning visuals you won't find anywhere else.
                      </p>
                    </div>
                  </div>
                  {/* Connector to timeline (desktop only) */}
                  <div className="absolute right-0 top-1/2 hidden md:block">
                    <div className="w-8 h-1 bg-blue-500"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-blue-500 shadow-md"></div>
                  </div>
                </motion.div>
                {/* Item 6 */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-foreground/10 md:ml-8 h-full hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-purple-500/0 hover:border-purple-500/20 transition-all duration-300">
                    <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-8 w-8 text-purple-600" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </motion.svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Always Evolving</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        We continuously release new software updates, ensuring your display stays cutting-edge. With over-the-air updates, 
                        your system evolves effortlessly—no manual installs, no downtime, just seamless improvements.
                      </p>
                    </div>
                  </div>
                  {/* Connector to timeline (desktop only) */}
                  <div className="absolute left-0 top-1/2 hidden md:block">
                    <div className="w-8 h-1 bg-purple-500"></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-purple-500 shadow-md"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
