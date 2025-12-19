"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const FutureOfHeritage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,158,0.03),transparent_50%)]" />
      
      <Container>
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100/60 rounded-full text-sm font-medium text-gray-600 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              Understanding Digital History Archives
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                A Digital History Archive? Future of Heritage Preservation.
              </span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-500 leading-relaxed max-w-4xl mx-auto font-light">
              <p>
                In the contemporary digital-first world, institutional memory is under more threat than ever before. Paper trails become damaged, systems Information is lost and treasured historical material may completely be forgotten. Digital history is more than cloud storage Digital history is more than a storage, it is an all-encompassing solution that integrates secure digital storage, smart metadata management and accessible search into a single platform.
              </p>
              
              <p>
                A digital archiving service takes the paper based records, photographs, manuscripts and multimedia data and converts them to digital information that can be searched. In contrast to simple file storage, an actual heritage digitization platform combines preservation requirements, catastrophe mitigation measures, and user-authorization features customized to cultural organizations, universities, museums, companies, and government institutions.
              </p>
              
              <p className="text-gray-700 font-normal">
                The Digital History Archive of Touchstone Digital Solutions, which is one of the Digital Hall of Fame projects, is an evolution of the way institutions handle their most invaluable resources. We are a hybrid of institutional-level digital preservation technology and friendly user interfaces that can make archivists and researchers smile.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FutureOfHeritage;
