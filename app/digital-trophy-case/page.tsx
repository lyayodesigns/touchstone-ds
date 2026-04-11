import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DigitalTrophyCaseHero from '../../components/DigitalTrophyCase/DigitalTrophyCaseHero';
import TrophyCaseDigitalAge from '../../components/DigitalTrophyCase/TrophyCaseDigitalAge';
import WhatIsDigitalTrophyCase from '../../components/DigitalTrophyCase/WhatIsDigitalTrophyCase';
import WhoIsItFor from '../../components/DigitalTrophyCase/WhoIsItFor';
import WhyTouchstone from '../../components/DigitalTrophyCase/WhyTouchstone';
import DigitalTrophyCaseIdeas from '../../components/DigitalTrophyCase/DigitalTrophyCaseIdeas';
import HowItWorks from '../../components/DigitalTrophyCase/HowItWorks';
import TestimonialsSection from '../../components/Home/TestimonialsSection';
import CallToActionSection from '../../components/Home/CallToActionSection';
import FAQ from '../../components/DigitalTrophyCase/FAQ';
import { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Digital Trophy Case | Touchstone Digital Solutions',
  description: "Transform your trophy displays with Touchstone's innovative Digital Trophy Case software. Interactive, secure, and accessible from anywhere. Perfect for schools, athletes, and organizations.",
  alternates: {
    canonical: 'https://touchstone-ds.com/digital-trophy-case/'
  },
  openGraph: {
    title: 'Digital Trophy Case | Touchstone Digital Solutions',
    description: "Transform your trophy displays with Touchstone's innovative Digital Trophy Case software. Interactive, secure, and accessible from anywhere. Perfect for schools, athletes, and organizations.",
    url: 'https://touchstone-ds.com/digital-trophy-case/',
    type: 'website',
    images: [{
      url: 'https://touchstone-ds.com/og-image.jpg',
      width: 1200,
      height: 630
    }],
    siteName: 'Touchstone Digital Solutions'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@touchstone_ds',
    title: 'Digital Trophy Case | Touchstone Digital Solutions',
    description: "Transform your trophy displays with Touchstone's innovative Digital Trophy Case software. Interactive, secure, and accessible from anywhere. Perfect for schools, athletes, and organizations.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

const trophyCaseFaqs = [
  { question: 'Is this just for sports awards?', answer: 'Certainly not! While the platform suits athletic achievements perfectly, it is incredibly versatile. Award academic triumphs, corporate recognitions, artistic achievements, or worthy personal milestones.' },
  { question: 'Can I control who sees my digital trophy case?', answer: 'Yes, absolutely. You can keep it public, password-protect it, or keep it completely private for your own records. You have full control over privacy settings and sharing permissions.' },
  { question: 'What if we need a physical display for the school lobby?', answer: 'We specialize in stunning touchscreen digital trophy case installations. Reach out to us for a quote on a custom kiosk solution that integrates seamlessly with our software.' },
  { question: 'Do you provide digital trophy case ideas or templates?', answer: "Yes! You'll get access to our gallery of inspiration as well as various pre-built templates upon sign-up to help you start quickly. Our design team can also create custom templates for your specific needs." },
  { question: 'How secure is my data?', answer: 'Your data is stored securely in the cloud with multiple backup copies in various locations. We use enterprise-grade security measures to protect your achievements and personal information.' },
  { question: 'Can I embed my trophy case on my website?', answer: 'Absolutely! You can embed your entire trophy case or individual achievements into your existing website. We provide easy-to-use embed codes that work with any website platform.' },
  { question: 'What multimedia formats are supported?', answer: 'We support all major image formats (JPG, PNG, GIF), and you can embed videos directly from YouTube and Vimeo. You can also add text descriptions, statistics, and link to external content.' },
];

export default function DigitalTrophyCasePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={[
        serviceSchema({
          name: 'Digital Trophy Case Software',
          description: "Transform your trophy displays with Touchstone's innovative Digital Trophy Case software. Interactive, secure, and accessible from anywhere. Perfect for schools, athletes, and organizations.",
          url: 'https://touchstone-ds.com/digital-trophy-case/',
          serviceType: 'Digital Trophy Case Software',
        }),
        faqPageSchema(trophyCaseFaqs),
        breadcrumbSchema([
          { name: 'Home', url: 'https://touchstone-ds.com/' },
          { name: 'Digital Trophy Case', url: 'https://touchstone-ds.com/digital-trophy-case/' },
        ]),
      ]} />
      <Navbar />
      <main className="overflow-hidden">
        <DigitalTrophyCaseHero />
        <TrophyCaseDigitalAge />
        <WhatIsDigitalTrophyCase />
        <WhoIsItFor />
        <WhyTouchstone />
        <DigitalTrophyCaseIdeas />
        <HowItWorks />
        <TestimonialsSection />
        <FAQ />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};
