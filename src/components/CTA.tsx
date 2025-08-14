import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Experience Independence?
        </h2>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
          Join thousands of individuals who have transformed their daily navigation 
          with WonderWand Smart Stick. Take the first step toward greater independence today.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <Phone size={48} className="mx-auto mb-4 text-blue-200" />
            <h3 className="text-2xl font-semibold mb-4">Call Us Today</h3>
            <p className="text-blue-100 mb-4">
              Speak with our accessibility specialists to learn how WonderWand 
              can enhance your mobility and independence.
            </p>
            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              +20 11 27197834
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <Mail size={48} className="mx-auto mb-4 text-blue-200" />
            <h3 className="text-2xl font-semibold mb-4">Get Information</h3>
            <p className="text-blue-100 mb-4">
              Request detailed product information, pricing, and availability 
              for WonderWand Smart Stick.
            </p>
            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Request Info
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
            Schedule a Demo
            <ArrowRight className="ml-2" size={20} />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;