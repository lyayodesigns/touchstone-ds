import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FundraisingHero from '../../components/TouchstoneFundraising/FundraisingHero';
import FundraisingIntro from '../../components/TouchstoneFundraising/FundraisingIntro';
import ServicesOverview from '../../components/TouchstoneFundraising/ServicesOverview';
import WhoWeServe from '../../components/TouchstoneFundraising/WhoWeServe';
import WhyChooseTouchstone from '../../components/TouchstoneFundraising/WhyChooseTouchstone';
import HowItWorks from '../../components/TouchstoneFundraising/HowItWorks';
import Testimonials from '../../components/TouchstoneFundraising/Testimonials';
import FundraisingFAQ from '../../components/TouchstoneFundraising/FundraisingFAQ';
import FinalCTA from '../../components/TouchstoneFundraising/FinalCTA';
import { Metadata } from 'next';

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

export default function TouchstoneFundraisingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <FundraisingHero />
        <FundraisingIntro />
        <ServicesOverview />
        <WhoWeServe />
        <WhyChooseTouchstone />
        <HowItWorks />
        <Testimonials />
        <FundraisingFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
