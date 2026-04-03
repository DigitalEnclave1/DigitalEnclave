"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPencilAlt,
  FaMapMarkerAlt,
  FaHeadset,
  FaBriefcase,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { toast, Toaster } from 'react-hot-toast';

// Main Contact Form Component
const Main = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Show loading toast
    const loadingToast = toast.loading('Sending your message...');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success
        toast.success('Message sent successfully!', { id: loadingToast });
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        // Error
        toast.error(`Failed to send message: ${data.message}`, { id: loadingToast });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-purple-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Toaster for notifications */}
        <Toaster position="top-right" />
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            We are here for You. Can we help?
          </h1>
          <p className="text-purple-600 text-lg">
            Fill out the form below and we'll get back to you soon
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Full Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaUser className="text-purple-500" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="w-full py-3 pl-10 pr-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaEnvelope className="text-purple-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className="w-full py-3 pl-10 pr-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaPhone className="text-purple-500 " />
                  </div>
                  <div className="flex">
                    <select 
                      className="bg-purple-100 pl-7 text-purple-800 border border-purple-300 rounded-l-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                      onChange={handleChange}
                    >
                      <option>+91</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full py-3 pl-3.5 pr-4 border border-purple-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaPencilAlt className="text-purple-500" />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject *"
                    className="w-full py-3 pl-10 pr-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="relative mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message *"
                  rows={5}
                  className="w-full py-3 px-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Submit'
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Illustration Section - Increased Size */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 flex items-center justify-center"
          >
            <img
              src="contactus.png"
              alt="Contact illustration"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone Number */}
          <ContactInfoCard
            icon={<FaPhone size={24} />}
            title="Our Phone Number"
            content={
      <a href="tel:+919837675160" className="hover:underline">
        +91 9837675160
      </a>
    }
            delay={0.2}
          />

          {/* Email */}
          <ContactInfoCard
            icon={<FaEnvelope size={24} />}
            title="Our Email"
            content={
            <a 
            href="mailto:digitalenclave3@gmail.com"
            className="hover:underline text-purple-600"
    >
      digitalenclave3@gmail.com
    </a>
  }
  delay={0.4}
/>

          {/* PO Box */}
          <ContactInfoCard
            icon={<FaHeadset size={24} />}
            title="PO Box Number"
             content={
      <span className="cursor-pointer hover:underline">
        GPO - 5051
      </span>
    }
            delay={0.6}
          />

          {/* Office */}
          <ContactInfoCard
            icon={<FaMapMarkerAlt size={24} />}
            title="Our Office"
             content={
      <a 
        href="https://www.google.com/maps/search/?api=1&query=Noida"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Noida
      </a>
    }
            delay={0.8}
          />
        </div>

        {/* Support Sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <SupportCard
            title="For Sales"
            phone="+91 9837675160"
            icon={<FaBriefcase size={20} />}
            delay={0.3}
          />

          <SupportCard
            title="For Career"
            phone="+91 9837675160"
            icon={<FaUser size={20} />}
            delay={0.5}
          />

          <SupportCard
            title="For Support"
            phone="+91 9837675160"
            icon={<FaHeadset size={20} />}
            delay={0.7}
          />
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center mt-16 gap-4"
        >
          <SocialIcon 
  icon={<FaFacebookF />} 
  link="https://www.facebook.com/profile.php?id=100086797039580" 
/>

<SocialIcon 
  icon={<FaInstagram />} 
  link="https://www.instagram.com/digitalenclave12" 
/>

<SocialIcon 
  icon={<FaLinkedinIn />} 
  link="https://www.linkedin.com/in/ujjawal-garg-2baa571bb" 
/>

<SocialIcon 
  icon={<FaTwitter />} 
  link="https://x.com/DigitalEnclave1" 
/>


        </motion.div>
      </div>
    </div>
  );
};

// Type definitions for props
interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  delay: number;
}

const ContactInfoCard = ({ icon, title, content, delay }: ContactInfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
    >
      <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-purple-800 mb-2">{title}</h3>
      <p className="text-purple-600">{content}</p>
    </motion.div>
  );
};

interface SupportCardProps {
  title: string;
  phone: string;
  icon: React.ReactNode;
  delay: number;
}

const SupportCard = ({ title, phone, icon, delay }: SupportCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-lg p-6 text-white"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-purple-100 mb-4">For any queries related to {title.toLowerCase()}, please contact us</p>
      <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
        <span>{phone}</span>
        <a 
  href={`tel:${phone.replace(/\s+/g, "")}`} 
  className="bg-white text-purple-700 px-3 py-1 rounded-md text-sm font-medium hover:bg-purple-100 transition duration-300"
>
  Call Now
</a>
      </div>
    </motion.div>
  );
};



interface SocialIconProps {
  icon: React.ReactNode;
  link: string;
}

const SocialIcon = ({ icon, link }: SocialIconProps) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-md transition duration-300 cursor-pointer"
    >
      {icon}
    </motion.a>
  );
};

export default Main;