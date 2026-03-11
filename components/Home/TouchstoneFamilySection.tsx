import React from 'react';
import Image from 'next/image';
import { Phone, Heart, Users } from 'lucide-react';

export default function TouchstoneFamilySection() {
  return (
    <section className="relative py-16 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-background via-muted/10 to-primary/5">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Side */}
          <div className="space-y-8 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Family First</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                Join the <span className="text-transparent bg-clip-text text-gradient-purple-blue">Touchstone Family</span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              At Touchstone, you come first. We answer on the first ring and treat you like family.
            </p>
            
            {/* Feature cards */}
            <div className="pt-6 space-y-6">
              <div className="group flex items-start gap-5 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="mt-1 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Personal attention from day one</h3>
                  <p className="text-sm md:text-base text-muted-foreground">Direct access to our team, no automated systems</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-5 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="mt-1 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Always here when you need us</h3>
                  <p className="text-sm md:text-base text-muted-foreground">Responsive support that feels like home</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-5 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="mt-1 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Your success is our mission</h3>
                  <p className="text-sm md:text-base text-muted-foreground">We celebrate your wins as our own</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:order-2 relative group">
            {/* Main image container */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-border/50 group-hover:shadow-3xl group-hover:shadow-primary/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-background/20 z-10"></div>
              <Image
                src="/our family.avif"
                alt="Touchstone Family"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Floating decorative card */}
            <div className="absolute -bottom-8 -left-8 bg-card/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs hidden lg:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium">Available Now</span>
              </div>
              <p className="text-sm text-muted-foreground">Our team is ready to help you succeed</p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-primary/30 rounded-tr-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
