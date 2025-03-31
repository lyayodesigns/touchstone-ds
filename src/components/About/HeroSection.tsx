import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

export const AboutHeroSection = () => {
  return (
    <section 
    className="relative min-h-[70svh] w-full flex flex-col items-center justify-center overflow-hidden pt-4 pb-2 sm:pt-8 sm:pb-6 md:pt-16 md:pb-12"
    style={{
        backgroundImage: "url('/hero-bg-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
      {/* Background with animated gradient */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>
      
      {/* Decorative elements - hidden on small screens */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/10 hidden sm:block"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500/10 hidden sm:block"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text text-gradient-purple-blue">
              About
            </span>
            <span className="text-foreground"> Touchstone Digital Solutions</span>
          </motion.h1>
          
          <motion.div
            className="relative mb-4 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-6 max-w-3xl mx-auto">
              The industry leader in fully customized interactive touchscreen recognition software
            </p>
            
            {/* Decorative line */}
            <motion.div 
              className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
          
          {/* Interactive buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a 
              href="#mission" 
              className="px-4 py-2 md:px-6 md:py-3 bg-white border border-blue-200 rounded-lg shadow-sm text-blue-700 text-sm md:text-base font-medium hover:shadow-md transition-all duration-300"
              whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              Our Mission
            </motion.a>
            <motion.a 
              href="#team" 
              className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-sm text-white text-sm md:text-base font-medium hover:shadow-md transition-all duration-300"
              whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
            >
              Meet Our Team
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
