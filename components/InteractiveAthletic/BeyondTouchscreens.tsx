"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container } from '../ui/container';
import { Monitor, Tv, Users, MapPin, Video, Cloud, Star } from 'lucide-react';

const BeyondTouchscreens = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  } as const;

  const specializations = [
    {
      icon: <Monitor className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      title: "Large-format interactive walls",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      gradient: "from-blue-500/15 to-cyan-500/15",
      borderGradient: "from-blue-400/40 to-cyan-400/40",
      hoverGradient: "group-hover:from-blue-400/25 group-hover:to-cyan-400/25"
    },
    {
      icon: <Tv className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      title: "LED-powered storytelling displays",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
      gradient: "from-violet-500/15 to-purple-500/15",
      borderGradient: "from-violet-400/40 to-purple-400/40",
      hoverGradient: "group-hover:from-violet-400/25 group-hover:to-purple-400/25"
    },
    {
      icon: <Users className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      title: "Multi-user touch experiences",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
      gradient: "from-pink-500/15 to-rose-500/15",
      borderGradient: "from-pink-400/40 to-rose-400/40",
      hoverGradient: "group-hover:from-pink-400/25 group-hover:to-rose-400/25"
    },
    {
      icon: <MapPin className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      title: "Athlete map visualizations",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
      gradient: "from-emerald-500/15 to-teal-500/15",
      borderGradient: "from-emerald-400/40 to-teal-400/40",
      hoverGradient: "group-hover:from-emerald-400/25 group-hover:to-teal-400/25"
    },
    {
      icon: <Video className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      title: "Video-rich interactive profiles",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
      gradient: "from-amber-500/15 to-orange-500/15",
      borderGradient: "from-amber-400/40 to-orange-400/40",
      hoverGradient: "group-hover:from-amber-400/25 group-hover:to-orange-400/25"
    },
    {
      icon: <Cloud className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      title: <Link href="/touchscreen-software" className="hover:underline underline-offset-2">Cloud-based content management systems</Link>,
      iconBg: "bg-gradient-to-br from-sky-500 to-blue-500",
      gradient: "from-sky-500/15 to-blue-500/15",
      borderGradient: "from-sky-400/40 to-blue-400/40",
      hoverGradient: "group-hover:from-sky-400/25 group-hover:to-blue-400/25"
    }
  ];

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 -z-10"></div>
      
      {/* Static decorative background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl -z-10" />
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Beyond{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Touchscreens
              </span>
            </h2>
            
            <motion.div 
              className="flex justify-center items-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <Star className="w-3 h-3 text-blue-500" fill="currentColor" />
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>

            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              Modern athletic facilities demand more than static displays. We create interactive environments that allow fans, recruits, and <Link href="/digital-donor-walls" className="text-gray-600 hover:underline underline-offset-2">donors</Link> to explore athlete stories, achievements, and program history in a powerful visual format.
            </p>
            <p className="text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Our solutions scale from single-screen installations to large-format LED walls and immersive multi-surface experiences.
            </p>
          </motion.div>
          
          {/* Specializations */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-center text-lg font-semibold text-gray-700 mb-6">We specialize in:</h3>
          </motion.div>

          <div className="space-y-4">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4 group cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  y: -4,
                  transition: { duration: 0.3, ease: "easeOut" } 
                }}
              >
                <div className="relative flex-shrink-0">
                  <motion.div 
                    className={`absolute inset-0 ${spec.iconBg} rounded-xl blur-sm opacity-50`}
                    whileHover={{ scale: 1.1, opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className={`relative ${spec.iconBg} p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 z-10`}
                    whileHover={{ 
                      rotate: [0, -8, 8, 0],
                      scale: 1.05
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {spec.icon}
                  </motion.div>
                </div>
                <motion.div 
                  className={`bg-gradient-to-br ${spec.gradient} ${spec.hoverGradient} backdrop-blur-sm border border-white/15 dark:border-white/10 rounded-2xl p-4 flex-1 shadow-md group-hover:shadow-lg group-hover:border-white/25 dark:group-hover:border-white/15 transition-all duration-400`}
                >
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-blue-600 transition-all duration-300">
                    {spec.title}
                  </h3>
                  
                  {/* Progress indicator */}
                  <motion.div 
                    className="mt-3 h-0.5 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-600/50 dark:to-gray-500/50 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${spec.borderGradient} rounded-full`}
                      initial={{ x: "-100%" }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 1.2, delay: index * 0.1 }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BeyondTouchscreens;
