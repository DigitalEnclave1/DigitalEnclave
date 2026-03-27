'use client';

import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobepremierepro, SiAdobeaftereffects, SiCanva } from 'react-icons/si';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GraphicDesign = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
      
  const stats = [
    { number: '50+', label: 'Graphic Design Projects' },
    { number: '30+', label: 'Satisfied Clients' },
    { number: '5+', label: 'Design Experts' },
  ];

  const features = [
    { 
      title: 'Creative Excellence',
      description: 'Deliver visually stunning designs that communicate your brand message effectively.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14">
          <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM20 34L10 24L13.414 20.586L20 27.172L34.586 12.586L38 16L20 34Z" fill="#9333ea"/>
        </svg>
      )
    },
    {
      title: 'Premium Quality',
      description: 'Receive high-quality designs that stand out in the digital landscape.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14">
          <path d="M24 4L30.31 16.76L44 19.48L34 29.24L36.52 43.02L24 36.56L11.48 43.02L14 29.24L4 19.48L17.69 16.76L24 4Z" fill="#9333ea"/>
        </svg>
      )
    },
    {
      title: 'Brand-Focused Designs',
      description: 'Create visual identities that align perfectly with your brand values and goals.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14">
          <rect x="4" y="8" width="40" height="28" rx="2" fill="#9333ea"/>
          <path d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V14H4V10Z" fill="#2E7D32"/>
          <circle cx="8" cy="11" r="1.5" fill="white"/>
          <circle cx="12" cy="11" r="1.5" fill="white"/>
          <circle cx="16" cy="11" r="1.5" fill="white"/>
          <rect x="8" y="18" width="32" height="2" rx="1" fill="white"/>
          <rect x="8" y="22" width="20" height="2" rx="1" fill="white"/>
          <rect x="8" y="26" width="24" height="2" rx="1" fill="white"/>
          <rect x="8" y="30" width="16" height="2" rx="1" fill="white"/>
        </svg>
      )
    }
  ];

  const services = [
    {
      title: 'Brand Identity',
      description: 'We create comprehensive brand identity packages including logos, color palettes, typography, and brand guidelines that establish a strong and memorable presence.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20">
          <path d="M40 16L12 28L40 40L68 28L40 16Z" stroke="#9333ea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 34V50L40 58L56 50V34" stroke="#9333ea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 28V44" stroke="#9333ea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Print Design',
      description: 'From business cards to brochures, posters to packaging, our print design services ensure your brand makes a lasting impression in physical form.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20">
          <rect x="15" y="20" width="50" height="40" rx="3" stroke="#9333ea" strokeWidth="3"/>
          <path d="M25 30H55" stroke="#9333ea" strokeWidth="3" strokeLinecap="round"/>
          <path d="M25 40H55" stroke="#9333ea" strokeWidth="3" strokeLinecap="round"/>
          <path d="M25 50H45" stroke="#9333ea" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Digital Graphics',
      description: 'Engage your audience with eye-catching social media graphics, web banners, email headers, and digital ads designed for maximum impact online.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20">
          <rect x="10" y="16" width="60" height="48" rx="3" stroke="#9333ea" strokeWidth="3"/>
          <path d="M10 26H70" stroke="#9333ea" strokeWidth="3"/>
          <circle cx="15" cy="21" r="2" fill="#9333ea"/>
          <circle cx="22" cy="21" r="2" fill="#9333ea"/>
          <circle cx="29" cy="21" r="2" fill="#9333ea"/>
          <rect x="20" y="36" width="40" height="20" rx="2" stroke="#9333ea" strokeWidth="3"/>
        </svg>
      )
    },
    {
      title: 'Illustration & Infographics',
      description: 'Transform complex information into clear, engaging visuals with our custom illustrations and data-driven infographics.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20">
          <rect x="15" y="15" width="50" height="50" rx="3" stroke="#9333ea" strokeWidth="3"/>
          <rect x="25" y="25" width="10" height="30" rx="1" fill="#9333ea" fillOpacity="0.3" stroke="#9333ea" strokeWidth="2"/>
          <rect x="45" y="35" width="10" height="20" rx="1" fill="#9333ea" fillOpacity="0.3" stroke="#9333ea" strokeWidth="2"/>
          <circle cx="30" cy="20" r="2" fill="#9333ea"/>
          <circle cx="50" cy="30" r="2" fill="#9333ea"/>
        </svg>
      )
    }
  ];

  const designTools = [
    { name: 'Adobe Photoshop', icon: <SiAdobephotoshop className="text-3xl text-purple-600 sm:text-4xl" /> },
    { name: 'Adobe Illustrator', icon: <SiAdobeillustrator className="text-3xl text-purple-600 sm:text-4xl" /> },
    { name: 'Adobe InDesign', icon: <SiAdobeindesign className="text-3xl text-purple-600 sm:text-4xl" /> },
    { name: 'Adobe Premiere Pro', icon: <SiAdobepremierepro className="text-3xl text-purple-600 sm:text-4xl" /> },
    { name: 'Adobe After Effects', icon: <SiAdobeaftereffects className="text-3xl text-purple-600 sm:text-4xl" /> },
    { name: 'Canva', icon: <SiCanva className="text-3xl text-purple-600 sm:text-4xl" /> }
  ];

  const designProcess = [
    { 
      step: '1. Discovery & Strategy', 
      description: 'We begin by understanding your brand, goals, target audience, and competition to develop a clear design strategy.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <circle cx="25" cy="25" r="15" stroke="#9333ea" strokeWidth="2"/>
          <path d="M35 35L45 45" stroke="#9333ea" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      step: '2. Concept Development', 
      description: 'We explore creative directions and develop initial concepts that align with your brand strategy.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <rect x="15" y="15" width="30" height="30" rx="2" stroke="#9333ea" strokeWidth="2"/>
          <path d="M15 25H45" stroke="#9333ea" strokeWidth="2"/>
          <circle cx="22" cy="20" r="2" fill="#9333ea"/>
          <circle cx="30" cy="20" r="2" fill="#9333ea"/>
          <circle cx="38" cy="20" r="2" fill="#9333ea"/>
          <path d="M22 35L38 35" stroke="#9333ea" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      step: '3. Design Creation', 
      description: 'Our designers craft polished visuals based on approved concepts, focusing on aesthetics and functionality.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <path d="M30 15L45 30L30 45L15 30L30 15Z" stroke="#9333ea" strokeWidth="2"/>
          <circle cx="30" cy="30" r="5" fill="#9333ea" fillOpacity="0.3" stroke="#9333ea" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      step: '4. Revision & Refinement', 
      description: 'We collaborate with you to refine and perfect the designs, incorporating your feedback and making adjustments as needed.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <path d="M15 30C15 21.7157 21.7157 15 30 15C38.2843 15 45 21.7157 45 30C45 38.2843 38.2843 45 30 45C21.7157 45 15 38.2843 15 30Z" stroke="#9333ea" strokeWidth="2"/>
          <path d="M25 30L30 35L37 26" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      step: '5. Finalization & Delivery', 
      description: 'We prepare and deliver final files in all necessary formats for both digital and print applications.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <rect x="10" y="15" width="25" height="30" rx="2" stroke="#9333ea" strokeWidth="2"/>
          <path d="M35 30H50" stroke="#9333ea" strokeWidth="2"/>
          <path d="M45 25L50 30L45 35" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const digitalServices = [
    {
      title: "Logo Design",
      description: "Professional, memorable logos that capture your brand essence.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <circle cx="32" cy="32" r="16" stroke="#9333ea" strokeWidth="3" />
          <path d="M24 32L40 32" stroke="#9333ea" strokeWidth="3" strokeLinecap="round" />
          <path d="M32 24L32 40" stroke="#9333ea" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Branding Materials",
      description: "Comprehensive brand assets to establish your visual identity.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <rect x="16" y="16" width="32" height="32" rx="4" stroke="#9333ea" strokeWidth="3" />
          <path d="M16 26H48" stroke="#9333ea" strokeWidth="3" />
          <circle cx="24" cy="21" r="2" fill="#9333ea" />
          <path d="M24 36L40 36" stroke="#9333ea" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 42L36 42" stroke="#9333ea" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Social Media Graphics",
      description: "Engaging visuals designed for maximum impact across platforms.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <path d="M23 46C14.7157 46 8 39.2843 8 31C8 22.7157 14.7157 16 23 16H41C49.2843 16 56 22.7157 56 31C56 39.2843 49.2843 46 41 46H23Z" stroke="#9333ea" strokeWidth="3" />
          <circle cx="22" cy="31" r="4" fill="#9333ea" />
          <circle cx="32" cy="31" r="4" fill="#9333ea" />
          <circle cx="42" cy="31" r="4" fill="#9333ea" />
        </svg>
      ),
    },
    {
      title: "Illustrations",
      description: "Custom artwork that visually communicates your brand story.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <path d="M16 16L32 8L48 16L56 32L48 48L32 56L16 48L8 32L16 16Z" stroke="#9333ea" strokeWidth="3" />
          <circle cx="32" cy="32" r="8" fill="#9333ea" fillOpacity="0.3" stroke="#9333ea" strokeWidth="2" />
        </svg>
      ),
    },
  ];
    
  const faqs = [
    { 
      question: "What graphic design services do you offer?",
      answer: "We offer a comprehensive range of graphic design services including brand identity design (logos, color palettes, typography), print materials (business cards, brochures, packaging), digital graphics (social media graphics, web banners, email templates), custom illustrations and infographics, motion graphics and animation, and marketing collateral. Our team can handle any design challenge to help your brand make a lasting impression."
    },
    { 
      question: "How does your graphic design process work?",
      answer: "Our design process includes: 1) Discovery & Strategy - understanding your brand and goals, 2) Concept Development - exploring creative directions, 3) Design Creation - crafting polished visuals, 4) Revision & Refinement - incorporating your feedback, and 5) Finalization & Delivery - providing files in all necessary formats. This collaborative approach ensures designs that are both visually stunning and strategically effective."
    },
    { 
      question: "What makes your graphic design services different from others?",
      answer: "What sets us apart is our unique combination of strategic thinking, creative excellence, and technical expertise. We don't just create beautiful designs; we develop visual solutions that align with your business objectives and connect with your target audience. Our team stays at the forefront of design trends while maintaining timeless principles, and we pride ourselves on exceptional communication throughout the process."
    },
    { 
      question: "How much do your graphic design services cost?",
      answer: "Our pricing varies based on the scope, complexity, and timeline of each project. We offer flexible pricing options including project-based quotes, retainer packages for ongoing design needs, and custom packages tailored to your specific requirements. We're committed to providing excellent value and will work with you to find a solution that fits your budget while meeting your design needs."
    },
    { 
      question: "How long does a typical graphic design project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple projects like a social media graphic may take 2-3 days, while comprehensive brand identity packages might require 4-6 weeks. During our initial consultation, we'll discuss your timeline needs and provide a realistic estimate for your specific project. We're committed to meeting deadlines while maintaining the highest quality standards."
    },
    { 
      question: "Do you offer revisions to design concepts?",
      answer: "Yes, revisions are an integral part of our design process. Our standard packages include multiple rounds of revisions to ensure you're completely satisfied with the final result. We value your feedback and work collaboratively to refine designs until they perfectly align with your vision and objectives."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-purple-700 to-indigo-900">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-40 h-40 bg-white rounded-full sm:w-72 sm:h-72 top-10 left-10 blur-3xl"></div>
          <div className="absolute w-48 h-48 bg-purple-400 rounded-full bottom-10 right-10 sm:w-96 sm:h-96 blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }} 
              className="w-full text-center md:text-left md:w-1/2"
            >
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Elevate Your Brand with Stunning <span className="text-purple-300">Graphic Design</span>
              </h1>
              <p className="mt-6 text-lg text-purple-100 sm:text-xl">
                We craft compelling visuals that enhance your brand identity and captivate your audience, ensuring your message stands out.
              </p>
              <div className="flex justify-center mt-8 space-x-4 md:justify-start">
                <Link href="/contact" className="px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-purple-600 shadow-lg rounded-xl hover:bg-purple-700 hover:shadow-xl">
                  Get Started
                </Link>
                
              </div>
            </motion.div>
            
            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6 }}
              className="relative w-full md:w-1/2"
            >
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <Image 
                  src="/graphic.jpg" 
                  alt="Graphic Design Services" 
                  width={700} 
                  height={500} 
                  className="w-full h-auto transition duration-500 transform hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 text-center transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-lg hover:transform hover:-translate-y-1"
              >
                <div className="text-4xl font-extrabold text-purple-600 sm:text-5xl">{stat.number}</div>
                <div className="mt-2 text-lg text-gray-700 sm:text-xl">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Design Expertise
            </h2>
            <p className="text-lg text-gray-600 sm:text-xl">
              Delivering exceptional visual solutions that help your brand stand out in today's competitive market.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-purple-100 rounded-full">
                  {feature.svg}
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Graphic Design Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive design solutions tailored to your brand's unique needs and objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 text-center transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-6">{service.svg}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Professional Design Tools
            </h2>
            <p className="text-lg text-gray-600">
              We use industry-leading software to create exceptional designs for your brand.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {designTools.map((tool, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4">{tool.icon}</div>
                <div className="text-base font-medium text-center text-gray-900">{tool.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600">
              A strategic approach that delivers results. Here's how we bring your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {designProcess.map((process, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 text-center transition-all duration-300 bg-white border border-purple-100 shadow-md rounded-xl hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-6">{process.svg}</div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{process.step}</h3>
                <p className="text-sm text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Digital Design Services
            </h2>
            <p className="text-lg text-gray-600">
              Custom digital design solutions to enhance your brand's online presence.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {digitalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-purple-100 rounded-full">
                  {service.svg}
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our graphic design services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="overflow-hidden bg-white shadow-md rounded-xl"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full p-6 text-left transition-colors duration-200 hover:bg-purple-50"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-purple-600 transition-transform duration-200 ${openFaqIndex === index ? 'transform rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">{faq.answer}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-purple-700 to-indigo-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-64 h-64 bg-white rounded-full -top-10 -right-10 blur-3xl"></div>
          <div className="absolute w-64 h-64 bg-purple-400 rounded-full -bottom-10 -left-10 blur-3xl"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Transform Your Brand's Visual Identity?
            </h2>
            <p className="mt-4 text-xl text-purple-100">
              Let our design experts create stunning visuals that captivate your audience and elevate your brand.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition duration-300 bg-purple-600 shadow-lg rounded-xl hover:bg-purple-700 hover:shadow-xl">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GraphicDesign;