"use client";

import React from "react";
import { FaFlag } from "react-icons/fa";


export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Who We Are</h1>
          <h2 className="text-5xl font-bold mt-4">
            Your Trusted Partner{" "}
            <span className="text-purple-600">
              Specializing In IT Solutions
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Company Description */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              DigitalEnclave is a revenue-based project company specializing in the IT
              sector. We are especially working in the field of website design
              and software development in India. Not only that, our other
              services include mobile app development, digital marketing and
              graphics designing. We are your best IT partner and believe that
              website and digital marketing are the only ways to promote growing
              businesses digitally.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Located at Noida,India our B2B (Business to Business)
              company aims at transforming and updating tech services to deliver
              quality outputs. DigitalEnclave is the only choice for your web problems
              due to brilliant teamwork, passionate team members, and
              first-class service delivery.
            </p>
          </div>

          {/* Right Column - Mission and Vision */}
          <div className="space-y-8">
            {/* Mission */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaFlag className="text-purple-600 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-purple-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700">
                We directly approach our goal and prove to be best with our
                clients by evaluating their resources in the best possible way.
                We are in the developing stage but never showcase it as our
                limitations. Our business empowers you and your company in the
                right manner.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaFlag className="text-purple-600 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-purple-800">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700">
                Our effort is endless to make DigitalEnclave a systematic and
                qualitative company in the IT sector. Every business requires
                digital identification in today's era. Digital marketing is not
                a luxury but a necessity for your brand identification.
              </p>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}

        {/* WhatsApp Chat Button */}
      </div>
    </div>
  );
}
