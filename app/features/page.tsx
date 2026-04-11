import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FeaturesHeroSection from '../../components/Features/FeaturesHeroSection';
import AllinOneSection from '../../components/Features/AllinOneSection';
import CustomizableSolutions from '../../components/Features/CustomizableSolutions';
import DigitalRecordBoardAndDonorWall from '../../components/Features/DigitalRecordBoardAndDonorWall';
import FullCustomization from '../../components/Features/FullCustomization';
import BuiltForInstitutionAndExperience from '../../components/Features/BuiltForInstitutionAndExperience';
import VisualFidelity from '../../components/Features/VisualFidelity';
import BuiltByGaming from '../../components/Features/BuiltByGaming';
import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../../lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Digital Hall of Fame Software Features | Touchstone Digital Solutions',
  description: "Touchstone's Hall of Fame software features interactive touchscreens, donor walls, record boards, alumni spotlights, custom branding, and cloud management.",
  alternates: {
    canonical: 'https://touchstone-ds.com/features/'
  },
  openGraph: {
    title: 'Digital Hall of Fame Software Features | Touchstone Digital Solutions',
    description: "Touchstone's Hall of Fame software features interactive touchscreens, donor walls, record boards, alumni spotlights, custom branding, and cloud management.",
    url: 'https://touchstone-ds.com/features/',
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
    title: 'Digital Hall of Fame Software Features | Touchstone Digital Solutions',
    description: "Touchstone's Hall of Fame software features interactive touchscreens, donor walls, record boards, alumni spotlights, custom branding, and cloud management.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={[
        serviceSchema({
          name: 'Digital Hall of Fame Platform Features',
          description: "Explore Touchstone's interactive digital recognition platform features — fully customizable displays, cloud-based management, record boards, donor walls, and seamless integration for schools and institutions.",
          url: 'https://touchstone-ds.com/features/',
          serviceType: 'Digital Recognition Software',
        }),
        breadcrumbSchema([
          { name: 'Home', url: 'https://touchstone-ds.com/' },
          { name: 'Features', url: 'https://touchstone-ds.com/features/' },
        ]),
      ]} />
      <Navbar />
      <main className="overflow-hidden">
        <FeaturesHeroSection />
        <AllinOneSection />
        <BuiltByGaming />
        <FullCustomization />
        <CustomizableSolutions />
        <DigitalRecordBoardAndDonorWall />
        <VisualFidelity />
        <BuiltForInstitutionAndExperience />
      </main>
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Ready to transform your recognition displays?
            </span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            Explore our innovative digital solutions or get in touch with our team to learn more about how we can help your institution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};


