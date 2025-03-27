import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

export const AboutStatsSection = () => {
  return (
    <section className="py-16 bg-background relative" id="mission">
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
              Our Company at a Glance
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
          {/* Our Story Card with Video */}
          <motion.div 
            className="bg-[#0e2b4d] rounded-xl overflow-hidden shadow-xl text-white relative border border-blue-900"
            whileHover={{ y: -8, scale: 1.02 }}
            initial={{ opacity: 0, y: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <div className="relative">
              <img 
                src="/public/hero-banner.jpg" 
                alt="Our Story" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 flex items-center justify-center">
                <motion.button 
                  className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center z-10"
                  whileHover={{ scale: 1.15, backgroundColor: "#4f46e5" }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    boxShadow: ["0px 0px 0px 0px rgba(59, 130, 246, 0.5)", "0px 0px 0px 12px rgba(59, 130, 246, 0)", "0px 0px 0px 0px rgba(59, 130, 246, 0.5)"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.button>
              </div>
            </div>
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-2">Our Story</h3>
              <div className="h-1 w-12 bg-blue-500 rounded-full mb-3"></div>
              <p className="text-blue-100/80 text-sm">Click to watch our journey</p>
            </motion.div>
          </motion.div>

          {/* Our Mission Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 relative overflow-hidden"
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
              className="relative z-10"
            >
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <div className="h-1 w-12 bg-blue-500 rounded-full mb-4"></div>
              <p className="text-gray-700">
              We create custom digital experiences that celebrate the legacies of students, alumni, and communities, going all in to honor each school's unique story.
              </p>
            </motion.div>
          </motion.div>

          {/* Years Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 relative overflow-hidden"
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
              7
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
              Years of Profitable Operations
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Employees Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 relative overflow-hidden"
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
              30+
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
              Driven Employees
            </motion.p>
          </motion.div>

          {/* Built With Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 relative overflow-hidden flex flex-col items-center justify-center text-center"
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
              <h3 className="text-2xl font-bold mb-4">Built With</h3>
              <div className="flex items-center justify-center">
                <motion.span 
                  className="text-blue-600 text-5xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  ❤
                </motion.span>
                <span className="text-2xl font-bold mx-2">in</span>
              </div>
              <h3 className="text-2xl font-bold">Boston</h3>
              <div className="h-1 w-12 bg-blue-500 rounded-full my-3"></div>
              <p className="text-gray-700">Fully Bootstrapped & Founder Owned</p>
            </motion.div>
          </motion.div>

          {/* Clients Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 relative overflow-hidden"
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
              700+
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
              Clients Across the Country
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};