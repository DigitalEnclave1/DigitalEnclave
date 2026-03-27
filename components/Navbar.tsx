"use client";

import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true); // Always keep navbar visible
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`bg-white shadow-sm py-3 px-6 w-full fixed top-0 left-0 z-40 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container flex items-center justify-between mx-auto">
          {/* Logo Section */}
          
          <div className="flex items-center space-x-2 cursor-pointer ">
          <Link
                href="/"
                className="nav-link "
              >
                <div className="flex">
            <img src="/logo.png" alt="DigitalEnclave Logo" className="h-10" />
            <p className="text-[#8044c9] pt-2.5 pl-4">DigitalEnclave</p>
            </div>
            </Link>
          </div>

          {/* Hamburger Menu Button - Visible on all devices */}
          <button
            className="p-2 text-black transition-all duration-500 md:hidden hover:rotate-90"
            onClick={toggleSidebar}
            aria-label="Open menu"
          >
            <FaBars className="w-6 h-6" />
          </button>

          {/* Desktop Navigation - Hidden on mobile */}
          <ul className="hidden space-x-6 font-medium text-black md:flex">
            <li className="overflow-hidden">
              <Link
                href="/"
                className="nav-link hover:text-[#967bb6] font-medium inline-block transition-all duration-300"
              >
                Home
              </Link>
            </li>

            {/* About Link */}
            <li className="relative overflow-hidden group">
              <Link
                href="/aboutus"
                className="nav-link hover:text-[#967bb6] items-center inline-block transition-all duration-300"
              >
                About
              </Link>
            </li>

            {/* Service Dropdown */}
            <li className="relative group">
              <Link
                href="#"
                className="nav-link hover:text-[#967bb6] flex items-center transition-all duration-300"
              >
                Service <MdKeyboardArrowDown className="ml-1 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-125" />
              </Link>
              <div className="absolute left-0 hidden w-full bg-white rounded-md  top-full group-hover:block min-w-max animate-fadeIn">
                <div className="grid grid-cols-2 gap-6 p-4">
                  {/* Development Section */}
                  <div>
                    <h3 className="px-3 py-1 font-bold text-[#8044c9] border-b border-gray-200 mb-3">Development</h3>
                    <ul>
                      <li className="mb-3 transition-all duration-300">
                        <Link href="/services/websitedevelopment" className="block px-3 py-2 transition-all duration-300 rounded-md hover:bg-purple-50 hover:translate-x-2">
                          <h4 className="font-semibold text-black">Website Development</h4>
                          <p className="text-sm text-gray-600">
                            Specialized Custom Website Development Services.
                          </p>
                        </Link>
                      </li>
                      
                    
                      <li className="transition-all duration-300">
                        <Link href="/services/ui-ux" className="block px-3 py-2 transition-all duration-300 rounded-md hover:bg-purple-50 hover:translate-x-2">
                          <h4 className="font-semibold text-black">UI/UX</h4>
                          <p className="text-sm text-gray-600">
                            Design UI/UX interfaces for effortless user interaction.
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Marketing Section */}
                  <div>
                    <h3 className="px-3 py-1 font-bold text-[#8044c9] border-b border-gray-200 mb-3">Marketing</h3>
                    <ul>
                      <li className="mb-3 transition-all duration-300">
                        <Link href="/services/seo" className="block px-3 py-2 transition-all duration-300 rounded-md hover:bg-purple-50 hover:translate-x-2 ">
                          <h4 className="font-semibold text-black">Search Engine Optimization (SEO)</h4>
                          <p className="text-sm text-gray-600">
                            Enhance Search Engine Ranking with Effective SEO.
                          </p>
                        </Link>
                      </li>
                      <li className="mb-3 transition-all duration-300">
                        <Link href="/services/social-media-marketing" className="block px-3 py-2 transition-all duration-300 rounded-md hover:bg-purple-50 hover:translate-x-2 ">
                          <h4 className="font-semibold text-black">Social Media Marketing (SMM)</h4>
                          <p className="text-sm text-gray-600">
                            Boost online presence, engage audience.
                          </p>
                        </Link>
                      </li>
                      <li className="mb-3 transition-all duration-300">
                        <Link href="/services/graphic-design" className="block px-3 py-2 transition-all duration-300 rounded-md hover:bg-purple-50 hover:translate-x-2 ">
                          <h4 className="font-semibold text-black">Graphic Design</h4>
                          <p className="text-sm text-gray-600">
                            Bringing Ideas to Visual Life.
                          </p>
                        </Link>
                      </li>
                     
                     
                      <li className="transition-all duration-300">
                        <Link href="/services/digital-marketing" className="block px-3 py-2 transition-all duration-300 rounded-md hover:bg-purple-50 hover:translate-x-2 ">
                          <h4 className="font-semibold text-black">Digital Marketing</h4>
                          <p className="text-sm text-gray-600">
                            Designing Digital Paths That Echo with Audiences.
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Pricing with Hover Effect */}
            <li className="relative group">
              <Link
                href="#"
                className="nav-link hover:text-[#967bb6] flex items-center transition-all duration-300"
              >
                Pricing <MdKeyboardArrowDown className="ml-1 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-125" />
              </Link>
              <ul className="absolute left-0 hidden p-4 bg-white rounded-md shadow-lg top-full group-hover:block w-72 animate-fadeIn">
                <li className="mb-3 transition-all duration-300">
                  <Link href="/Pricing/seo-package" className="block px-3 py-2 transition-all duration-300 rounded-md hover:bg-purple-50 hover:translate-x-2 ">
                    <h4 className="font-semibold text-black">SEO Package</h4>
                    <p className="text-sm text-gray-600">
                      Typically offers a range of services including keyword research.
                    </p>
                  </Link>
                </li>
                <li className="mb-3 transition-all duration-300">
                  <Link href="/Pricing/social-media" className="block px-3 py-2 transition-all duration-300 rounded-md hover:bg-purple-50 hover:translate-x-2 ">
                    <h4 className="font-semibold text-black">Social Media Package</h4>
                    <p className="text-sm text-gray-600">
                      Typically offers a range of services tailored to clients' needs, including social media marketing.
                    </p>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="overflow-hidden">
              <Link
                href="/portfolio"
                className="nav-link hover:text-[#967bb6] inline-block transition-all duration-300"
              >
                Our Work
              </Link>
            </li>

            <li className="overflow-hidden">
              <Link
                href="/contact"
                className="nav-link hover:text-[#967bb6] inline-block transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Contact Section - Only visible on desktop when width is greater than 1045px */}
          <div className="items-center hidden space-x-4 lg:flex">
            <Link href="https://wa.me/9862973810">
            <div className="flex items-center text-[#967bb6] font-semibold text-lg ">
              <FaPhoneAlt className="mr-2 animate-bounce" />
              <span>+91 9837675160</span>
            </div>
            </Link>
            <Link href="/contact">
            <button className="border-2 border-purple-700  text-purple-700 px-4 py-2 rounded-full hover:bg-purple-700 hover:text-white transition-all duration-500 cursor-pointer">
              Quick Enquiry
            </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Left Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <img src="/logo.png" alt="DigitalEnclave Logo" className="h-8" />
            <p className="text-purple-700 ml-2">DigitalEnclave</p>
          </div>
          <button 
            onClick={toggleSidebar}
            className="text-gray-500 transition-all duration-300 hover:text-gray-700 hover:rotate-90"
          >
            <MdClose className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto max-h-[calc(100vh-80px)]">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="block py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium side-link"
                onClick={() => setSidebarOpen(false)}
              >
                Home
              </Link>
            </li>
            
            <li>
              <Link
                href="/aboutus"
                className="block py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium side-link"
                onClick={() => setSidebarOpen(false)}
              >
                About
              </Link>
            </li>

            {/* Service Dropdown */}
            <li>
              <button
                className="flex items-center justify-between w-full py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium side-link"
                onClick={() => toggleDropdown("services")}
              >
                Service
                <MdKeyboardArrowDown
                  className={`ml-1 transform transition-transform duration-500 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 transition-all duration-500 ease-in-out overflow-hidden ${
                  activeDropdown === "services" 
                    ? "max-h-[500px] opacity-100 py-2" 
                    : "max-h-0 opacity-0"
                }`}
              >
                {/* Development */}
                <p className="font-bold text-[#8044c9] mb-2 mt-1">Development</p>
                <Link
                  href="/services/websitedevelopment"
                  className="block py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium"
                  onClick={() => setSidebarOpen(false)}
                >
                  Website Development
                </Link>
                
                <Link
                  href="/services/ui-ux"
                  className="block py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium"
                  onClick={() => setSidebarOpen(false)}
                >
                  UI/UX
                </Link>
                
                {/* Marketing */}
                <p className="font-bold text-[#8044c9] mb-2 mt-3">Marketing</p>
                <Link
                  href="/services/seo"
                  className="block py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium"
                  onClick={() => setSidebarOpen(false)}
                >
                  SEO
                </Link>
                <Link
                  href="/services/social-media-marketing"
                  className="block py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium"
                  onClick={() => setSidebarOpen(false)}
                >
                  Social Media Marketing
                </Link>
                <Link
                  href="/services/graphic-design"
                  className="block py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium"
                  onClick={() => setSidebarOpen(false)}
                >
                  Graphic Design
                </Link>
               
                
                <Link
                  href="/services/digital-marketing"
                  className="block py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium"
                  onClick={() => setSidebarOpen(false)}
                >
                  Digital Marketing
                </Link>
              </div>
            </li>

            {/* Pricing Dropdown */}
            <li>
              <button
                className="flex items-center justify-between w-full py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium side-link"
                onClick={() => toggleDropdown("pricing")}
              >
                Pricing
                <MdKeyboardArrowDown
                  className={`ml-1 transform transition-transform duration-500 ${
                    activeDropdown === "pricing" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 transition-all duration-500 ease-in-out overflow-hidden ${
                  activeDropdown === "pricing" 
                    ? "max-h-32 opacity-100 py-2" 
                    : "max-h-0 opacity-0"
                }`}
              >
                <Link
                  href="/Pricing/seo-package"
                  className="block py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium"
                  onClick={() => setSidebarOpen(false)}
                >
                  SEO Package
                </Link>
                <Link
                  href="/Pricing/social-media"
                  className="block py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium"
                  onClick={() => setSidebarOpen(false)}
                >
                  Social Media Package
                </Link>
              </div>
            </li>

            <li>
              <Link
                href="/work"
                className="block py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium side-link"
                onClick={() => setSidebarOpen(false)}
              >
                Our Work
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="block py-2 hover:text-[#967bb6] transition-all duration-300 hover:translate-x-3 hover:scale-105 hover:font-medium side-link"
                onClick={() => setSidebarOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Contact Section */}
          <div className="pt-6 mt-6 border-t border-gray-200">
            <div className="flex items-center text-[#967bb6] font-semibold mb-4">
              <FaPhoneAlt className="mr-2 animate-bounce" />
              <span>+91 9837675160</span>
            </div>

            <button className="w-full border-2 border-[#967bb6] text-[#967bb6] px-4 py-2 rounded-full hover:bg-[#967bb6] hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-lg hover:rotate-1">
              Quick Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Custom keyframes animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        /* Fast movement animations for nav links */
        @keyframes pulse-fast {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes shake-x {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }
        
        @keyframes shake-y {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-2px); }
          75% { transform: translateY(2px); }
        }
        
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
        
        @keyframes bright-flash {
          0% { filter: brightness(1); }
          50% { filter: brightness(1.25); }
          100% { filter: brightness(1); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        
        /* Apply animations to nav links on hover */
        .nav-link:hover {
          animation: shake-x 0.3s ease-in-out;
        }
        
        /* Apply different animations to each nav item */
        .nav-link:nth-child(1):hover {
          animation: pulse-fast 0.3s ease-in-out;
        }
        
        li:nth-child(1) .nav-link:hover {
          animation: shake-x 0.3s ease-in-out;
        }
        
        li:nth-child(2) .nav-link:hover {
          animation: float 0.5s ease-in-out;
        }
        
        li:nth-child(3) .nav-link:hover {
          animation: bright-flash 0.4s ease-in-out;
        }
        
        li:nth-child(4) .nav-link:hover {
          animation: wiggle 0.4s ease-in-out;
        }
        
        li:nth-child(5) .nav-link:hover {
          animation: shake-y 0.3s ease-in-out;
        }
        
        li:nth-child(6) .nav-link:hover {
          animation: pulse-fast 0.3s ease-in-out;
        }
        
        /* Fast sweep effect for mobile sidebar links */
        .side-link {
          position: relative;
          overflow: hidden;
        }
        
        .side-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(150, 123, 182, 0.1), transparent);
          transition: left 0.3s ease;
        }
        
        .side-link:hover::before {
          left: 100%;
        }
      `}</style>
    </>
  );
};

export default Navbar;