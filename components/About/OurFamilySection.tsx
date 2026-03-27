"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '../ui/container';

const familyValues = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        title: "Family Owned & Operated",
        description: "Led by people who care about your success.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: "Your Needs Come First",
        description: "We tailor our approach to fit your needs, not the other way around.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Long-Term Commitment",
        description: "You can count on us today and in the years ahead.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        title: "A Personal Touch",
        description: "When you call, you speak directly with someone who knows you and how to help.",
    },
];

export const OurFamilySection = () => {
    return (
        <section className="py-20 relative overflow-hidden" id="our-family">
            {/* Warm background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50/30 to-blue-50 opacity-80"></div>

            {/* Subtle decorative blobs */}
            <motion.div
                className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-purple-200 mix-blend-multiply opacity-15"
                animate={{
                    y: [0, 40, 0],
                    x: [0, -20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
                className="absolute bottom-[5%] right-[8%] w-80 h-80 rounded-full bg-pink-200 mix-blend-multiply opacity-15"
                animate={{
                    y: [0, -30, 0],
                    x: [0, 30, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{ duration: 26, repeat: Infinity, repeatType: "reverse" }}
            />

            <Container className="relative z-10">
                <div className="container mx-auto">
                    {/* Section header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                            className="inline-block relative"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-2 relative z-10 inline-block pb-1">
                                <span className="text-foreground">Business That Feels Like Home</span>
                            </h2>
                            <motion.div
                                className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 rounded-full -z-10"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            />
                        </motion.div>
                        <motion.p
                            className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Family-Owned. Relationship-Driven. Built for the Long Term.
                        </motion.p>
                    </motion.div>

                    {/* Main content: Image + Values */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left side - Family image */}
                        <motion.div
                            className="lg:col-span-7 relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative">
                                {/* Decorative border behind image */}
                                <motion.div
                                    className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-purple-400 via-pink-400 to-blue-500 -z-10"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 0.7, scale: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                />
                                <motion.div
                                    className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative z-10"
                                    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)" }}
                                >
                                    <Image
                                        src="/home/our family.avif"
                                        alt="The Touchstone Digital Solutions Family"
                                        width={600}
                                        height={500}
                                        className="w-full h-auto object-cover"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right side - Values */}
                        <motion.div
                            className="lg:col-span-5"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="space-y-5">
                                {familyValues.map((value, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 flex items-start gap-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        {/* Icon circle */}
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center flex-shrink-0 text-primary group-hover:from-purple-200 group-hover:via-pink-200 group-hover:to-blue-200 transition-colors duration-300">
                                            {value.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-1">{value.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OurFamilySection;
