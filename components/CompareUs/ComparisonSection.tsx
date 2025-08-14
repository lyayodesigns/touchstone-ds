"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Star, Shield, Clock, Headphones, DollarSign, Award, Zap, Users } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    return () => observer.disconnect();
  }, []);

  // Categorized feature comparison data
  const featureCategories = [
    {
      category: "OVERALL",
      features: [
        { name: "Typical Price", touchstone: "$", rocket: "$$", isText: true },
        { name: "Annual & One-Time Pricing Options", touchstone: "Available", rocket: "Not advertised as available", isText: true },
        { name: "Money-Back Guarantee", touchstone: true, rocket: false, rocketNote: "Not advertised" },
        { name: "Additional Fees, Including Multi-Screen", touchstone: "No additional fees", rocket: "Additional fees may apply", isText: true },
        { name: "Mobile-Friendly Platform", touchstone: true, rocket: true },
        { name: "QR Code Functionality", touchstone: true, rocket: true },
        { name: "Storage Limits", touchstone: "Unlimited", rocket: "Unlimited", isText: true },
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
        { name: "Support For All Media Types", touchstone: true, rocket: true, touchstoneNote: "MP4, MOV, AVIF, WebP, WebM, MPEG, JPG, PNG, HEIC, SVG, GIF, BMP, ICO, MP3, PDF & more" },
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
        { name: "Clean URLS", touchstone: true, rocket: true }
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
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Platform Comparison
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto">
            See why Touchstone leads the industry with transparent pricing, superior support, and innovative features
          </p>
        </div>

        {/* Pricing Comparison Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Touchstone Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-2xl text-sm font-bold shadow-lg">
                  RECOMMENDED
                </div>
              </div>
              <div className="text-center pt-3">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">Touchstone</h3>
                </div>
                <div className="mb-3">
                  <span className="text-lg font-bold text-green-600">Transparent Pricing</span>
                  <p className="text-gray-600 mt-1 text-xs">No Hidden Fees</p>
                </div>
                <ul className="space-y-1 text-left text-xs">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                    <span>24/7 Premium Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                    <span>Unlimited Training</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                    <span>Weekly Updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rocket Card */}
          <div className="group relative">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="h-5 w-5 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">Rocket</h3>
                </div>
                <div className="mb-3">
                  <span className="text-lg font-bold text-red-600">Hidden Costs</span>
                  <p className="text-gray-600 mt-1 text-xs">Complex Pricing</p>
                </div>
                <ul className="space-y-1 text-left text-xs">
                  <li className="flex items-center">
                    <X className="h-3 w-3 text-red-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-500">Limited Support</span>
                  </li>
                  <li className="flex items-center">
                    <X className="h-3 w-3 text-red-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-500">Extra Training Costs</span>
                  </li>
                  <li className="flex items-center">
                    <X className="h-3 w-3 text-red-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-500">Slow Updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Feature Comparison Grid */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-16 mr-4"></div>
            <h3 className="text-2xl font-bold text-center text-gray-800 relative">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Key Features</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-16 ml-4"></div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/30 max-w-4xl mx-auto hover:shadow-xl transition-all duration-300">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="px-3 py-2 text-left font-semibold text-sm">Feature</th>
                    <th className="px-3 py-2 text-center font-semibold text-sm">Touchstone</th>
                    <th className="px-3 py-2 text-center font-semibold text-sm">Rocket</th>
                  </tr>
                </thead>
                <tbody>
                  {keyFeatures.map((feature, index) => (
                    <tr key={index} className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors ${
                      index % 2 === 0 ? 'bg-gray-50/30' : 'bg-white/50'
                    }`}>
                      <td className="px-3 py-2 font-medium text-gray-800 text-sm">{feature.name}</td>
                      <td className="px-3 py-2 text-center">
                        {feature.touchstone ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
                            <X className="h-3 w-3 text-red-600" />
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-2 text-center">
                        {feature.rocket ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
                            <X className="h-3 w-3 text-red-600" />
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Detailed Feature Comparison */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-16 mr-4"></div>
            <h3 className="text-2xl font-bold text-center text-gray-800 relative">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Detailed Comparison</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-16 ml-4"></div>
          </div>
          
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-6 last:mb-0">
              <h4 className="text-lg font-bold text-center mb-4 relative inline-flex items-center justify-center mx-auto w-full">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-8 rounded-full shadow-md">
                  {category.category}
                </span>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-10"></div>
              </h4>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/30 max-w-4xl mx-auto mb-8 hover:shadow-xl transition-all duration-300">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        <th className="px-4 py-3 text-left font-semibold text-sm">Feature</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Touchstone</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Rocket</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.features.map((feature, index) => (
                        <tr key={index} className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors ${
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
                            {feature.touchstoneNote && (
                              <div className="text-xs text-gray-500 mt-1 italic">{feature.touchstoneNote}</div>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
      
      {/* SEO-friendly summary section */}
      <div className="max-w-4xl mx-auto mt-16 px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-16 mr-4"></div>
          <h3 className="text-2xl font-bold text-center text-gray-800 relative">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Why Choose Touchstone?</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
          </h3>
          <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-16 ml-4"></div>
        </div>
        
        <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/30 transition-all duration-1000 delay-800 hover:shadow-xl ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Shield className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold text-gray-800 mb-2">Transparent Pricing</h4>
              <p className="text-sm text-gray-600">No hidden fees or surprise charges, unlike Rocket's complex pricing structure.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Headphones className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold text-gray-800 mb-2">Premium Support</h4>
              <p className="text-sm text-gray-600">24/7/365 US-based support and unlimited training for your entire team.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Zap className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-bold text-gray-800 mb-2">Continuous Innovation</h4>
              <p className="text-sm text-gray-600">Weekly updates and advanced features like video background removal.</p>
            </div>
          </div>
          
          <div className="prose text-foreground/80 max-w-none border-t border-blue-100 pt-6">
            <p className="leading-relaxed">
              Touchstone offers transparent pricing with no hidden fees, unlike Rocket which has a more complex pricing structure with potential additional charges. Our platform provides unlimited, US-based live training and 24/7/365 support, ensuring you always have assistance when needed.
            </p>
            <p className="mt-3 leading-relaxed">
              With weekly software updates, fully handled hardware ordering, and advanced features like 1-click video background removal and automatic content backups, Touchstone delivers a superior digital signage experience that's both powerful and user-friendly.
            </p>
            <p className="mt-3 leading-relaxed">
              Compare the comprehensive feature set above to see why Touchstone is America's most-loved touchscreen platform, offering better value, support, and technology than competitors like Rocket.
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-full">
              <div className="bg-white rounded-full px-6 py-2 hover:bg-opacity-0 hover:text-white transition-all duration-300">
                <span className="font-medium">America's Most-Loved Touchscreen Platform</span>
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
    </section>
  );
};

export default ComparisonSection;
