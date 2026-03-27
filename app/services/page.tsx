"use client"

import Head from 'next/head';
import ServicesSection from '@/components/home/ServicesSection';

const Services = () => {
  // Define your page metadata
  const pageTitle = 'Our Services';
  const pageDescription = 'Explore our range of services';

  return (
    <div className="min-h-screen bg-purple-50">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <ServicesSection />
      
    </div>
  );
};

export default Services;