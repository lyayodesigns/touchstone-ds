"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const ServicesOverview = () => {
  const services = [
    {
      number: "1",
      title: "Fundraising Strategy & Consulting",
      description: "Our experienced nonprofit fundraising consultants work alongside your team to develop a tailored fundraising plan for nonprofit organizations, schools, and churches. We help you set realistic goals, identify donor segments, create messaging frameworks, and build a nonprofit fundraising calendar that keeps your campaigns on track year-round. Whether you need a nonprofit fundraising strategy from scratch or want to optimize an existing plan, our consultants bring deep expertise in nonprofit fundraising training and best practices.",
      gradient: "from-blue-400 to-purple-500",
      features: []
    },
    {
      number: "2",
      title: "Fundraising Software & Platform",
      description: "Our proprietary nonprofit fundraising software is purpose-built to simplify online giving, donor management, and campaign tracking. With Touchstone, you get a powerful fundraising platform for nonprofits and schools that adapts to your needs — serving as a comprehensive nonprofit fundraising website and campaign hub all in one.",
      gradient: "from-purple-400 to-pink-500",
      features: [
        "Customizable donation pages with your brand identity",
        "Peer-to-peer fundraising for nonprofits and schools",
        "Recurring donation management",
        "Real-time campaign dashboards and analytics",
        "Mobile-responsive design for on-the-go giving",
        "Secure payment processing with multiple payment options",
        "Social sharing integrations to amplify reach",
        "Nonprofit fundraising tools for event ticketing, auctions, and pledge drives"
      ]
    },
    {
      number: "3",
      title: "Event Fundraising Support",
      description: "From galas and auctions to fun runs and community dinners, Touchstone helps you plan and execute nonprofit event fundraising that excites donors and exceeds goals. We offer support for church fundraising events, school fundraising fairs, restaurant fundraising for nonprofit nights, and more. Our team handles event logistics, digital ticketing, live and silent auction management, and post-event donor follow-up so you can deliver successful fundraising ideas for nonprofits every time.",
      gradient: "from-pink-400 to-red-500",
      features: []
    },
    {
      number: "4",
      title: "Digital Donor Recognition",
      description: "Leveraging Touchstone Digital Solutions' industry-leading digital donor wall technology, we integrate donor recognition directly into your fundraising campaigns. Showing donors the impact of their gifts in real time encourages repeat giving and strengthens community engagement. Our digital displays are perfect for schools, hospitals, universities, and houses of worship looking to celebrate generosity in a dynamic, modern way.",
      gradient: "from-red-400 to-blue-500",
      features: []
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
              Comprehensive Fundraising Services for Every Organization
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Touchstone Fundraising is not just a platform — it&apos;s a complete ecosystem of services and tools designed to maximize your fundraising potential.
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2 flex justify-center md:justify-start">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{service.number}</span>
                  </div>
                </div>
                
                <div className="md:col-span-10 text-center md:text-left">
                  <h3 className={`text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    {service.description}
                  </p>
                  
                  {service.features.length > 0 && (
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                      <h4 className="font-bold text-gray-800 mb-3">Platform Features:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesOverview;
