import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

export const TeamSection = () => {
  return (
    <section className="py-16 relative overflow-hidden" id="team">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block relative text-center w-full mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 inline-block pb-1">
              <span className="text-transparent bg-clip-text text-gradient-purple-blue">
                Meet Our
              </span>
              <span className="text-foreground"> Team</span>
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
        
        {/* Team showcase with text on one side and image on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-transparent bg-clip-text text-gradient-purple-blue">Passionate Experts</span> 
              <span className="text-foreground"> Behind Our Success</span>
            </h3>
            
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
            
            <p className="text-gray-700 mb-6 text-lg">
              Our team brings together a unique blend of talents - from former Division 1 athletes to gaming industry UI/UX designers and experienced software engineers - all united by a passion for recognition and celebration.
            </p>
            
            <p className="text-gray-700 mb-8 text-lg">
              With decades of combined experience, we've built a company culture that values innovation, quality, and personalized service. Our diverse backgrounds enable us to approach each project with fresh perspectives and creative solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-foreground/10 hover:border-blue-500/20 transition-all duration-300">
                <div className="text-4xl text-blue-600 mb-2">30+</div>
                <div className="text-gray-700 font-medium">Team Members</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-foreground/10 hover:border-purple-500/20 transition-all duration-300">
                <div className="text-4xl text-purple-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-6 -left-6 w-full h-full rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 -z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-foreground/10 relative hover:border-blue-500/20 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)" }}
              >
                <img 
                  src="/public/About Us.avif" 
                  alt="Touchstone team" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // Fallback for missing images
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/800x600?text=Our+Team";
                  }}
                />
                <motion.div 
                  className="p-6 bg-gradient-to-r from-blue-500/5 to-purple-500/5 backdrop-blur-sm"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-center mb-2">Our Team at Work</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 mx-auto"></div>
                  <p className="text-center text-gray-700">
                    Our team at a recent industry conference, showcasing our latest digital recognition solutions.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
