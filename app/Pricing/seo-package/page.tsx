import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";

function Pricing() {
  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-b from-purple-50 to-white">
      <Head>
        <title>SEO Packages | Boost Your Online Presence</title>
        <meta name="description" content="Explore our comprehensive SEO packages designed to boost your online presence and drive organic traffic to your website." />
      </Head>

      <div className="px-4 py-16 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 mt-2 mb-4 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            Subscription Plans
          </span>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-800 md:text-5xl">
            SEO Packages
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Boost your online presence with our comprehensive SEO solutions tailored to your business needs
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Standard Package */}
          <div className="relative p-6 overflow-hidden transition-all bg-white border-2 border-purple-200 shadow-lg rounded-xl hover:shadow-xl hover:border-purple-300 hover:transform hover:-translate-y-1">
            <div className="flex flex-col h-full">
              {/* Package Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-purple-800">Standard</h2>
                <div className="flex items-baseline mt-4 mb-2">
                  <span className="text-lg text-gray-500">$</span>
                  <span className="text-4xl font-extrabold text-purple-700">199</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-600">Preferred For Small Businesses</p>
              </div>

              {/* Package Features */}
              <div className="p-4 mb-6 rounded-lg bg-purple-50">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Up to 10 Keywords</span>
                </div>
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">2 SEO Optimized Articles</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Basic SEO Audit</span>
                </div>
              </div>

              {/* SEO Features */}
              <div className="flex-grow">
                {/* Initial Website Analysis */}
                <div className="mb-6">
                  <h3 className="flex items-center mb-4 text-lg font-semibold text-purple-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Initial Website Analysis
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Site Audit</span>
                    </li>
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Competitor Analysis</span>
                    </li>
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Keyword Research & Mapping</span>
                    </li>
                  </ul>
                </div>

                {/* Technical SEO */}
                <div className="mb-6">
                  <h3 className="flex items-center mb-4 text-lg font-semibold text-purple-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Technical SEO
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Page Speed Optimization</span>
                    </li>
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Mobile Responsiveness</span>
                    </li>
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Indexing & Crawlability Check</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto text-center">
                  <button className="w-full py-3 mt-4 text-white transition-all bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Package */}
          <div className="relative p-6 overflow-hidden transition-all bg-white border-2 border-purple-400 shadow-xl rounded-xl hover:shadow-2xl hover:border-purple-500 hover:transform hover:-translate-y-1">
            {/* Best Value Badge */}
            
            <div className="absolute top-0 right-0">
              <div className="w-32 h-32 overflow-hidden transform translate-x-16 -translate-y-16">
                <div className="absolute transform rotate-45 bg-purple-600 text-white text-xs font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                  BEST VALUE
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-purple-800">
                  Premium
                </h2>
                <div className="flex items-baseline mt-4 mb-3">
                  <span className="text-lg text-gray-500">$</span>
                  <span className="text-4xl font-extrabold text-purple-700">399</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-600">
                  Ideal For Growing Businesses
                </p>
              </div>

              <div className="p-4 mb-6 rounded-lg bg-purple-50">
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Up to 20 Keywords</span>
                </div>
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">4 SEO Optimized Articles</span>
                </div>
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Advanced SEO Audit</span>
                </div>
              </div>

              <div className="flex-grow">
                {/* Initial Website Analysis */}
                <div className="mb-5">
                  <h3 className="flex items-center mb-4 text-lg font-semibold text-purple-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Initial Website Analysis
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex mb-2">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Comprehensive Site Audit</span>
                    </li>
                    <li className="flex mb-2">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>In-depth Competitor Analysis</span>
                    </li>
                    <li className="flex mb-2">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Advanced Keyword Research</span>
                    </li>
                    <li className="flex mb-2">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Content Gap Analysis</span>
                    </li>
                  </ul>
                </div>

                {/* Technical SEO */}
                <div className="mb-5">
                  <h3 className="flex items-center mb-4 text-lg font-semibold text-purple-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.725 1.725 0 00-1.066 2.573c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 001.066-2.573z" />
                    </svg>
                    Technical SEO
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex mb-2">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Website Speed Optimization</span>
                    </li>
                    <li className="flex mb-2">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Technical SEO Fixes</span>
                    </li>
                    <li className="flex mb-2">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Mobile Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-2 text-center">
                <button className="w-full py-3 mt-2 text-white transition-all bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="relative p-6 overflow-hidden transition-all bg-white border-2 border-purple-200 shadow-lg rounded-xl hover:shadow-xl hover:border-purple-300 hover:transform hover:-translate-y-1">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-purple-800">
                  Enterprise
                </h2>
                <div className="flex items-baseline mt-4 mb-2">
                  <span className="text-lg text-gray-500">$</span>
                  <span className="text-4xl font-extrabold text-purple-700">799</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-600">
                  For Large-Scale Businesses
                </p>
              </div>

              <div className="p-4 mb-6 rounded-lg bg-purple-50">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Up to 50 Keywords</span>
                </div>
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">8 SEO Optimized Articles</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Enterprise-Level Audit</span>
                </div>
              </div>

              <div className="flex-grow">
                <div className="mb-5">
                  <h3 className="flex items-center mb-4 text-lg font-semibold text-purple-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Comprehensive Analysis
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Enterprise-Grade Site Audit</span>
                    </li>
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Global Competitor Analysis</span>
                    </li>
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>International SEO Strategy</span>
                    </li>
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Market & Industry Analysis</span>
                    </li>
                  </ul>
                </div>

                {/* Technical SEO */}
                <div className="mb-5">
                  <h3 className="flex items-center mb-4 text-lg font-semibold text-purple-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Advanced Technical SEO
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Enterprise Server Optimization</span>
                    </li>
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Advanced Schema Implementation</span>
                    </li>
                    <li className="flex">
                      <svg className="w-4 h-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Custom API Integration</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto text-center">
                <button className="w-full py-3 mt-4 text-white transition-all bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Why Choose Us Section */}
        <div className="p-8 mb-16 rounded-xl bg-purple-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold text-purple-800">Why Choose Our SEO Services?</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-purple-600 bg-purple-100 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-purple-800">Proven Results</h3>
                <p className="text-gray-600">Our data-driven approach has helped businesses increase their organic traffic by an average of 180% within 6 months.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-purple-600 bg-purple-100 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-purple-800">Transparent Process</h3>
                <p className="text-gray-600">We provide detailed monthly reports and live dashboards so you can track your SEO performance in real-time.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-purple-600 bg-purple-100 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-purple-800">Expert Team</h3>
                <p className="text-gray-600">Our team of SEO specialists has over 15 years of combined experience in various industries and niches.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center">
            <h2 className="mb-10 text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold text-purple-800">How long does it take to see SEO results?</h3>
              <p className="text-gray-600">SEO is a long-term strategy. While some improvements can be seen within the first month, significant results typically take 3-6 months, depending on your industry, competition, and starting point.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold text-purple-800">What's included in your monthly reports?</h3>
              <p className="text-gray-600">Our monthly reports include keyword rankings, organic traffic analysis, conversion tracking, backlink acquisition, technical SEO improvements, and strategic recommendations for continued growth.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold text-purple-800">Do you offer white-label SEO services?</h3>
              <p className="text-gray-600">Yes, we offer white-label SEO services for agencies looking to expand their service offerings without increasing overhead costs.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-12 text-center bg-purple-600 rounded-2xl">
          <h2 className="mb-4 text-3xl font-bold text-white">Ready to Grow Your Online Presence?</h2>
          <p className="mb-8 text-lg text-purple-100">Schedule a free consultation call with our SEO experts today</p>
          <button className="px-8 cursor-pointer py-4 text-lg font-bold text-purple-700 transition-all bg-white rounded-lg hover:bg-purple-100 focus:outline-none focus:ring-4 focus:ring-purple-300">
            Contact Us For Free Consultation
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pricing;