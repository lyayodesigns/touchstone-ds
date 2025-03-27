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
          <p className="text-gray-400 mb-8">Last Updated: March 27, 2025</p>
          
          <section className="mb-8">
            <p>
              At Touchstone Digital Solutions LLC ("we", "us", "our"), we prioritize the privacy and security of our users' ("you", "your") personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information as you interact with our websites (touchstone-ds.com), associated mobile website, and mobile application (collectively, the "Websites"), as well as the services provided therein (the "Service").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of the Policy</h2>
            <p>
              By accessing and using the Websites and the Service, you acknowledge and consent to the collection, use, and disclosure of your personal information in accordance with this Privacy Policy. If you do not agree with any aspect of this policy, please discontinue use of our Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Privacy Practices Overview</h2>
            <p>This document covers:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The types of information we collect and the purposes for collecting it</li>
              <li>How we use the information we gather</li>
              <li>Our policies on sharing and disclosing information</li>
              <li>Your choices regarding personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
            <p><strong>Personally Identifiable Information:</strong></p>
            <p>We may request personally identifiable information when you use our Service, which could include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your name</li>
              <li>Contact details such as your address and email</li>
              <li>Your IP address</li>
              <li>Other pertinent personal details</li>
            </ul>
            <p><strong>Non-Personal or Aggregate Information:</strong></p>
            <p>Our Service automatically collects non-personal information about your visit, such as:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>IP host address</li>
              <li>Pages you view on our site</li>
              <li>Browser type and operating system</li>
              <li>Source of referral and search terms used</li>
              <li>Device type and page interactions</li>
              <li>General usage and browsing habits</li>
            </ul>
            <p>
              We may also compile demographic and aggregate data from our users in a way that does not personally identify anyone. This includes information gathered offline and from third-party sources that is anonymized or aggregated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Use</h2>
            <p>We use your personally identifiable information specifically for the purposes outlined here, unless you explicitly consent to other uses:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To provide and improve the Service</li>
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>To send updates about our services, ensuring that your information is not used for third-party direct marketing without your consent</li>
              <li>To collaborate with Third Party Vendors solely related to the provision of the Service</li>
              <li>To comply with legal obligations and protect our rights and those of our users</li>
              <li>In the event of a business transfer, such as a sale or merger</li>
              <li>To share information with affiliates under the condition that they adhere to similar privacy practices</li>
            </ul>
            <p>Non-personally identifiable information may be freely used and shared for any legal purposes, provided it does not specifically identify you.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Similar Technologies</h2>
            <p>
              We employ cookies and similar technologies to facilitate interactions with the Service, customize your experience, and for other purposes such as analytics and marketing. You can manage the use of these technologies through your browser settings, although this may affect some functionalities of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Analytics and Conversion Tracking</h2>
            <p>
              We utilize advanced analytics and conversion tracking technologies to understand how our Service is used. This involves collecting and analyzing data related to your interactions, processed and stored by our analytics providers to generate usage reports and improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Automatically Collected Information</h2>
            <p>
              Each interaction with our Service or our emails may automatically gather data through cookies and tracking technologies. This includes your IP address, browser specifications, the content and pages you engage with, and metrics related to your interactions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Security Measures</h2>
            <p>
              We take serious measures to protect your personally identifiable information but acknowledge the inherent risks of data breaches in the online environment. We employ robust physical, electronic, and managerial safeguards to protect your data, and limit access to personnel who need it to perform their duties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Disclosures in Digital and Social Media Platforms</h2>
            <p>
              Please exercise caution when disclosing personal information in public or digital forums, as this information can be viewed and used by others. We have limited control over information shared in public spaces.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Child Protection Policy</h2>
            <p>
              We do not knowingly collect personal information from children under 13 and comply with the Children’s Online Privacy Protection Act (COPPA). If we become aware of such collection without parental consent, we will take steps to remove the information promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">External Links and Third-Party Services</h2>
            <p>
              Our Service may include links to third-party services, which operate under their own privacy policies. We encourage you to review their policies before engaging with these services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Amendments to This Privacy Policy</h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. Significant changes will be notified within the Service, and by continuing to use the Service after such changes, you accept the revised policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Control and Opt-Out Rights</h2>
            <p>
              You may opt-out of our communications at any time using the "unsubscribe" link in emails. We cannot remove your information from third-party databases but encourage direct contact with these parties if necessary.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Storage and Transfer</h2>
            <p>
              Your information may be stored and processed in the United States or other countries, and by using our Service, you consent to this transfer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of Delaware, and by using our Services, you consent to the jurisdiction of Delaware courts for any disputes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>
              For questions or concerns about this policy, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> support@touchstone-ds.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Effective Date</h2>
            <p>
              This Privacy Policy is effective as of May 1, 2024.
            </p>
          </section>

          <section className="mb-8">
            <p>
              By using our Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
            <p>
              Please do not hesitate to reach out if you have any questions on this document.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;