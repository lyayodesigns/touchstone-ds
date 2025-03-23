import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">Last Updated: March 23, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Touchstone Digital Solutions ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our digital 
              Hall of Fame solutions.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when you contact us or sign up for our services.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services, including IP address, browser type, pages visited, and time spent on our site.</li>
              <li><strong>Content Information:</strong> Any content you upload to our digital Hall of Fame platforms, including images, videos, and biographical information.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing and fulfilling your requests</li>
              <li>Communicating with you about our services, updates, and promotions</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Protecting against unauthorized access and fraud</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, 
              and we cannot guarantee absolute security.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
            <p>
              We may use third-party services to help us operate our website and provide our services. These third parties may have access to your 
              personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The right to access the personal information we have about you</li>
              <li>The right to request correction or deletion of your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section below.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
              and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> privacy@touchstone-ds.com<br />
              <strong>Phone:</strong> (603) 361-7541<br />
              <strong>Address:</strong> Touchstone Digital Solutions, 123 Innovation Way, Suite 400, Boston, MA 02110
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
