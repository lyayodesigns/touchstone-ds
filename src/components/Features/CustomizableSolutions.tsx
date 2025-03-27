import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Check } from 'lucide-react';

const CustomizableSolutions = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Feature items
  const features = [
    "Notable Alumni & Legends – Honor the achievements of distinguished graduates and faculty.",
    "Championship Records & Athletics – Bring trophies and victories to life with immersive multimedia.",
    "Class Photos, Yearbooks & Events – Preserve history in a dynamic, digital format.",
    "Coaches & Faculty Recognition – Celebrate the educators and mentors who shaped generations.",
    "Team Rosters & Player Profiles – Showcase current and past teams with interactive stats and bios.",
    "Student Spotlights – Highlight academic achievers, club leaders, and student success stories."
  ];

  return (
    <section className="py-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/3 to-indigo-500/5 -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-10 -z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-[25%] right-[10%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[25%] left-[10%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
                Feature-Rich
              </span>, Customizable Solutions
            </motion.h2>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.h3 
              className="text-xl md:text-2xl font-semibold text-foreground/90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Digital Hall of Fame & Trophy Cases
            </motion.h3>
          </motion.div>
          
          {/* Feature grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              // Split the feature into title and description
              const [title, description] = feature.split(' – ');
              
              return (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-purple-500/5 hover:border-blue-500/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 15px 30px -10px rgba(50, 100, 200, 0.15)",
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 rounded-full flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-1">{title}</h4>
                      <p className="text-foreground/70">{description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Decorative floating elements */}
          <div className="relative mt-16 h-24 overflow-hidden">
            <motion.div 
              className="absolute left-1/4 w-16 h-16 bg-blue-500/10 rounded-full"
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div 
              className="absolute left-1/2 w-12 h-12 bg-purple-500/10 rounded-full"
              animate={{ 
                y: [0, -15, 0],
                x: [0, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
            <motion.div 
              className="absolute left-3/4 w-10 h-10 bg-indigo-500/10 rounded-full"
              animate={{ 
                y: [0, -10, 0],
                x: [0, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 2 }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomizableSolutions;