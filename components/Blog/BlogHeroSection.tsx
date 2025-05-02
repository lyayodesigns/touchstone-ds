"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Calendar, User, Tag } from 'lucide-react';

interface BlogHeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  isPost?: boolean;
  publishedDate?: string;
  author?: string;
  categories?: string;
}

const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({ 
  title, 
  subtitle, 
  description,
  isPost = false,
  publishedDate,
  author,
  categories
}) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section 
      className={`relative ${isPost ? 'min-h-[50svh]' : 'min-h-[60svh]'} w-full flex flex-col items-center justify-center overflow-hidden pt-16 pb-10 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24`}
      style={{
        backgroundImage: "url('/hero-bg-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
      {/* Background with animated gradient */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
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
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text text-gradient-purple-blue">
              {title}
            </span>
          </motion.h1>
          
          {subtitle && (
            <motion.div
              className="relative mb-2 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 max-w-3xl mx-auto">
                {subtitle}
              </p>
              
              {/* Decorative line */}
              <motion.div 
                className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>
          )}
          
          {description && (
            <motion.div
              className="relative mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                {description}
              </p>
            </motion.div>
          )}
          
          {/* Post metadata - only shown for blog posts */}
          {isPost && (publishedDate || author || categories) && (
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6 text-gray-600 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {publishedDate && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                  <time>{publishedDate}</time>
                </div>
              )}
              
              {author && (
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{author}</span>
                </div>
              )}
              
              {categories && (
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{categories}</span>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default BlogHeroSection;
