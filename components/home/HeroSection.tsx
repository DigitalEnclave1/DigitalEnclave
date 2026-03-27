"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Add parallax effect for decorative elements
    const handleMouseMove = (e: any) => {
      const decorElements = document.querySelectorAll(".decor-element");
      decorElements.forEach((elem: any) => {
        const speed = elem.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        elem.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pt-4 sm:pt-8 md:pt-16 overflow-hidden">
      <div className="relative min-h-[60vh] sm:h-[70vh] md:h-[80vh] bg-white m-2 sm:m-4 md:m-9 rounded-2xl sm:rounded-3xl md:rounded-none md:rounded-tr-[5rem] md:rounded-bl-[5rem] pt-20 sm:pt-32 md:pt-52 pb-20 sm:pb-40 md:pb-60 flex flex-col md:flex-row transition-all duration-500">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-none md:rounded-tr-[5rem] md:rounded-bl-[5rem]">
          <div
            className="decor-element absolute top-10 left-10 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-purple-300 rounded-full opacity-10 animate-pulse"
            data-speed="2"
          ></div>
          <div
            className="decor-element absolute top-1/3 right-1/4 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-indigo-400 rounded-full opacity-10 animate-blob animation-delay-4000"
            data-speed="3"
          ></div>
          <div
            className="decor-element absolute bottom-10 left-1/4 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-violet-500 rounded-full opacity-10 animate-blob animation-delay-2000"
            data-speed="1"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-200 opacity-50"></div>
        </div>

        {/* Text Content */}
        <div
          className={`w-full md:w-1/2 p-4 sm:p-6 md:p-12 h-full flex flex-col justify-center transform ${
            isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          } transition-all duration-700 ease-out relative z-10`}
        >
          <div className="hidden sm:block absolute -left-3 top-1/4 h-16 sm:h-20 w-1 bg-gradient-to-b from-purple-400 to-indigo-600 rounded-full"></div>
          <span className="uppercase tracking-wider text-xs font-semibold text-purple-700 mb-1 sm:mb-2 animate-pulse">
            Premier IT Solutions
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-3 sm:mb-6 leading-tight">
            <span className="bg-clip-text text-purple-800">
              Transform
            </span>{" "}
            your vision into a Digital Reality
          </h1>

          <p className="text-purple-900 mb-2 text-sm sm:text-base font-medium">
            The most innovative IT company
          </p>

          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-8 transform transition-all duration-700 delay-200 ease-out max-w-md">
            We blend creativity with cutting-edge technology to deliver
            solutions that empower your business in the digital landscape.
          </p>

          <div className="flex flex-col lg:flex-row gap-3 sm:gap-5">
            <Link href="/services/websitedevelopment">
      <button className="group cursor-pointer bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium h-10 sm:h-12 px-5 sm:px-8 text-sm sm:text-base rounded-full shadow-lg hover:shadow-purple-300/50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0">
        <span className="flex items-center justify-center">
          Let&apos;s get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </button>
    </Link>
      
      <Link href="/portfolio">
      <button className="relative overflow-hidden border-2 border-purple-500 text-purple-700 font-medium h-10 sm:h-12 px-5 sm:px-8 text-sm sm:text-base rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 group">
        <span className="relative z-10 flex items-center justify-center">
          Discover our work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 15l-5-5 5-5"
            />
          </svg>
        </span>
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full transition-all duration-500"></span>
      </button>
      </Link>
    </div>
        </div>

        {/* Image - UPDATED TO BE LARGER */}
        <div
          className={`flex justify-center items-center mt-8 md:mt-0 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } transition-all duration-700 delay-300 ease-out relative z-10 w-full md:w-1/2`}
        >
          <div className="relative w-full flex justify-center">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-300 to-indigo-400 opacity-70 blur-2xl animate-pulse"></div>
            <div className="absolute -inset-8 rounded-full border-2 border-purple-200 opacity-30 animate-spin-slow"></div>
            <img
              src="hero.svg"
              alt="IT Solutions"
              className="h-[35vh] xs:h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] w-auto object-contain relative z-10 drop-shadow-2xl transform transition-transform duration-500 hover: filter"
            />
          </div>
        </div>
      </div>

      {/* Additional CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: scale(1) rotate(0deg);
          }
          33% {
            transform: scale(1.1) rotate(2deg);
          }
          66% {
            transform: scale(0.9) rotate(-2deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s forwards;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Extra small screen support */
        @media (min-width: 400px) {
          .xs\\:flex-row {
            flex-direction: row;
          }
          .xs\\:h-\\[40vh\\] {
            height: 40vh;
          }
        }
      `}</style>
    </div>
  );
}

export default HeroSection;