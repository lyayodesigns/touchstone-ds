"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slideRightToLeft = {
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(-50%)" },
};

const slideLeftToRight = {
  "0%": { transform: "translateX(-50%)" },
  "100%": { transform: "translateX(0)" },
};

const images = [
  "/TDS Cover - 1.jpg",
  "/TDS Cover - 2.jpg",
  "/TDS Cover - 3.jpg",
  "/TDS Cover - 4.jpg",
  "/TDS Cover - 5.jpg",
  "/TDS Cover - 6.jpg",
  "/TDS Cover - 7.jpg",
  "/TDS Cover - 8.jpg",
  "/TDS Cover - 9.jpg",
];

const imageDescriptions = [
  "Interactive School Hall of Fame Display",
  "Digital Achievement Wall for Students",
  "Athletic Recognition Display System",
  "Touchscreen Sports Statistics Interface",
  "School Donor Recognition Wall",
  "Interactive Timeline of School History",
];

const PhotoCarouselSection: React.FC = () => {
  // SSR: Always render first image, no animation or interactivity
  const currentIndex = 0;
  const selectedImage = null;
  const firstRow = images.slice(0, 3);
  const secondRow = images.slice(3, 6);

  const firstRowDuplicated = [...firstRow, ...firstRow, ...firstRow];
  const secondRowDuplicated = [...secondRow, ...secondRow, ...secondRow];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section className="py-16 w-full bg-gradient-to-b from-background to-card overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto mb-12 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            <span className="text-gradient-purple-blue block sm:inline">Our Stunning</span>
            <span className="block sm:inline">{" Digital Displays in Action"}</span>
          </h2>

          <p className="text-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
            See how our interactive displays transform spaces and celebrate
            achievements across schools and athletic facilities.
          </p>
        </motion.div>

        <div className="space-y-12">
          <div className="w-full overflow-hidden">
            <motion.div
              className={`flex whitespace-nowrap transform-gpu will-change-transform backface-visibility-hidden`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{ x: [0, -50 + "%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
                opacity: { duration: 1 },
              }}
            >
              {firstRowDuplicated.map((img, index) => (
                <div
                  key={`first-row-${index}`}
                  className="inline-block px-3 w-full md:w-1/3 lg:w-1/3 shrink-0"
                >
                  <div
                    className="group relative rounded-xl overflow-hidden shadow-glow-sm hover:shadow-glow-md transition-all duration-300 aspect-video"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={imageDescriptions[index % firstRow.length]}
                        className="transition-transform duration-500 group-hover:scale-110 object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3} // Only prioritize the first few images
                        quality={80}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-foreground">
                        <h3 className="text-lg font-bold">
                          {imageDescriptions[index % firstRow.length]}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="w-full overflow-hidden">
            <motion.div
              className={`flex whitespace-nowrap transform-gpu will-change-transform backface-visibility-hidden`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{ x: [-50 + "%", 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
                opacity: { duration: 1 },
              }}
            >
              {secondRowDuplicated.map((img, index) => (
                <div
                  key={`second-row-${index}`}
                  className="inline-block px-3 w-full md:w-1/3 lg:w-1/3 shrink-0"
                >
                  <div
                    className="group relative rounded-xl overflow-hidden shadow-glow-sm hover:shadow-glow-md transition-all duration-300 aspect-video"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={imageDescriptions[(index % secondRow.length) + firstRow.length]}
                        className="transition-transform duration-500 group-hover:scale-110 object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        quality={80}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-foreground">
                        <h3 className="text-lg font-bold">
                          {
                            imageDescriptions[
                              (index % secondRow.length) + firstRow.length
                            ]
                          }
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarouselSection;
