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
import JsonLd from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Digital Donor Walls | Touchstone Digital Solutions',
  description: "Touchstone's elegant, interactive Digital Donor Walls honor donors at universities, hospitals, and schools with real-time touchscreen recognition. Browse examples and pricing.",
  alternates: {
    canonical: 'https://touchstone-ds.com/digital-donor-walls/'
  },
  openGraph: {
    title: 'Digital Donor Walls | Touchstone Digital Solutions',
    description: "Touchstone's elegant, interactive Digital Donor Walls honor donors at universities, hospitals, and schools with real-time touchscreen recognition. Browse examples and pricing.",
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
    description: "Touchstone's elegant, interactive Digital Donor Walls honor donors at universities, hospitals, and schools with real-time touchscreen recognition. Browse examples and pricing.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

const donorWallFaqs = [
  { question: 'Can we update the donor list ourselves?', answer: 'Absolutely! Our donor digital wall software is very intuitive and offers your team a rather simple password-protected portal for updates in real time.' },
  { question: 'What kind of hardware do we require?', answer: 'Commercial large-format displays or touchscreen kiosks are what we usually use. We can procure and install them in your facility as part of our turnkey service.' },
  { question: 'Our donors belong to different campaigns and giving levels. Can they be categorized?', answer: 'Yes. Our system has sophisticated filtering by campaign, giving society, year, and more, making it easy for visitors to traverse.' },
  { question: 'Do you serve our area?', answer: 'As a premier provider of digital donor wall USA solutions, we work with clients nationwide and can install remotely or with the help of local partners when necessary.' },
  { question: 'How long does the installation process take?', answer: 'The timeline varies based on project complexity, but typically ranges from 4-8 weeks from design approval to installation.' },
  { question: 'Can the digital donor wall integrate with our existing donor database?', answer: 'Yes! Our system can integrate with most major donor management systems, allowing for seamless data synchronization and automated updates.' },
  { question: 'What ongoing maintenance is required?', answer: 'Our digital donor walls are designed for minimal maintenance. We provide remote monitoring, software updates, and technical support. Hardware maintenance is typically limited to basic cleaning.' },
  { question: 'Can we display multimedia content like videos and photos?', answer: 'Absolutely! Our digital donor walls support high-quality videos, photo galleries, infographics, and interactive content to tell compelling donor impact stories.' },
];

export default function DigitalDonorWallsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={[
        serviceSchema({
          name: 'Digital Donor Walls',
          description: 'Elegant and interactive Digital Donor Walls for universities, hospitals, and schools throughout the USA. Honor your donors with dynamic, fully customizable displays.',
          url: 'https://touchstone-ds.com/digital-donor-walls/',
          serviceType: 'Digital Donor Recognition Software',
        }),
        faqPageSchema(donorWallFaqs),
        breadcrumbSchema([
          { name: 'Home', url: 'https://touchstone-ds.com/' },
          { name: 'Digital Donor Walls', url: 'https://touchstone-ds.com/digital-donor-walls/' },
        ]),
      ]} />
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
