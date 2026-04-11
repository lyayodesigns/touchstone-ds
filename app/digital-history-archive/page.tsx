import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DigitalHistoryArchiveHero from '../../components/DigitalHistoryArchive/DigitalHistoryArchiveHero';
import FutureOfHeritage from '../../components/DigitalHistoryArchive/FutureOfHeritage';
import WhyDigitalArchiving from '../../components/DigitalHistoryArchive/WhyDigitalArchiving';
import IndustrySolutions from '../../components/DigitalHistoryArchive/IndustrySolutions';
import ArchiveProcess from '../../components/DigitalHistoryArchive/ArchiveProcess';
import WhyTouchstone from '../../components/DigitalHistoryArchive/WhyTouchstone';
import RealWorldImpact from '../../components/DigitalHistoryArchive/RealWorldImpact';
import FAQSection from '../../components/DigitalHistoryArchive/FAQSection';
import CTASection from '../../components/DigitalHistoryArchive/CTASection';
import { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Digital History Archive | Touchstone Digital Solutions',
  description: "Touchstone's Digital History Archive transforms records, photos, and artifacts into a searchable, secure digital archive for schools and institutions.",
  alternates: {
    canonical: 'https://touchstone-ds.com/digital-history-archive/'
  },
  openGraph: {
    title: 'Digital History Archive | Touchstone Digital Solutions',
    description: "Touchstone's Digital History Archive transforms records, photos, and artifacts into a searchable, secure digital archive for schools and institutions.",
    url: 'https://touchstone-ds.com/digital-history-archive/',
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
    title: 'Digital History Archive | Touchstone Digital Solutions',
    description: "Touchstone's Digital History Archive transforms records, photos, and artifacts into a searchable, secure digital archive for schools and institutions.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

const historyArchiveFaqs = [
  { question: 'What is a Digital History Archive?', answer: 'A Digital History Archive is a secure online platform that preserves your institution\'s historical materials and makes them searchable, organized, and accessible anytime. It allows your community to explore photos, trophies, yearbooks, documents, videos, and more from any device.' },
  { question: 'What types of materials can be included in the archive?', answer: 'Your archive can include yearbooks, photographs, trophies, awards, newspaper clippings, event programs, student publications, coaching records, championship history, artifacts, documents, maps, timelines, faculty publications, leadership history, and other institutional records.' },
  { question: 'Why should we digitize our history instead of keeping everything physical?', answer: 'Physical archives are vulnerable to fire, flood, theft, and natural deterioration. A professionally built digital archive protects your history through secure backups, long-term preservation planning, and format migration, ensuring your materials stay safe and usable for decades.' },
  { question: 'How does your archive make content easy to find?', answer: 'Touchstone archives are built with advanced search tools, intelligent indexing, and detailed metadata. Instead of sorting through boxes or storage rooms, users can locate specific names, years, events, or documents in seconds.' },
  { question: 'Who can access our Digital History Archive?', answer: 'Access is fully customizable. Your institution can choose to make the archive public, private, or a mix of both. Role-based permissions allow you to control what staff, alumni, students, and the public can view.' },
  { question: 'Is the platform secure and compliant?', answer: 'Yes. The Digital History Archive includes role-based access controls, audit trails, and governance tools to help institutions meet compliance requirements and maintain responsible handling of sensitive information.' },
  { question: 'How long does a digital archiving project take?', answer: 'Timelines vary based on volume and material type but typically take 2-3 weeks. During your first consultation, we evaluate your collection and provide a clear plan, estimated timeline, and next steps.' },
  { question: 'How does a digital archive reduce costs for our institution?', answer: 'Digital archiving reduces the need for physical storage space, climate-controlled environments, and ongoing maintenance. It also saves staff time by eliminating manual retrieval and reducing repeated questions about past records.' },
];

export default function DigitalHistoryArchivePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={[
        serviceSchema({
          name: 'Digital History Archive',
          description: "Preserve, protect, and share your institutional history with Touchstone's Digital History Archive. Transform records, artifacts, and cultural heritage into a searchable, secure digital archive.",
          url: 'https://touchstone-ds.com/digital-history-archive/',
          serviceType: 'Digital History Archiving Service',
        }),
        faqPageSchema(historyArchiveFaqs),
        breadcrumbSchema([
          { name: 'Home', url: 'https://touchstone-ds.com/' },
          { name: 'Digital History Archive', url: 'https://touchstone-ds.com/digital-history-archive/' },
        ]),
      ]} />
      <Navbar />
      <main className="overflow-hidden">
        <DigitalHistoryArchiveHero />
        <FutureOfHeritage />
        <WhyDigitalArchiving />
        <IndustrySolutions />
        <ArchiveProcess />
        <WhyTouchstone />
        <RealWorldImpact />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
