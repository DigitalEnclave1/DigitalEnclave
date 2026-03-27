"use client";

import { SiGoogleanalytics, SiGooglesearchconsole, SiMonzo, SiSemrush, SiYoast, SiGoogleads } from 'react-icons/si';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const SeoServices = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

    const stats = [
        { number: '50+', label: 'SEO Projects' },
        { number: '70+', label: 'Satisfied Clients' },
        { number: '8+', label: 'SEO Experts' },
    ];

    const features = [
      { 
        title: 'Guaranteed Performance',
        description: 'Boost search rankings and drive targeted organic traffic with our data-backed SEO strategies.',
        svg: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM20 34L10 24L13.414 20.586L20 27.172L34.586 12.586L38 16L20 34Z" fill="#7d2fd0"/>
          </svg>
        )
      },
      {
        title: 'Precision-Driven Optimization',
        description: 'Leverage AI-powered keyword strategies to enhance visibility and maximize conversion rates.',
        svg: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L30.31 16.76L44 19.48L34 29.24L36.52 43.02L24 36.56L11.48 43.02L14 29.24L4 19.48L17.69 16.76L24 4Z" fill="#7d2fd0"/>
          </svg>
        )
      },
      {
        title: 'Real-Time SEO Insights',
        description: 'Access live analytics dashboards to monitor keyword rankings, traffic growth, and performance trends.',
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
      title: "E-Commerce SEO",
      description:
        "Boost your online store visibility with our specialized e-commerce SEO strategies that drive targeted traffic, optimize product pages, and increase conversion rates.",
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
      title: "Educational & Healthcare SEO",
      description:
        "Enhance your educational platform or healthcare website with tailored SEO solutions that improve visibility, attract prospective students or patients, and establish authority.",
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
      title: "Travel And Trekking SEO",
      description:
        "Boost your travel and trekking business with targeted SEO strategies that increase visibility, drive quality traffic, and convert traffic into bookings.",
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
      title: "Local Business SEO",
      description:
        "Optimize your local business presence with our targeted local SEO solutions that improve map rankings, enhance local visibility, and drive foot traffic.",
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

  const seoTools = [
    { name: 'Google Analytics', icon: <SiGoogleanalytics className="text-4xl text-purple-600" /> },
    { name: 'Search Console', icon: <SiGooglesearchconsole className="text-4xl text-purple-600" /> },
    { name: 'SEMrush', icon: <SiSemrush className="text-4xl text-purple-600" /> },
    { name: 'Moz', icon: <SiMonzo className="text-4xl text-purple-600" /> },
    { name: 'Yoast', icon: <SiYoast className="text-4xl text-purple-600" /> },
    { name: 'Google Leads', icon: <SiGoogleads className="text-4xl text-purple-600" /> }


  ];

  const seoProcess = [
    {
      step: "1. Requirement Gathering",
      description:
        "We start by understanding your business requirements and goals to develop a tailored SEO strategy.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="15" stroke="#7d2fd0" strokeWidth="2" />
          <path
            d="M35 35L45 45"
            stroke="#7d2fd0"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      step: "2. Industry Analysis",
      description:
        "We analyze your competitors to shape SEO strategies and identify industry opportunities.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="15"
            y="10"
            width="30"
            height="10"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <rect
            x="10"
            y="30"
            width="15"
            height="10"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <rect
            x="35"
            y="30"
            width="15"
            height="10"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <rect
            x="20"
            y="50"
            width="20"
            height="10"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path d="M30 20V25" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M30 25H18" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M30 25H42" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M18 40V45" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M18 45H30" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M42 40V45" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M42 45H30" stroke="#7d2fd0" strokeWidth="2" />
        </svg>
      ),
    },
    {
      step: "3. Website Audit",
      description:
        "We conduct extensive technical, content & backlink analysis, identifying issues affecting performance and visibility.",
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
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <rect
            x="15"
            y="15"
            width="30"
            height="5"
            rx="1"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <rect
            x="15"
            y="25"
            width="30"
            height="5"
            rx="1"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <rect
            x="15"
            y="35"
            width="15"
            height="10"
            rx="1"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <rect
            x="35"
            y="35"
            width="10"
            height="10"
            rx="1"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      step: "4. Planning of SEO Strategies",
      description:
        "Using website audit findings, we create SEO strategies to optimize your online presence.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="10"
            fill="#7d2fd0"
            fillOpacity="0.2"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <rect
            x="35"
            y="15"
            width="15"
            height="10"
            rx="2"
            fill="#7d2fd0"
            fillOpacity="0.4"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path
            d="M15 40L25 35L35 45L45 40"
            stroke="#7d2fd0"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      step: "5. Executing SEO Strategies",
      description:
        "We implement SEO strategies including on-page optimization, off-page activities, and technical SEO.",
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
            width="20"
            height="40"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <rect
            x="15"
            y="15"
            width="10"
            height="5"
            rx="1"
            fill="#7d2fd0"
            fillOpacity="0.3"
          />
          <rect
            x="15"
            y="25"
            width="10"
            height="10"
            rx="1"
            fill="#7d2fd0"
            fillOpacity="0.3"
          />
          <rect
            x="15"
            y="40"
            width="10"
            height="5"
            rx="1"
            fill="#7d2fd0"
            fillOpacity="0.3"
          />
          <rect
            x="35"
            y="20"
            width="15"
            height="25"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path
            d="M42.5 42.5C43.3284 42.5 44 41.8284 44 41C44 40.1716 43.3284 39.5 42.5 39.5C41.6716 39.5 41 40.1716 41 41C41 41.8284 41.6716 42.5 42.5 42.5Z"
            fill="#7d2fd0"
          />
        </svg>
      ),
    },
    {
      step: "6. Content Creation",
      description:
        "We develop high-quality, SEO-optimized content that appeals to both search engines and users.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="20" r="8" stroke="#7d2fd0" strokeWidth="2" />
          <path
            d="M10 45C10 38.3726 15.3726 33 22 33H28C34.6274 33 40 38.3726 40 45V50H10V45Z"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path
            d="M40 25L45 30L50 20"
            stroke="#7d2fd0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      step: "7. Analysis and Monitoring",
      description:
        "We continuously monitor performance to create ongoing optimization and improvement.",
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 30C15 21.7157 21.7157 15 30 15C38.2843 15 45 21.7157 45 30C45 38.2843 38.2843 45 30 45C21.7157 45 15 38.2843 15 30Z"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <path d="M30 15V10" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M45 30H50" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M30 45V50" stroke="#7d2fd0" strokeWidth="2" />
          <path d="M15 30H10" stroke="#7d2fd0" strokeWidth="2" />
          <path
            d="M25 30L30 35L37 26"
            stroke="#7d2fd0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      step: "8. Progress Review",
      description:
        "We regularly review SEO progress, measuring performance against KPIs and adjusting campaign elements as needed.",
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
            width="25"
            height="30"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="2"
          />
          <rect
            x="15"
            y="20"
            width="15"
            height="5"
            rx="1"
            fill="#7d2fd0"
            fillOpacity="0.3"
          />
          <rect
            x="15"
            y="30"
            width="15"
            height="5"
            rx="1"
            fill="#7d2fd0"
            fillOpacity="0.3"
          />
          <path d="M35 30H50" stroke="#7d2fd0" strokeWidth="2" />
          <path
            d="M45 25L50 30L45 35"
            stroke="#7d2fd0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const seoFeatures = [
    {
      title: "Keyword Research",
      description:
        "We identify high-value keywords with optimal search volume and competition levels to drive targeted traffic to your website.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="22" r="10" stroke="#7d2fd0" strokeWidth="3" />
          <path
            d="M16 50C16 42.268 23.163 36 32 36C40.837 36 48 42.268 48 50"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "On-Page Optimization",
      description:
        "We optimize page titles, meta descriptions, headers, content, and internal linking to improve search engine visibility.",
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
            width="32"
            height="24"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <rect
            x="44"
            y="20"
            width="12"
            height="20"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <path d="M8 44h32" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M24 44v4" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M50 44h-6" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M47 44v4" stroke="#7d2fd0" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Technical SEO",
      description:
        "We identify and fix technical issues that impact crawling, indexing, and ranking to ensure search engines can access all content.",
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
            width="14"
            height="32"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <rect
            x="25"
            y="16"
            width="14"
            height="32"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <rect
            x="42"
            y="16"
            width="14"
            height="32"
            rx="2"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <path d="M12 24h6" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M29 24h6" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M46 24h6" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M12 32h6" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M29 32h6" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M46 32h6" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M12 40h6" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M29 40h6" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M46 40h6" stroke="#7d2fd0" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Link Building",
      description:
        "We implement ethical link building strategies to increase your site's authority and improve search rankings.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="12"
            y="12"
            width="40"
            height="40"
            rx="4"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <path
            d="M26 32l16 0"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M32 26l0 16"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  const additionalServices = [
    {
      title: "Local SEO",
      description:
        "Optimize your local presence to attract nearby customers and increase foot traffic.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 8c-8.8 0-16 7.2-16 16 0 12 16 32 16 32s16-20 16-32c0-8.8-7.2-16-16-16z"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <circle cx="32" cy="24" r="6" stroke="#7d2fd0" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Content Marketing",
      description:
        "Create high-quality, engaging content that drives traffic and builds authority.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="12"
            y="12"
            width="40"
            height="40"
            rx="4"
            stroke="#7d2fd0"
            strokeWidth="3"
          />
          <path
            d="M20 20h24"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M20 30h24"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M20 40h16"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "E-commerce SEO",
      description:
        "Specialized strategies to boost product visibility and drive sales.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12l6 6h36l-4 20H20l-4-24H8"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="52" r="4" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="44" cy="52" r="4" stroke="#7d2fd0" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "SEO Audit",
      description:
        "Comprehensive analysis to identify opportunities and address issues.",
      svg: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 52L48 52"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M24 40L24 52"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M32 28L32 52"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M40 36L40 52"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="32" cy="18" r="10" stroke="#7d2fd0" strokeWidth="3" />
          <path
            d="M38 18L30 18L30 12"
            stroke="#7d2fd0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const pricingPlans = [
    {
      title: "Standard SEO Package",
      price: "246",
      frequency: "/month",
      features: [
        "Preferred for Small Businesses",
        "Complete SEO Setup",
        "Affordable Plan",
        "Entry-Level Support",
      ],
      buttonText: "Standard Package",
      buttonLink: "/contact",
      popular: false,
    },
    {
      title: "Professional SEO Package",
      price: "400",
      frequency: "/month",
      features: [
        "Preferred for Medium Business",
        "Intermediate Solution",
        "Competitive Pricing",
        "Enhanced SEO Services",
      ],
      buttonText: "Professional Package",
      buttonLink: "/contact",
      popular: true,
    },
    {
      title: "Premium SEO Package",
      price: "630",
      frequency: "/month",
      features: [
        "Preferred for Large Business",
        "Full-Service SEO",
        "Premium Implementation",
        "High Impact Plan",
      ],
      buttonText: "Premium Package",
      buttonLink: "/contact",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Which industries do you provide SEO services for?",
      answer:
        "We provide SEO services for a wide range of industries including e-commerce, healthcare, education, travel, technology, finance, real estate, legal, manufacturing, and hospitality. Our team has specialized experience in each of these sectors, allowing us to develop industry-specific strategies that address unique challenges and opportunities.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy, and results typically begin to appear within 3-6 months. However, this timeline can vary based on factors such as your website's current condition, competition level, industry, target keywords, and the scope of optimization. While some improvements may be visible sooner, sustainable ranking improvements and significant traffic increases generally require consistent effort over time.",
    },
    {
      question: "Can you provide details about your SEO packages?",
      answer:
        "Our SEO packages are tiered to meet different business needs and budgets. Each package includes core SEO services such as keyword research, on-page optimization, technical SEO, content creation, and performance tracking. Higher-tier packages offer additional services like more extensive content creation, advanced technical optimizations, competitive analysis, and more frequent reporting. We can provide a detailed breakdown of each package during consultation.",
    },
    {
      question: "What type of website is best for your SEO services?",
      answer:
        "Our SEO services can benefit any type of website, but they're particularly effective for content-rich websites that provide value to users. This includes business websites, e-commerce stores, service-based sites, blogs, educational platforms, and informational websites. The key is having a website with quality content that addresses user needs, as this provides a strong foundation for SEO success.",
    },
    {
      question: "What services are included in your SEO packages?",
      answer:
        "Our SEO packages typically include comprehensive keyword research, on-page optimization, technical SEO audits and fixes, content creation and optimization, local SEO (if applicable), competitor analysis, link building, regular performance reporting, and ongoing strategy adjustments. Specific deliverables vary by package level, but all aim to improve your search visibility, traffic, and conversion rates.",
    },
    {
      question: "Can you offer basic SEO services if I don't have a website?",
      answer:
        "Yes, we can help you from the ground up. If you don't have a website yet, we can advise on SEO-friendly website structure and development, conduct keyword research to inform your content strategy, help with domain selection, and prepare an SEO roadmap to implement once your website is launched. This proactive approach ensures your new website is optimized for search engines from day one.",
    },
    {
      question:
        "Do you address technical issues of the website as part of your SEO services?",
      answer:
        "Absolutely. Technical SEO is a core component of our services. We conduct thorough technical audits to identify issues like slow loading times, mobile usability problems, broken links, duplicate content, crawlability barriers, and indexation issues. Our team will then implement fixes or provide detailed recommendations to address these issues, ensuring search engines can properly crawl, index, and rank your website.",
    },
    {
      question: "Do your SEO services include writing blog posts?",
      answer:
        "Yes, content creation including blog posts is an integral part of our comprehensive SEO strategy. Our packages include varying levels of content creation services. We develop SEO-optimized blog content that targets relevant keywords, addresses user questions, demonstrates expertise, and builds authority in your industry. This content is strategically created to attract organic traffic and provide value to your audience.",
    },
    {
      question: "How do you measure SEO success?",
      answer:
        "We measure SEO success through multiple metrics including organic traffic growth, keyword rankings, engagement metrics (like time on site and bounce rate), conversion rates, backlink quality and quantity, domain authority, and local visibility (for local SEO). We provide regular comprehensive reports that track these KPIs against your business goals, allowing you to clearly see the return on your SEO investment.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-100 to-indigo-100">
        <div className="container px-4 py-16 mx-auto sm:py-24 lg:py-32">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                Boost Your Online Visibility with Professional{" "}
                <span className="text-purple-600">SEO Services</span>
              </h1>
              <p className="mb-8 text-lg text-gray-700">
                Increase organic traffic, improve rankings, and maximize your
                ROI with our data-driven SEO strategies tailored to your
                business needs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="px-6 py-3 font-medium text-center text-white transition duration-300 bg-purple-600 rounded-md hover:bg-purple-700"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="#services"
                  className="px-6 py-3 font-medium text-center text-purple-600 transition duration-300 bg-white border border-purple-600 rounded-md hover:bg-gray-100"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/seo-hero.png" 
                alt="SEO Services Illustration" 
                width={500} 
                height={400}
                className="h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 text-center transition-shadow duration-300 rounded-lg shadow-md bg-gray-50 hover:shadow-lg"
              >
                <div className="mb-2 text-4xl font-bold text-purple-600">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

{/* Features Section */}
<div className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="container px-6 mx-auto">
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
        Elevate Your Online Presence with Expert SEO
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-600">
        Unlock sustainable growth with AI-powered SEO strategies that enhance search rankings, drive organic traffic, and boost conversions.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="relative p-8 overflow-hidden transition-transform duration-300 bg-white shadow-xl rounded-3xl hover:shadow-2xl hover:-translate-y-3"
        >
          <div className="absolute w-24 h-24 bg-purple-500 rounded-full -top-6 -right-6 opacity-10"></div>
          <div className="absolute w-24 h-24 bg-indigo-500 rounded-full -bottom-6 -left-6 opacity-10"></div>
          
          <div className="flex items-center justify-center w-16 h-16 mb-5 text-white shadow-md bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl">
            {feature.svg}
          </div>

          <h3 className="mb-3 text-2xl font-bold text-gray-900">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>

        </div>
      ))}
    </div>
  </div>
</div>


      
      {/* Services Section */}
      <div id="services" className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our Specialized SEO Services
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              We offer tailored SEO solutions for different industries to help
              you achieve maximum visibility in your specific market.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 transition-colors duration-300 border border-gray-200 rounded-lg bg-gray-50 hover:bg-purple-50"
              >
                <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                  <div className="flex-shrink-0">{service.svg}</div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Comprehensive SEO Solutions
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Our holistic approach to SEO ensures every aspect of your online
              presence is optimized for maximum visibility and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {seoFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="mb-4">{feature.svg}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Additional SEO Services
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Elevate your digital presence with our specialized SEO services
              designed to address specific business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-6 transition-colors duration-300 border border-gray-200 rounded-lg bg-gray-50 hover:border-purple-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{service.svg}</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our SEO Process
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              We follow a systematic approach to deliver sustainable SEO results
              for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {seoProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="p-4 mb-4 bg-white rounded-full shadow-md">
                    {process.svg}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-center text-gray-900">
                    {process.step}
                  </h3>
                  <p className="text-center text-gray-700">
                    {process.description}
                  </p>
                </div>
                {index < seoProcess.length - 1 && (
                  <div className="absolute hidden w-full h-1 transform -translate-x-1/2 bg-purple-200 lg:block top-8 left-full">
                    <div className="absolute right-0 top-1/2 transform translate-y-(-50%) h-2 w-2 bg-purple-600 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Tools Section */}
<div className="py-12 bg-white">
  <div className="container px-4 mx-auto">
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-3xl font-bold text-gray-900">SEO Tools We Use</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700">
        We leverage industry-leading tools and platforms to analyze, implement, and track your SEO performance.
      </p>
    </div>
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
      {seoTools.map((tool, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center p-6 transition-colors duration-300 rounded-lg bg-gray-50 hover:bg-purple-50"
        >
          <div className="mb-3">{tool.icon}</div>
          <p className="font-medium text-gray-800">{tool.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Pricing Section */}
      <div className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Transparent SEO Pricing
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Choose the SEO package that best fits your business needs and
              budget. All plans include our core SEO services.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg shadow-md transition-all duration-300 relative overflow-hidden ${
                  plan.popular
                    ? "bg-white shadow-lg border-2 border-purple-500 transform scale-105 lg:scale-110 z-10"
                    : "bg-gray-50 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 px-4 py-1 text-sm font-medium text-white bg-purple-600">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {plan.title}
                </h3>
                <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-purple-600">${plan.price}</span>
                  <span className="ml-1 text-gray-600">{plan.frequency}</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.buttonLink}
                  className={`w-full text-center py-3 px-6 rounded-md font-medium transition duration-300 block ${
                    plan.popular
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-white border border-purple-600 text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* FAQ Section */}
<div className="py-20 bg-white">
  <div className="container px-6 mx-auto">
    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
      
      {/* Left Side - Image */}
      <div className="relative">
        <img 
          src="/faq-image.jpg" 
          alt="FAQs Illustration" 
          className="w-full max-w-md mx-auto shadow-lg rounded-3xl"
        />
      </div>

      {/* Right Side - FAQs */}
      <div>
        <div className="mb-12 text-left md:text-left">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl text-lg text-gray-600">
            Find answers to common questions about our SEO services and methodologies.
          </p>
        </div>

        <div className="max-w-2xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 overflow-hidden border border-gray-200 shadow-sm rounded-xl">
              <button
                className="flex items-center justify-between w-full p-5 text-left transition bg-gray-50 hover:bg-gray-100"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-purple-600 transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaqIndex === index && (
                <div className="px-5 pb-5 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</div>



      <Footer />
    </div>
  );
};

export default SeoServices;
