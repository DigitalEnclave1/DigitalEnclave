"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaAward, FaRocket, FaCheckCircle } from "react-icons/fa";

export default function Introduction() {
  const companyStats = [
    {
      number: "40+",
      label: "Team Members",
      icon: <FaUsers className="text-purple-600 text-4xl" />,
    },
    {
      number: "4+",
      label: "Years Of Experience",
      icon: <FaAward className="text-purple-600 text-4xl" />,
    },
    {
      number: "40+",
      label: "Projects",
      icon: <FaRocket className="text-purple-600 text-4xl" />,
    },
    {
      number: "30+",
      label: "Happy Clients",
      icon: <FaCheckCircle className="text-purple-600 text-4xl" />,
    },
  ];

  return (
    <div className="bg-purple-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid pl-6 pt-9 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl p-3 md:text-5xl font-bold text-gray-800 mb-6">
              Make It Possible With{" "}
              <span className="text-purple-600">DigitalEnclave</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Step into the future of IT solutions with DigitalEnclave! We
              offer you a wide range of services, including Web Development,
              SEO, Mobile App Development, and Digital Marketing! Let us be your
              trusted guide to navigate the dynamic digital landscape!
            </p>
          </motion.div>

          {/* Isometric Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 400"
              className="w-full h-auto"
            >
              {/* Isometric cubes and people */}
              <g transform="translate(50, 50) scale(0.8)">
                {/* Base cubes */}
                <path d="M0 200 L150 100 L300 200 L150 300 Z" fill="#f3e6f3" />
                <path
                  d="M150 300 L300 200 L450 300 L300 400 Z"
                  fill="#e7d1e7"
                />
                <path
                  d="M300 200 L450 100 L600 200 L450 300 Z"
                  fill="#dbc2db"
                />

                {/* People and elements */}
                <g transform="translate(50, 50)">
                  <rect x="50" y="50" width="50" height="80" fill="#9c4ade" />
                  <circle cx="75" cy="40" r="20" fill="#9c4ade" />
                  <rect
                    x="250"
                    y="100"
                    width="60"
                    height="40"
                    fill="#9c4ade"
                    rx="5"
                  />
                  <text x="260" y="125" fill="white" fontSize="12">
                    HTML
                  </text>
                  <rect
                    x="350"
                    y="150"
                    width="60"
                    height="40"
                    fill="#9c4ade"
                    rx="5"
                  />
                  <text x="360" y="175" fill="white" fontSize="12">
                    JAVA
                  </text>
                </g>

                {/* Graphs and icons */}
                <path
                  d="M400 50 L450 0 L500 50 L450 100 Z"
                  fill="#c086ef"
                  transform="translate(-100, 100)"
                />
                <polyline
                  points="0,50 50,20 100,40 150,10"
                  fill="none"
                  stroke="#9c4ade"
                  strokeWidth="4"
                  transform="translate(350, 50)"
                />
              </g>
            </svg>
          </motion.div>
        </div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mt-16 text-center"
        >
          {companyStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-purple-100"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-purple-800 mt-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
