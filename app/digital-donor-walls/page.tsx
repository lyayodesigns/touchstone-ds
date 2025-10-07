import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DigitalDonorWallsHero from '../../components/DigitalDonorWalls/DigitalDonorWallsHero';
import DigitalDonorWallsIntro from '../../components/DigitalDonorWalls/DigitalDonorWallsIntro';
import AnatomyOfDigitalDonorWall from '../../components/DigitalDonorWalls/AnatomyOfDigitalDonorWall';
import TouchstoneStewardshipTool from '../../components/DigitalDonorWalls/TouchstoneStewardshipTool';
import SectorSpecificIdeas from '../../components/DigitalDonorWalls/SectorSpecificIdeas';
import HowToCreate from '../../components/DigitalDonorWalls/HowToCreate';
import InvestmentSection from '../../components/DigitalDonorWalls/InvestmentSection';
import ExamplesSection from '../../components/DigitalDonorWalls/ExamplesSection';
import WhyTouchstoneChoice from '../../components/DigitalDonorWalls/WhyTouchstoneChoice';
import DigitalDonorWallsFAQ from '../../components/DigitalDonorWalls/DigitalDonorWallsFAQ';
import CallToActionSection from '../../components/Home/CallToActionSection';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Digital Donor Walls | Touchstone Digital Solutions',
  description: "Touchstone Digital Solutions carries a line of elegant and interactive Digital Donor Walls for universities, hospitals, and schools throughout the USA. See examples, garner ideas, and weigh cheap alternatives. Honor your donors in a way they have never been honored before.",
  alternates: {
    canonical: 'https://touchstone-ds.com/digital-donor-walls/'
  },
  openGraph: {
    title: 'Digital Donor Walls | Touchstone Digital Solutions',
    description: "Touchstone Digital Solutions carries a line of elegant and interactive Digital Donor Walls for universities, hospitals, and schools throughout the USA. See examples, garner ideas, and weigh cheap alternatives. Honor your donors in a way they have never been honored before.",
    url: 'https://touchstone-ds.com/digital-donor-walls/',
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
    title: 'Digital Donor Walls | Touchstone Digital Solutions',
    description: "Touchstone Digital Solutions carries a line of elegant and interactive Digital Donor Walls for universities, hospitals, and schools throughout the USA. See examples, garner ideas, and weigh cheap alternatives. Honor your donors in a way they have never been honored before.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function DigitalDonorWallsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <DigitalDonorWallsHero />
        <DigitalDonorWallsIntro />
        <TouchstoneStewardshipTool />
        <AnatomyOfDigitalDonorWall />  
        <SectorSpecificIdeas />
        <HowToCreate />
        <InvestmentSection />
        <ExamplesSection />
        <WhyTouchstoneChoice />
        <DigitalDonorWallsFAQ />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};
