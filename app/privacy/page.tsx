import React from 'react';
import Link from "next/link";
<Link href="https://www.DigitalEnclave.vercel.app">DigitalEnclave</Link>
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
} from "react-icons/fa";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-5xl mx-auto overflow-hidden bg-white shadow-2xl rounded-2xl">
          {/* Header Section */}
          <div className="px-8 py-12 text-white bg-gradient-to-r from-purple-600 to-indigo-600">
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-center">
              Privacy Policy
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-center opacity-80">
              Your trust is our priority. Here's how we protect and respect your personal information.
            </p>
          </div>

          {/* Content Sections */}
          <div className="p-12 space-y-10">
            {[
              {
                title: "About Our Privacy Policy",
                content: "At DigitalEnclave, accessible from https://www.DigitalEnclave.vercel.app, protecting our visitors' privacy is paramount. This document outlines the types of information we collect and how we use it.",
                icon: "🔒"
              },
              {
                title: "Information We Collect",
                content: "We follow standard procedures using log files to track website visitors. The information collected includes IP addresses, website details, Internet Service Provider (ISP), timestamps, and anonymous browsing patterns.",
                icon: "📊"
              },
              {
                title: "Cookies and Tracking",
                content: "We use technologies like cookies to measure advertising campaign outcomes. Third-party advertisers may use these to track user interactions, automatically receiving IP addresses in the process.",
                icon: "🍪"
              },
              {
                title: "Third-Party Privacy",
                content: "Our Privacy Policy does not cover other advertisers or websites. We recommend consulting respective third-party privacy policies for comprehensive information.",
                icon: "🌐"
              },
              {
                title: "Children's Privacy",
                content: "We prioritize children's online safety. We do not knowingly collect personal information from children under 13. Parents are encouraged to monitor and guide their children's online activities.",
                icon: "👧"
              }
            ].map((section, index) => (
              <div 
                key={index} 
                className="p-6 transition-all border-l-4 border-purple-600 bg-purple-50 rounded-xl hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <span className="mr-4 text-4xl">{section.icon}</span>
                  <h2 className="text-2xl font-semibold text-purple-800">
                    {section.title}
                  </h2>
                </div>
                <p className="leading-relaxed text-gray-700">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Consent Section */}
            <div className="p-8 text-center bg-indigo-50 rounded-xl">
              <h3 className="mb-4 text-3xl font-bold text-indigo-800">
                Your Consent Matters
              </h3>
              <p className="mb-6 text-xl text-indigo-600">
                By using our website, you consent to our Privacy Policy and agree to its <Link 
                  href="/terms" 
                  className="font-bold text-purple-700 hover:underline"
                >
                   Terms and Conditions
                </Link>.
              </p>
              <Link 
                href="/contact" 
                className="px-8 py-3 text-lg font-semibold text-white transition-all rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                Contact Us for Questions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative py-12 pt-0 pb-0 mt-0 text-black">
        <div
          className="block mb-12 overflow-hidden text-start bg-gray-50 "
          style={{
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            boxSizing: "border-box",
            color: "rgb(0, 0, 0)",
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            height: "285.438px",
            lineHeight: "30px",
            paddingBottom: "65.35px",
            paddingTop: "65.35px",
            textSizeAdjust: "100%",
            unicodeBidi: "isolate",
            width: "100%",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            overflowX: "hidden",
            overflowY: "hidden",
          }}
        >
          <div className="container flex flex-col items-center justify-center px-0 mx-auto md:flex-row">
            {/* Left Section */}
            <div className="md:w-2/3">
              <div className="border-l-4 border-[#a46ede] pl-4">
                <h2 className="text-4xl font-bold leading-tight text-black">
                  Let&apos;s <span className="text-black">connect</span>
                  <span className="text-[#a46ede]"> and turn your vision into reality.</span>
                </h2>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                We are available from 9:00 AM to 6:00 PM, Monday to Friday.
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center justify-center mt-8 md:items-end md:mt-0">
              <p className="text-sm font-semibold tracking-wide text-gray-700">REACH OUT NOW!</p>

              {/* Phone number with WhatsApp link */}
              <a
                href="https://wa.me/9837675160"
                className="text-4xl font-bold text-[#a46ede] my-2 cursor-pointer"
                target="_blank"
              >
                9837675160
              </a>

              <a
                href="/contact"
                className="bg-[#a46ede] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#8b5cf6] border border-[#a46ede] transition duration-300 font-semibold"
              >
                Let's Start Conversation
              </a>
            </div>
          </div>
        </div>
        <div className="container grid grid-cols-1 gap-12 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Development Services Section */}
          <div className="pl-8">
            <h4 className="mb-4 text-xl font-semibold">Development Services</h4>
            <ul>
              <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Website Development</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">App Development</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">System/Software Development</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">UI/UX</Link></li>
            </ul>
          </div>

          {/* Marketing Services Section */}
          <div>
            <h4 className="mb-4 text-xl font-semibold">Marketing Services</h4>
            <ul>
              <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Search Engine Optimization (SEO)</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Social Media Marketing (SMM)</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Graphic Design</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Content Writing</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Pay Per Click</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="pl-5">
            <h4 className="mb-4 text-xl font-semibold">Quick Links</h4>
            <ul>
              <li className="mb-2"><Link href="/about" className="text-[#5d605d] hover:text-[#967bb6]">About Us</Link></li>
              <li className="mb-2"><Link href="/services" className="text-[#5d605d] hover:text-[#967bb6]">Our Services</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-[#5d605d] hover:text-[#967bb6]">Contact Us</Link></li>
              <li className="mb-2"><Link href="/blog" className="text-[#5d605d] hover:text-[#967bb6]">Blog</Link></li>
              <li className="mb-2"><Link href="/career" className="text-[#5d605d] hover:text-[#967bb6]">Career</Link></li>
              <li className="mb-2"><Link href="/our-work" className="text-[#5d605d] hover:text-[#967bb6]">Our Work</Link></li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div className="text-black">
            <h4 className="mb-6 text-xl font-semibold text-center sm:text-left">Connect with Us</h4>
            <ul className="space-y-6">
              <li className="flex items-center text-lg text-[#5d605d] "><FaPhoneAlt className="mr-4   text-[#967bb6] text-2xl" />  <a href="tel:+9801848492" className="text-[#5d605d] hover:text-[#967bb6] hover:underline">9801848492</a>, 01-4796657</li>
              <li className="flex items-center text-lg"><FaEnvelope className="mr-4   text-[#967bb6] text-2xl" />  <a href="mailto:sales@DigitalEnclave.com" className="text-[#5d605d] hover:text-[#967bb6] hover:underline">sales@DigitalEnclave.com</a></li>
              <li className="flex items-center text-lg text-[#5d605d] "><FaMapMarkerAlt className="mr-4   text-[#967bb6] text-2xl" /> Noida, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#967bb6] mt-12 pt-6 text-center text-sm text-black">
          <div className="flex justify-center space-x-6">
            <Link href="/FAQ" className="hover:text-[#967bb6]">FAQ</Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:text-[#967bb6]">Terms & Conditions</Link>
            <span className="mx-2">|</span>
            <Link href="/privacy" className="hover:text-[#967bb6]">Privacy Policy</Link>
          </div>
        </div>
      </footer>
        
      {/* Social Media Section */}
      <div className="bg-[#967bb6] py-4 mt-6 text-center text-white flex justify-between items-center px-6">
        <span className="text-lg text-white">© 2025 DigitalEnclave Infosys. All Rights Reserved.</span>
        <div className="flex space-x-4">
          <a href="https://wa.me/9837675160" target="_blank" className="text-2xl text-white"><FaWhatsapp /></a>
          <a href="#" target="_blank" className="text-2xl text-white"><FaFacebook /></a>
          <a href="#" target="_blank" className="text-2xl text-white"><FaInstagram /></a>
          <a href="#" target="_blank" className="text-2xl text-white"><FaLinkedin /></a>
          <a href="#" target="_blank" className="text-2xl text-white"><FaTwitter /></a>
          <a href="#" target="_blank" className="text-2xl text-white"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;