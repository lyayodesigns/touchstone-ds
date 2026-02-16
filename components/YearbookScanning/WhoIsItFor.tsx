"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhoIsItFor = () => {
  const getBenefitsGradient = (gradient: string) => {
    if (gradient === "from-blue-400 to-purple-500") return "from-blue-50 to-purple-50";
    if (gradient === "from-purple-400 to-pink-500") return "from-purple-50 to-pink-50";
    if (gradient === "from-pink-400 to-blue-500") return "from-pink-50 to-blue-50";
    if (gradient === "from-red-400 to-orange-500") return "from-red-50 to-orange-50";
    if (gradient === "from-orange-400 to-yellow-500") return "from-orange-50 to-yellow-50";
    return gradient;
  };

  const audiences = [
    {
      title: "K‑12 Schools & Districts",
      subtitle: "Safe Digital Access to Your History",
      description: "Give your community a safe way to let people view high school yearbooks online and access old elementary school yearbook pictures without touching fragile originals.",
      features: [
        "Digital Library: Build a searchable yearbook archive accessible to students, parents, and alumni from any device.",
        "Preservation: Protect irreplaceable volumes from wear, vandalism, and loss with professional non‑destructive scanning.",
        "Reunion Support: Make it easy for reunion planners to find class photos and memories without borrowing originals."
      ],
      benefits: "Finally provide a clear, branded answer when people ask \"can you view high school yearbooks online?\"",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      title: "Colleges & Universities",
      subtitle: "Alumni Engagement at Scale",
      description: "Build alumni engagement portals where graduates can search for classmates, teams, and events across multiple years.",
      features: [
        "Multi‑Decade Archives: Digitize entire collections spanning decades of institutional history in phased projects.",
        "Searchable Content: OCR‑enabled PDFs let alumni search by name, team, club, or keyword across all volumes.",
        "Recruitment Tool: Showcase your institution's rich history and traditions to prospective students and donors."
      ],
      benefits: "Strengthen alumni connections and create a lasting digital resource that grows with your institution.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Libraries & Historical Societies",
      subtitle: "Protect and Share Local History",
      description: "Manage local yearbook collections while protecting printed copies and providing digital access for genealogy and local history research.",
      features: [
        "Genealogy Resource: Support family history researchers with searchable digital yearbook archives.",
        "Community Access: Provide digital access to yearbooks that were previously locked in reference sections.",
        "Preservation First: Non‑destructive scanning keeps your originals in great condition for future generations."
      ],
      benefits: "Transform your yearbook collection into a high‑demand digital resource for your entire community.",
      gradient: "from-pink-400 to-blue-500"
    },
    {
      title: "Religious, Private & International Schools",
      subtitle: "Controlled Digital Access",
      description: "Need controlled digital access without handing your archives to a public third‑party platform? This service keeps your content under your control.",
      features: [
        "Privacy Control: You decide who can access which years and whether downloads or only on‑screen viewing are allowed.",
        "Exclusive Ownership: Your digitized files remain exclusively yours with no copies retained by the scanning partner.",
        "Custom Integration: Touchstone helps integrate files into your existing website or intranet."
      ],
      benefits: "Maintain full control of your school's history while making it conveniently accessible to authorized users.",
      gradient: "from-red-400 to-orange-500"
    },
    {
      title: "Individuals & Reunion Planners",
      subtitle: "Scan a Few or Scan Them All",
      description: "Need just a few volumes scanned for a specific event? Yearbook Scanning Service already serves individual customers directly, and Touchstone can coordinate this as part of a broader project.",
      features: [
        "Event‑Ready: Get digital copies in time for class reunions, anniversaries, or memorial events.",
        "Gift‑Quality Files: High‑resolution scans that can be used for yearbook reprints or custom keepsakes.",
        "Flexible Scope: From a single volume to a complete collection, scale to fit your needs."
      ],
      benefits: "Get professional‑quality digital yearbooks without needing to manage a large institutional project.",
      gradient: "from-orange-400 to-yellow-500"
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
              Who This Yearbook Scanning Service Is For
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Because this service is delivered in partnership with a specialist provider, it scales smoothly from small collections to multi‑decade archives.
          </p>
        </motion.div>

        <div className="space-y-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${audience.gradient} flex items-center justify-center mr-4 flex-shrink-0`}>
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${audience.gradient}`}>
                      {audience.title}
                    </h3>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground/80 mb-4">
                    {audience.subtitle}
                  </h4>
                  <p className="text-foreground/70 mb-6">
                    {audience.description}
                  </p>
                </div>
                
                <div>
                  <div className="space-y-4 mb-6">
                    {audience.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${audience.gradient} flex items-center justify-center mt-0.5 flex-shrink-0`}>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-foreground/80 text-sm">
                          <span className="font-semibold">{feature.split(':')[0]}:</span>
                          {feature.split(':').slice(1).join(':')}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`bg-gradient-to-r ${getBenefitsGradient(audience.gradient)} p-4 rounded-lg`}>
                    <p className="text-sm font-medium text-foreground/80">
                      <span className="font-bold">Benefits:</span> {audience.benefits}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhoIsItFor;
