"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaClipboardCheck,
  FaUserTie,
  FaThumbsUp,
  FaHome,
  FaHeadset,
} from "react-icons/fa";

// Define the type for FeatureCard props
interface FeatureCardProps {
  icon: React.ElementType; // Ensures it's a valid React component
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title }) => {
  return (
    <motion.div
      className="bg-purple-50 border border-purple-100 rounded-xl p-6 text-center 
                 transform transition-all duration-300 hover:scale-105 
                 hover:shadow-lg hover:bg-purple-100"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mx-auto mb-4 w-16 h-16 bg-purple-200 rounded-full 
                   flex items-center justify-center text-purple-600"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-8 h-8" />
      </motion.div>
      <h3 className="text-lg font-semibold text-purple-800">{title}</h3>
    </motion.div>
  );
};

const ITSolutionsGrid: React.FC = () => {
  const features: FeatureCardProps[] = [
    { icon: FaGlobe, title: "Customized Solutions" },
    { icon: FaClipboardCheck, title: "Proven Track Record" },
    { icon: FaUserTie, title: "Diverse Expertise" },
    { icon: FaThumbsUp, title: "Client-Centric Approach" },
    { icon: FaHome, title: "On-Time Project" },
    { icon: FaHeadset, title: "Dedicated Support" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-purple-900"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        Empowering Businesses With
        <span className="text-purple-600"> Prominent IT Solutions</span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} />
        ))}
      </div>
    </div>
  );
};

export default ITSolutionsGrid;
