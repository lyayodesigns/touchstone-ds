"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const DigitalTrophyCaseIdeas = () => {
  const ideas = [
    {
      title: "The \"Career Arc\" Display",
      description: "Display an athlete's career from rookie season to veteran leader, showing their progression in stats and accolades.",
      gradient: "from-blue-400 to-purple-500",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "The \"Championship Run\" Spotlight",
      description: "This case is dedicated to one championship season, filled with photos from every playoff game, the final scoreboard, and videos of the celebration.",
      gradient: "from-purple-400 to-pink-500",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "The \"Legacy Builder\" for Schools",
      description: "Create a multi-sport case for a graduating senior aggregating all their varsity letters and awards as well as memorable moments.",
      gradient: "from-pink-400 to-red-500",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      title: "The \"Corporate Hall of Fame\"",
      description: "A rotating digital trophy case display at your office lobby highlighting top-tier employees and historic company achievements.",
      gradient: "from-red-400 to-orange-500",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "The \"Community Fundraiser\" Case",
      description: "The honorary case for recognizing top donors and volunteers of a non-profit's annual campaign, acting as something personal to add to your thank you.",
      gradient: "from-orange-400 to-yellow-500",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "The \"Mega Digital Trophy Wall\"",
      description: "Use our premier template to display all of your trophies at once, seamlessly. It is quite the site!",
      gradient: "from-yellow-400 to-green-500",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
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
              Digital Trophy Case Ideas to Inspire You
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            At a loss on how to start? These great ideas will put you on your way toward the perfect digital trophy case.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className={`${index === 0 ? 'text-blue-500' : index === 1 ? 'text-purple-500' : index === 2 ? 'text-pink-500' : index === 3 ? 'text-red-500' : index === 4 ? 'text-orange-500' : 'text-green-500'}`}>
                  {idea.icon}
                </div>
              </div>
              
              <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${idea.gradient}`}>
                {idea.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {idea.description}
              </p>
              
              <div className={`mt-6 h-1 w-full bg-gradient-to-r ${idea.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-200/20">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Ready to Create Your Own?
            </h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              These are just a few examples of what's possible. Your digital trophy case can be as unique as your achievements. 
              Let your creativity flow and build something that truly represents your journey.
            </p>
            <a 
              href="#start-trial" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default DigitalTrophyCaseIdeas;
