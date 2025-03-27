import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ Item component with animation
const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200/20 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-foreground">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-teal-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-foreground/60" />
          )}
        </span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-5 px-4 prose prose-sm max-w-none text-foreground/80">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

// FAQ Category component
const FAQCategory = ({ title, description, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-amber-500">
          {title}
        </h2>
        <p className="text-foreground/70 mb-8 max-w-3xl">{description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleFAQ(index)}
          />
        ))}
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQ data organized by categories
  const faqData = [
    {
      title: "General Industry Questions",
      description: "Common questions about digital recognition systems and industry standards.",
      faqs: [
        {
          question: "What are digital recognition systems?",
          answer: "Digital recognition systems are modern platforms that allow institutions to showcase achievements, honors, and historical information in an interactive digital format. These systems replace or augment traditional physical displays like plaques, trophies, and hall of fame installations with dynamic digital content that can be updated in real-time and accessed from anywhere.",
        },
        {
          question: "How are digital recognition systems different from traditional displays?",
          answer: "Unlike static physical displays, digital recognition systems offer interactive experiences, real-time updates, multimedia content integration, remote accessibility, search functionality, and data analytics. They can showcase more information in less physical space and can be accessed via touchscreens on-site or through web browsers from anywhere in the world.",
        },
        {
          question: "What industries typically use digital recognition systems?",
          answer: "Digital recognition systems are commonly used by educational institutions (K-12 schools, colleges, universities), sports organizations, corporations, non-profits, museums, and government agencies. Any organization that wants to honor achievements, preserve history, or showcase excellence can benefit from these systems.",
        },
        {
          question: "What are the maintenance requirements for digital displays?",
          answer: "Digital displays require minimal maintenance compared to physical installations. Regular software updates, content refreshes, and occasional hardware maintenance are typically all that's needed. Most systems are designed to operate continuously with little intervention, and content can be updated remotely without physical access to the displays.",
        },
        {
          question: "How long do digital recognition systems typically last?",
          answer: "The hardware components (screens, computers) typically have a lifespan of 5-7 years before they might need replacement or upgrades. However, the software and content can continue indefinitely with regular updates. Many providers offer hardware refresh programs to ensure your system stays current with technological advancements.",
        },
      ],
    },
    {
      title: "Product-Specific (Touchstone) Questions",
      description: "Information about Touchstone Digital Solutions' unique features and capabilities.",
      faqs: [
        {
          question: "What makes Touchstone different from other digital recognition systems?",
          answer: "Touchstone Digital Solutions stands out with its highly customizable platform, intuitive content management system, seamless integration with existing databases, responsive design across all devices, and dedicated support team. Our platform is built specifically for educational institutions with features tailored to showcase student achievements, alumni success, and institutional history.",
        },
        {
          question: "Can Touchstone integrate with our existing school management systems?",
          answer: "Yes, Touchstone is designed to integrate seamlessly with most school management systems, student information systems, alumni databases, and donor management platforms. We provide custom API connections to ensure your digital recognition system stays automatically updated with the latest information from your existing databases.",
        },
        {
          question: "How easy is it to update content on Touchstone displays?",
          answer: "Extremely easy. Touchstone features an intuitive content management system that requires no technical expertise. Authorized staff can add new honorees, update information, upload photos and videos, and publish changes instantly. The system also supports scheduled updates and batch imports for efficiency.",
        },
        {
          question: "Does Touchstone offer remote management capabilities?",
          answer: "Yes, all Touchstone systems can be managed remotely through our secure cloud-based platform. Administrators can update content, monitor display status, schedule power cycles, and receive alerts from anywhere with internet access. This makes maintenance simple and ensures your displays are always showing the most current information.",
        },
        {
          question: "What kind of support does Touchstone provide after installation?",
          answer: "Touchstone offers comprehensive support including 24/7 technical assistance, regular software updates, content management training, and optional content creation services. Our dedicated support team is available via phone, email, and video conference to ensure your system continues to operate flawlessly and meet your evolving needs.",
        },
      ],
    },
    {
      title: "School-Specific Use Cases",
      description: "How educational institutions are implementing digital recognition solutions.",
      faqs: [
        {
          question: "How can schools use digital recognition systems for athletics?",
          answer: "Schools can create dynamic athletic halls of fame that showcase team and individual achievements, record holders, championship teams, and memorable moments. Interactive timelines, searchable databases of athletes, video highlights, and real-time statistics updates make athletic recognition more engaging and comprehensive than traditional trophy cases.",
        },
        {
          question: "Can digital recognition systems showcase academic achievements?",
          answer: "Absolutely. Schools use our systems to highlight academic excellence through honor roll displays, scholarship recipients, academic competition winners, and distinguished alumni. The digital format allows for more detailed profiles of achievers, including their accomplishments, quotes, and future pursuits, creating more meaningful recognition.",
        },
        {
          question: "How do schools use digital recognition for alumni engagement?",
          answer: "Schools create interactive alumni directories that showcase graduate success stories, career achievements, and contributions to their communities. These systems often include features for alumni to update their own information, connect with classmates, and engage with current students. This strengthens alumni networks and supports fundraising efforts.",
        },
        {
          question: "Can digital displays be used for school history and traditions?",
          answer: "Yes, many schools use our platforms to preserve and share their history through interactive timelines, archival photo galleries, recorded oral histories, and virtual tours of historical campus locations. This helps maintain institutional identity and builds connection between current students and school traditions.",
        },
        {
          question: "How do schools handle donor recognition with digital systems?",
          answer: "Digital donor walls allow schools to recognize contributors in more meaningful ways than static plaques. Interactive displays can showcase donor stories, impact of gifts, ongoing campaigns, and recognition by giving level. The ability to update content instantly means new donors can be recognized immediately, enhancing stewardship efforts.",
        },
      ],
    },
    {
      title: "Budgeting / Pricing / Planning",
      description: "Information to help you plan and budget for your digital recognition project.",
      faqs: [
        {
          question: "What factors affect the cost of a digital recognition system?",
          answer: "Key cost factors include: hardware specifications (screen size, resolution, touch capabilities), number of display locations, software customization requirements, content migration needs, and ongoing support services. Touchstone offers scalable solutions to fit various budget ranges while maintaining quality and functionality.",
        },
        {
          question: "Are there financing options available for schools?",
          answer: "Yes, Touchstone offers several financing options including leasing programs, phased implementation plans, and subscription-based pricing models that minimize upfront costs. We also work with educational foundations and booster clubs to create sponsorship opportunities that can offset costs through donor recognition features.",
        },
        {
          question: "How long does implementation typically take?",
          answer: "Implementation timelines vary based on project scope, but typically range from 8-12 weeks from contract signing to system launch. This includes hardware procurement, software customization, content development, installation, and training. We provide detailed project timelines during the proposal phase to help with planning.",
        },
        {
          question: "What ongoing costs should we budget for?",
          answer: "Ongoing costs typically include software licensing/subscription fees, content management services (if desired), hardware maintenance, and eventual hardware refresh (typically every 5-7 years). Touchstone offers all-inclusive packages that bundle these costs to make budgeting more predictable.",
        },
        {
          question: "How do schools measure ROI on digital recognition systems?",
          answer: "Schools measure ROI through increased engagement metrics (visitor interactions, time spent with displays), enhanced fundraising outcomes, improved alumni participation, positive feedback from stakeholders, and operational efficiencies gained from automated content management. We provide analytics tools to help track these metrics and demonstrate the system's value.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section 
          className="relative min-h-[70svh] w-full flex flex-col items-center justify-center overflow-hidden pt-4 pb-2 sm:pt-8 sm:pb-6 md:pt-16 md:pb-12"
          style={{
            backgroundImage: "url('/hero-bg-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}>
          {/* Background with animated gradient */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute inset-0"
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
          
          {/* Decorative elements - hidden on small screens */}
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/10 hidden sm:block"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 10, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500/10 hidden sm:block"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -15, 0],
              y: [0, 15, 0]
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ scale: [0.95, 1] }}
                viewport={{ once: true }}
              >
                <span className="text-transparent bg-clip-text text-gradient-purple-blue">
                  Frequently Asked
                </span>
                <span className="text-foreground"> Questions</span>
              </motion.h1>
              
              <motion.div
                className="relative mb-4 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-6 max-w-3xl mx-auto">
                  Find answers to common questions about digital recognition systems and how Touchstone Digital Solutions can help your institution showcase excellence.
                </p>
                
                {/* Decorative line */}
                <motion.div 
                  className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.div>
              
              {/* Category navigation */}
              <motion.div 
                className="flex flex-wrap justify-center gap-2 md:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {faqData.map((category, index) => (
                  <motion.a 
                    key={index}
                    href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 md:px-6 md:py-3 bg-white border border-blue-200 rounded-lg shadow-sm text-blue-700 text-sm md:text-base font-medium hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                  >
                    {category.title}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Categories */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            {faqData.map((category, index) => (
              <div 
                key={index} 
                id={category.title.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-24"
              >
                <FAQCategory
                  title={category.title}
                  description={category.description}
                  faqs={category.faqs}
                />
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
          {/* Background with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700"></div>
          
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-[10%] right-[15%] w-72 h-72 rounded-full bg-blue-400 mix-blend-overlay opacity-20"
              animate={{ 
                y: [0, -40, 0],
                x: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div 
              className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-purple-400 mix-blend-overlay opacity-20"
              animate={{ 
                y: [0, 30, 0],
                x: [0, 20, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="relative">
              <motion.div 
                className="max-w-3xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Still have questions?</h2>
                <motion.div 
                  className="h-1 w-20 bg-white rounded-full mb-6 mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <p className="text-lg text-white/90 mb-8">
                  Our team is ready to help you find the perfect digital recognition solution for your institution.
                </p>
                <motion.a 
                  href="https://calendly.com/touchstone-ds/custom-guided-tour?atm_source=website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-medium text-center hover:bg-opacity-90 transition-all shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule a Consultation
                </motion.a>
              </motion.div>
            
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-4 border-white/10"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 45, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.div 
                className="absolute -top-16 -left-16 w-32 h-32 rounded-full border-4 border-white/10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -45, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;