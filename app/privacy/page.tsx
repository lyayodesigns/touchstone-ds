// Server component: No React, no useEffect, no Framer Motion, no Head import.
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Container } from '../../components/ui/container';

export const metadata = {
  title: 'Privacy Policy | Touchstone Digital Solutions',
  description: "Read Touchstone Digital Solutions' privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: 'https://touchstone-ds.com/privacy/'
  },
  openGraph: {
    title: 'Privacy Policy | Touchstone Digital Solutions',
    description: "Read Touchstone Digital Solutions' privacy policy to understand how we collect, use, and protect your personal information.",
    url: 'https://touchstone-ds.com/privacy/',
    type: 'website',
    images: ['https://touchstone-ds.com/og-image.jpg'],
    siteName: 'Touchstone Digital Solutions'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@touchstone_ds',
    title: 'Privacy Policy | Touchstone Digital Solutions',
    description: "Read Touchstone Digital Solutions' privacy policy to understand how we collect, use, and protect your personal information.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

const Privacy = () => {

  return (
    <div className="min-h-screen bg-background text-foreground">

      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[50svh] w-full flex flex-col items-center justify-center overflow-hidden pt-2 pb-1 sm:pt-4 sm:pb-3 md:pt-24 md:pb-6"
        style={{
          backgroundImage: "url('/hero-bg-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
        {/* Background gradient (static, no animation) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent"></div>
        {/* Decorative elements - static, no animation */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/10 hidden sm:block"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500/10 hidden sm:block"></div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              <span className="text-transparent bg-clip-text text-gradient-purple-blue">
                Privacy
              </span>
              <span className="text-foreground"> Policy</span>
            </h1>
            
            <div className="relative mb-4 md:mb-8">
              <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-6 max-w-3xl mx-auto">
                Last Updated: March 27, 2025
              </p>
              {/* Decorative line (static) */}
              <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>
          </div>
        </Container>
      </section>
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <p className="mb-4">
              At <a href="https://touchstone-ds.com/about/" className="text-blue-400 hover:text-blue-300 underline">Touchstone Digital Solutions LLC</a> ("we", "us", "our"), we prioritize the privacy and security of our users' ("you", "your") personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information as you interact with our <a href="https://touchstone-ds.com" className="text-blue-400 hover:text-blue-300 underline">websites</a> (touchstone-ds.com), associated mobile website, and mobile application (collectively, the "Websites"), as well as the services provided therein (the "Service").
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of the Policy</h2>
            <p className="mb-4">
              By accessing and using the Websites and the Service, you acknowledge and consent to the collection, use, and disclosure of your personal information in accordance with this Privacy Policy. If you do not agree with any aspect of this policy, please discontinue use of our Services. For more information about how we use your data with our products, please review our <a href="https://touchstone-ds.com/terms/" className="text-blue-400 hover:text-blue-300 underline">Terms of Service</a>.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Privacy Practices Overview</h2>
            <p className="mb-4">This document covers:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The types of information we collect and the purposes for collecting it</li>
              <li>How we use the information we gather</li>
              <li>Our policies on sharing and disclosing information</li>
              <li>Your choices regarding personal information</li>
            </ul>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10" id="information-collection">
            <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
            
            <h3 className="text-xl font-semibold mb-3">Personally Identifiable Information:</h3>
            <p className="mb-4">
              We may request personally identifiable information when you use our Service, which could include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your name</li>
              <li>Contact details such as your address and email</li>
              <li>Your IP address</li>
              <li>Other pertinent personal details</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Non-Personal or Aggregate Information:</h3>
            <p className="mb-4">
              Our Service automatically collects non-personal information about your visit, such as:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>IP host address</li>
              <li>Pages you view on our site</li>
              <li>Browser type and operating system</li>
              <li>Source of referral and search terms used</li>
              <li>Device type and page interactions</li>
              <li>General usage and browsing habits</li>
            </ul>
            <p className="mb-4">
              We may also compile demographic and aggregate data from our users in a way that does not personally identify anyone. This includes information gathered offline and from third-party sources that is anonymized or aggregated.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Information Use</h2>
            <p className="mb-4">
              We use your personally identifiable information specifically for the purposes outlined here, unless you explicitly consent to other uses:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To provide and improve the Service</li>
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>To send updates about our services, ensuring that your information is not used for third-party direct marketing without your consent</li>
              <li>To collaborate with Third Party Vendors solely related to the provision of the Service</li>
              <li>To comply with legal obligations and protect our rights and those of our users</li>
              <li>In the event of a business transfer, such as a sale or merger</li>
              <li>To share information with affiliates under the condition that they adhere to similar privacy practices</li>
            </ul>
            <p className="mb-4">
              Non-personally identifiable information may be freely used and shared for any legal purposes, provided it does not specifically identify you.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Similar Technologies</h2>
            <p className="mb-4">
              We employ cookies and similar technologies to facilitate interactions with the Service, customize your experience, and for other purposes such as analytics and marketing. You can manage the use of these technologies through your browser settings, although this may affect some functionalities of the Service.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Analytics and Conversion Tracking</h2>
            <p className="mb-4">
              We utilize advanced analytics and conversion tracking technologies to understand how our Service is used. This involves collecting and analyzing data related to your interactions, processed and stored by our analytics providers to generate usage reports and improve our services.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Automatically Collected Information</h2>
            <p className="mb-4">
              Each interaction with our Service or our emails may automatically gather data through cookies and tracking technologies. This includes your IP address, browser specifications, the content and pages you engage with, and metrics related to your interactions.
            </p>
          </section>

          <section id="security-measures" className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4">Security Measures</h2>
            <p className="mb-4">
              We take serious measures to protect your personally identifiable information but acknowledge the inherent risks of data breaches in the online environment. We employ robust physical, electronic, and managerial safeguards to protect your data, and limit access to personnel who need it to perform their duties.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">User Disclosures in Digital and Social Media Platforms</h2>
            <p className="mb-4">
              Please exercise caution when disclosing personal information in public or digital forums, as this information can be viewed and used by others. We have limited control over information shared in public spaces.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Child Protection Policy</h2>
            <p className="mb-4">
              We do not knowingly collect personal information from children under 13 and comply with the Children's Online Privacy Protection Act (COPPA). If we become aware of such collection without parental consent, we will take steps to remove the information promptly. Learn more about our <a href="https://touchstone-ds.com/features/" className="text-blue-400 hover:text-blue-300 underline">features</a> designed for educational institutions.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">External Links and Third-Party Services</h2>
            <p className="mb-4">
              Our Service may include links to third-party services, which operate under their own privacy policies. We encourage you to review their policies before engaging with these services. For the latest updates from our team, check our <a href="https://touchstone-ds.com/blog/" className="text-blue-400 hover:text-blue-300 underline">blog</a>.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Amendments to This Privacy Policy</h2>
            <p className="mb-4">
              We reserve the right to modify this Privacy Policy at any time. Significant changes will be notified within the Service, and by continuing to use the Service after such changes, you accept the revised policy.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">User Control and Opt-Out Rights</h2>
            <p className="mb-4">
              You may opt-out of our communications at any time using the "unsubscribe" link in emails. We cannot remove your information from third-party databases but encourage direct contact with these parties if necessary.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Data Storage and Transfer</h2>
            <p className="mb-4">
              Your information may be stored and processed in the United States or other countries, and by using our Service, you consent to this transfer.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="mb-4">
              This Privacy Policy is governed by the laws of Delaware, and by using our Services, you consent to the jurisdiction of Delaware courts for any disputes.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4">
              For questions or concerns about this policy, please <a href="https://touchstone-ds.com/contact/" className="text-blue-400 hover:text-blue-300 underline">contact us</a> at support@touchstone-ds.com.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Effective Date</h2>
            <p className="mb-4">
              This Privacy Policy is effective as of May 1, 2024.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <p className="mb-4">
              By using our Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
            <p className="mb-4">
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