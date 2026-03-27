"use client"

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects] = useState<Project[]>([
    {
      id: 6,
      name: "Jadoo",
      category: "Website Development",
      image: "/project15.webp"
    },

    {
      id: 2,
      name: "JustKleek E-commerce",
      category: "Website Development",
      image: "/project2.png",
    },
    {
      id: 3,
      name: "India Tourism Portal",
      category: "Graphics Design",
      image: "/project3.png",
    },
    {
      id: 4,
      name: "Jadoo",
      category: "Graphics Design",
      image: "/project1.png"
    },
    {
      id: 5,
      name: "Jadoo",
      category: "Website Development",
      image: "/project4.png"
    },
 
    {
      id: 7,
      name: "Jadoo",
      category: "Website Development",
      image: "/project13.webp"
    },
    {
      id: 8,
      name: "Jadoo",
      category: "Website Development",
      image: "/project6.png",
    },
   
   
    {
      id: 9,
      name: "Jadoo",
      category: "Website Development",
      image: "/project11.webp"
    },
    {
      id: 10,
      name: "Jadoo",
      category: "Website Development",
      image: "/project10.webp"
    },
  
 
    {
      id: 11,
      name: "Jadoo",
      category: "Graphics Design",
      image: "/project5.png"
    },
    {
      id: 12,
      name: "Jadoo",
      category: "Website Development",
      image: "/project14.webp"
    },
    {
      id: 13,
      name: "Jadoo",
      category: "Graphics Design",
      image: "/project7.png"
    },

  ]);

  // Fix: Remove the extra comma that created an undefined entry
  const categories = ['All', 'Website Development', 'Graphics Design'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-purple-50">
      <Head>
        <title>Our Portfolio | Recent Work</title>
        <meta name="description" content="Showcase of our recent projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center p-5 mb-3">
            <div className="h-0.5 w-16 bg-purple-600"></div>
            <h3 className="text-gray-600 font-medium px-4">Our Portfolio</h3>
            <div className="h-0.5 w-16 bg-purple-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Some Of Our <span className="text-purple-600">Recent Work</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-3 text-lg rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredProjects.map((project) => (
    <div
      key={project.id}
      className="bg-white rounded-lg overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Bottom Overlay - Improved Visibility */}
        {/* <div className="absolute bottom-0 left-0 right-0 bg-purple-400 bg-opacity-10 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white text-lg font-bold mb-2 line-clamp-2 drop-shadow-md">{project.name}</h3>
      
        </div> */}
      </div>
    </div>
  ))}
</div>
      </main>
    </div>
  );
}