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
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Ready to Transform How You Honor Generosity?
            </span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            Stop listing your donors and start celebrating them. A Touchstone Digital Donor Wall is more than a display; it's a dynamic storytelling platform, an engagement engine, and a powerful statement about your organization's future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://touchstone-ds.com/contact/" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started & See a Live Demo
            </a>
            <a 
              href="https://touchstone-ds.com/contact/" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Browse Our Gallery
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
