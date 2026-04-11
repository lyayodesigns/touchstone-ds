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
import JsonLd from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Digital Record Boards | Touchstone Digital Solutions',
  description: "Touchstone's Digital Record Boards display athletic and academic records on interactive touchscreens — motivating students at schools, universities, and more.",
  alternates: {
    canonical: 'https://touchstone-ds.com/digital-record-boards/'
  },
  openGraph: {
    title: 'Digital Record Boards | Touchstone Digital Solutions',
    description: "Touchstone's Digital Record Boards display athletic and academic records on interactive touchscreens — motivating students at schools, universities, and more.",
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
    description: "Touchstone's Digital Record Boards display athletic and academic records on interactive touchscreens — motivating students at schools, universities, and more.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

const recordBoardFaqs = [
  { question: 'What are digital record boards?', answer: 'Digital record boards are cloud-based records displayed on touchscreen displays that showcase athletic and academic records, milestones, and achievements in a modern, searchable, and interactive format. Updates happen in seconds with no data limits.' },
  { question: 'How are records updated?', answer: 'Records can be updated instantly from any device. Authorized staff can log in, make changes, and see them reflected immediately on the displays.' },
  { question: 'What Is the Implementation Timeline?', answer: 'Implementation typically takes a few days to two weeks, depending on system complexity and the amount of data to migrate. If you\'re working with a tight deadline, we\'ll meet it.' },
  { question: 'Can we transfer our old records?', answer: 'Yes. We securely migrate your historical records into the system so nothing is lost and everything is organized and searchable.' },
  { question: 'What Makes Our Digital Record Boards Different?', answer: 'Unlike traditional boards, our cloud-based touchscreen displays are interactive, multimedia ready, and always up to date. They store your entire history so no records are ever lost, and updates take seconds instead of hours or weeks.' },
  { question: 'What Type of Training Do You Offer?', answer: 'We provide full training, including system administration, team instruction, new feature demonstrations, and troubleshooting. Our easy-to-use interface ensures your team becomes a confident super user as quickly as possible.' },
  { question: 'What Is Your Customer Support Like?', answer: 'Every customer has access to 24/7 live support — call, text, email, or FaceTime. When you need help, you\'ll connect with someone from our team you know and trust.' },
  { question: 'Do we need to buy new equipment?', answer: 'No, you can use any touchscreens you prefer. However, we also offer beautiful, industry-leading hardware at unbeatable prices.' },
];

export default function DigitalRecordBoardsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={[
        serviceSchema({
          name: 'Digital Record Boards',
          description: "Transform your record displays with Touchstone's innovative Digital Record Boards. Interactive touchscreen technology that motivates, involves and glorifies achievement. Perfect for schools, universities, and organizations.",
          url: 'https://touchstone-ds.com/digital-record-boards/',
          serviceType: 'Digital Record Board Software',
        }),
        faqPageSchema(recordBoardFaqs),
        breadcrumbSchema([
          { name: 'Home', url: 'https://touchstone-ds.com/' },
          { name: 'Digital Record Boards', url: 'https://touchstone-ds.com/digital-record-boards/' },
        ]),
      ]} />
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
