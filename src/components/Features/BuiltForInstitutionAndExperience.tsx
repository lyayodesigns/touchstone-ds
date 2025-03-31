import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Medal, Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BuiltForInstitutionAndExperience = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/3 to-indigo-500/5 -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-10 -z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-[10%] left-[5%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[10%] right-[5%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            {/* Left side - Excellence statement */}
            <motion.div 
              className="lg:w-1/2 bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ 
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
                transition: { duration: 0.5 } 
              }}
            >
              <motion.div 
                className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6 relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
                    Built for Institutions
                  </span> That Strive for Excellence
                </motion.h2>
                
                <motion.div 
                  className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                
                <motion.p 
                  className="text-foreground/80 text-lg mb-8 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  At Touchstone Digital Solutions, we believe recognition should be as dynamic as the students, alumni, and donors it honors.
                </motion.p>
                
                <motion.div
                  className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8 relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
                    transition: { duration: 0.3 } 
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-sm"></div>
                      <div className="relative bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-full text-white z-10">
                        <Medal className="h-6 w-6" />
                      </div>
                    </div>
                    <p className="text-xl font-semibold text-foreground">
                      Always Personalized. Always Interactive. Always With You.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right side - Experience the Future */}
            <motion.div 
              className="lg:w-1/2 bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ 
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
                transition: { duration: 0.5 } 
              }}
            >
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <motion.div 
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 3 }}
              />
              
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-6 relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Experience the Future
                </span> of Digital Recognition
              </motion.h3>
              
              <motion.p 
                className="text-foreground/80 text-lg mb-8 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Transform your school's history into an interactive, unforgettable experience. Book a personalized demo today and see how Touchstone Digital Solutions can elevate your institution's legacy.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative z-10"
              >
                <motion.button
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:shadow-glow-md group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/contact/')}
                >
                  <Mail className="h-5 w-5" />
                  <span>Contact Us Now to schedule a demo!</span>
                  <motion.div
                    className="ml-1"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BuiltForInstitutionAndExperience;