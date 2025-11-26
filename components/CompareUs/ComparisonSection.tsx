"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Star, Shield, Clock, Headphones, DollarSign, Award, Zap, Users } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overall');
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('comparison-section');
    if (section) {
      observer.observe(section);
    }

    // Generate particles on client side only to avoid hydration mismatch
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`
    }));
    setParticles(particleArray);

    // Scroll spy functionality for table container
    const handleTableScroll = () => {
      const tableContainer = document.querySelector('.table-scroll-container');
      if (!tableContainer) return;

      const sections = ['overall', 'platform-features', 'security-improvements', 'company-related'];
      const scrollTop = (tableContainer as HTMLElement).scrollTop;
      const containerHeight = (tableContainer as HTMLElement).clientHeight;
      const scrollHeight = (tableContainer as HTMLElement).scrollHeight;
      const containerRect = (tableContainer as HTMLElement).getBoundingClientRect();

      // Height of sticky thead (approx) to offset measurements
      const headerHeight = 60; // keep in sync with scrollToSection

      // The reference line (just under sticky header) inside the scroll container
      const headerLine = scrollTop + headerHeight + 1;
      // Hysteresis to reduce flicker and avoid snapping back to previous section near boundaries
      const switchMargin = 80; // px

      // Build a list of section tops relative to the scroll content
      const tops = sections.map((sectionId) => {
        const el = document.getElementById(sectionId);
        if (!el) return Infinity;
        const rect = el.getBoundingClientRect();
        return rect.top - containerRect.top + scrollTop;
      });

      // Edge case: scrolled to bottom -> select last section
      const atBottom = scrollTop + containerHeight >= scrollHeight - 2;
      if (atBottom) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      // Find the last section whose (top - margin) is above the header line
      let activeIdx = 0;
      for (let i = 0; i < tops.length; i++) {
        if (tops[i] - switchMargin <= headerLine) activeIdx = i;
        else break;
      }

      setActiveSection(sections[activeIdx]);
    };

    // Set up scroll listener after component mounts
    const setupScrollListener = () => {
      const tableContainer = document.querySelector('.table-scroll-container');
      if (tableContainer) {
        tableContainer.addEventListener('scroll', handleTableScroll);
        handleTableScroll(); // Initial check
      }
    };

    // Delay setup to ensure DOM is ready
    const timeoutId = setTimeout(setupScrollListener, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      const tableContainer = document.querySelector('.table-scroll-container');
      if (tableContainer) {
        tableContainer.removeEventListener('scroll', handleTableScroll);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const tableContainer = document.querySelector('.table-scroll-container');
    const element = document.getElementById(sectionId);
    
    if (tableContainer && element) {
      const elementTop = element.offsetTop;
      const headerHeight = 60; // Account for sticky header
      
      tableContainer.scrollTo({
        top: elementTop - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { id: 'overall', label: 'Overall', icon: Award },
    { id: 'platform-features', label: 'Platform Features', icon: Zap },
    { id: 'security-improvements', label: 'Security & Improvements', icon: Shield },
    { id: 'company-related', label: 'Company Related', icon: Users }
  ];

  // Categorized feature comparison data
  const featureCategories = [
    {
      category: "OVERALL",
      features: [
        { name: "Typical Price", touchstone: "$", rocket: "$$", isText: true },
        { name: "100% Family Owned", touchstone: true, rocket: false, rocketNote: "Not specified" },
        { name: "Annual & One-Time Pricing Options", touchstone: "Available", rocket: "Annual only", isText: true },
        { name: "Additional Fees, Including Multi-Screen", touchstone: "No additional fees", rocket: "Additional fees may apply", isText: true },
        { name: "Mobile-Friendly Platform", touchstone: true, rocket: true },
        { name: "QR Code Functionality", touchstone: true, rocket: true },
        { name: "Storage Limits", touchstone: "Unlimited", rocket: "Unlimited", isText: true },
        { name: "Loading Speeds", touchstone: "Fast", rocket: "?", isText: true },
        { name: "24/7/365 Live Support (Text, Call, Email, or On-Site)", touchstone: "Unlimited, US-based support", rocket: "Support hours and location not specified", isText: true },
        { name: "Software Updates", touchstone: "Weekly updates", rocket: "Less frequent updates", isText: true },
        { name: "Content Manager Training", touchstone: "Unlimited, US-based live training", rocket: "Video library & documents only", isText: true },
        { name: "Hardware Ordering", touchstone: "Fully handled by Touchstone", rocket: "Process not specified", isText: true },
        { name: "Unlocking Additional Features", touchstone: "Directly available after demo", rocket: "Process not specified", isText: true }
      ]
    },
    {
      category: "PLATFORM FEATURES",
      features: [
        { name: "Intuitive CMS", touchstone: "Multi-function, user-friendly CMS", rocket: "CMS with similar core functions", isText: true },
        { name: "Premade Templates", touchstone: "50+", rocket: "50+", isText: true },
        { name: "Images", touchstone: true, rocket: true },
        { name: "Videos", touchstone: true, rocket: true },
        { name: "PDFs", touchstone: true, rocket: true },
        { name: "Maps", touchstone: true, rocket: true },
        { name: "Live WYSIWYG", touchstone: true, rocket: true },
        { name: "Drag & Drop Editing", touchstone: true, rocket: true },
        { name: "AI Bulk CSV Upload", touchstone: true, rocket: true },
        { name: "Bulk Image Upload", touchstone: true, rocket: false, rocketNote: "Process not specified" },
        { name: "Social Media Sharing", touchstone: true, rocket: true },
        { name: "1-Click Image Background Removal", touchstone: true, rocket: true },
        { name: "1-Click Video Background Removal", touchstone: true, rocket: false, rocketNote: "Process not specified" },
        { name: "Site-Wide Search", touchstone: true, rocket: true },
        { name: "Automatic Image & Text Searching", touchstone: true, rocket: false, rocketNote: "Process not specified" },
        { name: "Text Filtering", touchstone: true, rocket: true },
        { name: "Image Filtering", touchstone: true, rocket: false, rocketNote: "Process not specified" },
        { name: "Single-Sign On", touchstone: true, rocket: true },
        { name: "Screen Timeout", touchstone: true, rocket: true },
        { name: "Automatic Image Resizing", touchstone: true, rocket: true },
        { name: "Automatic Video Compression", touchstone: true, rocket: true },
        { name: "Automatic PDF Compression", touchstone: true, rocket: true },
        { name: "Media Caching", touchstone: true, rocket: true },
        { name: "Support For All Media Types", touchstone: "MP4, MOV, AVIF, WebP, WebM, MPEG, JPG, PNG, HEIC, SVG, GIF, BMP, ICO, MP3, PDF & more", rocket: "MP4, MOV, AVIF, WebP, WebM, MPEG, JPG, PNG, HEIC, SVG, GIF, BMP, ICO, MP3, PDF & more", isText: true },
        { name: "Custom Domains", touchstone: true, rocket: true },
        { name: "Link Previews", touchstone: true, rocket: true },
        { name: "Animations", touchstone: true, rocket: true },
        { name: "Recently Deleted Bin", touchstone: true, rocket: true }
      ]
    },
    {
      category: "SECURITY & IMPROVEMENTS",
      features: [
        { name: "Automatic Over-The-Air Software Updates", touchstone: true, rocket: true },
        { name: "ADA Accessibility", touchstone: true, rocket: true },
        { name: "Amazon Web Services", touchstone: true, rocket: true },
        { name: "US Based SOC 2 and ISO 27001 Certified Data Centers", touchstone: true, rocket: true },
        { name: "Automatic Content Backups", touchstone: true, rocket: false, rocketNote: "Process not specified" },
        { name: "Remote Access Control", touchstone: true, rocket: false, rocketNote: "Process not specified" },
        { name: "Custom Power On & Off setting", touchstone: true, rocket: true }
      ]
    },
    {
      category: "COMPANY RELATED",
      features: [
        { name: "Graphic Design Team", touchstone: true, rocket: true },
        { name: "Motion Graphic team", touchstone: true, rocket: true },
        { name: "Tutorial Videos & Knowledge Base", touchstone: true, rocket: true },
        { name: "Clean URLS", touchstone: true, rocket: false }
      ]
    }
  ];
  
  // Selected key features for the simplified table
  const keyFeatures = [
    { name: "24/7/365 Support", touchstone: true, rocket: false },
    { name: "Unlimited Training", touchstone: true, rocket: false },
    { name: "Weekly Updates", touchstone: true, rocket: false },
    { name: "Hardware Handling", touchstone: true, rocket: false },
    { name: "Money-Back Guarantee", touchstone: true, rocket: false },
    { name: "No Additional Fees", touchstone: true, rocket: false },
    { name: "Video Background Removal", touchstone: true, rocket: false },
    { name: "Clean URLs", touchstone: true, rocket: true },
    { name: "Mobile Responsive", touchstone: true, rocket: true },
  ];

  const supportFeatures = [
    {
      icon: Users,
      title: "Unlimited Training",
      description: "Comprehensive onboarding and ongoing training for your entire team"
    },
    {
      icon: Zap,
      title: "Weekly Updates",
      description: "Regular feature updates and improvements delivered automatically"
    },
    {
      icon: Headphones,
      title: "24/7/365 Support",
      description: "Round-the-clock expert support whenever you need assistance"
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description: "100% satisfaction guarantee with full refund protection"
    }
  ];

  return (
    <section id="comparison-section" className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center justify-center mb-3 bg-blue-100/50 backdrop-blur-sm px-4 py-1 rounded-full border border-blue-200/50">
            <Award className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-xs font-medium text-blue-800">Detailed Feature Analysis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Platform Comparison
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#6ea8fe] to-[#447df5] rounded-full mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            See Why <span className="text-gradient-purple-blue font-semibold">Touchstone</span> Leads The Industry With <span className="text-gradient-purple-blue font-semibold">Transparent Pricing</span>, <span className="text-gradient-purple-blue font-semibold">Superior Support</span>, And <span className="text-gradient-purple-blue font-semibold">Innovative Features</span>
          </p>
        </div>

        {/* Main Layout with Sticky Navigation */}
        <div className="flex gap-8 relative">
          {/* Sticky Navigation Menu */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Navigation
                </span>
              </h3>
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md transform scale-105'
                          : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                      }`}
                    >
                      <IconComponent className={`h-4 w-4 ${
                        activeSection === item.id ? 'text-white' : 'text-purple-500'
                      }`} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">

        {/* Unified Feature Comparison Table */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/30 hover:shadow-xl transition-all duration-300">
            <div className="overflow-x-auto max-h-[80vh] overflow-y-auto table-scroll-container">
              <table className="w-full border-separate border-spacing-0">
                <thead className="sticky top-0 z-20">
                  <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-b-2 border-white shadow-[0_2px_0_0_#ffffff]">
                    <th className="px-4 py-4 text-left font-bold text-lg border-b-2 border-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-lg border-b-2 border-white">Touchstone</th>
                    <th className="px-4 py-4 text-center font-bold text-lg border-b-2 border-white">Rocket Alumni Solutions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Feature Categories - Starting with OVERALL */}
                  {featureCategories.map((category, categoryIndex) => {
                    const sectionId = category.category.toLowerCase().replace(/\s*&\s*/g, '-').replace(/\s+/g, '-');
                    return (
                      <React.Fragment key={categoryIndex}>
                        {/* Category Header */}
                        <tr id={sectionId} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                          <td colSpan={3} className="px-4 py-3 text-center font-bold text-lg border-t-2 border-white border-b border-white/70">
                            {category.category}
                          </td>
                        </tr>
                        {/* Category Features */}
                        {category.features.map((feature, index) => (
                          <tr key={`${categoryIndex}-${index}`} className={`border-b border-gray-100 hover:bg-purple-50/50 transition-colors ${
                            index % 2 === 0 ? 'bg-gray-50/30' : 'bg-white/50'
                          }`}>
                            <td className="px-4 py-3 font-medium text-gray-800 text-sm">{feature.name}</td>
                            <td className="px-4 py-3 text-center text-sm">
                              {feature.isText ? (
                                <span className="text-gray-800">{feature.touchstone}</span>
                              ) : feature.touchstone ? (
                                <div className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                                  <Check className="h-3 w-3 text-green-600" />
                                </div>
                              ) : (
                                <div className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
                                  <X className="h-3 w-3 text-red-600" />
                                </div>
                              )}
                            </td>
                            <td className="px-4 py-3 text-center text-sm">
                              {feature.isText ? (
                                <span className="text-gray-800">{feature.rocket}</span>
                              ) : feature.rocket ? (
                                <div className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                                  <Check className="h-3 w-3 text-green-600" />
                                </div>
                              ) : (
                                <div className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
                                  <X className="h-3 w-3 text-red-600" />
                                </div>
                              )}
                              {feature.rocketNote && (
                                <div className="text-xs text-gray-500 mt-1 italic">{feature.rocketNote}</div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

          </div>
        </div>
      </div>
      
   

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.7;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
      {/* Hide scrollbars but keep scrolling functional */}
      <style jsx global>{`
        .table-scroll-container {
          /* Firefox */
          scrollbar-width: none;
          /* IE and old Edge */
          -ms-overflow-style: none;
        }
        .table-scroll-container::-webkit-scrollbar {
          /* Chrome, Safari, Opera */
          width: 0px;
          height: 0px;
        }
      `}</style>
    </section>
  );
};

export default ComparisonSection;
