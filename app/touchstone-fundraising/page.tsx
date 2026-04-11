import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FundraisingHero from '../../components/TouchstoneFundraising/FundraisingHero';
import ServicesOverview from '../../components/TouchstoneFundraising/ServicesOverview';
import WhoWeServe from '../../components/TouchstoneFundraising/WhoWeServe';
import WhyChooseTouchstone from '../../components/TouchstoneFundraising/WhyChooseTouchstone';
import HowItWorks from '../../components/TouchstoneFundraising/HowItWorks';
import Testimonials from '../../components/TouchstoneFundraising/Testimonials';
import FundraisingFAQ from '../../components/TouchstoneFundraising/FundraisingFAQ';
import FinalCTA from '../../components/TouchstoneFundraising/FinalCTA';
import ImageSection from '../../components/TouchstoneFundraising/ImageSection';
import ImageSection2 from '../../components/TouchstoneFundraising/ImageSection2';
import SimpleHowItWorks from '../../components/TouchstoneFundraising/SimpleHowItWorks';
import Scorecard from '../../components/TouchstoneFundraising/Scorecard';
import { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Touchstone Fundraising | Fundraising Software for Nonprofits, Schools & Churches — Touchstone Digital Solutions',
  description: "Touchstone Fundraising by Touchstone Digital Solutions: the all-in-one fundraising platform for nonprofits, schools, churches, and community organizations. Launch campaigns, engage donors, and raise more — smarter.",
  alternates: {
    canonical: 'https://touchstone-ds.com/touchstone-fundraising/'
  },
  openGraph: {
    title: 'Touchstone Fundraising | Fundraising Software for Nonprofits, Schools & Churches — Touchstone Digital Solutions',
    description: "Touchstone Fundraising by Touchstone Digital Solutions: the all-in-one fundraising platform for nonprofits, schools, churches, and community organizations. Launch campaigns, engage donors, and raise more — smarter.",
    url: 'https://touchstone-ds.com/touchstone-fundraising/',
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
    title: 'Touchstone Fundraising | Fundraising Software for Nonprofits, Schools & Churches — Touchstone Digital Solutions',
    description: "Touchstone Fundraising by Touchstone Digital Solutions: the all-in-one fundraising platform for nonprofits, schools, churches, and community organizations. Launch campaigns, engage donors, and raise more — smarter.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

const fundraisingFaqs = [
  { question: 'What types of organizations does Touchstone Fundraising serve?', answer: 'We serve all organizations including schools (K-12 and higher education), nonprofits, churches, youth groups, PTAs, animal shelters, community organizations, and more.' },
  { question: 'How big of a time commitment is Touchstone Fundraising?', answer: 'After a quick walk-through call, our platform takes minutes to get started. Then you will reach your campaign\'s goal in no time.' },
  { question: 'Is Touchstone Fundraising suitable for small organizations?', answer: 'Absolutely. Our solutions scale to fit organizations of every size and budget, from a single middle school fundraising campaign to a multi-year higher education fundraising initiative.' },
  { question: 'Do you provide fundraising training?', answer: 'Yes. We offer fundraising training sessions as well as walking you through the process on a live call. Touchstone also always offers live 24/7 support to all customers.' },
  { question: 'Can I use the platform for online and in-person events?', answer: 'Yes. Touchstone Fundraising supports online fundraising sites for schools and nonprofits as well as in-person fundraising activities for church, schools, and charity events.' },
  { question: 'How does the digital donor wall integrate with fundraising?', answer: 'Our digital donor wall technology integrates seamlessly with your fundraising campaigns to provide real-time donor recognition — a proven tool for boosting engagement and repeat giving.' },
];

export default function TouchstoneFundraisingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={[
        serviceSchema({
          name: 'Touchstone Fundraising Platform',
          description: 'The all-in-one fundraising platform for nonprofits, schools, churches, and community organizations. Launch campaigns, engage donors, and raise more — smarter.',
          url: 'https://touchstone-ds.com/touchstone-fundraising/',
          serviceType: 'Fundraising Software',
        }),
        faqPageSchema(fundraisingFaqs),
        breadcrumbSchema([
          { name: 'Home', url: 'https://touchstone-ds.com/' },
          { name: 'Touchstone Fundraising', url: 'https://touchstone-ds.com/touchstone-fundraising/' },
        ]),
      ]} />
      <Navbar />
      <main className="overflow-hidden">
        <FundraisingHero />
        <ImageSection />
        <SimpleHowItWorks />
        <Testimonials />
        <Scorecard />
        <HowItWorks />
        <WhyChooseTouchstone />
        <ImageSection2 />
        <ServicesOverview />
        <WhoWeServe />        
        <FundraisingFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
