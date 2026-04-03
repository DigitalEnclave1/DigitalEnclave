import React from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import { 
  Shield, 
  BookOpen, 
  Gavel, 
  FileText, 
  Info, 
  MessageCircleQuestion 
} from "lucide-react";

const TermsAndConditions: React.FC = () => {
  const termsSection = [
    {
      icon: <BookOpen className="w-12 h-12 text-emerald-500" />,
      title: "Acceptance of Terms",
      description: "By accessing our platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part, please discontinue use of our services.",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "User Rights",
      description: "We respect your rights and privacy. Our terms are designed to protect both our users and our organization while maintaining transparency and fairness.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Gavel className="w-12 h-12 text-purple-500" />,
      title: "Legal Compliance",
      description: "Our services strictly adhere to local and international legal standards. We commit to maintaining ethical practices and protecting user interests.",
      bgColor: "bg-purple-50"
    },
    {
      icon: <FileText className="w-12 h-12 text-orange-500" />,
      title: "Content Usage",
      description: "All content on our platform is protected by intellectual property laws. Users are prohibited from reproducing, distributing, or modifying our content without explicit permission.",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Head>
        <title>Terms and Conditions | DigitalEnclave</title>
        <meta name="description" content="Comprehensive terms and conditions for DigitalEnclave services." />
      </Head>

      <div className="container flex-grow px-4 py-16 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <div className="inline-block p-4 mb-6 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100">
              <Gavel className="w-16 h-16 text-emerald-600" />
            </div>
            <h1 className="mb-4 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Terms and Conditions
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Your comprehensive guide to understanding our service agreements and user responsibilities.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="grid gap-8 md:grid-cols-2">
            {termsSection.map((section, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 ${section.bgColor}`}
              >
                <div className="flex items-center mb-4">
                  {section.icon}
                  <h2 className="ml-4 text-2xl font-bold text-gray-800">
                    {section.title}
                  </h2>
                </div>
                <p className="leading-relaxed text-gray-600">
                  {section.description}
                </p>
              </div>
            ))}
          </div>

          {/* Consent and Contact Section */}
          <div className="p-8 mt-16 text-center bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl">
            <h3 className="mb-4 text-3xl font-bold text-white">
              Your Consent is Important
            </h3>
            <p className="max-w-2xl mx-auto mb-6 text-white opacity-80">
              By continuing to use our services, you acknowledge and agree to our Terms and Conditions.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/contact"
                className="px-8 py-3 font-semibold transition-colors bg-white rounded-full text-emerald-600 hover:bg-emerald-100"
              >
                Contact Us
              </Link>
              <Link 
                href="/privacy"
                className="px-8 py-3 font-semibold text-white transition-colors border-2 border-white rounded-full hover:bg-white hover:text-emerald-600"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Additional Information */}
          <div className="p-8 mt-16 bg-gray-50 rounded-2xl">
            <div className="flex items-center mb-6">
              <Info className="w-10 h-10 mr-4 text-blue-500" />
              <h4 className="text-2xl font-bold text-gray-800">
                Need Clarification?
              </h4>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h5 className="mb-2 font-semibold text-gray-700">
                  Frequently Asked Questions
                </h5>
                <p className="text-gray-600">
                  Check our FAQ section for quick answers to common questions about our terms and services.
                </p>
                <Link 
                  href="/faq"
                  className="inline-flex items-center mt-4 text-emerald-600 hover:text-emerald-800"
                >
                  <MessageCircleQuestion className="mr-2" /> View FAQs
                </Link>
              </div>
              <div>
                <h5 className="mb-2 font-semibold text-gray-700">
                  Legal Consultation
                </h5>
                <p className="text-gray-600">
                  For detailed legal interpretations or specific inquiries, please contact our legal team.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
                >
                  <Gavel className="mr-2" /> Contact Legal Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsAndConditions;