import React from 'react';
import { ArrowRight, Shield, Navigation, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WonderWand
              <span className="block text-blue-300">Smart Stick</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Empowering the visually impaired with independence, safety, and confidence.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Advanced obstacle detection, GPS navigation, and emergency alert systems 
              combined in one innovative mobility aid designed for everyday life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-navy-900 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Safety First</h3>
                  <p className="text-sm text-gray-300">Multi-directional obstacle detection</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Navigation size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Smart Navigation</h3>
                  <p className="text-sm text-gray-300">GPS-guided route assistance</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Emergency SOS</h3>
                  <p className="text-sm text-gray-300">Instant help when needed</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <ArrowRight size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Easy to Use</h3>
                  <p className="text-sm text-gray-300">Intuitive design for everyone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;