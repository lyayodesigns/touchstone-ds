import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DigitalDonorWallsHero from '../../components/DigitalDonorWalls/DigitalDonorWallsHero';
import AnatomyOfDigitalDonorWall from '../../components/DigitalDonorWalls/AnatomyOfDigitalDonorWall';
import TouchstoneStewardshipTool from '../../components/DigitalDonorWalls/TouchstoneStewardshipTool';
import SectorSpecificIdeas from '../../components/DigitalDonorWalls/SectorSpecificIdeas';
import HowToCreate from '../../components/DigitalDonorWalls/HowToCreate';
import InvestmentAndExamples from '../../components/DigitalDonorWalls/InvestmentAndExamples';
import WhyTouchstoneChoice from '../../components/DigitalDonorWalls/WhyTouchstoneChoice';
import DigitalDonorWallsFAQ from '../../components/DigitalDonorWalls/DigitalDonorWallsFAQ';
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
        <AnatomyOfDigitalDonorWall />
        <TouchstoneStewardshipTool />
        <SectorSpecificIdeas />
        <HowToCreate />
        <InvestmentAndExamples />
        <WhyTouchstoneChoice />
        <DigitalDonorWallsFAQ />
      </main>
      <Footer />
    </div>
  );
};
