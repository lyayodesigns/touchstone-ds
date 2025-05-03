import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/Contact/ContactForm';
import { Container } from '../../components/ui/container';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contact Us | Touchstone Digital Solutions',
  description: "Get in touch with the Touchstone team to discuss your digital recognition system needs, request a demo, or learn more about our services.",
  alternates: {
    canonical: 'https://touchstone-ds.com/contact/'
  },
  openGraph: {
    title: 'Contact Us | Touchstone Digital Solutions',
    description: "Get in touch with the Touchstone team to discuss your digital recognition system needs, request a demo, or learn more about our services.",
    url: 'https://touchstone-ds.com/contact/',
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
    title: 'Contact Us | Touchstone Digital Solutions',
    description: "Get in touch with the Touchstone team to discuss your digital recognition system needs, request a demo, or learn more about our services.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <Navbar />
      {/* Hero Section */}
      <section 
        className="relative min-h-[50svh] w-full flex flex-col items-center justify-center overflow-hidden pt-2 pb-1 sm:pt-4 sm:pb-3 md:pt-16 md:pb-6"
        style={{
          backgroundImage: "url('/hero-bg-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
        {/* Background with static gradient */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{ opacity: 0.5 }}
          />
        </div>
        {/* Decorative elements - hidden on small screens */}
        <div 
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/10 hidden sm:block"
        />
        <div 
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500/10 hidden sm:block"
        />
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Pill */}
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100/60 text-blue-700 font-medium text-sm shadow-sm">
              We're here to help
            </div>
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-blue-600">Let's </span>
              <span className="bg-gradient-to-r from-[#6A82FB] to-[#FC5C7D] bg-clip-text text-transparent">Connect</span>
            </h1>
            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              Have questions about our <span className="text-gradient-purple-blue font-medium">digital recognition solutions</span>? Our team is ready to create an unforgettable experience for your institution.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a href="#contact-form" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6A82FB] to-[#FC5C7D] text-white font-semibold shadow-md hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18v-2.25M17.25 15l3-3m0 0l-3-3m3 3H9" /></svg>
                Send Message
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h0a2.25 2.25 0 002.25-2.25v-2.25a2.25 2.25 0 00-2.25-2.25h-1.125a1.125 1.125 0 01-1.125-1.125V15a2.25 2.25 0 00-2.25-2.25h-1.125a1.125 1.125 0 01-1.125-1.125V9.75A2.25 2.25 0 009.75 7.5H8.625A1.125 1.125 0 017.5 6.375V5.25A2.25 2.25 0 005.25 3h0A2.25 2.25 0 003 5.25v1.5z" /></svg>
                Call Us
              </a>
            </div>
          </div>
        </Container>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
};


