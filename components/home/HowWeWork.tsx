import React from 'react';

interface WorkflowStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

const HowWeWork: React.FC = () => {
  const workflowSteps: WorkflowStep[] = [
    {
      id: "01",
      number: "01",
      title: "Requirement Gathering",
      description: "We start our collaboration by collecting client requirements, listing and compiling them. This helps us build the process from scratch to deliver results aligned with your goals."
    },
    {
      id: "02",
      number: "02",
      title: "Plan & Resources",
      description: "After gathering requirements, we devise a strategic path and select resources. As the best IT company in India, we offer clients a roadmap, laying the groundwork for a successful project."
    },
    {
      id: "03",
      number: "03",
      title: "Design & Develop",
      description: "In the design and development phase, we turn strategic ideas into digital products that are visually appealing, technically robust, focusing on user experience and functionality."
    },
    {
      id: "04",
      number: "04",
      title: "Quality Assurance",
      description: "In this phase, we rigorously test and validate to ensure all elements work correctly and meet standards, delivering the desired user experience. Our team tests each aspect for reliability."
    },
    {
      id: "05",
      number: "05",
      title: "Deployment",
      description: "Once the product meets standards, we deploy it, releasing product or updates on servers. This ensures our products are delivered seamlessly and efficiently."
    },
    {
      id: "06",
      number: "06",
      title: "Support & Maintenance",
      description: "In the final stage, we maintain systems to ensure smooth operation, security, and reliability. Optimization keeps performance high and client satisfaction focused on operational excellence."
    }
  ];
  
  return (
    <div className="bg-white container mx-auto py-14 px-4">
      <div className="text-center mb-8">
        <p className="text-lg inline-block py-1 px-8 border-purple-500]">How We Work</p>
        <h2 className="text-5xl font-bold mt-2 ">Enjoy Seamless Service With <span className="text-purple-500">Our Easy Steps!</span></h2>
      </div>
      
      <div className="py-4 px-6 flex items-center justify-center mb-12 mx-auto">
  <p className="text-lg text-center text-[#443d3d] border border-purple-400 rounded-full py-4 px-6">Efficient workflow from requirements gathering to support and maintenance</p>
</div>
      <div className="space-y-8">
        {workflowSteps.map((step) => (
          <div key={step.id} className="flex flex-col p-2 md:flex-row border-b mb-0 border-gray-200 pb-8 hover:bg-purple-50 ">
            <div className="md:w-1/6 pr-4">
              <div className="text-7xl font-bold text-[#443d3d] opacity-75 p-4 rounded-lg inline-block">{step.number}</div>
            </div>
            <div className="md:w-1/3 pr-4">
              <h3 className="text-4xl font-bold text-[#443d3d]">{step.title}</h3>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;