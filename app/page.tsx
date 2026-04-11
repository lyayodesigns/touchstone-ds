import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalHallOfFameSection from '../components/Home/DigitalHallOfFameSection';
import InteractiveDisplaysSection from '../components/Home/InteractiveDisplaysSection';
import WhySection from '../components/Home/WhySection';
import CallToActionSection from '../components/Home/CallToActionSection';
import HowItWorksSection from '../components/Home/HowItWorksSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import PhotoCarouselSection from '../components/Home/PhotoCarouselSection';
import CustomPlatformSection from '../components/Home/CustomPlatformSection';
import AlumniRecognitionSection from '../components/Home/AlumniRecognitionSection';
import OnboardingSection from '../components/Home/OnboardingSection';
import DigitalDisplayFeaturesSection from '../components/Home/DigitalDisplayFeaturesSection';
import HeroSection from '../components/Home/HomeHeroSection';
import TrustedBySection from '../components/Home/TrustedBySection';
import TouchstoneFamilySection from '../components/Home/TouchstoneFamilySection';
import { Metadata } from 'next';
import JsonLd from '../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../lib/schema';


export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Touchstone Digital Solutions - Interactive Digital Hall of Fame',
  description: "Build a Digital Hall of Fame for your school with Touchstone — interactive donor recognition, record boards, trophies & awards for K–12, colleges & more.",
  alternates: {
    canonical: '/',
  },
  metadataBase: new URL('https://touchstone-ds.com'),
  openGraph: {
    title: 'Touchstone Digital Solutions - Interactive Digital Hall of Fame',
    description: "Build a Digital Hall of Fame for your school with Touchstone — interactive donor recognition, record boards, trophies & awards for K–12, colleges & more.",
    url: 'https://touchstone-ds.com/',
    siteName: 'Touchstone Digital Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@touchstone_ds',
    title: 'Touchstone Digital Solutions - Interactive Digital Hall of Fame',
    description: "Build a Digital Hall of Fame for your school with Touchstone — interactive donor recognition, record boards, trophies & awards for K–12, colleges & more.",
    images: ['/og-image.jpg'],
  },
};

const homeServiceSchema = serviceSchema({
  name: 'Digital Hall of Fame Software',
  description:
    'Build a fully interactive Digital Hall of Fame for your school with Touchstone — featuring donor recognition, record boards, trophy cases, alumni spotlights, and more for K–12, colleges, and community organizations.',
  url: 'https://touchstone-ds.com/',
  serviceType: 'Digital Hall of Fame Software',
});

const homeFaqSchema = faqPageSchema([
  {
    question: 'What is a Digital Hall of Fame?',
    answer:
      'A Digital Hall of Fame is an interactive touchscreen display that showcases the achievements, history, and legacy of a school or community. Unlike traditional plaques, trophies, and record boards, a Digital Hall of Fame brings stories to life through pictures, videos, statistics, and more—all accessible on our web-based platform.',
  },
  {
    question: 'How do Digital Hall of Fame displays work?',
    answer:
      'Digital Hall of Fame displays use interactive touchscreen technology and our custom cloud-based software that updates in real time. Schools and organizations can showcase decades of records, rosters, photos, and videos—beautifully tailored to their brand.',
  },
  {
    question: 'What makes Touchstone Digital Solutions the best Digital Hall of Fame company?',
    answer:
      'Touchstone Digital Solutions delivers fully customized, interactive recognition solutions. Every display is tailored to reflect your school\'s unique brand and culture. We offer no cost to build or maintain, Emmy-nominated design, and unlimited customization as a family-owned company.',
  },
  {
    question: 'What type of schools use digital Hall of Fame?',
    answer:
      'Digital Hall of Fame are used by public and private middle schools, high schools, college athletic departments, college history programs, community organizations, and nonprofits. Touchstone serves K–12 schools, colleges, universities, and community groups nationwide.',
  },
  {
    question: 'Does Touchstone provide installation or support?',
    answer:
      'Yes—Touchstone provides full-service support from start to finish, including system setup, design, training, and unlimited lifetime customer service available 24/7.',
  },
]);

const homeBreadcrumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://touchstone-ds.com/' },
]);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={[homeServiceSchema, homeFaqSchema, homeBreadcrumbSchema]} />
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <TrustedBySection />
        <TouchstoneFamilySection />
        <DigitalHallOfFameSection />
        <CustomPlatformSection />
        <InteractiveDisplaysSection />
        <AlumniRecognitionSection />
        <OnboardingSection />
        <DigitalDisplayFeaturesSection />
        <div id="gallery">
          <PhotoCarouselSection />
        </div>
        <div id="solutions">
          <WhySection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="contact">
          <HowItWorksSection />
        </div>
        <div id="cta">
          <CallToActionSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}


