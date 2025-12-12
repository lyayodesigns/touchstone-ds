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

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Digital Yearbooks | Touchstone Digital Solutions',
  description: "Transform your prized school yearbooks into searchable digital archives. Professional yearbook scanning and digitization services for schools, libraries, and individuals. Preserve memories forever with Touchstone Digital Solutions.",
  alternates: {
    canonical: 'https://touchstone-ds.com/digital-yearbooks/'
  },
  openGraph: {
    title: 'Digital Yearbooks | Touchstone Digital Solutions',
    description: "Transform your prized school yearbooks into searchable digital archives. Professional yearbook scanning and digitization services for schools, libraries, and individuals. Preserve memories forever with Touchstone Digital Solutions.",
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
    description: "Transform your prized school yearbooks into searchable digital archives. Professional yearbook scanning and digitization services for schools, libraries, and individuals. Preserve memories forever with Touchstone Digital Solutions.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function DigitalYearbooksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
