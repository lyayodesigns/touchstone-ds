import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section
      className="py-8 sm:py-16 md:py-24 relative overflow-hidden bg-background"
      id="pricing"
    >
      {/* Animated star icon */}
      <div className="absolute top-20 left-32 opacity-70 animate-float">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
            stroke="#9b87f5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Animated trophy icon */}
      <div className="absolute top-40 right-52 opacity-70 animate-float">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
            stroke="#9b87f5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 5.5V3C15.5 2.17157 14.8284 1.5 14 1.5H10C9.17157 1.5 8.5 2.17157 8.5 3V5.5"
            stroke="#9b87f5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 5.5H7C5.89543 5.5 5 6.39543 5 7.5C5 11.6421 8.35786 15 12.5 15H12.5C16.6421 15 20 11.6421 20 7.5C20 6.39543 19.1046 5.5 18 5.5H17Z"
            stroke="#9b87f5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="container px-4 mx-auto text-center">
        <p className="text-sm text-purple-400 font-medium mb-2">
          Simple, Transparent Pricing
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Why Touchstone Digital Solutions?
        </h2>

        <p className="text-xl md:text-2xl mb-10">
          The perfect solution for{" "}
          <span className="text-purple-400">
            schools, teams, and organizations
          </span>
        </p>

        <div className="flex justify-center mb-16">
          <Button className="px-8 py-6 h-auto bg-purple-500 hover:bg-purple-600">
            Schedule a Demo
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Affordable */}
          <div className="bg-card border border-white/10 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-70">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  stroke="#9b87f5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-4 text-purple-400">
              Affordable
            </h3>
            <p className="text-sm mb-6">
              Packages for K–12 schools, colleges, and community clubs. We offer
              solutions that fit every budget.
            </p>
          </div>

          {/* Yours */}
          <div className="bg-card border border-white/10 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-70">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  stroke="#9b87f5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-4 text-purple-400">Yours</h3>
            <p className="text-sm mb-6">
              Custom colours, logos, and layouts to match your brand. Make it
              truly your own.
            </p>
          </div>

          {/* Scalable Solutions */}
          <div className="bg-card border border-white/10 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-70">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  stroke="#9b87f5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-4 text-purple-400">
              Scalable Solutions
            </h3>
            <p className="text-sm mb-6">
              Start small with a Classroom Achievement Display or go big with a
              University-Wide Digital Hall of Fame. Grow with your needs.
            </p>
          </div>

          {/* Future-Proof Tech */}
          <div className="bg-card border border-white/10 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-70">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  stroke="#9b87f5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-4 text-purple-400">
              Future-Proof Tech
            </h3>
            <p className="text-sm mb-6">
              Enjoy automated updates and AI-driven content suggestions. Stay
              ahead of the curve.
            </p>
          </div>

          {/* Unmatched Support */}
          <div className="bg-card border border-white/10 rounded-xl p-8 relative overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="absolute top-2 right-2 opacity-70">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  stroke="#9b87f5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-4 text-purple-400">
              Unmatched Support
            </h3>
            <p className="text-sm mb-6">
              From installation to training, we're with you. Our team is always
              here to help.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Button className="px-8 py-6 h-auto bg-purple-500 hover:bg-purple-600">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
