import React from "react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  return (
    <section className="py-8 sm:py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm text-purple-400 font-medium mb-2">
              How it works
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-purple-400">Transforming</span> Your
              Recognition System
            </h2>

            <p className="text-sm text-gray-400 mb-10">
              Our simple process makes it easy to implement a digital Hall of
              Fame that celebrates achievements and inspires your community.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-400 text-sm font-medium">
                    01
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Consultation</h3>
                  <p className="text-sm text-gray-400">
                    We'll discuss your needs, space, and vision to create a
                    custom digital recognition solution.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-400 text-sm font-medium">
                    02
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Design & Implementation
                  </h3>
                  <p className="text-sm text-gray-400">
                    Our team handles everything from hardware installation to
                    software setup, creating a seamless digital Hall of Fame
                    experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-400 text-sm font-medium">
                    03
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Training & Support
                  </h3>
                  <p className="text-sm text-gray-400">
                    We'll train your staff on our user-friendly content
                    management system and provide ongoing support to ensure your
                    success.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button
                variant="outline"
                className="border-purple-400/30 hover:border-purple-400/70"
              >
                SCHEDULE A DEMO
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-8">Contact Us</h3>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium block text-left"
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Your full name"
                    className="w-full rounded-md bg-background border border-white/10 px-4 py-2"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium block text-left"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full rounded-md bg-background border border-white/10 px-4 py-2"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium block text-left"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your school or organization..."
                    rows={5}
                    className="w-full rounded-md bg-background border border-white/10 px-4 py-2"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 h-auto bg-purple-500 hover:bg-purple-600"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
