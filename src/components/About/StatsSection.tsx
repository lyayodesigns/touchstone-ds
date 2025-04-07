import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

// Add CSS for flip card effect
const flipCardStyles = `
  .perspective {
    perspective: 1000px;
  }
  
  .preserve-3d {
    transform-style: preserve-3d;
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
  
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
`;

export const AboutStatsSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-16 bg-background relative" id="mission">
      {/* Apply flip card styles */}
      <style dangerouslySetInnerHTML={{ __html: flipCardStyles }} />
      
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/5"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block relative text-center w-full"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6 relative z-10 inline-block pb-1">
              Why Touchstone
            </h2>
            <motion.div 
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -z-10 mb-2 mt-1"
              style={{ width: '80%', maxWidth: '500px' }}
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Our Story Card - Flip Card Implementation */}
          <div 
            className="bg-[#0e2b4d] rounded-xl overflow-hidden shadow-xl text-white relative border border-blue-900 h-[300px] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-600"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className="relative w-full h-full">
              {/* Front of card */}
              <div 
                className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                  isFlipped ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/hero-banner.jpg" 
                      alt="Our Story" 
                      className="w-full h-[220px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-blue-900/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 pt-2 flex-grow flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-300 transition-colors duration-300">Our Story</h3>
                    <div className="h-1 w-10 bg-blue-500 rounded-full mb-2 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-400"></div>
                    <p className="text-white/70 text-xs flex items-center gap-1">
                      Click to learn more
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Back of card */}
              <div 
                className={`absolute inset-0 w-full h-full bg-[#0e2b4d] rounded-xl p-6 flex items-center transition-all duration-500 ease-in-out ${
                  isFlipped ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">Our Story</h3>
                  <div className="h-1 w-16 bg-blue-500 rounded-full mb-5"></div>
                  <p className="text-white/90 leading-relaxed">
                    After years in the industry, we saw an opportunity to do more. While others rush through the process, Touchstone takes the time to listen. We are a relationship-first company that happens to deliver exceptional software.
                  </p>
                  <div className="mt-4 text-blue-300 text-sm flex items-center gap-2">
                    Click to flip back
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                      <path d="M9 10l-5 5 5 5"/>
                      <path d="M20 4v7a4 4 0 0 1-4 4H4"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 border-2 border-blue-300 relative overflow-hidden flex flex-col items-center justify-center h-full"
            whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-100 opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10 text-center w-full"
            >
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <div className="h-1 w-12 bg-blue-500 rounded-full mb-4 mx-auto"></div>
              <p className="text-gray-700">
              We create custom digital experiences that celebrate the legacies of students, alumni, and communities, going all in to honor each school's unique story.
              </p>
            </motion.div>
          </motion.div>

          {/* Years Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center border-2 border-purple-300 relative overflow-hidden"
            whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-purple-100 opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.h2 
              className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
            >
              67
            </motion.h2>
            <motion.div 
              className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.p 
              className="text-gray-700 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              The combined experience in years of our UI/UX designers have in the gaming industry, bringing unmatched expertise to every display.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Employees Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center border-2 border-purple-300 relative overflow-hidden"
            whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-blue-100 opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.h2 
              className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
            >
              1
            </motion.h2>
            <motion.div 
              className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <motion.p 
              className="text-gray-700 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              The one-of-a-kind design your school deserves—crafted with precision and purpose.
            </motion.p>
          </motion.div>

          {/* Built With Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 border-2 border-blue-300 relative overflow-hidden flex flex-col items-center justify-center"
            whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-purple-100 opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative z-10 flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold mb-4"></h3>
              <motion.h2 
                className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
              >
                10
              </motion.h2>
              <motion.div 
                className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                The average number of cups of coffee brewed by our team members daily, fueling the creativity and passion that go into every custom display
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Clients Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center border-2 border-purple-300 relative overflow-hidden"
            whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-100 opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.h2 
              className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: 0.6,
                type: "spring",
                stiffness: 100
              }}
            >
              <span className="inline-block pt-2">∞</span>
            </motion.h2>
            <motion.div 
              className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.p 
              className="text-gray-700 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              The number of possibilities to create a custom build-out, ensuring each project is as unique as the school it represents
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};