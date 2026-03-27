'use client';
import { SiAdobexd, SiFigma, SiSketch, SiInvision, SiLaravel, SiFramer } from 'react-icons/si';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const UiUxDesign = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
    const toggleFaq = (index: number) => {
      if (openFaqIndex === index) {
        setOpenFaqIndex(null);
      } else {
        setOpenFaqIndex(index);
      }
    };

    const stats = [
        { number: '200+', label: 'UI/UX Projects' },
        { number: '350+', label: 'Satisfied Clients' },
        { number: '40+', label: 'Design Experts' },
    ];

  const features = [
    { 
      title: 'Satisfaction Guarantee',
      description: 'Design eye-catching UI/UX interfaces for effortless user interaction.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM20 34L10 24L13.414 20.586L20 27.172L34.586 12.586L38 16L20 34Z" fill="#7d2fd0"/>
        </svg>
      )
    },
    {
      title: 'Best Quality Work',
      description: 'Excellence and innovation define our design solutions.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L30.31 16.76L44 19.48L34 29.24L36.52 43.02L24 36.56L11.48 43.02L14 29.24L4 19.48L17.69 16.76L24 4Z" fill="#7d2fd0"/>
        </svg>
      )
    },
    {
      title: 'Interactive Interface',
      description: 'Create an engaging interface for an optimal user experience.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="40" height="28" rx="2" fill="#7d2fd0"/>
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
      title: 'E-Commerce',
      description: 'Explore how our UI/UX design expertise optimizes user journeys to create intuitive, conversion-focused experiences for the e-commerce sector.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M55 20H25C22 20 20 22 20 25V55C20 58 22 60 25 60H55C58 60 60 58 60 55V25C60 22 58 20 55 20Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M35 20V16C35 14 37 12 39 12H41C43 12 45 14 45 16V20" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 32H60" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M35 44H45" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'E-Learning',
      description: 'Discover how our tailored UI/UX design solutions enhance educational platforms, creating intuitive learning experiences in the evolving e-learning landscape.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 16L12 28L40 40L68 28L40 16Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 34V50L40 58L56 50V34" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 28V44" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Travel And Trekking',
      description: 'Learn how our specialized UI/UX design solutions enhance travel websites, booking processes, and ensure memorable journeys in the travel and trekking industries.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 12L16 32H22V52H36V40H44V52H58V32H64L40 12Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 32H50" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Logistics',
      description: 'Explore how our UI/UX design solutions improve fleet management, streamline tracking processes, and enhance user interfaces for seamless logistics operations.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="16" width="60" height="48" rx="3" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M10 26H70" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M20 40H60" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M20 50H50" stroke="#7d2fd0" strokeWidth="3"/>
          <circle cx="15" cy="21" r="2" fill="#7d2fd0"/>
          <circle cx="22" cy="21" r="2" fill="#7d2fd0"/>
          <circle cx="29" cy="21" r="2" fill="#7d2fd0"/>
        </svg>
      )
    }
  ];

  const designTools = [
    { name: 'Figma', icon: <SiFigma className="text-4xl text-purple-600" /> },
    { name: 'Adobe XD', icon: <SiAdobexd className="text-4xl text-purple-600" /> },
    { name: 'Sketch', icon: <SiSketch className="text-4xl text-purple-600" /> },
    { name: 'InVision', icon: <SiInvision className="text-4xl text-purple-600" /> },
    { name: 'Marvel', icon: <SiLaravel className="text-4xl text-purple-600" /> },
    { name: 'Framer', icon: <SiFramer className="text-4xl text-purple-600" /> }
  ];

  const designProcess = [
    { 
      step: '1. Research & Discovery', 
      description: 'We conduct thorough user research, competitor analysis, and stakeholder interviews to understand your target audience and business goals.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="15" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M35 35L45 45" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      step: '2. Information Architecture', 
      description: 'We organize content and features in a logical structure that ensures intuitive navigation and optimal user flow.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="10" width="30" height="10" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="10" y="30" width="15" height="10" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="35" y="30" width="15" height="10" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="20" y="50" width="20" height="10" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M30 20V25" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M30 25H18" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M30 25H42" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M18 40V45" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M18 45H30" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M42 40V45" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M42 45H30" stroke="#7d2fd0" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      step: '3. Wireframing', 
      description: 'We create low-fidelity mockups that outline the structural layout and basic functionality without visual design elements.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="40" height="40" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="15" y="15" width="30" height="5" rx="1" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="15" y="25" width="30" height="5" rx="1" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="15" y="35" width="15" height="10" rx="1" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="35" y="35" width="10" height="10" rx="1" stroke="#7d2fd0" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      step: '4. Visual Design', 
      description: 'We develop the visual language of your product, including color schemes, typography, iconography, and other visual elements.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="10" fill="#7d2fd0" fillOpacity="0.2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="35" y="15" width="15" height="10" rx="2" fill="#7d2fd0" fillOpacity="0.4" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M15 40L25 35L35 45L45 40" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      step: '5. Prototyping', 
      description: 'We create interactive prototypes that simulate the user experience, allowing stakeholders to test functionality before development.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="20" height="40" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="15" y="15" width="10" height="5" rx="1" fill="#7d2fd0" fillOpacity="0.3"/>
          <rect x="15" y="25" width="10" height="10" rx="1" fill="#7d2fd0" fillOpacity="0.3"/>
          <rect x="15" y="40" width="10" height="5" rx="1" fill="#7d2fd0" fillOpacity="0.3"/>
          <rect x="35" y="20" width="15" height="25" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M42.5 42.5C43.3284 42.5 44 41.8284 44 41C44 40.1716 43.3284 39.5 42.5 39.5C41.6716 39.5 41 40.1716 41 41C41 41.8284 41.6716 42.5 42.5 42.5Z" fill="#7d2fd0"/>
        </svg>
      )
    },
    { 
      step: '6. User Testing', 
      description: 'We conduct usability testing with real users to identify pain points and areas for improvement in the design.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="20" r="8" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M10 45C10 38.3726 15.3726 33 22 33H28C34.6274 33 40 38.3726 40 45V50H10V45Z" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M40 25L45 30L50 20" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      step: '7. Refinement', 
      description: 'Based on testing results, we iterate and refine the design to optimize user experience and achieve business goals.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30C15 21.7157 21.7157 15 30 15C38.2843 15 45 21.7157 45 30C45 38.2843 38.2843 45 30 45C21.7157 45 15 38.2843 15 30Z" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M30 15V10" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M45 30H50" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M30 45V50" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M15 30H10" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M25 30L30 35L37 26" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      step: '8. Design Handoff', 
      description: 'We provide development-ready assets and specifications to ensure accurate implementation of the design.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="25" height="30" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="15" y="20" width="15" height="5" rx="1" fill="#7d2fd0" fillOpacity="0.3"/>
          <rect x="15" y="30" width="15" height="5" rx="1" fill="#7d2fd0" fillOpacity="0.3"/>
          <path d="M35 30H50" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M45 25L50 30L45 35" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const uiuxFeatures = [
    {
      title: 'User-Centered Design',
      description: 'We prioritize user needs and preferences, creating interfaces that are intuitive, accessible, and enjoyable to use.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="22" r="10" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M16 50C16 42.268 23.163 36 32 36C40.837 36 48 42.268 48 50" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Responsive Design',
      description: 'Our designs adapt seamlessly to all screen sizes, ensuring a consistent experience across desktop, tablet, and mobile devices.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="32" height="24" rx="2" stroke="#7d2fd0" strokeWidth="3"/>
          <rect x="44" y="20" width="12" height="20" rx="2" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M8 44h32" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M24 44v4" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M50 44h-6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M47 44v4" stroke="#7d2fd0" strokeWidth="3"/>
        </svg>
      )
    },
    {
      title: 'Visual Consistency',
      description: 'We ensure consistent branding, typography, colors, and UI elements throughout your product for a cohesive user experience.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="14" height="32" rx="2" stroke="#7d2fd0" strokeWidth="3"/>
          <rect x="25" y="16" width="14" height="32" rx="2" stroke="#7d2fd0" strokeWidth="3"/>
          <rect x="42" y="16" width="14" height="32" rx="2" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M12 24h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M29 24h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M46 24h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M12 32h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M29 32h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M46 32h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M12 40h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M29 40h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M46 40h6" stroke="#7d2fd0" strokeWidth="3"/>
        </svg>
      )
    },
    {
      title: 'Interactive Prototyping',
      description: 'Experience your product before development with our high-fidelity interactive prototypes that simulate real user interactions.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="40" height="40" rx="4" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M26 32l16 0" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
          <path d="M32 26l0 16" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  const digitalServices = [
    {
      title: "Website Development",
      description: "Custom, responsive website designs that elevate your online presence.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="48" height="32" rx="4" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M8 24H56" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="16" cy="20" r="2" fill="#7d2fd0" />
          <circle cx="24" cy="20" r="2" fill="#7d2fd0" />
          <circle cx="32" cy="20" r="2" fill="#7d2fd0" />
          <rect x="16" y="32" width="32" height="4" rx="2" fill="#7d2fd0" />
          <rect x="16" y="40" width="20" height="4" rx="2" fill="#7d2fd0" />
        </svg>
      ),
    },
    
    {
      title: "Search Engine Optimization (SEO)",
      description: "Strategic optimization for enhanced visibility and organic traffic growth.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="16" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M40 40L52 52" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Graphic Design",
      description: "Captivating visuals that communicate your brand's essence effectively.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8L8 56H56L32 8Z" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="32" cy="40" r="4" fill="#7d2fd0" />
        </svg>
      ),
    },
  ];
  
    
  const faqs = [
    { 
      question: "What is UI/UX design, and why is it important?",
      answer: "UI (User Interface) design focuses on the visual elements users interact with, while UX (User Experience) design encompasses the entire journey and how users feel when using a product. Good UI/UX design is crucial because it improves user satisfaction, increases conversion rates, builds trust, reduces development costs, and gives you a competitive advantage in the market."
    },
    { 
      question: "What does the UI/UX design process involve?",
      answer: "Our UI/UX design process typically includes: 1) Research and Discovery, 2) Information Architecture, 3) Wireframing, 4) Visual Design, 5) Prototyping, 6) User Testing, 7) Refinement, and 8) Design Handoff. This comprehensive approach ensures we create user-centered designs that meet both user needs and business objectives."
    },
    { 
      question: "How does responsive design factor into UI/UX?",
      answer: "Responsive design ensures your website or application adapts seamlessly to different screen sizes and devices. This is a critical aspect of UI/UX as it provides a consistent experience regardless of how users access your product, improves usability, enhances SEO performance, and ensures you reach users across all devices."
    },
    { 
      question: "How can UI/UX design contribute to brand consistency?",
      answer: "UI/UX design establishes and reinforces brand consistency by implementing standardized color schemes, typography, spacing, imagery style, interaction patterns, and tone of voice throughout your digital products. This consistency builds recognition, trust, and a professional image while creating a cohesive experience across all touchpoints."
    },
    { 
      question: "How can UI/UX design improve user engagement?",
      answer: "UI/UX design improves user engagement by creating intuitive navigation, minimizing cognitive load, incorporating meaningful animations, designing clear calls-to-action, personalizing experiences, optimizing page load speeds, and implementing gamification elements. These strategies make your digital product more engaging, enjoyable, and effective."
    },
    { 
      question: "How does UI/UX design impact conversion rates and business goals?",
      answer: "Well-executed UI/UX design directly impacts business success by streamlining user journeys, removing friction points, clarifying value propositions, building trust through professional design, optimizing calls-to-action, and creating emotional connections. These improvements lead to higher conversion rates, increased customer retention, and stronger brand loyalty."
    },
    { 
      question: "What UI/UX design tools do you use?",
      answer: "We utilize industry-leading design tools including Figma, Adobe XD, Sketch, InVision, Marvel, and Framer, among others. These tools allow us to create wireframes, mockups, prototypes, and design systems efficiently while enabling seamless collaboration with stakeholders and development teams."
    },
    { 
      question: "How do you measure the success of a UI/UX design?",
      answer: "We measure UI/UX success through key metrics including task completion rates, time-on-task, error rates, user satisfaction scores, conversion rates, retention rates, and engagement metrics. We also conduct usability testing and gather qualitative feedback to continuously improve the user experience."
    },
    { 
      question: "Do you provide UI/UX design for existing products?",
      answer: "Yes, we provide UI/UX redesign services for existing products. We begin with a comprehensive audit of your current design, identify pain points and opportunities, and then develop solutions that enhance usability while preserving what's working well. Our approach ensures minimal disruption to existing users while significantly improving their experience."
    }
  ];
    

  const trustedCompanies = [
    { name: 'Redpoint', logo: 'redpoint.png' },
    { name: 'Bluecanvas', logo: 'bluecanvas.png' },
    { name: 'Kaya', logo: 'kaya.png' },
    { name: 'Siteks', logo: 'siteks.png' },
    { name: 'Nexus', logo: 'nexus.png' },
    { name: 'Continuum', logo: 'continuum.png' }
  ];

  return (
    <div className="bg-gray-50">
{/* Hero Section */}
<section className="relative py-24 overflow-hidden text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 md:py-28">
  {/* Background Decoration */}
  <div className="absolute inset-0">
    <div className="absolute w-64 h-64 bg-purple-300 rounded-full opacity-30 blur-3xl top-10 left-10 md:w-80 md:h-80"></div>
    <div className="absolute bg-indigo-400 rounded-full w-80 h-80 opacity-30 blur-3xl bottom-10 right-10 md:w-96 md:h-96"></div>
  </div>

  <div className="relative z-10 px-6 mx-auto max-w-7xl md:px-12 lg:px-16">
    <div className="flex flex-col items-center md:flex-row md:items-center">
      
      {/* Text Content */}
      <div className="w-full text-center md:w-1/2 md:text-left">
        <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
          Elevate Your <span className="text-purple-200">UI/UX</span> Design
        </h1>
        <p className="mb-8 text-base text-purple-100 md:text-lg">
          We craft seamless digital experiences by blending aesthetics with intuitive functionality. Let’s build designs that captivate and convert.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <Link href="/contact" className="px-6 py-3 text-base font-semibold text-purple-900 transition-all bg-white rounded-lg shadow-lg hover:bg-purple-300 hover:text-purple-900 md:px-8 md:py-4 md:text-lg">
            Get Started
          </Link>
        </div>
      </div>

      {/* Image Section (Pushed Right & More Responsive) */}
      <div className="w-full md:w-[50%] flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg">
          <div className="relative z-10 overflow-hidden bg-white rounded-lg shadow-2xl">
            <Image 
              src="/ui-ux.jpg" 
              alt="UI/UX Design" 
              width={700} 
              height={500}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
          {/* Glow Effects */}
          <div className="absolute top-0 right-0 -mt-6 -mr-6 bg-purple-300 rounded-full w-28 h-28 opacity-40 blur-3xl md:w-40 md:h-40 md:-mt-10 md:-mr-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-indigo-300 rounded-full opacity-40 blur-3xl md:w-32 md:h-32 md:-mb-8 md:-ml-8"></div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Stats Section */}
