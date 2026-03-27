'use client';

import Image from 'next/image';
import React from 'react';

interface Technology {
  name: string;
  icon: string;
}

const technologies: Record<string, Technology[]> = {
  frontend: [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  ],
  backend: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  ],
  infrastructure: [
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Digital Ocean', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg' },
  ],
};

const TechStack: React.FC = () => {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container px-4 mx-auto md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-block mb-3">
            <div className="flex items-center">
              <div className="flex-grow w-24 h-px bg-gray-300"></div>
              <span className="mx-4 text-sm font-medium tracking-wider text-gray-500 uppercase">Technology Stack</span>
              <div className="flex-grow w-24 h-px bg-gray-300"></div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            Technology We Work With In <span className="text-purple-600">Website Development</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="mb-8 md:w-3/5 md:mb-0 md:pr-8">
            {Object.entries(technologies).map(([category, techs]) => {
              // Ensure techs is properly typed
              const typedTechs: Technology[] = technologies[category as keyof typeof technologies];

              return (
                <div key={category} className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold text-gray-800 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-4">
                    {typedTechs.map((tech: Technology, index: number) => (
                      <div
                        key={index}
                        className="flex items-center px-6 py-3 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-purple-50"
                      >
                        <Image src={tech.icon} alt={tech.name} width={40} height={40} className="mr-2" />
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative flex justify-center md:w-2/5">
            <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 bg-purple-100 rounded-full top-1/2 left-1/2 -z-10"></div>
            <Image src="/developer.png" alt="Developer" width={300} height={300} className="relative z-10 max-w-full" />
            <div className="absolute top-4 right-4 animate-pulse">
              <div className="px-3 py-1.5 text-xs font-medium bg-white rounded shadow-md text-purple-600">HTML</div>
            </div>
            <div className="absolute delay-300 bottom-8 left-4 animate-pulse">
              <div className="px-3 py-1.5 text-xs font-medium bg-white rounded shadow-md text-purple-600">React</div>
            </div>
            <div className="absolute delay-700 top-1/2 right-8 animate-pulse">
              <div className="px-3 py-1.5 text-xs font-medium bg-white rounded shadow-md text-purple-600">AWS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
