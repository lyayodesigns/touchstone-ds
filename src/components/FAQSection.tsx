import React, { useState, useRef, useEffect } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`border border-white/10 rounded-lg overflow-hidden transform transition-all duration-300 ${
        isOpen ? "shadow-lg shadow-purple-500/10" : ""
      }`}
    >
      <button
        className={`w-full p-4 md:p-5 text-left flex items-center justify-between transition-all duration-300 ${
          isOpen
            ? "bg-gradient-to-r from-purple-500/20 to-card"
            : "bg-card hover:bg-card/80 active:bg-card/60"
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span
          className={`font-medium transition-all duration-300 ${
            isOpen ? "text-purple-400" : "text-white"
          }`}
        >
          {question}
        </span>
        <svg
          className={`w-5 h-5 md:w-6 md:h-6 text-purple-400 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: height ? `${height}px` : "0px" }}
      >
        <div
          ref={contentRef}
          className="p-4 md:p-6 bg-card/50 border-t border-white/10"
        >
          <p className="text-white/80 md:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs: Omit<FAQItemProps, "isOpen" | "onClick" | "index">[] = [
    {
      question: "What makes Touchstone Digital Solutions different?",
      answer:
        "Unlike traditional recognition displays, our digital hall of fame solutions combine interactive technology with intuitive content management. We specialize in creating customized recognition systems specifically designed for educational institutions, with features like real-time updates, touchscreen interfaces, and seamless integration with existing school systems.",
    },
    {
      question: "Which CRM do you integrate with?",
      answer:
        "Our platform integrates with popular school management systems including PowerSchool, Blackbaud, FACTS SIS, and custom databases. We also offer API connections for specialized systems and can work with your IT team to ensure smooth data flow between your existing infrastructure and our recognition displays.",
    },
    {
      question: "Do you have any market restrictions?",
      answer:
        "We primarily serve K-12 schools, colleges, universities, and educational foundations across North America. While we focus on the education sector, we occasionally work with sports organizations and community centers with similar recognition needs. Contact us to discuss your specific requirements.",
    },
    {
      question: "Do you have a mobile app?",
      answer:
        "Yes, we offer companion mobile apps for both iOS and Android that allow administrators to update content on-the-go. Additionally, we provide responsive web interfaces that work on any device, enabling your community to access your hall of fame content from anywhere.",
    },
    {
      question:
        "What happens if someone calls back the number I'm texting them from?",
      answer:
        "Our system uses dedicated phone numbers for notifications. If someone calls back, they'll reach our automated system that identifies your institution and provides options to connect with your administrative team or leave a message. This ensures all communication remains professional and properly routed.",
    },
    {
      question: "Does the system allow me to export my contacts?",
      answer:
        "Absolutely. You maintain full ownership of your data and can export contacts, achievements, and media at any time. Our platform includes comprehensive data management tools that allow for scheduled backups, selective exports, and data migration options to ensure your information is always accessible and portable.",
    },
  ];

  // State to track which FAQ item is open (default to the first one)
  const [openIndex, setOpenIndex] = useState(0);

  // Function to handle opening/closing FAQ items
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-8 sm:py-16 md:py-24 w-full bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid opacity-30 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-spotlight -z-10"></div>

      {/* Plus symbols as decorative elements */}
      <div className="absolute top-40 left-40 text-white/10 text-3xl">+</div>
      <div className="absolute bottom-40 right-40 text-white/10 text-3xl">
        +
      </div>

      <div className="container px-4 sm:px-6 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto">
            Answers to some of the most common questions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
