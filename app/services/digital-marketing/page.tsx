"use client";

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaFacebook, FaSearch, FaPenNib, FaPaintBrush, FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";

// Define types for our components
type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  learnMoreLink: string;
};

type StatProps = {
  number: string;
  label: string;
  color?: string;
};

type FAQItemProps = {
  question: string;
  answer: string;
};

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

type ValuePropProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type PerformanceStatProps = {
  percentage: number;
  label: string;
};

export default function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (question: string) => {
    if (openFaq === question) {
      setOpenFaq(null);
    } else {
      setOpenFaq(question);
    }
  };

  return (
    <div className="min-h-screen text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Left Content */}
            <div className="mb-10 md:w-1/2 md:mb-0">
              <div className="inline-block px-4 py-1 mb-2 text-sm font-medium tracking-wide text-purple-600 uppercase bg-purple-100 rounded-full shadow-sm">
                Elevate your brand today
              </div>
              <h1 className="mt-4 mb-6 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                Revolutionize Your Brand's <span className="text-purple-600">Digital Impact</span>
              </h1>
              <p className="mb-8 text-lg text-gray-700 md:text-xl">
                At <span className="font-semibold text-purple-600">DigitalEnclave</span>, we enhance your online presence, drive traffic, and boost conversions through tailored strategies for success in the digital age.
              </p>
              
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center md:w-1/2">
              <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-2xl">
                <Image 
                  src="/graphic1.jpg" 
                  alt="Digital Marketing Illustration" 
                  width={500} 
                  height={400}
                  className="object-cover w-full transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-16 text-center">
            <div className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wide text-purple-600 uppercase bg-purple-100 rounded-full">Our Services</div>
            <h2 className="mb-4 text-3xl font-bold">What We Offer <span className="text-purple-600">For Your Business</span></h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">Comprehensive digital marketing solutions tailored to your unique business needs and goals</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section> 

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-16 text-center">
            <div className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wide text-purple-600 uppercase bg-purple-100 rounded-full">Work Flow</div>
            <h2 className="mt-2 text-3xl font-bold">How We <span className="text-purple-600">Get Started</span></h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">Our proven process ensures consistent results and seamless collaboration</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      
      
      {/* Value Props Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-16 text-center">
            <div className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wide text-purple-600 uppercase bg-purple-100 rounded-full">Solution Oriented</div>
            <h2 className="mt-2 text-3xl font-bold">How We Run <span className="text-purple-600">Our Business</span></h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">Core principles that guide our approach to every client partnership</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {valueProps.map((prop, index) => (
              <ValueProp key={index} {...prop} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Performance Stats */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-12 text-center">
            <div className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wide text-purple-600 uppercase bg-purple-100 rounded-full">Our Statistics</div>
            <h2 className="mt-2 text-3xl font-bold">Pay For <span className="text-purple-600">Qualified Traffic</span></h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">Performance metrics that demonstrate our commitment to your success</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {performanceStats.map((stat, index) => (
              <PerformanceStat key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-12 text-center">
            <div className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wide text-purple-600 uppercase bg-purple-100 rounded-full">FAQs</div>
            <h2 className="mt-2 text-3xl font-bold">Frequently Asked <span className="text-purple-600">Questions</span></h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">We compiled the most common questions about our products and services</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 overflow-hidden transition-all duration-300 border border-purple-200 rounded-lg hover:shadow-md">
                <button
                  className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => toggleFaq(faq.question)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${openFaq === faq.question ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div 
                  className={`transition-all duration-300 ${
                    openFaq === faq.question 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="px-6 py-4 bg-white border-t border-purple-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

// Component definitions
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, learnMoreLink }) => {
  return (
    <div className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg hover:border-purple-200 group">
      <div className="flex items-start">
        <div className="mr-4">
          <div className="flex items-center justify-center w-12 h-12 text-purple-600 transition-all duration-300 bg-purple-100 rounded-lg group-hover:bg-purple-600 group-hover:text-white">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="mb-4 text-gray-600">{description}</p>
          
        </div>
      </div>
    </div>
  );
};

const Stat: React.FC<StatProps> = ({ number, label, color = "text-purple-600" }) => {
  return (
    <div className="p-4 text-center transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
      <p className={`text-4xl font-bold mb-2 ${color}`}>{number}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="relative p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md hover:border-purple-200">
      <div className="absolute flex items-center justify-center w-10 h-10 font-bold text-white transition-all duration-300 transform -translate-y-1/2 bg-purple-600 rounded-full -top-1 left-6 group-hover:bg-purple-700">
        {number}
      </div>
      <div className="mt-6">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ValueProp: React.FC<ValuePropProps> = ({ title, description, icon }) => {
  return (
    <div className="p-6 text-center transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg hover:border-purple-200 group">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-purple-600 transition-all duration-300 bg-purple-100 rounded-full group-hover:bg-purple-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const PerformanceStat: React.FC<PerformanceStatProps> = ({ percentage, label }) => {
  return (
    <div className="p-6 text-center transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#E9D5FF"
            strokeWidth="10"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#9333EA"
            strokeWidth="10"
            strokeDasharray={`${percentage * 2.83} 283`}
            strokeDashoffset="0"
            transform="rotate(-90 50 50)"
          />
          <text
            x="50"
            y="50"
            fontSize="20"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontWeight="bold"
            fill="#4B5563"
          >
            {percentage}%
          </text>
        </svg>
      </div>
      <p className="font-medium text-gray-700">{label}</p>
    </div>
  );
};

// Data
const services = [
  {
    title: "Social Media Marketing",
    description: "Build robust presence across all major platforms through strategic content planning and targeted advertising.",
    icon: <FaFacebook className="w-6 h-6" />, 
    learnMoreLink: "#"
  },
  {
    title: "Search Engine Optimization",
    description: "Improve your website visibility and ranking in search results with our comprehensive SEO strategies.",
    icon: <FaSearch className="w-6 h-6" />, 
    learnMoreLink: "#"
  },
  {
    title: "Content Writing",
    description: "Engage your audience through compelling storytelling, informative articles, and SEO-friendly content.",
    icon: <FaPenNib className="w-6 h-6" />, 
    learnMoreLink: "#"
  },
  {
    title: "Graphic Design",
    description: "Create stunning visual assets that capture your brand essence and communicate your message effectively.",
    icon: <FaPaintBrush className="w-6 h-6" />, 
    learnMoreLink: "#"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Strategy",
    description: "We start with strategy sessions, analyzing your current goals to create a digital success roadmap."
  },
  {
    number: "02",
    title: "Planning",
    description: "After mapping our roadmap, we plan each step with tasks and timelines, ensuring client collaboration."
  },
  {
    number: "03",
    title: "Execution",
    description: "After detailed planning, we execute strategies to create impactful content and launch targeted campaigns."
  },
  {
    number: "04",
    title: "Optimization",
    description: "In the final phase, we optimize content based on data, adjust insights to achieve your digital goals."
  }
];

const stats = [
  {
    number: "103%",
    label: "Average Organic Gain"
  },
  {
    number: "2x",
    label: "Conversion Improvement"
  },
  {
    number: "6%",
    label: "Return on Investment"
  },
  {
    number: "30%",
    label: "Traffic Increase"
  }
];

const valueProps = [
  {
    title: "Result Driven",
    description: "We deliver measurable success with clear metrics to track progress against your business goals.",
    icon: <FaChartLine className="w-6 h-6" />
  },
  {
    title: "Collaboration",
    description: "We integrate your insights with our expertise through seamless communication throughout every project.",
    icon: <FaUsers className="w-6 h-6" />
  },
  {
    title: "Innovation",
    description: "We're consistently exploring new tools, tech, and methods to keep your marketing both fresh and results-oriented.",
    icon: <FaLightbulb className="w-6 h-6" />
  }
];

const performanceStats = [
  {
    percentage: 90,
    label: "Client Retention Rate"
  },
  {
    percentage: 25,
    label: "Average Increase in Lead Generation"
  },
  {
    percentage: 50,
    label: "Average Increase in Website Traffic"
  },
  {
    percentage: 85,
    label: "Successful Digital Marketing Campaigns"
  }
];

const faqs = [
  {
    question: "What services does your digital marketing agency provide?",
    answer: "Our agency offers a comprehensive suite of digital marketing services including social media marketing, search engine optimization (SEO), pay-per-click advertising (PPC), content marketing, email marketing, web design and development, graphic design, and analytics reporting."
  },
  {
    question: "Can you customize a digital marketing strategy to fit my business goals and budget?",
    answer: "Absolutely! We believe in tailored solutions rather than one-size-fits-all approaches. Our team will work closely with you to understand your business objectives, target audience, and budget constraints before developing a customized strategy that aligns with your specific needs and goals."
  },
  {
    question: "How will digital marketing benefit my business over traditional methods?",
    answer: "Digital marketing offers several advantages over traditional methods, including better targeting capabilities, real-time performance tracking, higher ROI, greater flexibility to adjust campaigns, and the ability to reach customers where they spend most of their time - online. It also allows for more personalized and interactive engagement with your audience."
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer: "The timeline for seeing results varies depending on the strategies implemented. Some channels like PPC can drive immediate traffic, while SEO and content marketing are longer-term investments that typically show significant results within 3-6 months. We provide regular reports and updates so you can track progress throughout the process."
  },
  {
    question: "Is digital marketing suitable for small businesses?",
    answer: "Definitely! Digital marketing is highly scalable and can be adapted to businesses of all sizes. For small businesses, it provides a cost-effective way to compete with larger companies, reach targeted audiences, and grow your customer base without requiring massive budgets."
  },
  {
    question: "How do you ensure that your digital marketing strategies align with our brand identity and values?",
    answer: "We begin every client relationship with a thorough discovery phase to understand your brand voice, values, visual identity, and positioning. All marketing strategies and content we develop are created to authentically represent your brand while resonating with your target audience. We maintain ongoing communication to ensure alignment throughout our partnership."
  }
];