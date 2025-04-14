import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Container } from '@/components/ui/container';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Terms of Service | Touchstone Digital Solutions</title>
        <meta name="description" content="Read Touchstone Digital Solutions' terms of service to understand the rules and regulations governing the use of our services." />
        <link rel="canonical" href={`${window.location.origin}/terms/`} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Terms of Service | Touchstone Digital Solutions" />
        <meta property="og:description" content="Read Touchstone Digital Solutions' terms of service to understand the rules and regulations governing the use of our services." />
        <meta property="og:url" content={`${window.location.origin}/terms/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${window.location.origin}/og-image.jpg`} />
        <meta property="og:site_name" content="Touchstone Digital Solutions" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@touchstone_ds" />
        <meta name="twitter:title" content="Terms of Service | Touchstone Digital Solutions" />
        <meta name="twitter:description" content="Read Touchstone Digital Solutions' terms of service to understand the rules and regulations governing the use of our services." />
        <meta name="twitter:image" content={`${window.location.origin}/og-image.jpg`} />
      </Helmet>
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
        {/* Background with animated gradient */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
        
        {/* Decorative elements - hidden on small screens */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/10 hidden sm:block"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500/10 hidden sm:block"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text text-gradient-purple-blue">
                Terms of
              </span>
              <span className="text-foreground"> Service</span>
            </motion.h1>
            
            <motion.div
              className="relative mb-4 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-6 max-w-3xl mx-auto">
                Last Updated: March 27, 2025
              </p>
              
              {/* Decorative line */}
              <motion.div 
                className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>
          </div>
        </Container>
      </section>
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <p>
              Welcome to Touchstone Digital Solutions, managed by Touchstone Digital Solutions LLC. By accessing our website at Touchstone-ds.com, any other domains directly owned and managed by Touchstone Digital Solutions, the corresponding mobile site, and the mobile app (together referred to as the "Websites"), you consent to abide by these Terms of Service (referred to herein as "Terms of Service" or "Agreement"). This agreement applies whether you are just visiting or if you register as a member of Touchstone Digital Solutions ("Member"). Should you decide to register as a Member and engage with our services (the "Service"), you need to review and agree to this Agreement. Should any part of this Agreement or the Touchstone Digital Solutions Privacy Policy be unacceptable to you, you should refrain from using the Service.
            </p>
            <p className="my-6">
              This Agreement is dynamic and may be updated by Touchstone Digital Solutions at any time, with changes taking effect immediately upon their posting on the site. Your ongoing use of the Websites and Service after any amendments signifies your definite acceptance of and agreement to the updated terms.
            </p>
            <p className="font-bold text-purple-300">
              Important Note: Please review this Agreement carefully, as it outlines your legal rights, remedies, and obligations, including various limitations and exclusions, and a clause that stipulates the resolution process for disputes.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Electronic Agreement</h2>
            <p className="mb-4">
              This document is a digital contract that outlines the legally binding terms of your engagement with the Websites and the Service. Touchstone Digital Solutions may update this Agreement periodically, with all changes becoming effective immediately upon their publication on the Websites. By using the Websites or registering as a Member, you acknowledge and agree to this Agreement and the stipulated terms and conditions.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-4">1. Access and Retention</h3>
            <p className="mb-4">
              To access and retain this digital Agreement, you need internet access, either directly or through devices that enable web content access, and you must cover any associated service costs. Additionally, you need all necessary equipment to connect to the internet, such as a computer and modem or other access device. We advise you to print this document for your records. For an electronic copy, you can save it to any word processing software.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-4">2. Commercial Use of Service</h3>
            <p className="mb-4">
              If you utilize the Service or access the Websites on behalf of a business, entity, or organization (collectively, “Subscribing Entity”), you certify that:
            </p>
            <ol className="list-decimal pl-8 mb-4">
              <li className="mb-2">You are an authorized representative of the Subscribing Entity with the power to bind it to these Terms of Service;</li>
              <li className="mb-2">You have understood these Terms of Service; and</li>
              <li className="mb-2">You accept these Terms of Service on behalf of the Subscribing Entity.</li>
            </ol>
            <p className="mb-4">
              Unauthorized or illegal use of the Websites includes, but is not limited to, browsing or downloading unlawful content, harvesting usernames and/or email addresses of members for sending unsolicited email, unauthorized linking to or framing of the Websites, sharing or disclosing your login credentials with a third party or allowing a third party to access your account, impersonating another user or individual, using the Websites in any deceptive or fraudulent manner, automated interactions with the system such as scraping, using bots, spiders, crawlers, data mining tools, or similar automated tools, disrupting, or burdening the Websites or the networks or services connected to the Websites, and using the Websites in a way that violates any applicable laws and regulations. Any illegal or unauthorized use of the Websites is subject to investigation and appropriate legal action may be taken, including but not limited to civil, criminal, and injunctive redress. Usage of the Websites and Service is permitted by Touchstone Digital Solutions and can be revoked at any moment, for any reason, at the sole discretion of Touchstone Digital Solutions.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-4">3. Account Security</h3>
            <p className="mb-4">
              You are responsible for maintaining the secrecy of the username and password you set during the registration process, and you are solely accountable for all activities that occur under your account. You must (a) immediately inform Touchstone Digital Solutions of any unauthorized use of your login details or any other security breach, and (b) ensure you log out from your account at the end of each session. Touchstone Digital Solutions is not liable for any loss or damage resulting from your failure to protect your login information. Exercise caution when accessing your account from a public or shared computer to prevent others from viewing or recording your password or personal information. If your computer is shared with others, you might consider deactivating any auto-login features that are connected to your Touchstone Digital Solutions account.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-4">4. Prohibited Activities:</h3>
            <ol className="list-decimal pl-8 mb-4">
              <li className="mb-2">
                <strong>Illegal Content:</strong> Accessing or downloading any illegal content is strictly prohibited.
              </li>
              <li className="mb-2">
                <strong>Content Ownership:</strong> You must not copy, capture, or otherwise appropriate any content from the Websites without explicit permission from Touchstone Digital Solutions.
              </li>
              <li className="mb-2">
                <strong>Content Usage Restrictions:</strong> Do not copy, republish, adapt, or publicly share any Content from the Websites, except your own created content or as explicitly allowed under these Terms of Service and by the original uploader (e.g., respecting Creative Commons licenses).
              </li>
              <li className="mb-2">
                <strong>No Creation of Parallel Content Services:</strong> You are forbidden from using any Content in a way that mimics or competes with our offerings.
              </li>
              <li className="mb-2">
                <strong>Data Harvesting Prohibited:</strong> The use of scraping, bots, or similar technologies to collect or repurpose Content is not permitted.
              </li>
              <li className="mb-2">
                <strong>Automated Interactions:</strong> Automated methods to interact with the Websites, such as registering accounts, posting comments, or logging in, particularly repetitively or in bulk, are prohibited. Offering or promoting these methods to others is also banned.
              </li>
              <li className="mb-2">
                <strong>Intellectual Property Respect:</strong> You must not alter, remove, or attempt to bypass any copyright, trademark, or other proprietary notices on the Websites or Content.
              </li>
              <li className="mb-2">
                <strong>Software Integrity and Security:</strong>
                <ul className="list-disc pl-8 mt-2">
                  <li>Do not engage in reverse engineering, decompiling, or otherwise manipulating the Websites' software.</li>
                  <li>Avoid bypassing or attempting to bypass any form of copy protection or rights management on the Websites.</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Prohibited Content:</strong> You must not use the Websites to share or promote:
                <ul className="list-disc pl-8 mt-2">
                  <li>Offensive, harmful, or illegal content including abusive, libelous, defamatory, obscene, racist, sexually explicit, or culturally insensitive material.</li>
                  <li>Content that infringes on the rights of others, including privacy, publicity, and intellectual property rights.</li>
                  <li>Any form of malware or software that could damage, interfere with, or excessively burden the Websites or its users' experience.</li>
                  <li>Unsolicited or unauthorized advertising or promotional materials (spam).</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Legal and Ethical Conduct:</strong>
                <ul className="list-disc pl-8 mt-2">
                  <li>Engage only in lawful activities and refrain from any actions that could result in criminal charges or civil liabilities.</li>
                  <li>Do not rent, sell, or lease access to any part of the Websites or its Content, except through allowed integrations where users can legally purchase Your Content.</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Impersonation and Fraud:</strong> Avoid misrepresenting your identity or affiliations, especially by impersonating others or registering under a false name.
              </li>
              <li className="mb-2">
                <strong>Respect and Safety:</strong>
                <ul className="list-disc pl-8 mt-2">
                  <li>Do not harass, threaten, or abuse other users or employees of Touchstone Digital Solutions. Offensive behavior towards staff may lead to immediate termination of your membership without a refund.</li>
                  <li>You are prohibited from selling or transferring your account without written permission from Touchstone Digital Solutions.</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Privacy and Data Collection:</strong> Collecting data on other users without their consent or through unauthorized methods like scraping is forbidden.
              </li>
              <li className="mb-2">
                <strong>System Integrity:</strong> Do not attempt to breach, bypass, or test the security measures of the Websites, including hacking, submitting viruses, or overwhelming the system (e.g., mail-bombing or crashing).
              </li>
              <li className="mb-2">
                <strong>Compliance and Enforcement:</strong> You agree to adhere to these conditions and acknowledge that Touchstone Digital Solutions retains the right to terminate your access or take other appropriate actions if you violate these terms or engage in any prohibited activities. This may include legal action and cooperation with law enforcement authorities.
              </li>
            </ol>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mt-6 mb-4">5. Representations and Warranties</h3>
            <p className="mb-4">
              You affirm and guarantee to Touchstone Digital Solutions the following:
            </p>
            <ol className="list-decimal pl-8 mb-4">
              <li className="mb-2">
                <strong>Originality and Permissions:</strong> Your Content is originally created by you, or you have secured all necessary rights, licenses, consents, and permissions needed to use and, where applicable, to allow Touchstone Digital Solutions to utilize Your Content under these Terms of Service. This includes the rights for uploading, reproducing, storing, transmitting, distributing, displaying publicly, performing publicly, and other forms of public communication of Your Content across the Websites and through any third-party services.
              </li>
              <li className="mb-2">
                <strong>Non-infringement of Rights:</strong> Your Content does not and will not infringe or violate any third-party rights, including intellectual property rights, privacy, publicity, or confidential information.
              </li>
              <li className="mb-2">
                <strong>Consents from Featured Parties:</strong> You have obtained necessary consents, permissions, and/or releases from all persons who appear in Your Content to use their names, voices, performances, or likenesses, and to publish them on the Websites and any third-party services.
              </li>
              <li className="mb-2">
                <strong>Content Integrity:</strong> Your Content and any related comments posted on the Websites will not be unlawful, harmful, libelous, obscene, or promote illegal activities, nor will they incite hatred based on race, gender, religion, or sexual orientation.
              </li>
              <li className="mb-2">
                <strong>Liability:</strong> Your Content will not expose Touchstone Digital Solutions or its related entities to any liability. Touchstone Digital Solutions retains the authority to remove Your Content, suspend or terminate your access, and pursue legal actions if Your Content is found to breach these warranties or infringe on others' rights or the law.
              </li>
            </ol>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mt-6 mb-4">6. Term</h3>
            <p className="mb-4">
              This Agreement remains effective as long as you utilize the Websites and/or Service. You can terminate your membership or subscription anytime by contacting info@touchstone-ds.com. Upon cancellation, you may be asked to provide reasons for your decision to aid in service improvement. Touchstone Digital Solutions may terminate your membership for any reason, notifying you via your registered email. Termination due to breach of this Agreement will lead to forfeiture of any prepaid fees. Decisions on account terminations are at Touchstone Digital Solutions' discretion and may occur without prior notice or disclosed reason. Terms that inherently should survive termination will remain in force post-termination.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mt-6 mb-4">7. Modifications to Service</h3>
            <p className="mb-4">
              Touchstone Digital Solutions reserves the right to modify or cease the Service or any part thereof at any time with or without notice. You acknowledge that Touchstone Digital Solutions is not liable for any service changes that might affect you or any third party.
            </p>
            <h4 className="text-lg font-bold mt-4 mb-2">a. Agreement Length for Special Purchases</h4>
            <p className="mb-4">
              In the case of "Lifetime Agreements" and "One-time" purchases, the Service is provided "as is" and may be subject to changes, including discontinuations or modifications in updates, customer support, and usage rights, without notice. Touchstone Digital Solutions may choose to provide updates and customer support at its discretion to maintain customer satisfaction, uphold its brand reputation, and encourage new referrals.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mt-6 mb-4">8. Blocking of IP Addresses</h3>
            <p className="mb-4">
              To maintain the security and integrity of the Services, Touchstone Digital Solutions has the authority to block users from certain IP addresses from accessing the Websites at its discretion. This measure is crucial for preventing abuse and ensuring the smooth operation of our services, especially to mitigate risks associated with malicious activities and to enforce our terms of use.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">9. Content</h3>
            <h4 className="text-lg font-bold mt-4 mb-2">a. Proprietary Rights</h4>
            <p className="mb-4">
              Touchstone Digital Solutions exclusively owns all rights to the intellectual property displayed on the Websites and provided through the Service. This includes all copyrighted materials, trademarks, and proprietary information owned by Touchstone Digital Solutions and its licensors. Users are strictly prohibited from copying, modifying, publishing, transmitting, distributing, performing, displaying, or selling any such proprietary information without explicit, written permission from us. Each piece of content hosted on our platforms is intended solely for the personal use of our Members and must not be distributed outside these confines without authorization. Should these terms be violated, Touchstone Digital Solutions is entitled to pursue legal remedies including immediate injunctions without the necessity of a bond, to prevent further breaches and protect its intellectual property.
            </p>
            <h4 className="text-lg font-bold mt-4 mb-2">b. Third-Party Content</h4>
            <p className="mb-4">
              The Websites may feature links to external sites and include content that belongs to or is sourced from third parties. Touchstone Digital Solutions does not endorse and is not responsible for the content of these third-party sites, which are governed by their own terms of service and privacy policies. Users are encouraged to review the third-party terms and policies before engaging with such sites.
            </p>
            <h4 className="text-lg font-bold mt-4 mb-2">c. Ownership of Your Content; Licenses</h4>
            <p className="mb-4">
              When you upload content to our Websites, it becomes property of Touchstone Digital Solutions, although you retain joint ownership which allows for its use with other services or for your internal purposes. Notwithstanding this arrangement, we grant you a global, royalty-free, and non-exclusive license to use, distribute, reproduce, and display such content. This approach ensures that while Touchstone Digital Solutions can utilize the content for its business purposes, you retain sufficient rights for personal use and sharing under defined conditions.
            </p>
            <h4 className="text-lg font-bold mt-4 mb-2">Rights in Other Content</h4>
            <p className="mb-4">
              Content uploaded by other users remains under their ownership and is protected under copyright, trademark, and other intellectual property laws. You are prohibited from using, downloading, reproducing, or distributing this content unless facilitated through the specific features provided by the Websites and within the limits set by the content uploader or through direct permission from the uploader. This strict policy helps protect the rights of content creators and ensures that their intellectual property is not misused or exploited without consent.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">10. Restrictions on Use of Materials</h3>
            <p className="mb-4">
              The intellectual property featured on Touchstone Digital Solutions' Websites, including images, text, and other materials, is protected under United States copyright laws and international agreements. These materials are the sole property of Touchstone Digital Solutions and are validly protected in all existing and future media and technologies. Unauthorized modification, publication, transmission, distribution, performance, participation in the transfer or sale, creation of derivative works, or any exploitation of this intellectual property, in whole or in part, is strictly forbidden unless prior written consent has been obtained from Touchstone Digital Solutions.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">11. Copyright Policy</h3>
            <p className="mb-4">
              Touchstone Digital Solutions actively prohibits the submission or posting of any content that infringes upon or violates the copyright or other intellectual property rights of any person or entity. Should you believe that your copyright or intellectual property rights have been infringed upon by any content on the Site, please send a notification of claimed infringement to our designated address.
            </p>
            {/* POBOX ADDRESS HERE */}
            {/* <p className="mb-4">
              8 Powder Hill Road Bedford, NH 03110
            </p> */}
            <p className="mb-4">
              Your notification should include clear identification of the copyrighted work or intellectual property right claimed to be infringed, a description of the infringing material, and your contact details. We will process and respond to notices of alleged infringement in accordance with the Digital Millennium Copyright Act (DMCA) and applicable laws. Penalties for false claims are severe.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">12. Liability for Content</h3>
            <p className="mb-4">
              Touchstone Digital Solutions acts only as a passive conduit for content uploaded by users and does not actively monitor or control user submissions. Consequently, we do not assume liability for activities related to such user-generated content. Users are responsible for the content they upload and should ensure it does not violate any laws or third-party rights. We disclaim all liability with respect to the user content, which includes but is not limited to claims for copyright infringement, rights of privacy or publicity, or defamation. Users agree to release Touchstone Digital Solutions from any claims related to the activities of its users concerning such content. By using the Websites, users irrevocably agree not to assert any such claims against Touchstone Digital Solutions or its affiliates.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">13. Repeat Infringers</h3>
            <p className="mb-4">
              Touchstone Digital Solutions takes intellectual property rights seriously and will suspend or terminate access to the Websites for users who repeatedly infringe these rights. If it is determined, in our sole and reasonable discretion, that you have continuously breached these Terms of Service, particularly through copyright infringement, we will take action. Upon receiving a valid notification from a third party, or if we observe that your behavior consistently violates our terms, you will receive a written warning. Any user accumulating more than two warnings will face immediate termination of their access. Furthermore, we reserve the right to suspend or terminate accounts immediately upon judicial orders or under circumstances that, in our discretion, necessitate such action. Please note that no refunds will be provided for memberships terminated due to repeated infringements.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">14. Limitation of Liability</h3>
            <p className="mb-4">
              In no event will Touchstone Digital Solutions be liable for any type of damages arising from your use of our Websites or Services. This includes direct, indirect, general, special, compensatory, consequential, and incidental damages. Our communications, whether written or oral, will not constitute any warranty that may contradict the limitations stated in this section. The services and content on the Websites are provided on an "as is" basis without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. Touchstone Digital Solutions does not guarantee the accuracy, completeness, or usefulness of any content, nor does it warrant that the Websites will operate uninterrupted, secure, or free from errors or viruses. By using the Websites and Services, you acknowledge and agree that your use is solely at your risk.
            </p>
            <p className="mb-4">
              Furthermore, Touchstone Digital Solutions, along with its officers, employees, and agents, will not be liable for any damages that directly or indirectly result from your use of, or inability to use, the Websites or Services, including those from viruses alleged to have been obtained from the Websites, regardless of the type of claim or the nature of the cause of action, even if you have advised us of the possibility of such damages. If, for any reason, we are found liable for any harm arising from your use of our Websites or Services, our liability shall not exceed the greater of $500.00 or the amount you have paid us in the six months prior to the action giving rise to the liability.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">15. Indemnity by You</h3>
            <p className="mb-4">
              You agree to indemnify and hold harmless Touchstone Digital Solutions and its affiliates from any claims, liabilities, losses, or expenses, including reasonable attorneys' fees, arising from or related to your improper use of the Websites and Services, or any violation of these Terms. This includes legal responsibility for your content, especially if your content infringes on intellectual property rights or involves privacy violations that lead to third-party claims. You are also responsible for any activities that occur under your account, whether you have authorized such activities or not, unless these actions were directly caused by Touchstone Digital Solutions.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">16. Attorney Fees</h3>
            <p className="mb-4">
              If Touchstone Digital Solutions is involved in legal proceedings related to or arising from this Agreement and is successful, you will be responsible for paying all of our reasonable attorneys' fees and legal costs.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">17. Parental or Guardian Permission</h3>
            <p className="mb-4">
              Some content on the Websites may not be suitable for children under the age of 17. We require that children under this age use the service only in the presence of a parent or guardian who agrees to be bound by these Terms of Service.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">18. Privacy</h3>
            <p className="mb-4">
              Your use of the Websites and Services is also subject to our Privacy Policy, which is incorporated by reference into these Terms of Service. The Privacy Policy is available on the Touchstone Digital Solutions website.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">19. Jurisdiction and Choice of Law; Dispute Resolution</h3>
            <p className="mb-4">
              All disputes arising out of or related to your use of the Websites or Services will be governed by the laws of the State of Delaware, without regard to conflicts of law principles. Any disputes will be subject to the exclusive jurisdiction and venue of the state and federal courts in New York. By agreeing to these Terms, you waive any jurisdictional, venue, or inconvenient forum objections to such courts. In case of a dispute, you also agree to accept service of process by mail and acknowledge that any notice given by mail will be deemed adequate and sufficient.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">20. Arbitration Provision/No Class Action</h3>
            <p className="mb-4">
              You agree to resolve any disputes through individual arbitration, barring any class action suits. This arbitration, to be conducted under the American Arbitration Association's rules, will be held in Delaware and will be binding, with the arbitrator's decision enforceable in court. You also agree to split the costs of arbitration with Touchstone Digital Solutions.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">21. No Third Party Beneficiaries</h3>
            <p className="mb-4">
              This Agreement is between you and Touchstone Digital Solutions; there are no third-party beneficiaries.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">22. Availability Outside the U.S.</h3>
            <p className="mb-4">
              Access to the Websites from locations outside the United States is at your own risk and you are responsible for compliance with local laws. Any personal information you submit will be processed in the United States or other locations as chosen by us.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">23. Entire Agreement</h3>
            <p className="mb-4">
              This Agreement constitutes the complete agreement between you and Touchstone Digital Solutions regarding your use of the Websites and Services.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">24. Severability; Waiver</h3>
            <p className="mb-4">
              If any provision of this Agreement is found invalid by any court, the remaining provisions will continue to be valid and enforceable. Any failure by Touchstone Digital Solutions to enforce a provision of this Agreement does not waive its right to do so later.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">25. Headings</h3>
            <p className="mb-4">
              The headings in this Agreement are for reference only and do not affect the interpretation of this document.
            </p>
          </section>
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <p className="mb-4 text-center font-bold">
              I HAVE CAREFULLY READ AND FULLY AGREE TO ALL THE PROVISIONS OUTLINED IN THIS AGREEMENT.
            </p>
            <p className="mb-4 text-center">
              Please do not hesitate to reach out if you have any questions about the Terms of Service.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;