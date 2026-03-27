"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendarAlt,
  FaShareAlt,
  FaBookmark,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

// Define the type for a blog post
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const currentPost = posts[currentPostIndex];

  const handleNextPost = () => {
    if (currentPostIndex < posts.length - 1) {
      setCurrentPostIndex((prev) => prev + 1);
    }
  };

  const handlePrevPost = () => {
    if (currentPostIndex > 0) {
      setCurrentPostIndex((prev) => prev - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-purple-900">
        <div className="flex flex-col items-center">
          <motion.div
            className="w-16 h-16 border-t-4 border-purple-300 border-solid rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.h2
            className="mt-4 text-xl font-semibold text-purple-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading amazing content...
          </motion.h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-purple-700 text-purple-50">
      {/* Header */}
      <motion.header
        className="p-6 bg-purple-800 shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Tech Insights Blog
        </motion.h1>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Navigation Controls */}
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.button
            onClick={handlePrevPost}
            className={`flex items-center px-4 py-2 rounded-full ${
              currentPostIndex === 0
                ? "bg-purple-600 opacity-50 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-500"
            }`}
            disabled={currentPostIndex === 0}
            whileHover={{ scale: currentPostIndex === 0 ? 1 : 1.05 }}
            whileTap={{ scale: currentPostIndex === 0 ? 1 : 0.95 }}
          >
            <FaArrowLeft className="mr-2" /> Previous
          </motion.button>

          <motion.button
            onClick={handleNextPost}
            className={`flex items-center px-4 py-2 rounded-full ${
              currentPostIndex === posts.length - 1
                ? "bg-purple-600 opacity-50 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-500"
            }`}
            disabled={currentPostIndex === posts.length - 1}
            whileHover={{
              scale: currentPostIndex === posts.length - 1 ? 1 : 1.05,
            }}
            whileTap={{
              scale: currentPostIndex === posts.length - 1 ? 1 : 0.95,
            }}
          >
            Next <FaArrowRight className="ml-2" />
          </motion.button>
        </motion.div>

        {/* Blog Post */}
        <AnimatePresence mode="wait">
          <motion.div
            className="bg-purple-800 rounded-xl shadow-2xl overflow-hidden"
            key={currentPost.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-96 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-purple-900"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-purple-300">
                Featured Image: {currentPost.imageUrl}
              </div>
            </div>

            {/* Post Content */}
            <div className="p-6 md:p-8">
              {/* Meta Info */}
              <motion.div
                className="flex items-center mb-4 text-purple-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <FaCalendarAlt className="mr-2" />
                <span>{currentPost.date}</span>
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-4 text-purple-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {currentPost.title}
              </motion.h2>

              {/* Excerpt */}
              <motion.p
                className="text-lg text-purple-200 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {currentPost.excerpt}
              </motion.p>

              {/* Read More Button */}
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-500 rounded-full font-medium text-white shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 25px rgba(139, 92, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Read Full Article
              </motion.button>
            </div>

            {/* Social Actions */}
            <motion.div
              className="flex justify-end p-4 border-t border-purple-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                className="p-2 mx-1 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaShareAlt />
              </motion.button>
              <motion.button
                className="p-2 mx-1 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaBookmark />
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Post Navigation Dots */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {posts.map((post, index) => (
            <motion.button
              key={post.id}
              onClick={() => setCurrentPostIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentPostIndex ? "bg-purple-300" : "bg-purple-700"
              }`}
              aria-label={`Go to post ${index + 1}`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              animate={index === currentPostIndex ? { scale: [1, 1.2, 1] } : {}}
              transition={
                index === currentPostIndex
                  ? { duration: 1.5, repeat: Infinity }
                  : {}
              }
            />
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        className="p-6 bg-purple-800 text-center text-purple-300 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.9, type: "spring" }}
        >
          © 2024 Tech Insights Blog. All rights reserved.
        </motion.p>
      </motion.footer>
    </div>
  );
};

// Example usage
const BlogPageWrapper = () => {
  const blogPosts = [
    {
      id: "1",
      title: "Best Website Design and Development Cost in India",
      excerpt:
        "You must be wondering what may be the cost of Website design. Website development in India especially the business owners and entrepreneurs...",
      date: "Jun 12, 2024",
      imageUrl: "/blog11.webp",
      slug: "website-design-development-cost-India",
    },
    {
      id: "2",
      title: "Best IT Company in India 2024",
      excerpt:
        "The number of IT companies found in every corner of India has been living proof that India has over 500+ IT companies in India and...",
      date: "Jun 12, 2024",
      imageUrl: "/blog22.avif",
      slug: "best-it-company-India-2024",
    },
  ];

  return <BlogPage posts={blogPosts} />;
};

export default BlogPageWrapper;