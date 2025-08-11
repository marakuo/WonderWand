import React from 'react';
import { Users, Heart, TrendingUp, CheckCircle } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Who Benefits from WonderWand?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our smart stick is designed to enhance independence, safety, and confidence 
            for visually impaired individuals and their support networks.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Users size={40} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-navy-900 mb-4">
              Visually Impaired Individuals
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Experience greater independence and confidence in daily navigation, 
              whether at home, work, or exploring new environments.
            </p>
            <ul className="text-left space-y-2">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Enhanced mobility and freedom</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Increased safety and accident prevention</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Greater confidence in unfamiliar spaces</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Heart size={40} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-navy-900 mb-4">
              Caregivers & Families
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Find peace of mind knowing your loved ones have reliable mobility assistance 
              and emergency support when they need it most.
            </p>
            <ul className="text-left space-y-2">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Emergency alert notifications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Location tracking capabilities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Reduced worry about safety</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <TrendingUp size={40} className="text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-navy-900 mb-4">
              Organizations & Institutions
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Support accessibility initiatives with cutting-edge assistive technology 
              that promotes inclusion and independence.
            </p>
            <ul className="text-left space-y-2">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Advance accessibility programs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Demonstrate commitment to inclusion</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Support community independence</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;