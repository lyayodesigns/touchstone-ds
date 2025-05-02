import React from "react";

const DigitalDisplayFeaturesSection: React.FC = () => {
  // Features data
  const features = [
    {
      title: "Intuitive & User-Friendly Interface",
      description: "We design intuitive, easy-to-navigate interfaces that make accessing achievements, stats, and records effortless. Whether exploring a Hall of Fame, viewing a record board, or celebrating team history, our platform ensures a smooth and engaging experience for coaches, players, and fans alike.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      title: "Stunning Graphic Fidelity",
      description: "Our high-resolution graphics bring your school's legacy to life. From detailed digital trophies and plaques to dynamic team rosters and banners, every element is displayed with crystal-clear precision, ensuring that users can fully connect with and appreciate their school's history.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      title: "Realistic Texture Mapping",
      description: "We leverage advanced texture mapping to create lifelike digital replicas of physical awards, banners, and memorabilia. Our platform digitally renders trophies, plaques, and championship banners with realistic materials and textures, adding depth and authenticity to the experience. Interactive 3D textures further enhance user engagement, delivering a professional and polished presentation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "Crisp & Clear Visuals with Anti-Aliasing",
      description: "To guarantee sharp, high-quality visuals, we implement anti-aliasing technology, eliminating jagged edges and ensuring smooth, readable text and clean images. Whether showcasing a team roster, individual records, or a Hall of Fame plaque, every detail is displayed with precision and clarity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="22" y1="12" x2="18" y2="12"></line>
          <line x1="6" y1="12" x2="2" y2="12"></line>
          <line x1="12" y1="6" x2="12" y2="2"></line>
          <line x1="12" y1="22" x2="12" y2="18"></line>
        </svg>
      )
    }
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 w-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-blue-500/10 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
      
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-[10%] left-[5%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[10%] right-[5%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute top-[40%] right-[10%] text-foreground/10 text-2xl sm:text-3xl">+</div>

      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center transition-all duration-700 opacity-100 translate-y-0"
          >
            <span className="text-transparent bg-clip-text text-gradient-purple-blue block sm:inline">
              💻 Seamless, High-Performance
            </span>
            <span className="text-foreground block sm:inline"> Digital Displays</span>
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-foreground/10 hover:bg-background/10 transition-all duration-500 transform opacity-100 translate-y-0"
            >
              <div className="flex flex-col h-full">
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed flex-grow">
                  {feature.description}
                </p>
                
                <div 
                  className="w-full h-1 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-full mt-6 transition-all duration-700 opacity-100 scale-x-100"
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Visual element at the bottom */}
        {/* <div 
          className={`mt-12 sm:mt-16 w-full max-w-4xl mx-auto h-16 sm:h-20 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-foreground/10 flex items-center justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="flex space-x-3 sm:space-x-6">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div 
                key={i} 
                className="w-2 sm:w-3 h-8 sm:h-10 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms`, animationDuration: "1.5s" }}
              ></div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DigitalDisplayFeaturesSection;
