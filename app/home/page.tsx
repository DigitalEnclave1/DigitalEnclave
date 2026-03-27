import React from 'react';
import ServicesSection from "../../components/home/ServicesSection";
import ExpertiseSection from "../../components/home/ExpertiseSection";
import HowWeWork from "../../components/home/HowWeWork";
import CompanyStats from "@/components/home/CompanyStats";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import TestimonialsSection from "@/components/home/Testimonial";
import BlogSection from '@/components/home/BlogSection';


const blogPosts = [
  {
    id: '1',
    title: 'Best Website Design and Development Cost in India',
    excerpt: 'You must be wondering what may be the cost of Website design. Website development in India especially the business owners and entrepreneurs...',
    date: 'Jun 12, 2024',
    imageUrl: '/blog1.png',
    slug: 'website-design-development-cost-India'
  },
  {
    id: '2',
    title: 'Best IT Company in India 2024',
    excerpt: 'The number of IT companies found in every corner of India has been living proof that India has over 500+ IT companies in India and...',
    date: 'Jun 12, 2024',
    imageUrl: '/blog2.jpg',
    slug: 'best-it-company-India-2024'
  }
];

function Home() {
  return (
    <div className="min-h-screen text-black bg-white">
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <HowWeWork />
      <CompanyStats />
      <TestimonialsSection />
      <BlogSection blogPosts={blogPosts}/>
     
      <Footer />
    </div>
  );
}

// Make sure the component is properly exported
export default Home;