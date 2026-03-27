import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// TypeScript interface for blog post data
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

interface BlogSectionProps {
  blogPosts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogPosts }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8 md:mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 md:w-16 bg-purple-500"></div>
            <span className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-wider">Our Blogs</span>
            <div className="h-px w-12 md:w-16 bg-purple-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 px-2">
            Our Latest & <span className="text-purple-500">Popular Blogs</span>
          </h2>
        </div>
      </div>
      
      {/* Tagline with See All button */}
      <div className="py-4 px-6 flex items-center justify-center mb-12 mx-auto">
  <p className="text-lg text-center text-[#443d3d] border border-purple-400 rounded-full py-4 px-6">Tailored solutions addressing diverse business challengess</p>
      </div>
      
      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {blogPosts.map((post:any) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row w-full"
          >
            {/* Left side - Image (now larger) */}
            <div className="md:w-1/2 relative">
              <div className="h-72 md:h-full w-full relative">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col">
              <div className="mb-2">
                <p className="text-purple-500 text-sm md:text-base font-medium">{post.date}</p>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 line-clamp-2 text-gray-800 hover:text-purple-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-base mb-4 md:mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="mt-auto flex items-center gap-3">
                <div className="h-px w-12 bg-gray-300"></div>
                <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm md:text-base font-medium text-gray-700 hover:text-purple-600 transition-colors flex items-center group"
                >
                  Read More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;