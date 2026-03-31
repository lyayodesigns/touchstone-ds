"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhoIsYearbookScanning = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,158,0.03),transparent_50%)]" />
      
      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Why Choose Touchstone for Yearbook Scanning?
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-foreground/80">
              Professional Yearbook Digitization You Can Trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-6">
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Touchstone Digital Solutions brings professional yearbook digitization expertise to schools and universities across the United States and internationally.
                </p>
                
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Our yearbook scanning service is built on a core commitment to preservation and accessibility:
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 italic">
                    Preserve original archives while making them digitally accessible for future generations.
                  </p>
                </div>
                
                <p className="text-lg text-foreground/70 leading-relaxed">
                  We combine advanced scanning technology with archival preservation standards to help schools protect and digitize their most treasured historical records — their yearbooks. Our non-destructive scanning process ensures your originals remain intact while creating high-quality digital archives.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Yearbook%20Scanning/stacked%20yearbooks.avif"
                  alt="Stacked school yearbooks ready for professional yearbook scanning and digitization"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoIsYearbookScanning;
