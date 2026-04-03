"use client"

import React, { useEffect, useRef } from 'react';
import { Clock, ClipboardCheck, Users, Award, Zap } from 'lucide-react';
import Link from 'next/link';

const CompanyStats = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const spotlightElement = spotlightRef.current;
    if (!spotlightElement) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = spotlightElement.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      spotlightElement.style.setProperty('--x', `${x}px`);
      spotlightElement.style.setProperty('--y', `${y}px`);
    };
    
    spotlightElement.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      spotlightElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 md:p-12 relative overflow-hidden rounded-xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 opacity-60 animate-pulse"
          style={{ transform: 'translate(30%, -30%)' }}
        />
        <div className="absolute left-0 bottom-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-purple-300 to-purple-100 opacity-40 animate-pulse"
          style={{ transform: 'translate(-20%, 20%)', animationDelay: '1s' }}
        />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-8 h-8 rounded-full bg-purple-300 opacity-20 animate-float" 
          style={{ animationDuration: '15s' }}/>
        <div className="absolute top-2/3 right-1/4 w-6 h-6 rounded-full bg-purple-400 opacity-20 animate-float" 
          style={{ animationDuration: '12s', animationDelay: '2s' }}/>
        <div className="absolute bottom-1/4 left-1/2 w-4 h-4 rounded-full bg-purple-500 opacity-20 animate-float" 
          style={{ animationDuration: '18s', animationDelay: '1s' }}/>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Who We Are Section */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b-2 border-purple-300 pb-2 inline-block">Who We Are</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We are a top IT company in India, committed to providing comprehensive 
            digital solutions to enhance your online presence. Let's join hands and work 
            together to take your brand to the next level with the best IT services.
          </p>
          <Link href="/aboutus">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group">
              About Us
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </button>
          </Link>
        </div>
        
        {/* Stats Section with Spotlight Effect */}
        <div className="w-full max-w-xl">
          {/* Numbers heading with animation and spotlight effect */}
          <div 
            ref={spotlightRef}
            className="relative mb-8 overflow-hidden rounded-xl p-6 bg-gradient-to-r from-purple-800 to-purple-600"
            style={{
              '--x': '50%',
              '--y': '50%',
            } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.3)_10%,transparent_60%)]"></div>
            
            <div className="flex flex-col items-center justify-center relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-300 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-300 rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              
              <Zap className="text-white mb-2 w-8 h-8 animate-bounce" />
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 tracking-wider text-center">
                NUMBERS
              </h3>
              <div className="mt-2 w-24 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full"></div>
            </div>
          </div>
          
          {/* Stats Cards with Glowing Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Years of Experience Card */}
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start gap-4 group relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-purple-200 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md"></div>
              <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors duration-300 relative z-10">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">4+</h3>
                <p className="text-gray-600">Years of Experience In This Field</p>
              </div>
            </div>
            
            {/* Projects Completed Card */}
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start gap-4 group relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-purple-200 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md"></div>
              <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors duration-300 relative z-10">
                <ClipboardCheck className="w-6 h-6 text-purple-600" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">50+</h3>
                <p className="text-gray-600">Projects Completed Successfully</p>
              </div>
            </div>
            
            {/* Happy Clients Card */}
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start gap-4 group relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-purple-200 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md"></div>
              <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors duration-300 relative z-10">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">100+</h3>
                <p className="text-gray-600">Happy Clients Worldwide</p>
              </div>
            </div>
            
            {/* Awards Card */}
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start gap-4 group relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-purple-200 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md"></div>
              <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors duration-300 relative z-10">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">5+</h3>
                <p className="text-gray-600">Industry Awards & Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CompanyStats;