import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/Contact/ContactForm';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        {/* Basic Meta Tags */}
        <title>Contact Us | Touchstone Digital Solutions</title>
        <meta name="description" content="Get in touch with the Touchstone team to discuss your digital recognition system needs, request a demo, or learn more about our services." />
        <link rel="canonical" href="https://touchstone-ds.com/contact/" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Contact Us | Touchstone Digital Solutions" />
        <meta property="og:description" content="Get in touch with the Touchstone team to discuss your digital recognition system needs, request a demo, or learn more about our services." />
        <meta property="og:url" content="https://touchstone-ds.com/contact/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://touchstone-ds.com/og-image.jpg" />
        <meta property="og:site_name" content="Touchstone Digital Solutions" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@touchstone_ds" />
        <meta name="twitter:title" content="Contact Us | Touchstone Digital Solutions" />
        <meta name="twitter:description" content="Get in touch with the Touchstone team to discuss your digital recognition system needs, request a demo, or learn more about our services." />
        <meta name="twitter:image" content="https://touchstone-ds.com/og-image.jpg" />
      </Head>
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
