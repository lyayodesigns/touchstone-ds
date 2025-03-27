import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/container';

const AboutPage = () => {
  return (
    <main className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50 to-purple-50 opacity-50">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/10"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500/10"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
                About Us
              </div>
            </motion.div> */}
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true }}
            >
              About Touchstone Digital Solutions
            </motion.h1>
            
            <motion.div
              className="relative mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                The industry leader in fully customized interactive touchscreen recognition software
              </p>
              
              {/* Decorative line */}
              <motion.div 
                className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>
            
            {/* Interactive buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.a 
                href="#mission" 
                className="px-6 py-3 bg-white border border-blue-200 rounded-lg shadow-sm text-blue-700 font-medium hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
              >
                Our Mission
              </motion.a>
              <motion.a 
                href="#team" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-sm text-white font-medium hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
              >
                Meet Our Team
              </motion.a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats Cards Section - Similar to the image */}
      <section className="py-16 bg-background relative" id="mission">
        {/* Background decorative elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/5"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-block relative text-center w-full"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6 relative z-10 inline-block pb-1">
                Our Company at a Glance
              </h2>
              <motion.div 
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -z-10 mb-2 mt-1"
                style={{ width: '80%', maxWidth: '500px' }}
                initial={{ width: 0 }}
                whileInView={{ width: '80%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.div>
            <motion.p
              className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Key facts about Touchstone Digital Solutions
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Our Story Card with Video */}
            <motion.div 
              className="bg-[#0e2b4d] rounded-xl overflow-hidden shadow-xl text-white relative border border-blue-900"
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <div className="relative">
                <img 
                  src="/public/About Us.avif" 
                  alt="Our Story" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 flex items-center justify-center">
                  <motion.button 
                    className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center z-10"
                    whileHover={{ scale: 1.15, backgroundColor: "#4f46e5" }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      boxShadow: ["0px 0px 0px 0px rgba(59, 130, 246, 0.5)", "0px 0px 0px 12px rgba(59, 130, 246, 0)", "0px 0px 0px 0px rgba(59, 130, 246, 0.5)"]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-2">Our Story</h3>
                <div className="h-1 w-12 bg-blue-500 rounded-full mb-3"></div>
                <p className="text-blue-100/80 text-sm">Click to watch our journey</p>
              </motion.div>
            </motion.div>

            {/* Our Mission Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 relative overflow-hidden"
              whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-100 opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10"
              >
                <h3 className="text-xl font-bold mb-4 relative z-10">Our Mission</h3>
                <div className="h-1 w-12 bg-blue-500 rounded-full mb-4"></div>
                <p className="text-gray-700 relative z-10">
                  To help high school and college administrators better recognize student, alumni, and community achievements
                </p>
              </motion.div>
            </motion.div>

            {/* Years Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 relative overflow-hidden"
              whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-purple-100 opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.h2 
                className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100
                }}
              >
                7
              </motion.h2>
              <motion.div 
                className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Years of Profitable Operations
              </motion.p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Employees Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 relative overflow-hidden"
              whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-blue-100 opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.h2 
                className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100
                }}
              >
                30+
              </motion.h2>
              <motion.div 
                className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Driven Employees
              </motion.p>
            </motion.div>

            {/* Built With Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 relative overflow-hidden"
              whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-purple-100 opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative z-10"
              >
                <h3 className="text-2xl font-bold mb-4">Built With</h3>
                <div className="flex items-center">
                  <motion.span 
                    className="text-blue-600 text-5xl"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    ❤
                  </motion.span>
                  <span className="text-2xl font-bold mx-2">in</span>
                </div>
                <h3 className="text-2xl font-bold">Boston</h3>
                <div className="h-1 w-12 bg-blue-500 rounded-full my-3"></div>
                <p className="text-gray-700">Fully Bootstrapped & Founder Owned</p>
              </motion.div>
            </motion.div>

            {/* Clients Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 relative overflow-hidden"
              whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-100 opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.h2 
                className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                700+
              </motion.h2>
              <motion.div 
                className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Clients Across the Country
              </motion.p>
            </motion.div>
          </div>

          {/* Team Photo */}
          <motion.div 
            className="mt-12"
            id="team"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          >
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 relative"
              whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)" }}
            >
              <img 
                src="/public/About Us.avif" 
                alt="Touchstone team" 
                className="w-full h-auto object-cover"
              />
              <motion.div 
                className="p-6 bg-gradient-to-r from-blue-50 to-purple-50"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-center mb-2">Meet Our Team</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 mx-auto"></div>
                <p className="text-center text-gray-700">
                  Our team at a recent industry conference, showcasing our latest digital recognition solutions
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 relative overflow-hidden">
        {/* Creative background with animated shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-0 right-[15%] w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply opacity-20"
            animate={{ 
              y: [0, 50, 0],
              x: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-purple-200 mix-blend-multiply opacity-20"
            animate={{ 
              y: [0, -40, 0],
              x: [0, 40, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Creative section header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block relative"
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2 relative z-10">
                  What Makes Us Different
                </h2>
                <motion.div 
                  className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -z-10"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </motion.div>
              <motion.p
                className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                The unique qualities that set our digital recognition solutions apart
              </motion.p>
            </motion.div>
            
            {/* Interactive timeline/feature showcase */}
            <div className="relative">
              {/* Central line */}
              <motion.div 
                className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
              
              {/* Feature items */}
              <div className="space-y-16 md:space-y-24 relative">
                {/* Item 1 & 2 - Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  {/* Item 1 */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 md:mr-8 h-full">
                      <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-8 w-8 text-blue-600" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 5, 0, -5, 0]
                              }}
                              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </motion.svg>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">Family-Owned</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Touchstone isn't just a company—it's a family. As a family-owned business, we pour our hearts into every project, 
                          ensuring each school gets the personal attention and dedication it deserves.
                        </p>
                      </div>
                    </div>
                    {/* Connector to timeline (desktop only) */}
                    <div className="absolute right-0 top-1/2 hidden md:block">
                      <div className="w-8 h-1 bg-blue-500"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-blue-500 shadow-md"></div>
                    </div>
                  </motion.div>
                  
                  {/* Item 2 */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 md:ml-8 h-full">
                      <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-8 w-8 text-purple-600" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 5, 0, -5, 0]
                              }}
                              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </motion.svg>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">Team-Focused</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          As former Division 1 athletes, we know what it takes to be on a winning team. That's why we've carefully built 
                          a team of designers, developers, and visionaries committed to delivering unparalleled digital experiences.
                        </p>
                      </div>
                    </div>
                    {/* Connector to timeline (desktop only) */}
                    <div className="absolute left-0 top-1/2 hidden md:block">
                      <div className="w-8 h-1 bg-purple-500"></div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-purple-500 shadow-md"></div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Item 3 & 4 - Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  {/* Item 3 */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 md:mr-8 h-full">
                      <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-8 w-8 text-blue-600" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 5, 0, -5, 0]
                              }}
                              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </motion.svg>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">Zero Sales Quotas</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Just genuine partnerships. We don't chase numbers—we chase excellence. Our team isn't driven by sales quotas 
                          but by a passion for crafting truly customized recognition experiences that exceed your expectations.
                        </p>
                      </div>
                    </div>
                    {/* Connector to timeline (desktop only) */}
                    <div className="absolute right-0 top-1/2 hidden md:block">
                      <div className="w-8 h-1 bg-blue-500"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-blue-500 shadow-md"></div>
                    </div>
                  </motion.div>
                  
                  {/* Item 4 */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 md:ml-8 h-full">
                      <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-8 w-8 text-purple-600" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 5, 0, -5, 0]
                              }}
                              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </motion.svg>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">100% Custom</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Every project is fully tailored to your needs, built on a foundation of flexible back-end templates 
                          to ensure a seamless yet one-of-a-kind experience.
                        </p>
                      </div>
                    </div>
                    {/* Connector to timeline (desktop only) */}
                    <div className="absolute left-0 top-1/2 hidden md:block">
                      <div className="w-8 h-1 bg-purple-500"></div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-purple-500 shadow-md"></div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Item 5 & 6 - Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  {/* Item 5 */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 md:mr-8 h-full">
                      <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-8 w-8 text-blue-600" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 5, 0, -5, 0]
                              }}
                              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </motion.svg>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">Built by Gaming Experts</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          You read that right. To create truly remarkable displays, you have to work with the best. That's why we've 
                          brought in top UI/UX designers from the video game industry to craft stunning visuals you won't find anywhere else.
                        </p>
                      </div>
                    </div>
                    {/* Connector to timeline (desktop only) */}
                    <div className="absolute right-0 top-1/2 hidden md:block">
                      <div className="w-8 h-1 bg-blue-500"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-blue-500 shadow-md"></div>
                    </div>
                  </motion.div>
                  
                  {/* Item 6 */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 md:ml-8 h-full">
                      <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-8 w-8 text-purple-600" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 5, 0, -5, 0]
                              }}
                              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </motion.svg>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">Always Evolving</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          We continuously release new software updates, ensuring your display stays cutting-edge. With over-the-air updates, 
                          your system evolves effortlessly—no manual installs, no downtime, just seamless improvements.
                        </p>
                      </div>
                    </div>
                    {/* Connector to timeline (desktop only) */}
                    <div className="absolute left-0 top-1/2 hidden md:block">
                      <div className="w-8 h-1 bg-purple-500"></div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-purple-500 shadow-md"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values Section */}
      {/* <section className="py-16 bg-muted">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Family-Owned Dedication</h3>
                <p className="text-muted-foreground">
                  We approach every project with the same level of commitment and care as if it were our own. 
                  Our personalized service sets us apart from larger competitors.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Customer-Centric Approach</h3>
                <p className="text-muted-foreground">
                  Our clients are at the heart of everything we do. We collaborate closely with schools and 
                  communities to understand their needs and exceed expectations.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Innovation & Excellence</h3>
                <p className="text-muted-foreground">
                  We merge forward-thinking design with state-of-the-art technology to deliver solutions that are not only 
                  functional but also visually compelling. Our drive for excellence fuels continuous innovation and improvement.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Integrity & Trust</h3>
                <p className="text-muted-foreground">
                  We believe in building lasting relationships based on transparency, quality, and accountability. 
                  Our commitment to honesty and reliability ensures the highest standards in every project.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section> */}
