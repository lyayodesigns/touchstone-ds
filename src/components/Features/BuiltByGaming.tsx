import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Flame, Paintbrush, Search } from 'lucide-react';

const BuiltByGaming = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  // Features
  const features = [
    {
      icon: <Flame className="h-6 w-6" />,
      title: "Stunning Graphic Fidelity",
      description: "Our high-resolution graphics bring your school's legacy to life. From detailed digital trophies and plaques to dynamic team rosters and banners, every element is displayed with crystal-clear precision, allowing users to fully appreciate their school's history."
    },
    {
      icon: <Paintbrush className="h-6 w-6" />,
      title: "Realistic Texture Mapping",
      description: "We leverage advanced texture mapping to create lifelike digital replicas of physical awards, banners, and memorabilia. Our platform renders trophies, plaques, and championship banners with realistic materials and textures, adding depth and authenticity to the experience. Interactive 3D textures further enhance engagement, delivering a professional, polished presentation."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Crisp & Clear Visuals with Anti-Aliasing",
      description: "We implement anti-aliasing technology to eliminate jagged edges and ensure smooth, readable text and crisp images. Whether showcasing a team roster, individual records, or a Hall of Fame plaque, every detail is displayed with precision and clarity."
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
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
          {/* Section heading */}
          <motion.div 
            className="text-center mb-16"
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
                Built by Gaming Industry Developers
              </span> for Unmatched Visual Fidelity
            </motion.h2>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.p 
              className="text-foreground/80 max-w-3xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We bring AAA gaming technology to digital school recognition, ensuring every element is visually stunning and deeply immersive.
            </motion.p>
          </motion.div>
          
          {/* Features */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-xl p-6 flex-1 h-full border-2 border-purple-300 relative overflow-hidden group hover:bg-gradient-to-br hover:from-purple-600/5 hover:to-blue-600/5 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-glow-sm transition-all duration-300 cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3, type: "spring", stiffness: 100 } 
                }}
                whileTap={{ scale: 0.98, y: 2 }}
              >
                <motion.div
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-purple-100 opacity-50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <div className="flex flex-col h-full relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-sm"></div>
                      <div className="relative bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-full text-white z-10 group-hover:shadow-glow-sm group-hover:text-purple-300 transition-all duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-gray-800">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 flex-grow">
                    {feature.description}
                  </p>
                  <motion.div 
                    className="h-1 w-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-4 mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Decorative element at bottom */}
          <div className="mt-16 flex justify-center">
            <motion.div 
              className="h-1 w-16 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full"
              animate={{ 
                width: [64, 128, 64],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BuiltByGaming;
