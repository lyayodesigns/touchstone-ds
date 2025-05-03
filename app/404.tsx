import React from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from '../components/ui/container';


const NotFoundHeroSection = () => {
  return (
    <section 
      className="relative pt-6 min-h-[70svh] w-full flex flex-col items-center justify-center overflow-hidden pt-4 pb-0 sm:pt-8 sm:pb-0 md:pt-16 md:pb-0"
      style={{
        backgroundImage: "url('/hero-bg-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
      {/* Background with animated gradient */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-black/40"
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text text-gradient-purple-blue">
              404
            </span>
          </motion.h1>
          <motion.div
            className="relative mb-4 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-white mb-3 md:mb-6 max-w-3xl mx-auto font-semibold">
              Page Not Found
            </p>
            {/* Decorative line */}
            <motion.div 
              className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Return to Home
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <NotFoundHeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
