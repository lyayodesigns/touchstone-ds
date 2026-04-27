import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AthleticHallOfFameHero from '../../components/DigitalAthleticHallOfFame/AthleticHallOfFameHero';
import AthleticLegacy from '../../components/DigitalAthleticHallOfFame/AthleticLegacy';
import BuiltForAthletics from '../../components/DigitalAthleticHallOfFame/BuiltForAthletics';
import WhatGoesInside from '../../components/DigitalAthleticHallOfFame/WhatGoesInside';
import WhereFansExplore from '../../components/DigitalAthleticHallOfFame/WhereFansExplore';
import WhoBuildsItWithUs from '../../components/DigitalAthleticHallOfFame/WhoBuildsItWithUs';
import HowItWorks from '../../components/DigitalAthleticHallOfFame/HowItWorks';
import WhyTouchstone from '../../components/DigitalAthleticHallOfFame/WhyTouchstone';
import TrustedBy from '../../components/DigitalAthleticHallOfFame/TrustedBy';
import FAQ from '../../components/DigitalAthleticHallOfFame/FAQ';
import FinalCTA from '../../components/DigitalAthleticHallOfFame/FinalCTA';
import { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schema';

export const dynamic = 'force-static';

const PAGE_URL = 'https://touchstone-ds.com/digital-athletic-hall-of-fame/';
const PAGE_DESCRIPTION = "Build a digital athletic hall of fame for your school. Honor inductees, championships, and varsity legends with interactive touchscreen displays.";

export const metadata: Metadata = {
  title: 'Digital Athletic Hall of Fame Software | Touchstone',
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL
  },
  openGraph: {
    title: 'Digital Athletic Hall of Fame Software | Touchstone',
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
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
    title: 'Digital Athletic Hall of Fame Software | Touchstone',
    description: PAGE_DESCRIPTION,
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

const athleticHallOfFameFaqs = [
  {
    question: 'What is a digital athletic hall of fame?',
    answer: "A digital athletic hall of fame is an interactive touchscreen platform that replaces traditional plaque walls and trophy cases with searchable, multimedia profiles of every inductee, championship team, and record holder in your athletic program's history. Visitors browse by sport, era, induction class, or athlete name and explore photos, video highlights, stats, and stories.",
  },
  {
    question: 'How is this different from your digital trophy case or record boards?',
    answer: "Our digital trophy case focuses on championship hardware. Our digital record boards focus on auto-ranking individual and team records. A digital athletic hall of fame is broader; it's the master experience that ties inductees, classes, championships, and records together in one narrative.",
  },
  {
    question: 'How do we choose who gets inducted?',
    answer: 'That stays entirely with your hall of fame committee. Touchstone provides the nomination intake forms, voting workflow, and draft profile tools, but the criteria, the process, and the final decision are 100% yours.',
  },
  {
    question: 'Can we use it during our induction ceremony?',
    answer: 'Yes. The same platform powers your in-lobby touchscreen, your website, and your induction night ceremony screens. Many programs run a live class-of-2026 walkthrough during the banquet.',
  },
  {
    question: 'What if our records and photos are still on paper?',
    answer: 'We handle digitization. Our team scans, organizes, and integrates old yearbooks, newspaper clippings, programs, and photo archives into your hall of fame so you launch with a complete history, not a blank slate.',
  },
  {
    question: 'How much does a digital athletic hall of fame cost?',
    answer: 'Pricing depends on screen size, content migration scope, and the size of your inductee archive. Most athletic departments fit within a single annual budget line. Schedule a free demo for a custom quote.',
  },
  {
    question: 'How often do we update it?',
    answer: 'As often as you want. New inductees, new championships, new records. Your athletic director or SID can publish updates in minutes from any browser. No vendor calls, no extra fees.',
  },
];

export default function DigitalAthleticHallOfFamePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={[
        serviceSchema({
          name: 'Digital Athletic Hall of Fame Software',
          description: PAGE_DESCRIPTION,
          url: PAGE_URL,
          serviceType: 'Digital Athletic Hall of Fame Software',
        }),
        faqPageSchema(athleticHallOfFameFaqs),
        breadcrumbSchema([
          { name: 'Home', url: 'https://touchstone-ds.com/' },
          { name: 'Digital Athletic Hall of Fame', url: PAGE_URL },
        ]),
      ]} />
      <Navbar />
      <main className="overflow-hidden">
        <AthleticHallOfFameHero />
        <AthleticLegacy />
        <BuiltForAthletics />
        <WhatGoesInside />
        <WhereFansExplore />
        <WhoBuildsItWithUs />
        <HowItWorks />
        <WhyTouchstone />
        <TrustedBy />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
