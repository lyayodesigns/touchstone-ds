"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Set up is on us",
      description: "TouchstoneFunder will build your campaign and do all of the creative work for you."
    },
    {
      step: "2", 
      title: "Athletes add contacts",
      description: "Team members just sign in on smartphones and add emails/cells of friends and family"
    },
    {
      step: "3",
      title: "Messaging goes out",
      description: "TouchstoneFunder sends five weeks of personalized emails/texts to supporters."
    },
    {
      step: "4",
      title: "Contributions roll in",
      description: "Supporters read your team story and click to contribute. Gifts average $80 each."
    },
    {
      step: "5",
      title: "Comprehensive tracking",
      description: "TouchstoneFunder tracks athlete participation, supporter engagement, and message delivery."
    },
    {
      step: "6",
      title: "You keep 90% of every Dollar!",
      description: "90 cents of every dollar donated goes to your team! No products to sell, no events to manage, and nothing to organize."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/[0.02] to-background"></div>
      
      <Container className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg">
            Six simple steps to successful fundraising
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="relative bg-background border border-foreground/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/20">
                      <span className="text-lg font-semibold text-primary">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground leading-tight pt-1.5">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    {step.description}
                  </p>
                  
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-px">
                    <div className="w-full h-full bg-gradient-to-r from-foreground/20 to-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a 
            href="/contact/" 
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Book Your Free Consultation Now
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorks;
