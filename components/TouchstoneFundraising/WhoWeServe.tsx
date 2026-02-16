"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhoWeServe = () => {
  const sectors = [
    {
      title: "Schools & Education",
      description: "We are one of the leading fundraising companies for schools, offering the best fundraising for schools of every type and size.",
      gradient: "from-blue-400 to-purple-500",
      features: [
        "Elementary fundraising ideas and fundraising for elementary schools",
        "Fundraising ideas for high schools, student government, and senior classes",
        "Fundraising ideas for school clubs, band, and booster clubs",
        "PTA and PTO fundraising ideas and support",
        "Fundraising for colleges, universities, and higher education",
        "Fundraising ideas for private schools and catholic schools",
        "Preschool fundraising ideas and fundraising for daycare centers",
        "Online fundraising platforms, apps, and catalogs for schools",
        "Fun, easy, unique, and seasonal fundraising ideas for schools"
      ]
    },
    {
      title: "Nonprofits & Charities",
      description: "Our nonprofit fundraising services are designed for organizations of all sizes. From animal shelter fundraising to community centric fundraising, we help nonprofit organizations achieve maximum impact.",
      gradient: "from-purple-400 to-pink-500",
      features: [
        "Nonprofit fundraising platforms and best-in-class technology",
        "Fundraising for charity and fundraising ideas for charities",
        "Nonprofit fundraising campaign planning and execution",
        "Digital, in-person, and hybrid fundraising campaigns",
        "Nonprofit fundraising event ideas and event support",
        "Fundraising ideas for not-for-profit organizations",
        "Nonprofit online fundraising capabilities",
        "Nonprofit fundraising consulting and strategy services",
        "Best nonprofit fundraising software and tools"
      ]
    },
    {
      title: "Churches & Faith-Based Organizations",
      description: "We specialize in fundraising church campaigns that honor your faith community's values.",
      gradient: "from-pink-400 to-red-500",
      features: [
        "Fundraising for church ideas and fundraising activities",
        "Church fundraising events planning and digital giving tools",
        "Youth fundraising ideas for church and youth groups",
        "Fundraising for mosque and synagogue support",
        "Capital campaign management for building projects and renovations"
      ]
    },
    {
      title: "Youth & Community Groups",
      description: "We also support youth group fundraising and community organizations with scalable solutions.",
      gradient: "from-red-400 to-blue-500",
      features: [
        "Fundraising for youth sports and youth sports programs",
        "Fundraising ideas for greek life, sororities, and fraternities",
        "Fundraising ideas for college clubs and campus organizations",
        "Fundraising ideas students can lead themselves",
        "Fundraising for a political campaign support"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
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
              Fundraising Solutions for Schools, Nonprofits, Churches, and Beyond
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Touchstone Fundraising serves a diverse range of organizations. Our solutions are designed to meet the specific fundraising challenges of each sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-10 h-1 bg-gradient-to-r ${sector.gradient} rounded-full mb-6`} />

              <h3 className={`text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${sector.gradient}`}>
                {sector.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {sector.description}
              </p>

              <div className="space-y-2.5">
                {sector.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sector.gradient} mt-2 flex-shrink-0`} />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhoWeServe;
