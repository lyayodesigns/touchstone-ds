import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">Last Updated: March 27, 2025</p>
          
          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <p>
              Welcome to Touchstone Digital Solutions, managed by Touchstone Digital Solutions LLC, located at 8 Powder Hill Road Bedford, NH 03110. By accessing our website at Touchstone-ds.com, any other domains directly owned and managed by Touchstone Digital Solutions, the corresponding mobile site, and the mobile app (together referred to as the “Websites”), you consent to abide by these Terms of Service (referred to herein as "Terms of Service" or "Agreement"). This agreement applies whether you are just visiting or if you register as a member of Touchstone Digital Solutions ("Member"). Should you decide to register as a Member and engage with our services (the “Service”), you need to review and agree to this Agreement. Should any part of this Agreement or the Touchstone Digital Solutions Privacy Policy be unacceptable to you, you should refrain from using the Service.
            </p>
            <p>
              This Agreement is dynamic and may be updated by Touchstone Digital Solutions at any time, with changes taking effect immediately upon their posting on the site. Your ongoing use of the Websites and Service after any amendments signifies your definite acceptance of and agreement to the updated terms.
            </p>
            <p className="font-bold text-purple-300">
              Important Note: Please review this Agreement carefully, as it outlines your legal rights, remedies, and obligations, including various limitations and exclusions, and a clause that stipulates the resolution process for disputes.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Electronic Agreement</h2>
            <p>
              This document is a digital contract that outlines the legally binding terms of your engagement with the Websites and the Service. Touchstone Digital Solutions may update this Agreement periodically, with all changes becoming effective immediately upon their publication on the Websites. By using the Websites or registering as a Member, you acknowledge and agree to this Agreement and the stipulated terms and conditions.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">1. Access and Retention</h2>
            <p>
              To access and retain this digital Agreement, you need internet access, either directly or through devices that enable web content access, and you must cover any associated service costs. Additionally, you need all necessary equipment to connect to the internet, such as a computer and modem or other access device. We advise you to print this document for your records. For an electronic copy, you can save it to any word processing software.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">2. Commercial Use of Service</h2>
            <p>
              If you utilize the Service or access the Websites on behalf of a business, entity, or organization (collectively, “Subscribing Entity”), you certify that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You are an authorized representative of the Subscribing Entity with the power to bind it to these Terms of Service;</li>
              <li>You have understood these Terms of Service; and</li>
              <li>You accept these Terms of Service on behalf of the Subscribing Entity.</li>
            </ul>
            <p>
              Unauthorized or illegal use of the Websites includes, but is not limited to, browsing or downloading unlawful content, harvesting usernames and/or email addresses of members for sending unsolicited email, unauthorized linking to or framing of the Websites, sharing or disclosing your login credentials with a third party or allowing a third party to access your account, impersonating another user or individual, using the Websites in any deceptive or fraudulent manner, automated interactions with the system such as scraping, using bots, spiders, crawlers, data mining tools, or similar automated tools, disrupting, or burdening the Websites or the networks or services connected to the Websites, and using the Websites in a way that violates any applicable laws and regulations. Any illegal or unauthorized use of the Websites is subject to investigation and appropriate legal action may be taken, including but not limited to civil, criminal, and injunctive redress. Usage of the Websites and Service is permitted by Touchstone Digital Solutions and can be revoked at any moment, for any reason, at the sole discretion of Touchstone Digital Solutions.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">3. Account Security</h2>
            <p>
              You are responsible for maintaining the secrecy of the username and password you set during the registration process, and you are solely accountable for all activities that occur under your account. You must (a) immediately inform Touchstone Digital Solutions of any unauthorized use of your login details or any other security breach, and (b) ensure you log out from your account at the end of each session. Touchstone Digital Solutions is not liable for any loss or damage resulting from your failure to protect your login information. Exercise caution when accessing your account from a public or shared computer to prevent others from viewing or recording your password or personal information. If your computer is shared with others, you might consider deactivating any auto-login features that are connected to your Touchstone Digital Solutions account.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">4. Prohibited Activities</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Illegal Content:</strong> Accessing or downloading any illegal content is strictly prohibited.</li>
              <li><strong>Content Ownership:</strong> You must not copy, capture, or otherwise appropriate any content from the Websites without explicit permission from Touchstone Digital Solutions.</li>
              <li><strong>Content Usage Restrictions:</strong> Do not copy, republish, adapt, or publicly share any Content from the Websites, except your own created content or as explicitly allowed under these Terms of Service and by the original uploader (e.g., respecting Creative Commons licenses).</li>
              <li><strong>No Creation of Parallel Content Services:</strong> You are forbidden from using any Content in a way that mimics or competes with our offerings.</li>
              <li><strong>Data Harvesting Prohibited:</strong> The use of scraping, bots, or similar technologies to collect or repurpose Content is not permitted.</li>
              <li><strong>Automated Interactions:</strong> Automated methods to interact with the Websites, such as registering accounts, posting comments, or logging in, particularly repetitively or in bulk, are prohibited. Offering or promoting these methods to others is also banned.</li>
              <li><strong>Intellectual Property Respect:</strong> You must not alter, remove, or attempt to bypass any copyright, trademark, or other proprietary notices on the Websites or Content.</li>
              <li><strong>Software Integrity and Security:</strong> Do not engage in reverse engineering, decompiling, or otherwise manipulating the Websites’ software. Avoid bypassing or attempting to bypass any form of copy protection or rights management on the Websites.</li>
              <li><strong>Prohibited Content:</strong> You must not use the Websites to share or promote: Offensive, harmful, or illegal content including abusive, libelous, defamatory, obscene, racist, sexually explicit, or culturally insensitive material; Content that infringes on the rights of others, including privacy, publicity, and intellectual property rights; Any form of malware or software that could damage, interfere with, or excessively burden the Websites or its users' experience; Unsolicited or unauthorized advertising or promotional materials (spam).</li>
              <li><strong>Legal and Ethical Conduct:</strong> Engage only in lawful activities and refrain from any actions that could result in criminal charges or civil liabilities. Do not rent, sell, or lease access to any part of the Websites or its Content, except through allowed integrations where users can legally purchase Your Content.</li>
              <li><strong>Impersonation and Fraud:</strong> Avoid misrepresenting your identity or affiliations, especially by impersonating others or registering under a false name.</li>
              <li><strong>Respect and Safety:</strong> Do not harass, threaten, or abuse other users or employees of Touchstone Digital Solutions. Offensive behavior towards staff may lead to immediate termination of your membership without a refund. You are prohibited from selling or transferring your account without written permission from Touchstone Digital Solutions.</li>
              <li><strong>Privacy and Data Collection:</strong> Collecting data on other users without their consent or through unauthorized methods like scraping is forbidden.</li>
              <li><strong>System Integrity:</strong> Do not attempt to breach, bypass, or test the security measures of the Websites, including hacking, submitting viruses, or overwhelming the system (e.g., mail-bombing or crashing).</li>
              <li><strong>Compliance and Enforcement:</strong> You agree to adhere to these conditions and acknowledge that Touchstone Digital Solutions retains the right to terminate your access or take other appropriate actions if you violate these terms or engage in any prohibited activities. This may include legal action and cooperation with law enforcement authorities.</li>
            </ul>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">5. Representations and Warranties</h2>
            <p>You affirm and guarantee to Touchstone Digital Solutions the following:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Originality and Permissions:</strong> Your Content is originally created by you, or you have secured all necessary rights, licenses, consents, and permissions needed to use and, where applicable, to allow Touchstone Digital Solutions to utilize Your Content under these Terms of Service.</li>
              <li><strong>Non-infringement of Rights:</strong> Your Content does not and will not infringe or violate any third-party rights, including intellectual property rights, privacy, publicity, or confidential information.</li>
              <li><strong>Consents from Featured Parties:</strong> You have obtained necessary consents, permissions, and/or releases from all persons who appear in Your Content to use their names, voices, performances, or likenesses, and to publish them on the Websites and any third-party services.</li>
              <li><strong>Content Integrity:</strong> Your Content and any related comments posted on the Websites will not be unlawful, harmful, libelous, obscene, or promote illegal activities, nor will they incite hatred based on race, gender, religion, or sexual orientation.</li>
              <li><strong>Liability:</strong> Your Content will not expose Touchstone Digital Solutions or its related entities to any liability.</li>
            </ul>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">6. Term</h2>
            <p>
              This Agreement remains effective as long as you utilize the Websites and/or Service. You can terminate your membership or subscription anytime by contacting info@touchstone-ds.com. Upon cancellation, you may be asked to provide reasons for your decision to aid in service improvement. Touchstone Digital Solutions may terminate your membership for any reason, notifying you via your registered email.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">7. Modifications to Service</h2>
            <p>
              Touchstone Digital Solutions reserves the right to modify or cease the Service or any part thereof at any time with or without notice. You acknowledge that Touchstone Digital Solutions is not liable for any service changes that might affect you or any third party.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">8. Blocking of IP Addresses</h2>
            <p>
              To maintain the security and integrity of the Services, Touchstone Digital Solutions has the authority to block users from certain IP addresses from accessing the Websites at its discretion.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">9. Content</h2>
            <p><strong>a. Proprietary Rights:</strong> Touchstone Digital Solutions exclusively owns all rights to the intellectual property displayed on the Websites and provided through the Service.</p>
            <p><strong>b. Third-Party Content:</strong> The Websites may feature links to external sites and include content that belongs to or is sourced from third parties.</p>
            <p><strong>b. Ownership of Your Content; Licenses:</strong> When you upload content to our Websites, it becomes property of Touchstone Digital Solutions, although you retain joint ownership which allows for its use with other services or for your internal purposes.</p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">10. Restrictions on Use of Materials</h2>
            <p>
              The intellectual property featured on Touchstone Digital Solutions' Websites, including images, text, and other materials, is protected under United States copyright laws and international agreements.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">11. Copyright Policy</h2>
            <p>
              Touchstone Digital Solutions actively prohibits the submission or posting of any content that infringes upon or violates the copyright or other intellectual property rights of any person or entity. Should you believe that your copyright or intellectual property rights have been infringed upon by any content on the Site, please send a notification to: 8 Powder Hill Road Bedford, NH 03110.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">12. Liability for Content</h2>
            <p>
              Touchstone Digital Solutions acts only as a passive conduit for content uploaded by users and does not actively monitor or control user submissions.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">13. Repeat Infringers</h2>
            <p>
              Touchstone Digital Solutions takes intellectual property rights seriously and will suspend or terminate access to the Websites for users who repeatedly infringe these rights.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">14. Limitation of Liability</h2>
            <p>
              In no event will Touchstone Digital Solutions be liable for any type of damages arising from your use of our Websites or Services.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">15. Indemnity by You</h2>
            <p>
              You agree to indemnify and hold harmless Touchstone Digital Solutions and its affiliates from any claims, liabilities, losses, or expenses arising from your improper use of the Websites and Services.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">16. Attorney Fees</h2>
            <p>
              If Touchstone Digital Solutions is successful in legal proceedings related to this Agreement, you will be responsible for paying all reasonable attorneys' fees and legal costs.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">17. Parental or Guardian Permission</h2>
            <p>
              Some content on the Websites may not be suitable for children under the age of 17. We require that children under this age use the service only with parental permission.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">18. Privacy</h2>
            <p>
              Your use of the Websites and Services is also subject to our Privacy Policy, available on the Touchstone Digital Solutions website.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">19. Jurisdiction and Choice of Law; Dispute Resolution</h2>
            <p>
              All disputes will be governed by the laws of the State of Delaware and subject to the exclusive jurisdiction of courts in New York.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">20. Arbitration Provision/No Class Action</h2>
            <p>
              You agree to resolve disputes through individual arbitration in Delaware, barring class action suits.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">21. No Third Party Beneficiaries</h2>
            <p>
              This Agreement is between you and Touchstone Digital Solutions; there are no third-party beneficiaries.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">22. Availability Outside the U.S.</h2>
            <p>
              Access to the Websites from locations outside the United States is at your own risk and responsibility.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">23. Entire Agreement</h2>
            <p>
              This Agreement constitutes the complete agreement between you and Touchstone Digital Solutions.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">24. Severability; Waiver</h2>
            <p>
              If any provision is found invalid, the remaining provisions will continue to be enforceable.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">25. Headings</h2>
            <p>
              The headings in this Agreement are for reference only and do not affect interpretation.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <p className="font-bold text-purple-300">
              I HAVE CAREFULLY READ AND FULLY AGREE TO ALL THE PROVISIONS OUTLINED IN THIS AGREEMENT.
            </p>
            <p>
              Please do not hesitate to reach out if you have any questions about the Terms of Service!
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;