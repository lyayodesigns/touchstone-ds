"use client";

import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';

const TouchstoneVsGipperWhyChooseTouchstone: React.FC = () => {
  const highlights = [
    {
      title: "Flexible Pricing Options",
      description: "Gipper has a pricing model that is based on an annual basis with an extra charge on multi-screen arrangements. Touchstone, on the other hand, offers annual and one-time pricing with no hidden costs, thereby being a more viable and cost-efficient option to schools, universities and organizations."
    },
    {
      title: "Superior Support & Training",
      description: "Customer success is the main distinction between Touchstone and Gipper. Whereas Gipper is a video library that is used in the training process, Touchstone provides unlimited live training programs with US-based experts. We have weekly software updates to make sure you are always up to date on the latest features unlike Gipper which have less frequent updates."
    },
    {
      title: "100% Family-Owned Business",
      description: "Being a 100 percent family business, Touchstone does not focus on profitability in the short-term but on relationships with the family in the long-term. This is used in our complete hardware management service where we will take care of the whole process since it involves ordering until installation which is not obviously indicated in the Gipper."
    },
    {
      title: "Innovative Features",
      description: "Touchstone is the best choice as a digital recognition platform whether you are looking to buy Gipper or other options since it has a combination of sophisticated features, open pricing, and customer service that is unparalleled. We have unique functionality such as 1-click video background checking, auto image search, clean URLs, which make us different as compared to Gipper."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6ea8fe]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#447df5]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 bg-[#6ea8fe]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#6ea8fe]/20">
            <Award className="h-4 w-4 text-[#447df5] mr-2" />
            <span className="text-sm font-medium text-[#447df5]">The Clear Choice</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-purple-blue">
              Why Choose Touchstone Over Gipper?
            </span>
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-[#6ea8fe] to-[#447df5] rounded-full mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comparing <strong className="text-gradient-purple-blue">Touchstone</strong> and <strong>Gipper</strong>, institutions always prefer to use Touchstone because of its better value, full support, and innovation. Although Gipper has a good platform, Touchstone is better with its transparent prices, open-ended training and 24/7/365 US-based service.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6ea8fe] to-[#447df5] flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouchstoneVsGipperWhyChooseTouchstone;
