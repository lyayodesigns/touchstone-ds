import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HardwareHeroSection from '../../components/Hardware/HardwareHeroSection';
import { Metadata } from 'next';
import CallToActionSection from 'components/Home/CallToActionSection';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hardware Solutions | Touchstone Digital Solutions',
  description: "Explore our premium touchscreen hardware solutions in multiple sizes - 55\", 65\", 75\", and 86\" interactive displays for your digital recognition needs.",
  alternates: {
    canonical: 'https://touchstone-ds.com/hardware/'
  },
  openGraph: {
    title: 'Hardware Solutions | Touchstone Digital Solutions',
    description: "Explore our premium touchscreen hardware solutions in multiple sizes - 55\", 65\", 75\", and 86\" interactive displays for your digital recognition needs.",
    url: 'https://touchstone-ds.com/hardware/',
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
    title: 'Hardware Solutions | Touchstone Digital Solutions',
    description: "Explore our premium touchscreen hardware solutions in multiple sizes - 55\", 65\", 75\", and 86\" interactive displays for your digital recognition needs.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function HardwarePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <HardwareHeroSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
