import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

export const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-[10%] right-[15%] w-72 h-72 rounded-full bg-blue-400 mix-blend-overlay opacity-20"
          animate={{ 
            y: [0, -40, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-purple-400 mix-blend-overlay opacity-20"
          animate={{ 
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      
      {/* Content with glass effect */}
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 md:p-14 shadow-2xl border border-white/20 text-white">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ready to Create Your Digital Legacy?
              </motion.h2>
              
              <motion.div 
                className="h-1 w-20 bg-white rounded-full mb-6 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              
              <motion.p 
                className="text-lg mb-6 text-white/90 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Unlock the transformative power of digital recognition with Touchstone Digital Solutions. 
                Our commitment to innovation, quality, and fully customized service sets us apart.
              </motion.p>
              
              <motion.p 
                className="text-lg mb-10 text-white/90 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Let's create something remarkable together that celebrates your institution's heritage, 
                achievements, and future.
              </motion.p>
              
              <motion.button 
                onClick={() => navigate('/contact/')}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-medium text-center hover:bg-opacity-90 transition-all shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-4 border-white/10 z-0"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute -top-16 -left-16 w-32 h-32 rounded-full border-4 border-white/10 z-0"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -45, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
      </Container>
    </section>
  );
};
