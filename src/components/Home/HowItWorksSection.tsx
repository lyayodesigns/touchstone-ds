import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HowItWorksSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-background to-card overflow-hidden relative">
      {/* Decorative top border/divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-purple-500/20 via-blue-500/30 to-purple-500/20"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            className="text-sm text-gradient-purple-blue font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.p>

          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient-purple-blue">Transforming</span> Your
            Recognition System
          </motion.h2>

          <motion.p 
            className="text-black max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our simple process makes it easy to implement a digital Hall of
            Fame that celebrates achievements and inspires your community.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 hidden md:block"></div>
          
          {/* Step 1 */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                01
              </div>
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Consultation</h3>
              <p className="text-black text-center">
                We'll discuss your needs, space, and vision to create a
                custom digital recognition solution tailored to your organization's unique requirements.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                02
              </div>
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Design & Implementation</h3>
              <p className="text-black text-center">
                Our team handles everything from hardware installation to
                software setup, creating a seamless digital Hall of Fame
                experience that impresses visitors.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                03
              </div>
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Training & Support</h3>
              <p className="text-black text-center">
                We'll train your staff on our user-friendly content
                management system and provide ongoing support to ensure your
                success for years to come.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