<section className="py-12 bg-gradient-to-b from-purple-50 to-white md:py-16">
  <div className="container px-6 mx-auto md:px-12 lg:px-16">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="relative p-4 text-center transition-all duration-300 bg-white shadow-md bg-opacity-80 backdrop-blur-lg rounded-xl hover:shadow-lg hover:scale-105 sm:p-5"
        >
          {/* Floating Glow Effect */}
          <div className="absolute inset-0 w-full h-full bg-purple-100 opacity-20 rounded-xl blur-xl"></div>
          
          <div className="relative z-10">
            <div className="mb-1 text-2xl font-bold text-purple-700 sm:text-3xl">{stat.number}</div>
            <div className="text-xs font-medium text-gray-700 sm:text-sm">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Features Section */}
<section className="relative py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
  {/* Abstract Shapes Background */}
  <div className="absolute inset-0 z-0 opacity-10">
    <div className="absolute bg-purple-600 rounded-full -top-20 -left-20 w-96 h-96"></div>
    <div className="absolute right-0 bg-indigo-400 rounded-full top-1/2 w-80 h-80"></div>
    <div className="absolute bottom-0 w-64 h-64 bg-purple-400 rounded-full left-1/3"></div>
  </div>
  
  <div className="container relative z-10 px-6 mx-auto md:px-12 lg:px-16">
    {/* Section Header */}
    <div className="max-w-3xl mx-auto mb-20 text-center">
      <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">Our Expertise</span>
      <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
        Crafting <span className="text-purple-600">Experiences</span>, One Pixel at a Time
      </h2>
      <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"></div>
      <p className="text-gray-600 md:text-lg">
        Our UI/UX approach combines creativity, functionality, and user psychology to create experiences that delight and engage.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      
      {/* Feature 1: Human-Centered Design */}
      <div className="relative p-8 transition-all duration-500 bg-white border border-purple-100 shadow-xl rounded-2xl hover:shadow-2xl hover:-translate-y-2 group">
        <div className="flex items-center justify-center w-20 h-20 mb-6 text-white transition-transform duration-300 shadow-lg bg-gradient-to-br from-purple-600 to-indigo-500 rounded-2xl group-hover:scale-110">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
          </svg>
        </div>
        <h3 className="mb-4 text-2xl font-semibold text-gray-900 transition-colors group-hover:text-purple-600">Human-Centered Design</h3>
        <p className="text-gray-700">We focus on user needs, creating intuitive and seamless experiences that feel natural and delightful.</p>
        <div className="absolute inset-0 transition-all duration-300 border-2 border-transparent rounded-2xl group-hover:border-purple-400"></div>
        <div className="pt-6 mt-6 border-t border-gray-100">
          <a href="#" className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800">
            Learn more 
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

      {/* Feature 2: Pixel-Perfect Precision */}
      <div className="relative p-8 transition-all duration-500 bg-white border border-purple-100 shadow-xl rounded-2xl hover:shadow-2xl hover:-translate-y-2 group">
        <div className="flex items-center justify-center w-20 h-20 mb-6 text-white transition-transform duration-300 shadow-lg bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl group-hover:scale-110">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h3 className="mb-4 text-2xl font-semibold text-gray-900 transition-colors group-hover:text-purple-600">Pixel-Perfect Precision</h3>
        <p className="text-gray-700">We focus on every detail, ensuring flawless design elements that combine beauty and functionality.</p>
        <div className="absolute inset-0 transition-all duration-300 border-2 border-transparent rounded-2xl group-hover:border-purple-400"></div>
        <div className="pt-6 mt-6 border-t border-gray-100">
          <a href="#" className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800">
            Learn more 
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

      {/* Feature 3: Seamless User Journeys */}
      <div className="relative p-8 transition-all duration-500 bg-white border border-purple-100 shadow-xl rounded-2xl hover:shadow-2xl hover:-translate-y-2 group">
        <div className="flex items-center justify-center w-20 h-20 mb-6 text-white transition-transform duration-300 shadow-lg bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl group-hover:scale-110">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h3 className="mb-4 text-2xl font-semibold text-gray-900 transition-colors group-hover:text-purple-600">Seamless User Journeys</h3>
        <p className="text-gray-700">We create smooth and efficient user flows that enhance interaction and drive engagement.</p>
        <div className="absolute inset-0 transition-all duration-300 border-2 border-transparent rounded-2xl group-hover:border-purple-400"></div>
        <div className="pt-6 mt-6 border-t border-gray-100">
          <a href="#" className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800">
            Learn more 
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Services Section */}
{/* Services Section */}
<section className="py-20 bg-white">
  <div className="container px-6 mx-auto md:px-12 lg:px-16">
    {/* Section Header */}
    <div className="max-w-3xl mx-auto mb-16 text-center">
      <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-purple-600 rounded-md bg-purple-50">Our Services</span>
      <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl">
        Tailored UI/UX Solutions for Every Industry
      </h2>
      <div className="w-16 h-1 mx-auto mb-6 bg-purple-600"></div>
      <p className="text-gray-600">
        Discover how our custom UI/UX design services are tailored to meet the unique needs of various industries and help you achieve your business goals.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      
      {/* Service 1: Mobile App Design */}
      <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-purple-200 group">
        <div className="p-6">
          <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-purple-600 rounded-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zM3 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-medium text-gray-900 group-hover:text-purple-600">
            Mobile App Design
          </h3>
          <p className="text-gray-600">
            Create engaging mobile experiences with intuitive navigation and beautiful interfaces.
          </p>
        </div>
        <div className="px-6 py-4 text-sm text-purple-600 border-t border-gray-100">
          <a href="#" className="inline-flex items-center font-medium">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>

      {/* Service 2: Web Interface Design */}
      <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-purple-200 group">
        <div className="p-6">
          <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-purple-600 rounded-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-medium text-gray-900 group-hover:text-purple-600">
            Web Interface Design
          </h3>
          <p className="text-gray-600">
            Craft responsive web interfaces that provide seamless experiences across all devices.
          </p>
        </div>
        <div className="px-6 py-4 text-sm text-purple-600 border-t border-gray-100">
          <a href="#" className="inline-flex items-center font-medium">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>

      {/* Service 3: UX Research */}
      <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-purple-200 group">
        <div className="p-6">
          <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-purple-600 rounded-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-medium text-gray-900 group-hover:text-purple-600">
            UX Research
          </h3>
          <p className="text-gray-600">
            Understand your users through data-driven research, usability testing, and user interviews.
          </p>
        </div>
        <div className="px-6 py-4 text-sm text-purple-600 border-t border-gray-100">
          <a href="#" className="inline-flex items-center font-medium">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>

      {/* Service 4: Design Systems */}
      <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-purple-200 group">
        <div className="p-6">
          <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-purple-600 rounded-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-medium text-gray-900 group-hover:text-purple-600">
            Design Systems
          </h3>
          <p className="text-gray-600">
            Create scalable design systems that ensure consistency across all products and platforms.
          </p>
        </div>
        <div className="px-6 py-4 text-sm text-purple-600 border-t border-gray-100">
          <a href="#" className="inline-flex items-center font-medium">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </div>
    
    {/* Features Grid */}
    <div className="max-w-6xl mx-auto mt-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        
        {/* Feature 1: Human-Centered Design */}
        <div className="p-6 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-purple-200 group">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-white bg-purple-600 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-600">Human-Centered Design</h3>
          </div>
          <p className="text-gray-600">We focus on user needs, creating intuitive and seamless experiences that feel natural and delightful.</p>
        </div>

        {/* Feature 2: Pixel-Perfect Precision */}
        <div className="p-6 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-purple-200 group">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-white bg-purple-600 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-600">Pixel-Perfect Precision</h3>
          </div>
          <p className="text-gray-600">We focus on every detail, ensuring flawless design elements that combine beauty and functionality.</p>
        </div>

        {/* Feature 3: Seamless User Journeys */}
        <div className="p-6 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-purple-200 group">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-white bg-purple-600 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-600">Seamless User Journeys</h3>
          </div>
          <p className="text-gray-600">We create smooth and efficient user flows that enhance interaction and drive engagement.</p>
        </div>

      </div>
    </div>
  </div>
