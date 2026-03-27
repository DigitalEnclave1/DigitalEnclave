import React from 'react';

const TechExpertiseSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gradient-to-b from-white to-purple-50 p-4 md:p-8 lg:p-16">
      {/* Left Content */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <div className="h-0.5 w-8 md:w-16 bg-purple-500"></div>
          <p className="text-[#443d3d] font-medium text-lg md:text-xl">Our Expertise</p>
          <div className="h-0.5 w-8 md:w-16 bg-purple-500"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-center md:text-left">
          <span className="text-[#443d3d]">Technologies We Rely On To </span>
          <span className="text-purple-500">Achieve Success</span>
        </h2>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">   
          <span className="text-[#443d3d] font-medium text-lg md:text-xl">Web Development</span>
          <div className="hidden md:block h-full w-px bg-gray-300"></div>
          <span className="text-[#443d3d] font-medium text-lg md:text-xl">App Development</span>
          <div className="hidden md:block h-full w-px bg-gray-300"></div>
          <span className="text-[#443d3d] font-medium text-lg md:text-xl">Database</span>
          <div className="hidden md:block h-full w-px bg-gray-300"></div>
          <span className="text-[#443d3d] font-medium text-lg md:text-xl">Cloud Platform</span>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-10">
          {/* First row */}
          <div className="flex justify-center items-center">
            <img src="https://softbenz.com/media/technology/icons8-javascript-96.png" alt="JavaScript" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://softbenz.com/media/technology/node.png" alt="Node.js" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://softbenz.com/media/technology/icons8-python-96.png" alt="Python" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://softbenz.com/media/technology/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-96.png" alt="Django" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://softbenz.com/media/technology/icons8-html5-96.png" alt="HTML5" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://softbenz.com/media/technology/icons8-css3-96.png" alt="CSS3" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          
          {/* Second row */}
          <div className="flex justify-center items-center">
            <img src="https://softbenz.com/media/technology/icons8-next.js-96.png" alt="Next.js" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://softbenz.com/media/technology/icons8-react-native-96_2lITedI.png" alt="React Native" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://softbenz.com/media/technology/php.png" alt="PHP" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://softbenz.com/media/technology/icons8-laravel-96.png" alt="Laravel" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://softbenz.com/media/technology/icons8-figma-96.png" alt="Figma" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://softbenz.com/media/technology/icons8-wordpress-96.png" alt="WordPress" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
        </div>
      </div>
      
      {/* Right Content - External img with Floating Icons */}
      <div className="w-full md:w-1/2 relative px-4 md:px-0 md:pl-6"> 
        <div className="absolute inset-0 transform -translate-y-0.5">
          <div className="w-3/4 h-3/4 mx-auto rounded-full"></div>
        </div>
         
        <div className="relative z-10 flex justify-end items-center h-full">
          <div className="relative p-8 md:p-12 lg:p-16">
            {/* External img */}
            <img
              src="/illuss.png"
              alt="Developer working from home"
              className="relative z-10 w-full max-w-lg object-contain ml-4 md:ml-8 lg:ml-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechExpertiseSection;