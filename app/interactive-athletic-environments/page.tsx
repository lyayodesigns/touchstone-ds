import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/InteractiveAthletic/HeroSection';
import BeyondTouchscreens from '../../components/InteractiveAthletic/BeyondTouchscreens';
import ScalableSolutions from '../../components/InteractiveAthletic/ScalableSolutions';
import OurProcess from '../../components/InteractiveAthletic/OurProcess';
import BuiltToEvolve from '../../components/InteractiveAthletic/BuiltToEvolve';
import CallToAction from '../../components/InteractiveAthletic/CallToAction';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Interactive Athletic Environments & Fan Experiences | Touchstone Digital Solutions',
  description: "Touchstone Digital Solutions designs and deploys large-scale interactive environments that transform athletic spaces into dynamic storytelling destinations. From touchscreen displays to multi-user LED walls.",
  alternates: {
    canonical: 'https://touchstone-ds.com/interactive-athletic-environments/'
  },
  openGraph: {
    title: 'Interactive Athletic Environments & Fan Experiences | Touchstone Digital Solutions',
    description: "Touchstone Digital Solutions designs and deploys large-scale interactive environments that transform athletic spaces into dynamic storytelling destinations.",
    url: 'https://touchstone-ds.com/interactive-athletic-environments/',
    siteName: 'Touchstone Digital Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://touchstone-ds.com/og-image.jpg',
      width: 1200,
      height: 630
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@touchstone_ds',
    title: 'Interactive Athletic Environments & Fan Experiences | Touchstone Digital Solutions',
    description: "Touchstone Digital Solutions designs and deploys large-scale interactive environments that transform athletic spaces into dynamic storytelling destinations.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function InteractiveAthleticEnvironmentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <BeyondTouchscreens />
        <ScalableSolutions />
        <OurProcess />
        <BuiltToEvolve />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
