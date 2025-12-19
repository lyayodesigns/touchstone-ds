"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const PlatformFeatures = () => {
  const features = [
    {
      title: "Smart Document Digitization and Scanning",
      description: "Our scanning services include the state of art scanning equipment along with professional processing of our document digitization services. We scan the high volume batches as well as fragile manuscripts. Every item is scanned into a digital format to archival standards, which means that it will be faithful and readable later on despite the change in technology.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Enhanced Metadata Administration and Cataloging",
      description: "Digital archives are built upon metadata. Our system is capable of creating and maintaining descriptive metadata (title, creator, date, subject), technical metadata (file format, resolution, compression) and administrative metadata (retention dates, access restrictions). This broad-based solution renders your collection really findable, be it the simplistic key-word queries or the advanced queries.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Single-Search of All Content Types",
      description: "Your Digital History Archive is a single service that can be searched. Regardless of the type of content you keep in your collection, such as documents, photographs, audio recordings, video files, or born-digital material, researchers can access all of it using a single intuitive interface. Full-text search, faceted browsing and filtered results will make sure that users get what they require.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Scalable Access Control and Architecture of Security",
      description: "Different access levels are required by different stakeholders. Our platform provides granular access permissions where administrators can either grant totally, partially or limited access to a given collection or item. Permissioning, IP restrictions, and analytics on usage assist institutions to ensure a proper level of security and maximize access to them.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Floating Interaction with the Existing Systems",
      description: "Your Digital History Archive is compatible with the existing institutional systems such as library management systems, museum databases, collection management platforms, and enterprise document management solutions. The system disruptions will not be necessary at all- our archive management solutions can integrate with your existing infrastructure.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Storage & Redundancy which are Scalable",
      description: "Our platform is created on a solid, high-performance cloud with the ability to expand with your institution. Geographic redundancy, automatic backups, and disaster recovery procedures will take care of your online assets. The system can be used to archive 10,000 or 10 million items and be reliable and efficient.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Aesthetic User Interface and Researcher Experience",
      description: "An effective archive can only be useful when individuals utilize it. Our platform is easy to navigate, mobile responsive and can be accessed by anyone. The interface can be customized to your needs and level of expertise, regardless of whether you are a professional researcher, student, community member or internal staff.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Export and Integration Abilities",
      description: "The results of search may be exported by the users, custom collections can be created, and the data on the archives can be integrated into personal research processes. API access provides the opportunity to develop partner organization and advanced technical users to create custom applications and integrations.",
      gradient: "from-purple-500 to-pink-500"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Extensive Digital Archive Platform Characteristics
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Major Findings of Our Digital History Archive
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6`}>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              
              <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PlatformFeatures;
