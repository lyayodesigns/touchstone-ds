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
      icon: "📈"
    },
    {
      title: "The \"Championship Run\" Spotlight",
      description: "This case is dedicated to one championship season, filled with photos from every playoff game, the final scoreboard, and videos of the celebration.",
      gradient: "from-purple-400 to-pink-500",
      icon: "🏆"
    },
    {
      title: "The \"Legacy Builder\" for Schools",
      description: "Create a multi-sport case for a graduating senior aggregating all their varsity letters and awards as well as memorable moments.",
      gradient: "from-pink-400 to-red-500",
      icon: "🎓"
    },
    {
      title: "The \"Corporate Hall of Fame\"",
      description: "A rotating digital trophy case display at your office lobby highlighting top-tier employees and historic company achievements.",
      gradient: "from-red-400 to-orange-500",
      icon: "🏢"
    },
    {
      title: "The \"Community Fundraiser\" Case",
      description: "The honorary case for recognizing top donors and volunteers of a non-profit's annual campaign, acting as something personal to add to your thank you.",
      gradient: "from-orange-400 to-yellow-500",
      icon: "❤️"
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
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {idea.icon}
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