</section>

        {/* Design Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-6 mx-auto md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Our UI/UX Design Process
              </h2>
              <p className="text-gray-600 md:text-lg">
                We follow a structured design methodology that ensures all aspects of user experience are considered and optimized.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {designProcess.slice(0, 4).map((process, index) => (
                <div key={index} className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    {process.svg}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-center text-gray-900">{process.step}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
              {designProcess.slice(4).map((process, index) => (
                <div key={index} className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    {process.svg}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-center text-gray-900">{process.step}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Tools Section */}
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Tools We Use
              </h2>
              <p className="text-gray-600 md:text-lg">
                We leverage industry-leading design tools to create exceptional user experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {designTools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  {tool.icon}
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{tool.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UI/UX Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-6 mx-auto md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Key Features of Our UI/UX Design
              </h2>
              <p className="text-gray-600 md:text-lg">
                We incorporate these essential elements to create intuitive, engaging, and effective user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {uiuxFeatures.map((feature, index) => (
                <div key={index} className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    {feature.svg}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-center text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
  <div className="container px-6 mx-auto md:px-12 lg:px-16">
    {/* Section Header */}
    <div className="max-w-3xl mx-auto mb-12 text-center">
      <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 md:text-lg">
        Find answers to the most common questions about our UI/UX design services. We're here to help!
      </p>
    </div>

    {/* FAQ List */}
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-6 overflow-hidden transition-all border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl"
        >
          <button
            className="flex items-center justify-between w-full p-6 text-left transition-all duration-300 bg-white hover:bg-gray-100"
            onClick={() => toggleFaq(index)}
          >
            <span className="text-lg font-medium text-gray-900">{faq.question}</span>
            <svg
              className={`w-6 h-6 transition-transform ${openFaqIndex === index ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            className={`transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-96 p-6 bg-gray-50' : 'max-h-0'}`}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


       
        <Footer />
      </div>
    );
}

export default UiUxDesign;