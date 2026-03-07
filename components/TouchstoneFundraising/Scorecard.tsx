"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Users, DollarSign, CheckCircle, ThumbsUp } from 'lucide-react';

const Scorecard = () => {
  const cards = [
    {
      icon: Users,
      title: "Stable & Proven",
      description: "Platform has been used by thousands of teams and schools."
    },
    {
      icon: DollarSign,
      title: "Avg Raise",
      description: "Individual teams raise an average of $5,000. Departments raise more…"
    },
    {
      icon: CheckCircle,
      title: "Modern & Safe",
      description: "No knocking on doors, no selling products, no events."
    },
    {
      icon: ThumbsUp,
      title: "Simple & Fast",
      description: "Takes minutes instead of weeks or months."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <Container className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            <span className="text-primary">Our</span> Scorecard
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-foreground/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-8 h-8 text-primary" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">
                    {card.title}
                  </h3>
                  
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Scorecard;
