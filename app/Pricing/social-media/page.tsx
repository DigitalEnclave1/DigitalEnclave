"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";

// Updated color theme to use purple-600 consistently
const colors = {
  primary: "#9333EA",    // purple-600
  secondary: "#8B5CF6",  // Based on purple-600
  light: "#DDD6FE",      // light purple
  background: "#F5F3FF", // very light purple
  text: "#333333",
  textLight: "#5d605d",
};

const SocialMediaPackagePage = () => {
  // State for FAQ accordion
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "What social media platforms do you manage?",
      answer:
        "We manage all major social media platforms including Facebook, Instagram, Twitter, LinkedIn, Pinterest, TikTok, and YouTube. Our team stays up-to-date with the latest trends and algorithm changes across all platforms to ensure your business gets maximum visibility and engagement.",
    },
    {
      question: "How often will you post on my social media accounts?",
      answer:
        "The posting frequency depends on your selected package. Our Starter Package includes 8 posts per month, the Growth Package includes 16 posts per month, and the Premium Package includes 30 posts per month. We can also create a custom posting schedule based on your specific needs and industry best practices.",
    },
    {
      question: "Do you include social media advertising in your packages?",
      answer:
        "Our Premium Package includes social media advertising setup and management. For Starter and Growth packages, advertising can be added for an additional fee. Ad spend is not included in any package and will be billed separately. We'll work with you to determine the appropriate budget based on your business goals and target audience.",
    },
    {
      question: "What types of content do you create?",
      answer:
        "We create a variety of content types including images, graphics, carousels, short videos, stories, and written posts. Our team works closely with you to understand your brand voice and create content that resonates with your target audience. We also incorporate trending formats and topics relevant to your industry to maximize engagement.",
    },
    {
      question: "How do you measure the success of social media campaigns?",
      answer:
        "We provide regular performance reports that track key metrics including follower growth, engagement rates, reach, website traffic, lead generation, and conversions. Our team analyzes these metrics to continually optimize your strategy. We also set specific KPIs based on your business goals to ensure our efforts are driving meaningful results for your business.",
    },
  ];

  return (
    <>
      <div className="px-6 pt-24 pb-12 mx-auto max-w-7xl  bg-white border-2 border-purple-200">
      <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 mt-2 mb-4 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            Subscription Plans
          </span>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-800 md:text-5xl">
            Social Media Marketing Package
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Boost your online presence with our comprehensive Social Marketting Package tailored to your business needs
          </p>
        </div>
        
        <div className="grid gap-8 mt-10 md:grid-cols-3">
          {/* Starter Package */}
          <div className="p-6 transition-all duration-300 border rounded-lg shadow-md hover:shadow-xl" style={{ borderColor: colors.light }}>
            <h2 className="mb-4 text-2xl font-semibold text-purple-600">Starter Package</h2>
            <p className="mb-4 text-gray-600">Establish your social media presence with essential management.</p>
            <div className="flex items-baseline mt-4 mb-2">
                  <span className="text-lg text-gray-500">$</span>
                  <span className="text-4xl font-extrabold text-purple-700">99</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
            
            <ul className="mb-6 space-y-3">
              {["2 social media platforms", "8 posts per month", "Basic content creation", "Monthly performance report"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            
            <button 
              className="w-full py-3 text-white transition-all duration-300 bg-purple-600 rounded-full hover:shadow-md hover:bg-purple-700" 
            >
              Get Started
            </button>
          </div>
          
          {/* Growth Package */}
          <div className="relative p-6 transition-all duration-300 bg-white border border-purple-600 rounded-lg shadow-lg hover:shadow-xl" 
            style={{ transform: "scale(1.02)" }}>
            <div className="absolute px-4 py-1 text-sm font-medium text-white bg-purple-600 rounded-full -top-4 right-4">
              Popular
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-purple-600">Growth Package</h2>
            <p className="mb-4 text-gray-600">Enhance your social media presence and engagement.</p>
            <div className="flex items-baseline mt-4 mb-2">
                  <span className="text-lg text-gray-500">$</span>
                  <span className="text-4xl font-extrabold text-purple-700">199</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
            
            <ul className="mb-6 space-y-3">
              {[
                "4 social media platforms",
                "16 posts per month",
                "Custom content creation",
                "Community management",
                "Bi-weekly performance reports"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            
            <button 
              className="w-full py-3 text-white transition-all duration-300 bg-purple-600 rounded-full hover:shadow-md hover:bg-purple-700" 
            >
              Get Started
            </button>
          </div>
          
          {/* Premium Package */}
          <div className="p-6 transition-all duration-300 border rounded-lg shadow-md hover:shadow-xl  bg-white  border-purple-200" style={{ borderColor: colors.light }}>
            <h2 className="mb-4 text-2xl font-semibold text-purple-600">Premium Package</h2>
            <p className="mb-4 text-gray-600">Complete social media management with advanced strategies.</p>
            <div className="flex items-baseline mt-4 mb-2">
                  <span className="text-lg text-gray-500">$</span>
                  <span className="text-4xl font-extrabold text-purple-700">299</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
            
            <ul className="mb-6 space-y-3">
              {[
                "All major social platforms",
                "30 posts per month",
                "Premium content creation",
                "24/7 community management",
                "Social media advertising",
                "Weekly strategy calls",
                "Competitor analysis",
                "Detailed analytics dashboard"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            
            <button 
              className="w-full py-3 text-white transition-all duration-300 bg-purple-600 rounded-full hover:shadow-md hover:bg-purple-700" 
            >
              Get Started
            </button>
          </div>
        </div>
        
        {/* Custom Package Section */}
        <div className="px-6 py-16 mx-auto mt-12 max-w-7xl rounded-xl bg-purple-50">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-purple-600">Create Your Custom Package</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Need a tailored social media strategy? Fill out the form below and we'll design a custom solution for your business.
            </p>
          </div>
          
          <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Business Name *</label>
                  <input  
                    type="text" 
                    placeholder="Your business name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Business Category</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                    <option value="">Select your industry</option>
                    <option value="retail">Retail</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="technology">Technology</option>
                    <option value="food">Food & Beverage</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number *</label>
                  <input 
                    type="tel" 
                    placeholder="Your phone number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Platforms of Interest</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                    <option value="">Select platforms</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="twitter">Twitter</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="youtube">YouTube</option>
                    <option value="tiktok">TikTok</option>
                    <option value="all">All Platforms</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Monthly Budget (Optional)</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                    <option value="">Select budget range</option>
                    <option value="below500">Below $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2000">$1,000 - $2,000</option>
                    <option value="above2000">Above $2,000</option>
                  </select>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-gray-700">Additional Requirements</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us more about your social media marketing needs" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>
              
              <div className="text-center md:col-span-2">
                <button 
                  type="submit" 
                  className="px-8 py-3 text-white transition-all duration-300 bg-purple-600 rounded-full hover:shadow-lg hover:bg-purple-700"
                >
                  Request Custom Quote
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="px-6 py-16 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-purple-600">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Get answers to common questions about our social media marketing services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="overflow-hidden transition-all duration-300 border border-gray-200 rounded-lg hover:shadow-md">
                <button 
                  className="flex items-center justify-between w-full p-5 text-left bg-white"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-purple-600">{faq.question}</span>
                  <FaChevronDown 
                    className={`transition-transform duration-300 text-purple-600 ${openFaq === index ? 'transform rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className={`transition-all duration-500 overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 bg-white border-t border-gray-200">
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="mb-4 text-gray-600">Still have questions about our social media marketing services?</p>
            <Link href="/contact" 
              className="inline-block px-6 py-3 text-white transition-all duration-300 bg-purple-600 rounded-full hover:shadow-md hover:bg-purple-700"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer is now placed outside of any containing div for proper positioning at the bottom */}
      <Footer />
    </>
  );
};

export default SocialMediaPackagePage;