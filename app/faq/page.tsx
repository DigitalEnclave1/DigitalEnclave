"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What services does your IT company offer?",
    answer:
      "We provide web development, mobile app development, IT consulting, and SEO services.",
  },
  {
    question: "What industries does your IT company serve?",
    answer:
      "We serve industries like e-commerce, healthcare, finance, and education.",
  },
  {
    question: "What sets your company apart from other IT service providers?",
    answer:
      "We focus on innovation, quality, and customer satisfaction, delivering customized solutions.",
  },
  {
    question: "Does your company offer custom website development?",
    answer:
      "Yes, we specialize in custom website design and development tailored to your needs.",
  },
  {
    question:
      "How does your company handle website maintenance and updates post-launch?",
    answer:
      "We offer ongoing maintenance, security updates, and performance optimization services.",
  },
  {
    question: "Can your company assist with mobile app development?",
    answer: "Yes, we develop high-performance iOS and Android applications.",
  },
  {
    question: "How does your company approach keyword research for SEO?",
    answer:
      "We use advanced SEO tools and competitor analysis to find the best keywords for your business.",
  },
  {
    question: "Does your company offer IT consulting services?",
    answer:
      "Yes, we provide strategic IT consulting to help businesses improve their technology infrastructure.",
  },
  {
    question: "Does your company provide mobile-responsive design?",
    answer:
      "Yes, we ensure all websites we develop are fully responsive across all devices.",
  },
  {
    question: "How does your company approach social media management?",
    answer:
      "We create and manage content, run targeted campaigns, and analyze performance metrics to boost engagement.",
  },
];

const FAQItem = ({ faq, index, openIndex, toggleFAQ }: any) => {
  return (
    <div className="border-b last:border-none">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full text-left py-4 flex justify-between items-center text-lg font-medium text-gray-800 hover:text-[#a46ede] transition"
      >
        <span className="font-semibold">{faq.question}</span>
        {openIndex === index ? (
          <ChevronUp size={20} />
        ) : (
          <ChevronDown size={20} />
        )}
      </button>

      <AnimatePresence>
        {openIndex === index && (
          <motion.div
            className="pb-4 text-gray-600"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
        <section className="bg-[#f8f5fc] py-24">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Side: Text + Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl font-bold text-black">
              Frequently <span className="text-[#a46ede]">Asked</span> Questions
            </h1>
            <p className="mt-4 text-gray-700">
              Welcome to our FAQ section! Here you'll find quick answers to the most common questions about our products and services.
            </p>
            <div className="mt-6">
              <Image
                src="/faq.png"
                width={500}
                height={500}
                alt="FAQ Illustration"
                className="rounded-lg shadow-md"
              />
            </div>
          </motion.div>

          {/* Right Side: Accordion */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                openIndex={openIndex}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </motion.div>
        </div>
      
      </div>
   
    </section>
    <Footer />
    </div>
  
     
  );
};

export default FAQ;
