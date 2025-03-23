import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">Last Updated: March 23, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you and Touchstone Digital Solutions 
              ("we," "us," or "our"), concerning your access to and use of our website and digital Hall of Fame solutions. 
              By accessing or using our services, you agree to be bound by these Terms and Conditions.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p className="mb-4">
              Touchstone Digital Solutions provides interactive digital Hall of Fame solutions for schools, teams, and communities. 
              Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Digital display solutions for halls of fame</li>
              <li>Content management systems for organizing and presenting honoree information</li>
              <li>Interactive kiosk software</li>
              <li>Mobile applications for accessing hall of fame content</li>
              <li>Technical support and maintenance</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide accurate, complete, and current information. You are responsible for 
              safeguarding your account credentials and for any activities or actions under your account. You agree to notify us immediately 
              of any unauthorized use of your account.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              The content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, 
              images, audio clips, and software, are owned by Touchstone Digital Solutions and are protected by United States and 
              international copyright, trademark, patent, and other intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable, and revocable license to access and use our services for 
              their intended purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly 
              perform, republish, download, store, or transmit any of our materials without our express written consent.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
            <p className="mb-4">
              You retain all rights to any content you submit, post, or display on or through our services ("User Content"). By providing 
              User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, 
              translate, and distribute your User Content in connection with providing our services.
            </p>
            <p>
              You represent and warrant that your User Content does not violate any third-party rights, including copyright, trademark, 
              privacy, personality, or other personal or proprietary rights, and that your User Content does not contain material that is 
              unlawful, defamatory, or otherwise objectionable.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Prohibited Uses</h2>
            <p className="mb-4">You agree not to use our services:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
              <li>To impersonate or attempt to impersonate Touchstone Digital Solutions, our employees, another user, or any other person or entity</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of our services, or which may harm Touchstone Digital Solutions or users of our services</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p>
              We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any 
              reason whatsoever, including without limitation if you breach these Terms and Conditions. Upon termination, your right to use 
              our services will immediately cease.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
            <p>
              Our services are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. 
              We do not warrant that our services will be uninterrupted, timely, secure, or error-free, or that defects will be corrected.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p>
              In no event shall Touchstone Digital Solutions, its directors, employees, partners, agents, suppliers, or affiliates be liable 
              for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, 
              use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Massachusetts, 
              without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms 
              and Conditions shall be exclusively brought in the federal or state courts located in Suffolk County, Massachusetts.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms and Conditions at any time. If a revision is material, we will provide 
              at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our 
              sole discretion.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> legal@touchstone-ds.com<br />
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

export default Terms;
