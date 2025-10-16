"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const SectorSpecificIdeas = () => {
  const sectors = [
    {
      title: "Digital Donor Wall for Universities and Colleges",
      description: "Recognize the alumni, faculty, and benefactors who are shaping the future; commemorate scholarship recipients; celebrate new facilities made possible by generous donations; and even display historical timelines of gifts. A digital donor wall for universities would be perfect for placing in the student union, alumni center, or even the library entrance.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      gradient: "from-blue-400 to-purple-500",
      features: [
        "Alumni recognition displays",
        "Scholarship recipient celebrations", 
        "Facility dedication timelines",
        "Historical gift displays"
      ]
    },
    {
      title: "Digital Donor Wall for Hospitals and Health Organizations",
      description: "Celebrate those who give funds that save lives! Display patient success stories, acknowledge advanced technology funded by donations, and recognize members of your foundation's leadership societies. A digital donor wall for hospitals in main lobbies or in waiting areas gives out the message of hope and support from the community.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3m-6 0h12a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
        </svg>
      ),
      gradient: "from-purple-400 to-pink-500",
      features: [
        "Patient success stories",
        "Medical technology showcases",
        "Foundation leadership recognition",
        "Community impact displays"
      ]
    },
    {
      title: "Digital Donor Wall for Schools",
      description: "Instill philanthropy from childhood. Give PTA members, donors to the capital campaign, and local businesses their due recognition. A school digital donor wall can be used to highlight community investment in education at parent-teacher nights and open houses.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-pink-400 to-blue-500",
      features: [
        "PTA member recognition",
        "Capital campaign donors",
        "Local business partnerships",
        "Educational impact stories"
      ]
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
      </div>
      
      <Container className="relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Inspiring Digital Donor Walls for Your Sector
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            The purposes are varied, and so are methods of donor recognition. Finding solutions to match your specific organizational needs is our specialty.
          </p>
        </motion.div>

        <div className="space-y-12">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <div className={`text-blue-600 mr-4 ${index === 0 ? 'text-blue-600' : index === 1 ? 'text-purple-600' : 'text-pink-600'}`}>
                      {sector.icon}
                    </div>
                    <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${sector.gradient}`}>
                      {sector.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {sector.description}
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Key Features:</h4>
                  <div className="space-y-3">
                    {sector.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sector.gradient} mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Ready for Custom Ideas?
            </h3>
            <p className="text-gray-700 mb-6">
              Every organization is unique, and so should be your donor recognition strategy. Let us create a custom solution that perfectly fits your mission and community.
            </p>
            <a 
              href="https://touchstone-ds.com/contact/" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Custom Ideas for My Organization
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SectorSpecificIdeas;
