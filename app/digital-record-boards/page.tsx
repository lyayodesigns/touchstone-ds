import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DigitalRecordBoardsHero from '../../components/DigitalRecordBoards/DigitalRecordBoardsHero';
import TraditionalRecordBoardsFailure from '../../components/DigitalRecordBoards/TraditionalRecordBoardsFailure';
import TheSolution from '../../components/DigitalRecordBoards/TheSolution';
import KeyFeaturesBenefits from '../../components/DigitalRecordBoards/KeyFeaturesBenefits';
import HowItWorks from '../../components/DigitalRecordBoards/HowItWorks';
import UseCases from '../../components/DigitalRecordBoards/UseCases';
import CustomerSuccessStories from '../../components/DigitalRecordBoards/CustomerSuccessStories';
import CompetitiveAdvantages from '../../components/DigitalRecordBoards/CompetitiveAdvantages';
import ComprehensiveServices from '../../components/DigitalRecordBoards/ComprehensiveServices';
import PricingPlans from '../../components/DigitalRecordBoards/PricingPlans';
import FAQ from '../../components/DigitalRecordBoards/FAQ';
import TrustReassurance from '../../components/DigitalRecordBoards/TrustReassurance';
import CTASection from '../../components/DigitalRecordBoards/CTASection';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Digital Record Boards | Touchstone Digital Solutions',
  description: "Transform your record displays with Touchstone's innovative Digital Record Boards. Interactive touchscreen technology that motivates, involves and glorifies achievement. Perfect for schools, universities, and organizations.",
  alternates: {
    canonical: 'https://touchstone-ds.com/digital-record-boards/'
  },
  openGraph: {
    title: 'Digital Record Boards | Touchstone Digital Solutions',
    description: "Transform your record displays with Touchstone's innovative Digital Record Boards. Interactive touchscreen technology that motivates, involves and glorifies achievement. Perfect for schools, universities, and organizations.",
    url: 'https://touchstone-ds.com/digital-record-boards/',
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
    title: 'Digital Record Boards | Touchstone Digital Solutions',
    description: "Transform your record displays with Touchstone's innovative Digital Record Boards. Interactive touchscreen technology that motivates, involves and glorifies achievement. Perfect for schools, universities, and organizations.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function DigitalRecordBoardsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <DigitalRecordBoardsHero />
        <TraditionalRecordBoardsFailure />
        <TheSolution />
        <KeyFeaturesBenefits />
        <HowItWorks />
        <UseCases />
        <CustomerSuccessStories />
        <CompetitiveAdvantages />
        <ComprehensiveServices />
        <PricingPlans />
        <FAQ />
        <TrustReassurance />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
