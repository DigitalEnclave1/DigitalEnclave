import React from 'react';

interface TestimonialProps {
  avatar: string;
  name: string;
  title: string;
  content: string;
  stars: number;
  hasGoogleReview?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  avatar, 
  name, 
  title, 
  content, 
  stars, 
  hasGoogleReview = false 
}) => {
  return (
    <div className="bg-white rounded-lg p-6 h-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-purple-500">
      <div className="flex items-center mb-5">
        <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-purple-100" />
        <div>
          <h3 className="font-bold text-xl text-gray-900">{name}</h3>
          <p className="text-gray-600 text-lg">{title}</p>
        </div>
      </div>
      
      <p className="text-gray-800 text-lg mb-6 flex-grow leading-relaxed">{content}</p>
      
      <div className="flex items-center justify-between mt-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-6 h-6 ${i < stars ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {hasGoogleReview && (
          <div className="flex items-center bg-gray-100 py-1 px-3 rounded-full">
            <span className="text-base font-medium text-gray-700">Google Review</span>
          </div>
        )}
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      avatar: "/pip1.jpg", // Replace with actual image paths
      name: "David Jhohanson",
      title: "Managing Director, NLPRC",
      content: "DigitalEnclave Pvt. Ltd is the best website design and development company in India with highly qualified IT staff having an amazing sense of understanding, cooperation, and support to the clients during the project design.",
      stars: 5,
      hasGoogleReview: true
    },
    {
      id: 2,
      avatar: "/pip2.jpg", // Replace with actual image paths
      name: "Shristi Dhakal",
      title: "Chairman, NIMS Group Clinic Pvt. Ltd.",
      content: "DigitalEnclave has been a game-changer for us at NIMS Group Clinic Pvt Ltd. Their Social Media Marketing and Website Development services have transformed our online presence.",
      stars: 5,
      hasGoogleReview: true
    },
    {
      id: 3,
      avatar: "/pip3.jpg", // Replace with actual image paths
      name: "Jennifer Gomez",
      title: "Founder/ CEO, Eduzelt Education Network",
      content: "DigitalEnclave has very unique team, work professionally and understands the need of customers in the very sight. Its very worthy to be the part of its customer due to its time relevant services.",
      stars: 5,
      hasGoogleReview: true
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-800">What Our</span>
            <span className="text-purple-600"> Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              avatar={testimonial.avatar}
              name={testimonial.name}
              title={testimonial.title}
              content={testimonial.content}
              stars={testimonial.stars}
              hasGoogleReview={testimonial.hasGoogleReview}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;