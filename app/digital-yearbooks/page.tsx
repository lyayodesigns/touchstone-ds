import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DigitalYearbooksHero from '../../components/DigitalYearbooks/DigitalYearbooksHero';
import DigitalYearbooksIntro from '../../components/DigitalYearbooks/DigitalYearbooksIntro';
import YearbookDilemma from '../../components/DigitalYearbooks/YearbookDilemma';
import YearbookSolution from '../../components/DigitalYearbooks/YearbookSolution';
import YearbookProcess from '../../components/DigitalYearbooks/YearbookProcess';
import YearbookBenefits from '../../components/DigitalYearbooks/YearbookBenefits';
import YearbookHistory from '../../components/DigitalYearbooks/YearbookHistory';
import SchoolYearbookSolutions from '../../components/DigitalYearbooks/SchoolYearbookSolutions';
import YearbookPricing from '../../components/DigitalYearbooks/YearbookPricing';
import DigitalYearbooksFAQ from '../../components/DigitalYearbooks/DigitalYearbooksFAQ';
import CallToActionSection from '../../components/Home/CallToActionSection';
import { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Digital Yearbooks | Touchstone Digital Solutions',
  description: "Instant digital access to every school yearbook with Touchstone — browse, search, and share memories from any device. Permanently preserved online.",
  alternates: {
    canonical: 'https://touchstone-ds.com/digital-yearbooks/'
  },
  openGraph: {
    title: 'Digital Yearbooks | Touchstone Digital Solutions',
    description: "Instant digital access to every school yearbook with Touchstone — browse, search, and share memories from any device. Permanently preserved online.",
    url: 'https://touchstone-ds.com/digital-yearbooks/',
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
    title: 'Digital Yearbooks | Touchstone Digital Solutions',
    description: "Instant digital access to every school yearbook with Touchstone — browse, search, and share memories from any device. Permanently preserved online.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

const digitalYearbookFaqs = [
  { question: 'What is yearbook digitization?', answer: 'Yearbook digitization is the process of converting physical yearbooks into high-quality digital formats. We scan each page with archival-quality equipment and use OCR technology to make the content searchable.' },
  { question: 'How long does the digitization process take?', answer: 'The timeline varies based on the number of yearbooks and their condition. Typically individual yearbooks take 1-2 weeks, while large institutional collections may take 4-8 weeks.' },
  { question: 'Will my original yearbooks be damaged during scanning?', answer: 'No. We use special non-destructive scanning equipment that safely handles your yearbooks without damaging the binding or pages. Your originals are returned in the same condition.' },
  { question: 'Can I search for specific names in the digital yearbooks?', answer: 'Yes! We use OCR (Optical Character Recognition) technology to make all text searchable. You can instantly find names, clubs, events, and more without flipping through pages.' },
  { question: 'Can I share my digital yearbooks with others?', answer: 'Absolutely! You can easily share individual pages or entire yearbooks with classmates, family members, and alumni through simple links. Perfect for reunions and nostalgia trips.' },
  { question: 'Do you digitize old yearbooks from the 1900s?', answer: 'Yes! We specialize in handling fragile and historic yearbooks from the 1900s and later. We take extra care with these precious documents to ensure they are preserved for future generations.' },
  { question: 'Can schools sell digital yearbooks to alumni?', answer: 'Yes! We provide solutions for schools to distribute and monetize digital yearbooks. Our platform makes it easy to collect payments online and provide secure access to purchasers.' },
];

export default function DigitalYearbooksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={[
        serviceSchema({
          name: 'Digital Yearbooks',
          description: 'Transform your prized school yearbooks into searchable digital archives. Professional yearbook scanning and digitization services for schools, libraries, and individuals.',
          url: 'https://touchstone-ds.com/digital-yearbooks/',
          serviceType: 'Digital Yearbook Software',
        }),
        faqPageSchema(digitalYearbookFaqs),
        breadcrumbSchema([
          { name: 'Home', url: 'https://touchstone-ds.com/' },
          { name: 'Digital Yearbooks', url: 'https://touchstone-ds.com/digital-yearbooks/' },
        ]),
      ]} />
      <Navbar />
      <main className="overflow-hidden">
        <DigitalYearbooksHero />
        <DigitalYearbooksIntro />
        <YearbookDilemma />
        <YearbookSolution />
        <YearbookBenefits />
        <YearbookProcess />        
        <YearbookHistory />
        <SchoolYearbookSolutions />
        <YearbookPricing />
        <DigitalYearbooksFAQ />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};