<section className="py-24 relative overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 opacity-70"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute bottom-0 right-[10%] w-72 h-72 rounded-full bg-blue-200 mix-blend-multiply opacity-20"
            animate={{ 
              y: [0, -40, 0],
              x: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute top-[20%] left-[5%] w-64 h-64 rounded-full bg-purple-200 mix-blend-multiply opacity-20"
            animate={{ 
              y: [0, 30, 0],
              x: [0, 20, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
        
        <Container className="relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-block relative"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2 relative z-10">
                Our Values
              </h2>
              <motion.div 
                className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -z-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.div>
            <motion.p
              className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>
          
          {/* Values Cards */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Value 1 */}
              <motion.div
                className="relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-foreground/10 h-full overflow-hidden">
                  {/* Top gradient bar */}
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                  
                  <div className="p-8">
                    <div className="flex items-start">
                      <div className="mr-5">
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary"
                          whileHover={{ rotate: 10 }}
                          animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, 0, -5, 0]
                          }}
                          transition={{ duration: 5, repeat: Infinity }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </motion.div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">Family-Owned Dedication</h3>
                        <p className="text-foreground/80 leading-relaxed">
                          We approach every project with the same level of commitment and care as if it were our own. 
                          Our personalized service sets us apart from larger competitors.
                        </p>
                        
                        {/* Animated underline on hover */}
                        <motion.div 
                          className="h-0.5 bg-primary mt-4 w-0 group-hover:w-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Value 2 */}
              <motion.div
                className="relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-foreground/10 h-full overflow-hidden">
                  {/* Top gradient bar */}
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                  
                  <div className="p-8">
                    <div className="flex items-start">
                      <div className="mr-5">
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary"
                          whileHover={{ rotate: 10 }}
                          animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, 0, -5, 0]
                          }}
                          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </motion.div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">Customer-Centric Approach</h3>
                        <p className="text-foreground/80 leading-relaxed">
                          Our clients are at the heart of everything we do. We collaborate closely with schools and 
                          communities to understand their needs and exceed expectations.
                        </p>
                        
                        {/* Animated underline on hover */}
                        <motion.div 
                          className="h-0.5 bg-primary mt-4 w-0 group-hover:w-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Value 3 */}
              <motion.div
                className="relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-foreground/10 h-full overflow-hidden">
                  {/* Top gradient bar */}
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                  
                  <div className="p-8">
                    <div className="flex items-start">
                      <div className="mr-5">
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary"
                          whileHover={{ rotate: 10 }}
                          animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, 0, -5, 0]
                          }}
                          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </motion.div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">Innovation & Excellence</h3>
                        <p className="text-foreground/80 leading-relaxed">
                          We merge forward-thinking design with state-of-the-art technology to deliver solutions that are not only 
                          functional but also visually compelling. Our drive for excellence fuels continuous innovation and improvement.
                        </p>
                        
                        {/* Animated underline on hover */}
                        <motion.div 
                          className="h-0.5 bg-primary mt-4 w-0 group-hover:w-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Value 4 */}
              <motion.div
                className="relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-foreground/10 h-full overflow-hidden">
                  {/* Top gradient bar */}
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                  
                  <div className="p-8">
                    <div className="flex items-start">
                      <div className="mr-5">
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary"
                          whileHover={{ rotate: 10 }}
                          animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, 0, -5, 0]
                          }}
                          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </motion.div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">Integrity & Trust</h3>
                        <p className="text-foreground/80 leading-relaxed">
                          We believe in building lasting relationships based on transparency, quality, and accountability. 
                          Our commitment to honesty and reliability ensures the highest standards in every project.
                        </p>
                        
                        {/* Animated underline on hover */}
                        <motion.div 
                          className="h-0.5 bg-primary mt-4 w-0 group-hover:w-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Values Statement */}
            <motion.div
              className="mt-16 bg-background/30 backdrop-blur-sm border border-foreground/10 rounded-2xl shadow-xl overflow-hidden text-foreground relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.4)",
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="absolute top-0 left-0 right-0 h-full w-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"
                animate={{ 
                  x: [0, 100, 0],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <div className="relative z-10 p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="md:w-3/4 md:pl-8 text-center md:text-left">
                    <blockquote className="text-lg md:text-xl font-light">
                      "Our values aren't just words on a page—they're the foundation of every interaction, every design decision, and every relationship we build. They guide us as we create digital legacies that honor achievements and inspire future generations."
                    </blockquote>
                    <div className="mt-4 flex items-center justify-center md:justify-start">
                      <div className="h-px w-8 bg-foreground/50 mr-3"></div>
                      <p className="font-medium">The Touchstone Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Us on the Journey</h2>
            <p className="text-lg mb-8">
              Unlock the transformative power of digital recognition with Touchstone Digital Solutions. 
              Our commitment to innovation, quality, and fully customized service sets us apart. 
              We'd be honored to help you craft a digital legacy that celebrates your institution's heritage, 
              achievements, and future.
            </p>
            <p className="text-lg mb-8">
              Let's create something remarkable together. Get in touch today to see how we can elevate your school's digital presence.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AboutPage;
