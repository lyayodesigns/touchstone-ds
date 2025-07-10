import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Touchstone Digital Solutions',
  description: 'Find answers to frequently asked questions about Touchstone\'s digital recognition systems, implementation process, pricing, and technical specifications.',
  openGraph: {
    title: 'FAQ | Touchstone Digital Solutions',
    description: 'Find answers to frequently asked questions about Touchstone\'s digital recognition systems, implementation process, pricing, and technical specifications.',
    url: 'https://touchstone-ds.com/faq/',
    type: 'website',
    images: [
      {
        url: 'https://touchstone-ds.com/og-image.jpg',
      },
    ],
    siteName: 'Touchstone Digital Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@touchstone_ds',
    title: 'FAQ | Touchstone Digital Solutions',
    description: 'Find answers to frequently asked questions about Touchstone\'s digital recognition systems, implementation process, pricing, and technical specifications.',
    images: ['https://touchstone-ds.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://touchstone-ds.com/faq/',
  },
};

// FAQ data organized by categories
const faqData = [
  {
    title: "General Industry Questions",
    description: "Common questions about digital recognition systems and industry standards.",
    faqs: [
      {
        question: "What is a Digital Hall of Fame?",
        answer: "A Digital Hall of Fame is an interactive touchscreen display that showcases the achievements, history, and legacy of a school or community. Unlike traditional plaques, trophies, and record boards, a Digital Hall of Fame brings stories to life through pictures, videos, statistics, and more—all accessible on our web-based platform. Our state-of-the-art Interactive Hall of Fame brings student success, alumni milestones, and championship moments to life—all in a sleek, modern display.",
      },
      {
        question: "How do Digital Hall of Fame displays work?",
        answer: "Digital Hall of Fame displays use interactive touchscreen technology and our custom cloud-based software that updates in real time. Schools and organizations can showcase decades of records, rosters, photos, and videos—beautifully tailored to their brand. Visitors can explore achievements by category, year, sport, or individual, creating an engaging and intuitive experience. At Touchstone, we build every platform from scratch, with no cost to build or maintain, ensuring every interaction is smooth, stunning, and unforgettable.",
      },
      {
        question: "Why should schools switch to digital recognition displays?",
        answer: `Switching to digital recognition displays helps schools and organizations save space, save time, and modernize how they celebrate achievements—all while expanding their reach.\nSave Space – Clear out crowded trophy cases and remove outdated plaques without losing a single story. A digital Hall of Fame preserves every record in one sleek, space-saving display.\nSave Time – No more ordering, engraving, or installing new plaques each season. With Touchstone, adding a new honoree is as simple as click, type, and post.\nImprove Your Image – Create a dynamic, interactive wall of honor that captures attention and reflects a forward-thinking school culture.\nPromote Your History Worldwide – Students, recruits, alumni, and parents can explore your school’s legacy anytime, from anywhere—no campus visit required.\nDigital recognition isn’t just a display—it’s a smarter, more impactful way to preserve and share your legacy.`,
      },
      {
        question: "What are the benefits of a touchscreen Hall of Fame display?",
        answer: `Touchscreen Hall of Fame displays offer schools:\n Unlimited storytelling space for records, photos, and multimedia\n Custom branding to match your school’s identity\n Access anywhere—on campus or on mobile\n Real-time updates for rosters, records, and achievements\n Immersive user experiences with intuitive design\n Zero wall clutter—replace dozens of plaques with one sleek display\nAt Touchstone, our software blends cutting-edge technology with handcrafted design, creating digital recognition experiences that are dynamic, interactive, and unforgettable.`,
      },
      {
        question: "Are interactive recognition walls better than static plaques?",
        answer: "Yes—interactive recognition walls offer far more flexibility and impact than traditional plaques. With unlimited space and dynamic content, schools and organizations can showcase multimedia, donor spotlights, championship highlights, and personal stories—all in a sleek, touchscreen display. Touchstone’s platform is fully branded, easy to update, and built to grow with your legacy.",
      },
      {
        question: "How can digital displays help schools save space?",
        answer: "Digital displays let schools and organizations consolidate decades of achievements into one sleek, interactive hub. Instead of filling walls with plaques and trophies, everything is housed in a central, touchscreen or web-accessible display. With wall-mounted, freestanding, or even QR code-only options, Touchstone helps you save space without sacrificing recognition—perfect for hallways, lobbies, gyms, or anywhere stories deserve to be told.",
      },
      {
        question: "What type of schools use digital Halls of Fame?",
        answer: `Digital Halls of Fame are used by a wide range of schools and organizations, including public and private middle schools, high schools, college athletic departments, college history programs, community organizations, and nonprofits.\nTouchstone Digital Solutions proudly serves K–12 schools, colleges, universities, and community groups nationwide, offering scalable, fully customized touchscreen displays that celebrate legacies and achievements of all kinds.\nWhether you're a small public middle school recognizing student success, a private high school honoring athletic excellence, a university looking to showcase alumni history, or a nonprofit highlighting community impact, our digital displays are built to reflect your unique story. With no cost to build or maintain, our platform is accessible, affordable, and designed to grow with your institution.`,
      },
      {
        question: "Can digital displays be used outside of athletic recognition?",
        answer: `Yes—Touchstone’s digital displays are built to recognize far more than just athletics. While many schools and organizations begin with athletic Halls of Fame, our fully customizable software supports a wide range of recognition needs, including:\n Academic Excellence, honor societies, and student awards\n Donor and Alumni Recognition for fundraising and engagement\n Performing Arts showcases for theater, music, and visual arts\nSchool-Wide Achievements, announcements, and celebrations\n Career and Technical Education accomplishments and certifications\n Interactive Yearbooks, reunions, and class history displays\nOur platform is perfect for middle schools, high schools, colleges, and nonprofits that want to honor a variety of achievements across academics, arts, athletics, and community impact. If it’s important to your school or organization, Touchstone can help you display it—beautifully and meaningfully!`,
      },
      {
        question: "What makes a Digital Hall of Fame more engaging for students?",
        answer: `Today’s students are digital natives—they expect interactive, personalized, and multimedia-rich experiences. A digital Hall of Fame from Touchstone delivers just that, turning recognition into a powerful tool for connection and inspiration.\nWith our platform, students can:\nTap into team history or explore individual spotlights\nWatch highlight videos, interviews, and championship recaps\nView live records, stats, and career milestones\nSee their own accomplishments featured in real time\nTouchstone’s platform features gaming-industry-level graphics, a user-friendly touchscreen interface, and fully custom branding—creating an experience that’s not only visually stunning, but truly memorable.\nIt’s more than recognition—it’s a source of pride, engagement, and motivation for the next generation.`,
      },
      {
        question: "How can I bring a Digital Hall of Fame display to my school or organization?",
        answer: `Bringing a Digital Hall of Fame to your school or organization is simple, fast, and stress-free with Touchstone Digital Solutions. We handle the heavy lifting so you can focus on celebrating your legacy.\nHere’s how to get started:\nSchedule a 15-Minute Guided Demo\nMeet with our team for a personalized walkthrough of our platform and features.\n [Schedule your free demo today](https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=website)\nCollaborate on a Custom Design\nWe tailor every display to your school’s identity, from layout and content to branding and functionality.\nLaunch and Inspire\nOnce you approve your design, we handle everything—from setup and training to ongoing support and updates.\nWith no cost to build or maintain, unlimited customization, and Emmy-nominated design, Touchstone makes it easy to transform recognition at your school. Link - https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=website`,
      }
    ],
  },
  {
    title: "Product-Specific (Touchstone) Questions",
    description: "Information about Touchstone Digital Solutions' unique features and capabilities.",
    faqs: [
      {
        question: "What is Touchstone Digital Solutions?",
        answer: "Touchstone Digital Solutions is a family-owned, results-driven company that specializes in fully customized touchscreen recognition software for schools, communities, and nonprofits. We create dynamic, interactive platforms that honor student success, athletic achievements, alumni milestones, and more—bringing your school’s story to life with cutting-edge technology and Emmy-nominated design. Unlike off-the-shelf software, Touchstone builds every display from scratch to reflect your school’s identity and legacy. From the nation’s smallest high schools to the largest universities, we empower institutions to celebrate excellence in a way that’s engaging, inspiring, and future-proof.",
      },
      {
        question: "What is the Digital Wall of Fame by Touchstone?",
        answer: `The Digital Wall of Fame by Touchstone Digital Solutions is a fully interactive touchscreen platform that transforms how schools and organizations recognize achievement. Designed to replace traditional plaques, banners, and trophy cases, this all-in-one digital display celebrates athletic records, academic honors, alumni achievements, donor recognition, and more in a dynamic, centralized experience.\nBuilt with custom branding, intuitive navigation, and multimedia support—including photos, videos, interviews, stats, and bios—the Digital Wall of Fame offers a visually stunning way to honor your institution’s legacy. It’s web-accessible on any device, allowing schools to share their history with students, alumni, families, and communities—anytime, anywhere.`,
      },
      {
        question: "What makes Touchstone Digital Solutions the best Digital Hall of Fame company?",
        answer: `Touchstone Digital Solutions stands out as the leading provider of digital Hall of Fame software for schools and organizations across the country. Our platform goes far beyond templates or one-size-fits-all displays—we deliver fully customized, interactive recognition solutions designed to honor your legacy in the most meaningful way possible.\nFully Customizable – Every display is tailored to reflect your school’s unique brand, culture, and identity.\nNo Cost to Build or Maintain – We handle design, setup, and support at no additional cost, making Touchstone a stress-free, budget-friendly solution.\nStunning Visuals – Designed by an Emmy-nominated UI/UX team, our displays feature professional, gaming-quality graphics and intuitive design.\nAs a family-owned company, we bring unmatched care, creativity, and collaboration to every project. We treat your legacy like our own—ensuring your story is showcased with authenticity and excellence.`,
      },
      {
        question: "What are Touchstone Digital Solutions specialty display types?",
        answer: `Touchstone offers a wide variety of interactive display solutions, all fully customizable to meet the specific goals of your school or organization. Popular options include:\nAthletic Program Showcase – Honor team success with dynamic rosters, championship highlights, records, player spotlights, and so much more.\nTouchscreen HOF Displays – Celebrate legends with real-time updates and rich multimedia content.\nInteractive School Displays – Perfect for locker rooms, lobbies, gyms, and auditoriums, bringing history and achievements to life.\nVirtual Trophy Case – A modern way to display championships and school pride—without the dust.\nDigital Record Boards – Keep alumni records up to date automatically, ensuring every milestone is captured.\nInteractive Yearbooks – Relive school memories with digital pages that feature photos, videos, and student stories.\nDigital Donor Walls – Celebrate the contributors who make a difference with a dynamic, engaging display.\nTouchstone’s platform is built to be limitless, beautiful, and completely custom. If it’s worth celebrating, we can help you display it.`,
      },
      {
        question: "Does Touchstone provide installation or support?",
        answer: `Yes—Touchstone provides full-service support from start to finish, including system setup, design, training, and unlimited lifetime customer service. We guide you through every step of the process, ensuring your display is easy to use, visually impressive, and fully optimized for your goals. Our dedicated team is available 24/7 to help with updates, troubleshooting, and questions. As a family-owned business, we take pride in building long-term relationships—not just selling software. When you work with Touchstone, you’re not just getting a display—you’re gaining a teammate committed to your success.`,
      },
      {
        question: " Is Touchstone’s software easy to use?",
        answer: `Yes—Touchstone’s digital Hall of Fame software is built to be the most intuitive and user-friendly platform in the recognition industry. Schools and organizations can easily update athletes, donors, records, photos, and highlight videos without any technical experience.\nOur cloud-based system allows you to edit content from any device with just a few clicks, making it simple for administrators, coaches, or volunteers to manage. We also provide unlimited training and lifetime support, so your team is never left guessing.\nClients consistently tell us that Touchstone is the easiest digital recognition software they’ve ever used—backed by powerful tools, seamless updates, and a design-first interface.`,
      },
      {
        question: "Can we add videos and interviews to our digital wall?",
        answer: `Absolutely. Touchstone’s platform supports a wide range of multimedia content, including highlight videos, archived footage, interviews, reels, student spotlights, yearbooks, and more. Videos can be embedded directly into your display, offering an immersive, story-driven experience that goes far beyond static text. Whether you want to showcase an athlete’s game-winning moment or preserve an alumni’s testimonial, our platform makes it easy. Video content brings your Hall of Fame to life, keeps your audience engaged, and adds emotion and depth to every legacy.`,
      },
      {
        question: "Does Touchstone help with site design and content input?",
        answer: `Yes—site design and content setup are included with every project at no additional cost. Touchstone takes a design-first approach, starting with your school’s vision and branding before writing a single line of code. We map out your Hall of Fame or display layout by hand, ensuring every section is intuitive, beautiful, and impactful. Our team also assists with content organization, photo and video input, data migration, custom digital designs, and more. The result? A turnkey solution that looks amazing, functions seamlessly, and captures every detail of your school or organization’s story.`,
      },
      {
        question: "Can I access my Digital Wall of Fame on a phone or tablet?",
        answer: `Yes—Touchstone’s Digital Wall of Fame is fully web-accessible on any device, including phones, tablets, laptops, and desktops. Whether you're showcasing your display on a mounted touchscreen in a gym or sharing a link with alumni across the country, your platform is ready to go. There’s no app to download—just a simple, branded web interface that works anywhere with internet access. This makes it easy to share your school’s legacy with students, alumni, families, and donors worldwide.`,
      },
      {
        question: "What’s included in a Touchstone software package?",
        answer: `Every Touchstone software package is an all-in-one solution designed to meet the needs of schools and organizations of all sizes. Packages include:\nCustom-built, interactive website or touchscreen interface\nFull content setup, design, and branding\nUnlimited photos, videos, yearbooks, bios, stats, and updates\n24/7 support, training, and customer service\nAutomatic, over-the-air software updates\nCloud-based access on any device\nIntegration with your school colors, logos, and style guide\nOptional hardware bundles and installation support\nAnd best of all—there’s no cost to build or maintain your platform. We offer flexible pricing, scalable solutions, and premium service with no hidden fees.`,
      }
    ],
  },
  {
    title: "School-Specific Use Cases",
    description: "How educational institutions are implementing digital recognition solutions.",
    faqs: [
      {
        question: "How can small schools afford a digital Wall of Fame?",
        answer: "Touchstone offers flexible, budget-friendly packages designed specifically for small schools and tight budgets. With no cost to build or maintain, our Digital Wall of Fame is an affordable way for even the smallest schools to celebrate students, athletes, and alumni. Whether you’re a rural high school, a small private academy, or a charter school, we make digital recognition accessible—with pricing that scales to your size and needs.",
      },
      {
        question: "Can we use our existing screens or displays?",
        answer: "Yes! Touchstone’s software is designed to work on a wide range of devices, including existing screens, monitors, and smart TVs. As long as your display has internet access, you can run our cloud-based platform without needing to invest in new hardware. This flexibility makes it easy and cost-effective to upgrade your recognition experience.",
      },
      {
        question: "Do colleges and universities use digital recognition systems?",
        answer: `Yes, colleges and universities use digital recognition systems to showcase athletic accomplishments, alumni success, academic excellence, and donor contributions. Touchstone builds fully customized, interactive displays that align with your institution’s branding—ideal for athletic departments, alumni centers, academic halls, and student unions.\nIn addition to our Digital Wall of Fame, we also design bespoke athletic program team history sites and full department-wide platforms that highlight rosters, records, championships, coaching legacies, and more. Whether you're honoring decades of athletic tradition or building an alumni engagement tool, Touchstone helps higher education institutions engage their communities, impress visitors, and preserve their legacy—all through a modern, dynamic, and accessible experience.`,
      },
      {
        question: "Can we create a memorial wall or tribute section?",
        answer: `Yes—Touchstone’s platform supports dedicated memorial walls, tribute sections, and in memoriam pages. Whether honoring beloved faculty, alumni, or community members, we help schools and organizations create beautiful, respectful digital tributes that preserve legacies with photos, stories, and multimedia. These displays can be standalone or integrated into your Digital Wall of Fame.`,
      },
      {
        question: "How can digital displays help with alumni engagement?",
        answer: `Digital recognition displays keep alumni connected by making school history and honors accessible anytime, from anywhere. Alumni can explore Halls of Fame, donor recognitions, and class milestones online, without needing to visit campus. Touchstone’s platform also helps schools highlight alumni success stories, support giving campaigns, and showcase legacy achievements—boosting alumni pride, participation, and giving.`,
      },
      {
        question: "How do schools showcase sponsors on a digital platform?",
        answer: "Touchstone’s software includes built-in sponsor and donor recognition tools. Schools can feature sponsor logos, messages, videos, and promotional content in dedicated sections or throughout the display. These can be updated in real time and branded to match your school’s style, making it easy to recognize corporate sponsors and community partners in a professional, high-visibility format.",
      },
      {
        question: "How can we preserve our school’s legacy digitally?",
        answer: "Preserving your legacy starts with digitally documenting achievements, milestones, and memories—and Touchstone makes that easy. Our Digital Wall of Fame helps schools transform physical plaques, trophies, and yearbooks into a central, interactive platform that’s accessible online. With multimedia support, custom branding, and unlimited content, you can ensure your school’s story is always preserved and proudly shared.",
      },
      {
        question: "What is the best way to showcase student-athlete achievements?",
        answer: "A Digital Wall of Fame is the best way to highlight student-athlete success. Touchstone’s platform displays rosters, stats, awards, photos, videos, and career highlights in one interactive, engaging system. Coaches, fans, and families can explore each athlete’s journey—from first game to final record—all within a professional, school-branded environment that inspires current and future generations",
      },
      {
        question: "Can we use a Digital Hall of Fame for academic recognition?",  
        answer: "Yes—Touchstone’s platform is ideal for showcasing academic achievements. Schools use it to recognize honor societies, valedictorians, STEM program success, CTE certifications, National Merit Scholars, and more. Academic recognition deserves just as much visibility as athletics, and our digital system makes it easy to highlight excellence across every discipline.",
      },
      {
        question: "Can private schools use Touchstone’s system?",
        answer: `Yes—Touchstone’s digital recognition system is a perfect fit for private schools of all types and sizes. We proudly serve independent K–12 schools, private academies, faith-based institutions, and charter schools across the country.\nOur platform is fully customizable, allowing private schools to align their Digital Wall of Fame with their unique values, brand identity, and recognition goals. Whether you're honoring student-athletes, celebrating academic excellence, recognizing alumni, or engaging donors, Touchstone provides an elegant, professional, and affordable solution to showcase what makes your school exceptional.`,
      },
      {
        question: "Can I choose a custom web domain for my site?",
        answer: "Yes—you can choose a custom web domain for your Digital Wall of Fame at no additional cost. Your domain is included with your subscription, and we’ll help you set it up to match your school’s brand and make your site easily accessible for students, alumni, and the broader community.",
      }

    ],
  },
  {
    title: "Budgeting / Pricing / Planning",
    description: "Information to help you plan and budget for your digital recognition project.",
    faqs: [
      {
        question: "How much does a Digital Hall of Fame display cost?",
        answer: "The cost of a Digital Hall of Fame varies based on the size of your project and any hardware needs, but Touchstone is proud to offer the most affordable digital recognition platform in the industry. Every display includes custom design, full content setup, unlimited support, and no cost to build or maintain. We offer pricing that fits K–12 schools, colleges, and community organizations of all sizes. Contact us for a personalized quote.",
      },
      {
        question: "Are there monthly or annual fees for using Touchstone?",
        answer: "Yes—we offer a simple, transparent subscription model with low annual or monthly pricing. This covers your software, hosting, updates, support, and custom web domain. There are no hidden costs, and your initial site build is included at no charge. Schools love that we make it easy to plan and budget year after year.",
      },
      {
        question: "Do you offer packages for schools on a budget?",
        answer: "Yes—Touchstone offers flexible packages for schools with limited budgets, including small rural districts, private schools, and community programs. Our pricing is scalable, and we work closely with schools to find the right fit without sacrificing quality. Even the most budget-conscious institutions can launch a stunning digital display with Touchstone.",
      },
      {
        question: "Can we fund a digital Wall of Fame through sponsorships?",
        answer: "Absolutely. Many schools fund their Digital Wall of Fame through local sponsorships, booster clubs, or donor contributions. Touchstone’s platform makes it easy to highlight sponsors with logos, videos, and dedicated recognition sections, offering excellent visibility for community partners and businesses. We’ll even help you design a sponsorship page that supports your fundraising goals.",
      },
      {
        question: "What’s the ROI of investing in a digital recognition platform?",
        answer: `Investing in a digital recognition platform from Touchstone delivers a strong and measurable return on investment for schools and organizations.\nFirst, it offers significant cost savings by eliminating the need for ongoing expenses like printing, engraving, and maintaining physical plaques, banners, and trophy cases. With no cost to build or maintain, schools reduce long-term recognition costs while upgrading to a modern, scalable solution.\nSecond, our platform helps generate new revenue through sponsorship opportunities. Schools can feature local businesses, booster clubs, or corporate partners directly on their Digital Wall of Fame—complete with logos, videos, and branded messages. This visibility creates high-value placements that appeal to sponsors looking to support school pride and gain community exposure.\nThird, Touchstone boosts donor engagement and giving by offering a professional, digital platform to recognize contributors. From donor walls to named scholarships, our interactive displays allow schools to honor supporters in real time, encouraging continued and increased donations from alumni, families, and community members.\nThe result? A powerful tool that pays for itself—through saved costs, new funding sources, and long-term legacy building.`,
      },
      {
        question: "Does Touchstone offer free product demos or consultations?",
        answer: `Yes! We offer free 15-minute guided demos where you’ll get a personalized walkthrough of our software and see real examples of Digital Halls of Fame in action. You can ask questions, explore features, and learn how Touchstone can help your school or organization.\n[Schedule your free demo today](https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=website)`,
      },  
      {
        question: "Can we start small and expand later?",
        answer: "Yes—our platform is designed to grow with you. Many schools start with a focused display, such as an athletic Hall of Fame or donor wall, and expand over time to include academics, alumni, or school-wide recognition. Touchstone makes it easy to add new sections, content, and screens at any time, without starting over or rebuilding your platform.",
      },
      {
        question: "Are financing or payment plans available?",
        answer: "Yes—we offer custom payment plans and financing options to help schools and organizations get started right away. Whether you're working with a limited budget or prefer to split payments across fiscal years, we’ll collaborate with you to find a plan that fits. Our goal is to make digital recognition accessible for everyone.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[70svh] w-full flex flex-col items-center justify-center overflow-hidden pt-4 pb-2 sm:pt-8 sm:pb-6 md:pt-16 md:pb-12"
          style={{
            backgroundImage: "url('/hero-bg-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}>
          {/* Background with animated gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" />
          </div>

          {/* Decorative elements - hidden on small screens */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/10 hidden sm:block" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500/10 hidden sm:block" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
                <span className="text-transparent bg-clip-text text-gradient-purple-blue">
                  Frequently Asked
                </span>
                <span className="text-foreground"> Questions</span>
              </h1>

              <div className="relative mb-4 md:mb-8">
                <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-6 max-w-3xl mx-auto">
                  Find answers to common questions about digital recognition systems and how Touchstone Digital Solutions can help your institution showcase excellence.
                </p>

                {/* Decorative line */}
                <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
              </div>

              {/* Category navigation */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {faqData.map((category, index) => (
                  <a
                    key={index}
                    href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 md:px-6 md:py-3 bg-white border border-blue-200 rounded-lg shadow-sm text-blue-700 text-sm md:text-base font-medium hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    {category.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            {faqData.map((category, index) => (
              <div
                key={index}
                id={category.title.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-24"
              >
                <div className="mb-16">
                  <div className="opacity-100 transform-none">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-amber-500">
                      {category.title}
                    </h2>
                    <p className="text-foreground/70 mb-8 max-w-3xl">{category.description}</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                    {category.faqs.map((faq, index) => (
                      <details 
                        key={index}
                        className="border-b border-gray-200/20 last:border-b-0 group"
                      >
                        <summary
                          className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none cursor-pointer"
                        >
                          <h3 className="text-lg font-medium text-foreground">{faq.question}</h3>
                          <span className="ml-4 flex-shrink-0">
                            <ChevronDown className="h-5 w-5 text-foreground/60 group-open:hidden" />
                            <ChevronUp className="h-5 w-5 text-teal-400 hidden group-open:block" />
                          </span>
                        </summary>
                        <div className="pb-5 px-4 prose prose-sm max-w-none text-foreground/80">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#3B82F6' }}>
          {/* Background with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700"></div>

          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] right-[15%] w-72 h-72 rounded-full bg-blue-400 mix-blend-overlay opacity-20" />
            <div className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-purple-400 mix-blend-overlay opacity-20" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="relative">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Still have questions?</h2>
                <div className="h-1 w-20 bg-white rounded-full mb-6 mx-auto" />
                <p className="text-lg text-white/90 mb-8">
                  Our team is ready to help you find the perfect digital recognition solution for your institution.
                </p>
                <a
                  href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-medium text-center hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-1"
                >
                  Schedule a Consultation
                </a>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-4 border-white/10" />
              <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full border-4 border-white/10" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export const dynamic = 'force-static';
