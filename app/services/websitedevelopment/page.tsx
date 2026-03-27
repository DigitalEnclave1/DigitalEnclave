"use client";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPython, SiPhp, SiGooglecloud, SiDigitalocean } from "react-icons/si";
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import TechStack from "./TechStack";




const WebsiteDevelopment = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '40+', label: 'Satisfied Clients' },
    { number: '60+', label: 'Team Members' },
  ];

  const features = [
    {
      title: "Satisfaction Guarantee",
      description:
        "Elevate online presence with website development expertise.",
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM20 34L10 24L13.414 20.586L20 27.172L34.586 12.586L38 16L20 34Z"
            fill="#7d2fd0"
          />
        </svg>
      ),
    },
    {
      title: "Best Quality work",
      description:
        "Excellence and innovation define our development solutions.",
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4L30.31 16.76L44 19.48L34 29.24L36.52 43.02L24 36.56L11.48 43.02L14 29.24L4 19.48L17.69 16.76L24 4Z"
            fill="#7d2fd0"
          />
        </svg>
      ),
    },
    {
      title: "Interactive Interface",
      description:
        "Create an engaging interface for an optimal user experience.",
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="8" width="40" height="28" rx="2" fill="#7d2fd0" />
          <path
            d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V14H4V10Z"
            fill="#2E7D32"
          />
          <circle cx="8" cy="11" r="1.5" fill="white" />
          <circle cx="12" cy="11" r="1.5" fill="white" />
          <circle cx="16" cy="11" r="1.5" fill="white" />
          <rect x="8" y="18" width="32" height="2" rx="1" fill="white" />
          <rect x="8" y="22" width="20" height="2" rx="1" fill="white" />
          <rect x="8" y="26" width="24" height="2" rx="1" fill="white" />
          <rect x="8" y="30" width="16" height="2" rx="1" fill="white" />
        </svg>
      ),
    },
  ];

  const services = [
    {
      title: "E-Commerce",
      description:
        "We redefine the online shopping experience through innovative e-commerce website development solutions with over a decade of experience in website development.",
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55 20H25C22 20 20 22 20 25V55C20 58 22 60 25 60H55C58 60 60 58 60 55V25C60 22 58 20 55 20Z"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 20V16C35 14 37 12 39 12H41C43 12 45 14 45 16V20"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 32H60"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 44H45"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Travel And Trekking",
      description:
        "We highly value experience over anything else. Therefore, we provide you with the best travel and trekking website development services.",
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 12L16 32H22V52H36V40H44V52H58V32H64L40 12Z"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30 32H50"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "E-Learning",
      description:
        "We specialize in empowering education through digital solutions. Here, we are dedicated to developing innovative e-learning websites to seamlessly merge technology and education.",
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 16L12 28L40 40L68 28L40 16Z"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 34V50L40 58L56 50V34"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 28V44"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Informative And Others",
      description:
        "We specialize in empowering content creation through our tailored digital solutions. We are not limited by the domain-restricted categories. We do your trusted partner for custom website design and development in India.",
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="16"
            width="60"
            height="48"
            rx="3"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <path d="M10 26H70" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M20 40H60" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M20 50H50" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="15" cy="21" r="2" fill="#7d2fd0" />
          <circle cx="22" cy="21" r="2" fill="#7d2fd0" />
          <circle cx="29" cy="21" r="2" fill="#7d2fd0" />
        </svg>
      ),
    },
  ];

  const technologies = {
    frontend: ["HTML5", "CSS3", "React", "Next.js", "TypeScript"],
    backend: ["Node.js", "Python", "PHP", "WordPress"],
    infrastructure: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
  };
  const techIcons = {
    HTML5:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    WordPress:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    AWS:"data:image/jpeg;base64,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",
    Docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Kubernetes:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  };

  // For demo purposes, using a placeholder in case actual CDN image fails
  const renderTechIcon = (tech: any) => {
    // Using placeholder for this demo - in real application, you'd use the real CDN URL
    return (
      <img
        src="/api/placeholder/48/48"
        alt={`${tech} icon`}
        className="w-12 h-12"
      />
    );
  };

  const roadmap = [
    { 
      step: 'Requirement Analysis', 
      description: 'We conduct a thorough analysis of your requirements to establish the foundation for your website.',
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="40"
            height="40"
            rx="4"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path d="M20 25H40" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M20 35H40" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M20 30H30" stroke="#7d2fd0" strokeWidth="2" />
        </svg>
      ),
    },
    { 
      step: 'Planning', 
      description: 'We make estimations and customized strategies to ensure a secure roadmap to success.',
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30" r="20" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M30 20V30L38 34" stroke="#7d2fd0" strokeWidth="2" />
        </svg>
      ),
    },
    { 
      step: 'Design (UI/UX)', 
      description: 'Your vision will be aligned with the latest design using best technology ensuring the best user experience.',
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="15"
            width="40"
            height="30"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path d="M10 22H50" stroke="#7d2fd0" strokeWidth="2" />
          <circle cx="15" cy="19" r="1.5" fill="#7d2fd0" />
          <circle cx="20" cy="19" r="1.5" fill="#7d2fd0" />
          <circle cx="25" cy="19" r="1.5" fill="#7d2fd0" />
          <rect x="15" y="27" width="30" height="3" rx="1.5" fill="#7d2fd0" />
          <rect x="15" y="35" width="20" height="3" rx="1.5" fill="#7d2fd0" />
        </svg>
      ),
    },
    { 
      step: 'Development', 
      description: 'Our team of highly skilled developers work with cutting-edge programming languages and standards.',
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 35L25 25L15 15" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M45 35L35 25L45 15" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M25 45L35 15" stroke="#7d2fd0" strokeWidth="2" />
        </svg>
      ),
    },
    { 
      step: 'System Testing & QA', 
      description: 'We ensure reliability through rigorous system testing and QA for a seamless user experience and robust website.',
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 10C18.954 10 10 18.954 10 30C10 41.046 18.954 50 30 50C41.046 50 50 41.046 50 30C50 18.954 41.046 10 30 10Z"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path
            d="M25 30L28 33L35 26"
            stroke="#7d2fd0"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    { 
      step: 'Deployment', 
      description: 'After ensuring website quality, we launch it from prototype to fully-fledged, live for your entire audience.',
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 40L30 20L50 40" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M20 40V50H40V40" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M30 20V10" stroke="#7d2fd0" strokeWidth="2" />
        </svg>
      ),
    },
    { 
      step: 'Maintenance & Monitoring', 
      description: 'We provide reliable hosting and ongoing monitoring and support to ensure your website runs smoothly.',
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 30H20L25 20L35 40L40 30H45"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path
            d="M10 30C10 18.954 18.954 10 30 10C41.046 10 50 18.954 50 30C50 41.046 41.046 50 30 50C18.954 50 10 41.046 10 30Z"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    { 
      step: 'Knowledge Transfer', 
      description: 'We provide training on process operations, troubleshooting, implementation, and user data access post-launch.',
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 20L40 20" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M20 30L40 30" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M20 40L40 40" stroke="#7d2fd0" strokeWidth="2" />
          <path
            d="M15 10L45 10L45 50L15 50L15 10Z"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  const businessFeatures = [
    {
      title: "Robust Functionality",
      description:
        "Your website with optimized features and seamless performance for an exceptional user experience.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8Z"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 16V32L42.667 37.333"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Client-Centric Approach",
      description:
        "Our client-centric website solutions address unique needs, reflecting your business vision with precision.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="24" r="8" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="44" cy="24" r="8" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="32" cy="44" r="8" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M24 30L30 38" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M40 30L34 38" stroke="#7d2fd0" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Innovative Website Design",
      description:
        "Striking creativity, we transform concepts into reality with user-friendly modern designs.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="12"
            width="48"
            height="40"
            rx="4"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <path d="M8 20H56" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="14" cy="16" r="2" fill="#7d2fd0" />
          <circle cx="20" cy="16" r="2" fill="#7d2fd0" />
          <circle cx="26" cy="16" r="2" fill="#7d2fd0" />
        </svg>
      ),
    },
    {
      title: "Timely Website Delivery",
      description:
        "We value time, ensuring your website projects meet deadlines consistently with uncompromised quality.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="24" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M32 16V32L44 44" stroke="#7d2fd0" strokeWidth="3" />
        </svg>
      ),
    },
  ];

  const digitalServices = [
    {
      title: "UI/UX",
      description:
        "Design eye-catching UI/UX solutions for effortless user interfaces.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="16"
            width="48"
            height="32"
            rx="4"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
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
      description:
        "Custom SEO solutions for enhanced organic visibility and growth.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="28" cy="28" r="16" stroke="#7d2fd0" strokeWidth="3" />
          <path
            d="M40 40L52 52"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Social Media Marketing (SMM)",
      description:
        "Build a strong online presence and engage with your targeted audience.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="32" r="12" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="44" cy="20" r="12" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="44" cy="44" r="12" stroke="#7d2fd0" strokeWidth="3" />
          <line
            x1="30"
            y1="26"
            x2="34"
            y2="22"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <line
            x1="30"
            y1="38"
            x2="34"
            y2="42"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
        </svg>
      ),
    },
    {
      title: "Graphic Design",
      description:
        "Designs that speak your brand's essence and connect with your audience.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 8L8 56H56L32 8Z" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="32" cy="40" r="4" fill="#7d2fd0" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: "What types of website development services do you offer?",
      answer:
        "We offer a comprehensive range of website development services including e-commerce websites, corporate websites, landing pages, custom web applications, CMS development, and responsive design. We tailor our solutions to meet your specific business requirements.",
    },
    {
      question: "How much does it cost to develop my website?",
      answer:
        "The cost of website development varies depending on your specific requirements, complexity, features, and scope. We provide customized quotes based on your project needs. Contact us for a free consultation and estimate.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline for website development depends on the complexity and scope of your project. Simple websites may take 2-4 weeks, while complex e-commerce or custom web applications can take 2-6 months. We'll provide you with a detailed timeline during our project planning phase.",
    },
    {
      question: "What is the process of website development?",
      answer:
        "Our website development process includes: 1) Requirement Analysis, 2) Planning, 3) Design (UI/UX), 4) Development, 5) Testing & QA, 6) Deployment, 7) Maintenance & Monitoring, and 8) Knowledge Transfer. We follow a systematic approach to ensure quality and timely delivery.",
    },
    {
      question: "Do you offer mobile website hosting services?",
      answer:
        "Yes, we provide reliable website hosting services with robust security measures, regular backups, and ongoing technical support to ensure your website runs smoothly and efficiently.",
    },
    {
      question: "Do you develop dynamic websites?",
      answer:
        "Yes, we specialize in developing dynamic websites that offer interactive features, personalized user experiences, and database integration. Our dynamic websites are designed to engage visitors and drive conversions.",
    },
    {
      question: "Do you develop SEO-friendly websites?",
      answer:
        "Absolutely! All our websites are built with SEO best practices in mind. We implement proper site structure, mobile responsiveness, fast loading speeds, semantic markup, and other SEO elements to help improve your search engine rankings.",
    },
    {
      question:
        "Do you offer support services and maintenance after development?",
      answer:
        "Yes, we provide comprehensive support and maintenance services after website launch. Our support packages include regular updates, security monitoring, performance optimization, content updates, and technical troubleshooting.",
    },
    {
      question: "How do you ensure the security of the websites you develop?",
      answer:
        "We implement multiple security measures including SSL certificates, secure coding practices, regular security updates, firewall protection, data encryption, and vulnerability scanning. We also provide security training and documentation to clients.",
    },
  ];

  const trustedCompanies = [
    { name: "India Research", logo: "India-research.png" },
    { name: "Visit India", logo: "visit-India.png" },
    { name: "E-Learning", logo: "elearning.png" },
    { name: "Chautari", logo: "chautari.png" },
    { name: "Astra Media", logo: "astra-media.png" },
    { name: "Harilo", logo: "harilo.png" },
  ];

  return (
    <div className="bg-gray-50">      
{/* Hero Section */}       

<section className="relative py-20 bg-gradient-to-br from-purple-50 to-purple-100">
  <div className="container px-6 mx-auto md:px-12 lg:px-16 xl:px-20">
    <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
      
      {/* Left Content Section */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Build Stunning <span className="text-purple-600">Web Experiences</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Create high-performance websites with sleek, modern designs that captivate users.
        </p>
        <p className="mt-4 text-gray-600">
          Elevate your brand with seamless UI/UX, cutting-edge development, and top-tier performance.
        </p>
        <button className="px-10 py-4 mt-8 text-lg font-semibold text-white transition-all duration-300 transform bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 hover:scale-105">
          Get a Free Consultation
        </button>
      </div>

      {/* Right Image Section */}
      <div className="relative md:w-1/2">
        <div className="relative p-3 shadow-lg bg-white/20 rounded-2xl backdrop-blur-md">
          <img 
            src="/website-development-hero.png" 
            alt="Website Development" 
            className="w-full transition duration-500 transform rounded-xl drop-shadow-xl hover:scale-105"
          />
        </div>

        {/* Glowing Gradient Circles */}
        <div className="absolute w-40 h-40 bg-purple-400 rounded-full opacity-30 top-10 left-10 blur-3xl"></div>
        <div className="absolute w-32 h-32 bg-indigo-400 rounded-full opacity-20 bottom-10 right-10 blur-2xl"></div>
      </div>
      
    </div>
  </div>
</section>



{/* Stunning Modern Feature Section */}
<section className="relative py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
  <div className="container px-6 mx-auto md:px-12 lg:px-16 xl:px-20">
    {/* Section Header */}
    <div className="max-w-3xl mx-auto mb-16 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">Powerful Features for Your Success</h2>
      <p className="mt-4 text-lg text-gray-700">Discover tools designed to elevate your experience and drive results.</p>
    </div>
    
    {/* Features Grid */}
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {/* Feature 1 */}
      <div className="relative overflow-hidden transition duration-300 transform border border-purple-300 shadow-xl group rounded-2xl bg-gradient-to-br from-white to-purple-100 hover:shadow-2xl hover:-translate-y-3">
        <div className="p-8">
          <div className="flex items-center justify-center w-16 h-16 mb-6 bg-purple-200 rounded-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-gray-800">Satisfaction Guarantee</h3>
          <p className="text-gray-600">Elevate online presence with website development expertise.</p>
        </div>
      </div>
      
      {/* Feature 2 - Highlighted */}
      <div className="relative overflow-hidden text-white transition duration-300 transform shadow-2xl group rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 hover:shadow-xl hover:-translate-y-3">
        <div className="p-8">
          <div className="flex items-center justify-center w-16 h-16 mb-6 bg-white rounded-full bg-opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h3 className="mb-3 text-xl font-semibold">Best Quality Work</h3>
          <p className="text-gray-100">Excellence and innovation define our development solutions.</p>
        </div>
      </div>
      
      {/* Feature 3 */}
      <div className="relative overflow-hidden transition duration-300 transform border border-purple-300 shadow-xl group rounded-2xl bg-gradient-to-br from-white to-purple-100 hover:shadow-2xl hover:-translate-y-3">
        <div className="p-8">
          <div className="flex items-center justify-center w-16 h-16 mb-6 bg-purple-200 rounded-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-gray-800">Interactive Interface</h3>
          <p className="text-gray-600">Create an engaging interface for an optimal user experience.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Decorative Background Elements */}
<style jsx>{`
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob { animation: blob 7s infinite; }
  .animation-delay-2000 { animation-delay: 2s; }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.1); }
  }
  .animate-pulse { animation: pulse 3s infinite; }
  @keyframes ping {
    0% { transform: scale(1); opacity: 1; }
    75%, 100% { transform: scale(2); opacity: 0; }
  }
  .animate-ping { animation: ping 2s infinite; }
`}</style>

      {/* Technology Stack Section */}
      <TechStack />

{/* Roadmap Section */}
<section className="py-20 bg-gradient-to-b from-purple-50 to-purple-100">
  <div className="container px-6 mx-auto md:px-12 lg:px-16">
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Our Roadmap</h2>
      <p className="max-w-2xl mx-auto mt-3 text-lg text-gray-600">
        A step-by-step approach to ensure seamless development and delivery.
      </p>
    </div>

    <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
      {/* Curved Connector Line (For Desktop) */}
      <div className="absolute hidden w-3/4 h-1 transform -translate-x-1/2 -translate-y-1/2 bg-purple-300 rounded-full lg:block left-1/2 top-1/2"></div>

      {roadmap.map((item, index) => (
        <div 
          key={index} 
          className="relative flex flex-col items-center p-6 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
        >
          {/* Step Number with Glow Effect */}
          <div className="absolute flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-purple-600 border-4 border-white rounded-full shadow-md -top-5">
            {index + 1}
          </div>

          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 bg-purple-100 rounded-full shadow-md hover:scale-110">
            {item.svg}
          </div>

          {/* Step Title & Description */}
          <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.step}</h3>
          <p className="mt-2 text-center text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-purple-100">
  <div className="container px-6 mx-auto md:px-12 lg:px-16">
    
    {/* Header Section */}
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-gray-800">
        We Help You Expand <span className="text-purple-600">Your Business</span> Through Tech
      </h2>
      <p className="max-w-3xl mx-auto mt-3 text-lg text-gray-600">
        Our innovative digital solutions are designed to transform your business. As a leading website development company in India, we offer world-class services to help you grow.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {businessFeatures.map((feature, index) => (
        <div 
          key={index} 
          className="relative flex flex-col items-center p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl hover:scale-105"
        >
          {/* Icon Container */}
          <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 bg-purple-100 rounded-full shadow-md hover:scale-110">
            {feature.svg}
          </div>

          {/* Feature Title & Description */}
          <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
          <p className="mt-2 text-gray-600">{feature.description}</p>

          {/* Decorative Glow Effect */}
          <div className="absolute w-24 h-1 transform -translate-x-1/2 bg-purple-500 rounded-full opacity-50 -bottom-2 left-1/2"></div>
        </div>
      ))}
    </div>
  </div>
</section>

      
     

      {/* Digital Services Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-purple-100">
  <div className="container px-6 mx-auto md:px-12 lg:px-16">
    
    {/* Header Section */}
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-gray-800">
        One Solution For All Your <span className="text-purple-600">Digital Needs</span>
      </h2>
      <p className="max-w-3xl mx-auto mt-3 text-lg text-gray-600">
        Our range of digital services is designed to bring innovation and efficiency to your business.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {digitalServices.map((service, index) => (
        <div 
          key={index} 
          className="relative flex flex-col items-center p-6 text-center transition-all duration-300 bg-white shadow-lg bg-opacity-90 backdrop-blur-lg rounded-2xl hover:shadow-xl hover:scale-105"
        >
          {/* Icon Container */}
          <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 bg-purple-100 rounded-full shadow-md hover:scale-110">
            {service.svg}
          </div>

          {/* Title & Description */}
          <h3 className="mt-4 text-xl font-semibold text-gray-800">{service.title}</h3>
          <p className="mt-2 text-gray-600">{service.description}</p>

         

          {/* Decorative Glow Effect */}
          <div className="absolute w-24 h-1 transform -translate-x-1/2 bg-purple-500 rounded-full opacity-50 -bottom-2 left-1/2"></div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-purple-100">
  <div className="container px-6 mx-auto md:px-12 lg:px-16">
    
    <div className="flex flex-col items-center md:flex-row">
      
      {/* Left Side - FAQ Info & Image */}
      <div className="text-center md:w-1/3 md:text-left">
        <h2 className="text-4xl font-bold leading-tight text-gray-800">
          Frequently Asked <span className="text-purple-600">Questions</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Here are answers to some of the most common questions about our services.
        </p>
        <img src="/faq-illustration.png" alt="FAQ" className="max-w-full mx-auto mt-6 md:mx-0" />
      </div>

      {/* Right Side - FAQ Accordion */}
      <div className="mt-10 md:w-2/3 md:mt-0 md:pl-12">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden bg-white shadow-md rounded-2xl bg-opacity-90 backdrop-blur-lg">
              {/* Question Button */}
              <button 
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 transition-all duration-300 hover:bg-purple-50"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              {openFaqIndex === index && (
                <div className="p-5 border-t border-gray-200 bg-purple-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  </div>
</section>




      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
