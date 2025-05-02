"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';
import { 
  Smartphone, 
  QrCode, 
  FolderOpen, 
  Palette, 
  BarChart3, 
  Film, 
  FileText, 
  LayoutTemplate, 
  Sparkles, 
  Link, 
  Calendar, 
  Key, 
  Cloud, 
  Shield, 
  Accessibility, 
  HardDrive, 
  DollarSign, 
  RefreshCw, 
  PhoneCall,
  ChevronDown,
  ChevronUp,
  Layers,
  Settings,
  Lock,
  CreditCard,
  Search
} from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureSection {
  title: string;
  description: string;
  category: number;
  features: FeatureItem[];
}

interface CategoryItem {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const VisualFidelity = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for active tab and expanded sections
  const [activeTab, setActiveTab] = useState(0);
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle tab change
  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setExpandedSections([0]); // Reset expanded sections when tab changes
    
    // Optional: Scroll to content area if needed
    setTimeout(() => {
      if (contentRef.current) {
        const yOffset = -100; // Adjust offset as needed
        const y = contentRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  // Toggle section expansion
  const toggleSection = (index: number) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter(i => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Feature categories for tabs
  const categories: CategoryItem[] = [
    { 
      name: "Device Compatibility", 
      icon: <Smartphone className="h-5 w-5" />,
      description: ""
    },
    { 
      name: "Content Management", 
      icon: <Layers className="h-5 w-5" />,
      description: ""
    },
    { 
      name: "Engaging Media", 
      icon: <Film className="h-5 w-5" />,
      description: ""
    },
    { 
      name: "Integration & Access", 
      icon: <Settings className="h-5 w-5" />,
      description: ""
    },
    { 
      name: "Security & Updates", 
      icon: <Lock className="h-5 w-5" />,
      description: ""
    },
    { 
      name: "Pricing & Support", 
      icon: <CreditCard className="h-5 w-5" />,
      description: ""
    }
  ];

  // Feature sections with their respective features
  const allSections: FeatureSection[] = [
    {
      title: "Universal Device Compatibility",
      description: "Our responsive design ensures flawless performance on any device.",
      category: 0,
      features: [
        {
          icon: <Smartphone className="h-5 w-5" />,
          title: "Mobile-Friendly Access",
          description: "View and interact with content on smartphones, tablets, and kiosks."
        },
        {
          icon: <QrCode className="h-5 w-5" />,
          title: "QR Code & Link Sharing",
          description: "Share profiles, records, and highlights with ease."
        }
      ]
    },
    {
      title: "Advanced Content Management & Branding",
      description: "Effortlessly manage and personalize your platform's content.",
      category: 1,
      features: [
        {
          icon: <FolderOpen className="h-5 w-5" />,
          title: "All-in-One Content Manager",
          description: "Edit photos, videos, and text in an intuitive interface."
        },
        {
          icon: <Palette className="h-5 w-5" />,
          title: "Custom Branding",
          description: "Match your school's identity with tailored fonts, colors, and layouts."
        },
        {
          icon: <BarChart3 className="h-5 w-5" />,
          title: "Site Analytics",
          description: "Track engagement and content performance in real time."
        }
      ]
    },
    {
      title: "Engaging Media & Interactive Features",
      description: "Bring content to life with professional enhancements.",
      category: 2,
      features: [
        {
          icon: <Film className="h-5 w-5" />,
          title: "Enhanced \"Hype\" Support",
          description: "Elevate visuals with expert-designed graphics, animations, and video editing."
        },
        {
          icon: <FileText className="h-5 w-5" />,
          title: "PDF Integration",
          description: "Seamlessly upload yearbooks, pamphlets, and playbills."
        },
        {
          icon: <LayoutTemplate className="h-5 w-5" />,
          title: "Curated Templates",
          description: "Showcase records, banners, trophies, and halls of fame with polished designs."
        },
        {
          icon: <Search className="h-5 w-5" />,
          title: "Site-Wide Search",
          description: "Instantly locate profiles, images, and videos across the platform."
        },
        {
          icon: <Sparkles className="h-5 w-5" />,
          title: "Engaging Animations",
          description: "Smooth transitions enhance user experience."
        }
      ]
    },
    {
      title: "Seamless Integration & Effortless Access",
      description: "Expand your platform's capabilities with built-in integrations.",
      category: 3,
      features: [
        {
          icon: <Link className="h-5 w-5" />,
          title: "Easy Content Integration",
          description: "Embed YouTube, Hudl, Vimeo, and Facebook videos."
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Even More Integrations",
          description: "Sync calendars, display local weather, and connect to your existing website."
        },
        {
          icon: <Key className="h-5 w-5" />,
          title: "Effortless Single Sign-On",
          description: "Secure login with Google, Microsoft, or Apple accounts."
        }
      ]
    },
    {
      title: "Ever-Evolving Updates & Data Security",
      description: "Stay ahead with a secure and continuously updated system.",
      category: 4,
      features: [
        {
          icon: <Cloud className="h-5 w-5" />,
          title: "Ever-Evolving Updates",
          description: "Over-the-air software updates keep your platform cutting-edge."
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: "Comprehensive Data Security",
          description: "Encryption, AWS infrastructure, and consistent backups protect your data."
        },
        {
          icon: <Accessibility className="h-5 w-5" />,
          title: "Accessible by Design",
          description: "Built to meet ADA WCAG 2.1 standards, ensuring inclusivity for all users."
        },
        {
          icon: <HardDrive className="h-5 w-5" />,
          title: "Unlimited Data Capacity",
          description: "Upload decades' worth of images, videos, and yearbooks without compromising speed."
        }
      ]
    },
    {
      title: "Flexible Pricing & Unmatched Support",
      description: "We provide tailored pricing and ongoing assistance to ensure a worry-free experience.",
      category: 5,
      features: [
        {
          icon: <DollarSign className="h-5 w-5" />,
          title: "Custom Packages",
          description: "Affordable, scalable solutions that grow with your school."
        },
        {
          icon: <RefreshCw className="h-5 w-5" />,
          title: "Regular Updates & Maintenance",
          description: "Stay ahead with the latest technology and features."
        },
        {
          icon: <PhoneCall className="h-5 w-5" />,
          title: "Dedicated Customer Support",
          description: "Our team is always ready to assist."
        }
      ]
    }
  ];

  // Filter sections by active tab
  const filteredSections = allSections.filter(section => section.category === activeTab);

  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-blue-500/10"></div>
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-[10%] left-[5%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[10%] right-[5%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Main heading */}
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
                Advanced Platform Features
              </span> for Complete Control
            </motion.h1>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          
          {/* Category tabs */}
          <div className="mb-8 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 max-w-5xl mx-auto mb-8">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  className={`flex flex-col items-center justify-center gap-2 px-3 py-6 rounded-xl border transition-all duration-300 min-h-[120px] ${
                    activeTab === index 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-glow-sm' 
                      : 'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => handleTabChange(index)}
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`p-2 rounded-full ${activeTab === index ? 'bg-white/20' : 'bg-gradient-to-br from-purple-600/10 to-blue-600/10'}`}>
                    {category.icon}
                  </div>
                  <span className="text-sm font-medium text-center">{category.name}</span>
                  {activeTab === index && (
                    <motion.div 
                      className="h-1 w-8 bg-white rounded-full mt-1"
                      layoutId="activeTabIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            
            <motion.p 
              className="text-center text-foreground/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={activeTab}
            >
              {categories[activeTab].description}
            </motion.p>
          </div>
          
          {/* Feature sections */}
          <div ref={contentRef}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {filteredSections.map((section, sectionIndex) => (
                  <motion.div 
                    key={sectionIndex}
                    className="bg-gradient-to-br from-purple-600/5 to-blue-600/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                  >
                    {/* Section header - clickable */}
                    <div 
                      className="p-5 cursor-pointer flex justify-between items-center"
                      onClick={() => toggleSection(sectionIndex)}
                    >
                      <div>
                        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
                          {section.title}
                        </h2>
                        <p className="text-foreground/70 text-sm">{section.description}</p>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {expandedSections.includes(sectionIndex) ? (
                          <ChevronUp className="h-5 w-5 text-foreground/70" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-foreground/70" />
                        )}
                      </div>
                    </div>
                    
                    {/* Section content - expandable */}
                    <AnimatePresence>
                      {expandedSections.includes(sectionIndex) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5">
                            <motion.div 
                              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {section.features.map((feature, featureIndex) => (
                                <motion.div 
                                  key={featureIndex}
                                  className="bg-gradient-to-br from-purple-600/5 to-blue-600/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 h-full group hover:bg-gradient-to-br hover:from-purple-600/10 hover:to-blue-600/10 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-glow-sm transition-all duration-300 cursor-pointer"
                                  variants={itemVariants}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="relative flex-shrink-0">
                                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-sm"></div>
                                      <div className="relative bg-gradient-to-br from-purple-500 to-blue-600 p-2 rounded-full text-white z-10 group-hover:shadow-glow-sm transition-all duration-300">
                                        {feature.icon}
                                      </div>
                                    </div>
                                    <div>
                                      <h3 className="font-semibold text-foreground mb-1 flex items-center">
                                        {feature.title}
                                      </h3>
                                      <p className="text-foreground/70 text-sm">{feature.description}</p>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisualFidelity;