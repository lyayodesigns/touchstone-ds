import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Palette, Book, Users, RefreshCw, CheckCircle } from 'lucide-react';

const FullCustomization = () => {
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

  // Features list with icons
  const features = [
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Tailored Visual Experience",
      description: "Customize layouts, fonts, colors, icons, and backgrounds to match your school's branding."
    },
    {
      icon: <Book className="h-5 w-5" />,
      title: "Brand Guidelines Integration",
      description: "Ensure design consistency by aligning with your institution's official logos, colors, and typography."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Collaborative Design Process",
      description: "Work directly with Emmy-nominated designers to craft an experience that authentically represents your school."
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: "Ongoing Updates & Adaptability",
      description: "Easily update branding elements as your institution evolves."
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-blue-500/10"></div>
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      
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
                Full Customization
              </span> & Brand-First Design
            </motion.h2>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.p 
              className="max-w-3xl mx-auto text-foreground/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your school's digital presence should be as unique as its legacy. Our platform is built with complete design flexibility, ensuring your brand identity is always front and center.
            </motion.p>
          </motion.div>
          
          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image */}
            <motion.div 
              className="lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative mx-auto max-w-md">
                {/* Design showcase grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Design showcase items */}
                  <motion.div 
                    className="relative bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 overflow-hidden h-48"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-600"></div>
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex justify-between items-center">
                        <div className="h-6 w-24 bg-gradient-to-r from-purple-500/20 to-blue-600/20 rounded"></div>
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-600/30"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-gradient-to-r from-purple-500/20 to-blue-600/20 rounded"></div>
                        <div className="h-3 w-3/4 bg-gradient-to-r from-purple-500/20 to-blue-600/20 rounded"></div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 overflow-hidden h-48"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(96, 165, 250, 0.3)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    <div className="grid grid-cols-3 gap-2 h-full">
                      <div className="col-span-1 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg"></div>
                      <div className="col-span-2 flex flex-col justify-between">
                        <div className="h-3 w-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded"></div>
                        <div className="h-3 w-3/4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded"></div>
                        <div className="h-3 w-1/2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded"></div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative bg-gradient-to-br from-indigo-600/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 overflow-hidden h-48"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-600"></div>
                    <div className="flex flex-col h-full">
                      <div className="flex justify-center items-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500/30 to-blue-600/30"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 flex-grow">
                        <div className="bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-lg"></div>
                        <div className="bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-lg"></div>
                        <div className="bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-lg"></div>
                        <div className="bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-lg"></div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative bg-gradient-to-br from-purple-600/10 to-indigo-600/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 overflow-hidden h-48"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex justify-between items-center">
                        <div className="h-4 w-20 bg-gradient-to-r from-purple-500/20 to-indigo-600/20 rounded"></div>
                        <div className="flex space-x-1">
                          <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-600/30"></div>
                          <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-600/30"></div>
                        </div>
                      </div>
                      <div className="flex-grow flex items-center justify-center">
                        <div className="h-20 w-20 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-600/20"></div>
                      </div>
                      <div className="h-3 w-full bg-gradient-to-r from-purple-500/20 to-indigo-600/20 rounded"></div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl blur-md -z-10"
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <motion.div 
                  className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-xl blur-md -z-10"
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />
              </div>
            </motion.div>
            
            {/* Right side - Features */}
            <motion.div 
              className="lg:w-1/2 order-1 lg:order-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 group"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02, 
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-sm"></div>
                      <div className="relative bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-full text-white z-10 group-hover:shadow-glow-sm transition-all duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600/5 to-blue-600/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex-1 group-hover:bg-gradient-to-br group-hover:from-purple-600/10 group-hover:to-blue-600/10 group-hover:-translate-y-1 group-hover:shadow-glow-sm transition-all duration-300 cursor-pointer">
                      <h4 className="font-semibold text-lg text-foreground mb-2 flex items-center">
                        {feature.title}
                      </h4>
                      <p className="text-foreground/70">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Closing statement */}
              <motion.div 
                className="mt-8 bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-xl p-5"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
                  transition: { duration: 0.3 } 
                }}
              >
                <p className="text-foreground/80 italic">
                  From Hall of Fame layouts to Record Boards and Donor Walls, every element is crafted to reflect your school's personality while maintaining a professional, polished look.
                </p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Animated dots */}
          {/* <div className="flex justify-center mt-16 space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-600"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default FullCustomization;