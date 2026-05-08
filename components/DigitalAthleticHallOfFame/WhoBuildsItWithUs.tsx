"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '../ui/container';

const WhoBuildsItWithUs = () => {
  const audiences = [
    {
      title: "High school athletic departments",
      description: "From 6A powerhouses to small private schools, we help athletic directors digitize 50+ years of history without losing a single name. Perfect for programs preparing centennial celebrations, building a new athletic facility, or finally giving forgotten 1970s state champions the recognition they earned.",
      gradient: "from-blue-400 to-purple-500",
      image: "/home/carousel/TDS Cover - 1.avif",
      alt: "High school athletic hall of fame touchscreen display in school lobby"
    },
    {
      title: "College & university athletics",
      description: "NCAA, NAIA, and junior college programs use Touchstone to honor distinguished alumni athletes, varsity letter winners, Olympic competitors, and championship teams. Designed to scale to thousands of inductees across dozens of sports.",
      gradient: "from-purple-400 to-pink-500",
      image: "/home/carousel/TDS Cover - 5.avif",
      alt: "College athletics digital hall of fame interactive touchscreen"
    },
    {
      title: "Youth & club sports organizations",
      description: "Travel teams, club programs, and youth leagues build a digital athletic hall of fame to celebrate alumni who went on to play in college and beyond, and to inspire the next generation of athletes who walk through the door.",
      gradient: "from-pink-400 to-red-500",
      image: "/home/school's legacy/Football Roster.avif",
      alt: "Youth and club sports digital hall of fame roster display"
    },
    {
      title: "Professional & semi-pro teams",
      description: "Minor league franchises, semi-pro clubs, and professional organizations preserve their full history, including every roster, every season, and every legend, in one searchable platform.",
      gradient: "from-red-400 to-orange-500",
      image: "/home/carousel/TDS Cover - 9.avif",
      alt: "Professional sports team digital hall of fame archive"
    }
  ];

  return (
    <section className="py-16 bg-gray-50/50">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Who builds a digital athletic hall of fame with Touchstone
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={audience.image}
                  alt={audience.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent`} />
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-r ${audience.gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className={`text-xl md:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${audience.gradient}`}>
                  {audience.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhoBuildsItWithUs;
